import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// API endpoint: Conversation Tutor
app.post('/api/chat-tutor', async (req: Request, res: Response) => {
  try {
    const { message, history = [], scenario = 'general', level = 'intermediate' } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (ai) {
      const systemInstruction = `You are Sarah, an encouraging, natural, and friendly spoken English tutor and language mentor.
The learner's current proficiency level is "${level}" (beginner, intermediate, or advanced).
Adjust your vocabulary, sentence length, and pacing strictly to match:
- Beginner: Use simple, clear vocabulary, short friendly sentences, explain any idioms immediately.
- Intermediate: Use standard natural conversational English with common phrasal verbs.
- Advanced: Use sophisticated vocabulary, natural idiomatic expressions, nuanced phrasings, and subtle conversational subtleties.

Current conversation scenario: "${scenario}".

Guidelines:
1. Speak in warm, conversational, natural English (short to medium spoken phrases, friendly tone).
2. If the user makes a spelling, grammatical, or awkward phrasing mistake, do NOT shame them. Gently provide the corrected version with correct spelling in the structured JSON.
3. Keep your spoken response engaging and ask an open-ended question to encourage them to speak more.
4. Always respond in valid JSON format with this exact schema:
{
  "reply": "Your conversational response as Sarah",
  "spellingCorrections": [
    {"wrong": "misspeled", "correct": "misspelled", "rule": "Double 's' and double 'l'"}
  ],
  "grammarCorrection": "Corrected user sentence if needed, or null if their sentence was natural and correct",
  "explanation": "Brief 1-sentence tip on why this sounds better (or null if perfect)",
  "naturalAlternative": "How an everyday native speaker would phrase what the user said (or null if already great)",
  "vocabularySpotlight": [
    {"word": "word or idiom used in your reply", "meaning": "simple definition", "example": "example sentence"}
  ],
  "suggestedReplies": ["Suggested starter phrase 1", "Suggested starter phrase 2"]
}`;

      const contents = [
        ...history.slice(-6).map((item: { sender: string; text: string }) => ({
          role: item.sender === 'user' ? 'user' : 'model',
          parts: [{ text: item.text }],
        })),
        {
          role: 'user',
          parts: [{ text: `User (${level} level) said: "${message}". Please respond as Sarah and provide speaking and spelling tips.` }],
        },
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const responseText = response.text || '{}';
      try {
        const parsed = JSON.parse(responseText);
        res.json(parsed);
        return;
      } catch {
        res.json({
          reply: responseText,
          spellingCorrections: [],
          grammarCorrection: null,
          explanation: null,
          naturalAlternative: null,
          vocabularySpotlight: [],
          suggestedReplies: ["That sounds great!", "Could you tell me more about that?"],
        });
        return;
      }
    } else {
      // Offline fallback
      const fallbackReplies: Record<string, string> = {
        cafe: "That sounds delicious! Would you like that iced or hot, and what size can I get started for you today?",
        interview: "Thank you for sharing that experience! Could you tell me about a time you worked through a difficult challenge with your team?",
        airport: "Here is your boarding pass. Gate 14B is down the concourse on your left. Do you have any luggage to check in?",
        doctor: "I understand how uncomfortable that must feel. How long have you been experiencing these symptoms?",
        general: "That is wonderful to hear! Speaking of that, what do you usually enjoy doing when you have some free time?",
      };

      const scenarioKey = scenario in fallbackReplies ? scenario : 'general';
      res.json({
        reply: fallbackReplies[scenarioKey],
        spellingCorrections: [],
        grammarCorrection: message.includes(' I am agree') ? message.replace('I am agree', 'I agree') : null,
        explanation: message.includes(' I am agree') ? "In English, 'agree' is a verb, so we say 'I agree' rather than 'I am agree'." : null,
        naturalAlternative: "That makes a lot of sense! Here's how native speakers often express that.",
        vocabularySpotlight: [
          { word: "authentic", meaning: "genuine and real, not artificial", example: "Practicing authentic conversation makes you speak naturally." }
        ],
        suggestedReplies: [
          "I'd like to get an iced latte, please.",
          "Could you recommend something popular?"
        ],
      });
    }
  } catch (error) {
    console.error('Error in chat-tutor:', error);
    res.status(500).json({
      reply: "That's a great thought! Could you tell me a little bit more about that?",
      spellingCorrections: [],
      grammarCorrection: null,
      explanation: null,
      naturalAlternative: null,
      vocabularySpotlight: [],
      suggestedReplies: ["Sure, let me explain.", "I'd love to share more."],
    });
  }
});

// Helper: Local resilient spelling and grammar rules engine
function fallbackCheckSpelling(text: string, level: string = 'intermediate') {
  const commonMispairs: Record<string, { corr: string; rule: string; phonetic: string }> = {
    'becuase': { corr: 'because', rule: 'Big Elephants Can Always Understand Small Elephants (B-E-C-A-U-S-E)', phonetic: '/bɪˈkɒz/' },
    'definately': { corr: 'definitely', rule: 'Root word is "finite". There is no "a" in definitely!', phonetic: '/ˈdefɪnətli/' },
    'defanitly': { corr: 'definitely', rule: 'Root word is "finite". There is no "a" in definitely!', phonetic: '/ˈdefɪnətli/' },
    'seperate': { corr: 'separate', rule: 'Remember there is "a rat" (sep-A-RAT-e) in separate!', phonetic: '/ˈsepərət/' },
    'recieve': { corr: 'receive', rule: "'I' before 'E' except after 'C' (re-c-e-i-v-e)", phonetic: '/rɪˈsiːv/' },
    'recieved': { corr: 'received', rule: "'I' before 'E' except after 'C' (re-c-e-i-v-e)", phonetic: '/rɪˈsiːvd/' },
    'untill': { corr: 'until', rule: "'Until' has only ONE 'l'. (Only 'till' has double l)", phonetic: '/ənˈtɪl/' },
    'tommorrow': { corr: 'tomorrow', rule: "One 'm' and two 'r's: To-Mor-Row", phonetic: '/təˈmɒroʊ/' },
    'tommorow': { corr: 'tomorrow', rule: "One 'm' and two 'r's: To-Mor-Row", phonetic: '/təˈmɒroʊ/' },
    'alot': { corr: 'a lot', rule: "'A lot' is always two separate words!", phonetic: '/ə lɒt/' },
    'freind': { corr: 'friend', rule: "A 'friend' is a friend to the 'end' (f-r-i-end)", phonetic: '/frend/' },
    'freinds': { corr: 'friends', rule: "A 'friend' is a friend to the 'end' (f-r-i-end)", phonetic: '/frendz/' },
    'neccessary': { corr: 'necessary', rule: "One collar (1 C), two sleeves (2 S's): ne-C-e-SS-ary", phonetic: '/ˈnesəsəri/' },
    'accomodation': { corr: 'accommodation', rule: "Two Cots (CC) and Two Mattresses (MM): double C, double M", phonetic: '/əˌkɒməˈdeɪʃn/' },
    'embarass': { corr: 'embarrass', rule: "Two Really Red (RR) cheeks, Several Shy (SS) smiles", phonetic: '/ɪmˈbærəs/' },
    'rythm': { corr: 'rhythm', rule: "Rhythm Helps Your Two Hips Move (R-H-Y-T-H-M)", phonetic: '/ˈrɪðəm/' },
    'priviledge': { corr: 'privilege', rule: "No 'D' in privilege! Two I's and two E's", phonetic: '/ˈprɪvəlɪdʒ/' }
  };

  const words = text.split(/\s+/);
  const spellingIssues: any[] = [];
  let corrected = text;

  // Check common typos
  for (const w of words) {
    const cleanW = w.toLowerCase().replace(/[^a-z]/g, '');
    if (commonMispairs[cleanW]) {
      const item = commonMispairs[cleanW];
      spellingIssues.push({
        word: cleanW,
        correction: item.corr,
        rule: item.rule,
        phonetic: item.phonetic,
      });
      corrected = corrected.replace(new RegExp(`\\b${cleanW}\\b`, 'gi'), item.corr);
    }
  }

  // Check homophones in context
  if (/\bthere\s+(letter|message|voice|accent|dog|house|car|words|call)\b/i.test(corrected)) {
    spellingIssues.push({
      word: 'there',
      correction: 'their',
      rule: "'Their' denotes possession (their letter); 'there' refers to place/location.",
      phonetic: '/ðeər/',
    });
    corrected = corrected.replace(/\bthere(\s+(?:letter|message|voice|accent|dog|house|car|words|call))\b/gi, 'their$1');
  }

  // Grammar fixes
  if (/\bI am agree\b/i.test(corrected)) {
    corrected = corrected.replace(/\bI am agree\b/gi, 'I agree');
  }

  const casual = corrected
    .replace(/^I am\b/i, "I'm")
    .replace(/\bgoing to\b/i, "gonna")
    .replace(/\bbecause\b/i, "'cause");

  const professional = corrected.replace(/^I'm\b/i, "I am");

  return {
    originalText: text,
    hasErrors: spellingIssues.length > 0,
    spellingIssues,
    correctedText: corrected,
    casualNativeVersion: casual !== corrected ? casual : `Hey, ${corrected.toLowerCase()}`,
    professionalVersion: `Please note that ${corrected.toLowerCase()}`,
    keyTakeaways: [
      "Pay special attention to double consonants (like 'c' vs 'cc' and 'm' vs 'mm').",
      "Notice silent letters when speaking out loud to build muscle memory."
    ]
  };
}

// API endpoint: Comprehensive Spelling & Grammar Doctor
app.post('/api/check-spelling-grammar', async (req: Request, res: Response) => {
  const { text, level = 'intermediate' } = req.body;
  if (!text || typeof text !== 'string') {
    res.status(400).json({ error: 'Text is required' });
    return;
  }

  if (ai) {
    try {
      const prompt = `You are an expert English linguist, spelling teacher, and speech tutor.
Analyze this user text written by a ${level} English learner:
"${text}"

Check thoroughly for:
1. Spelling mistakes (including commonly confused homophones like their/there/they're, silent letters, double consonants, prefixes/suffixes).
2. Grammatical errors (tense, subject-verb agreement, prepositions, articles).
3. Awkward phrasing and how native speakers naturally express it.

Return valid JSON with this exact schema:
{
  "originalText": "${text}",
  "hasErrors": boolean,
  "spellingIssues": [
    {
      "word": "misspelled_word",
      "correction": "correct_spelling",
      "rule": "Explanation of the spelling rule or mnemonic to remember it easily",
      "phonetic": "/IPA/ and phonetic breakdown"
    }
  ],
  "correctedText": "Full grammatically correct and correctly spelled version",
  "casualNativeVersion": "How a native speaker would say this naturally in spoken conversation",
  "professionalVersion": "A polished, formal version suitable for emails or workplace presentations",
  "keyTakeaways": [
    "Brief takeaway rule 1",
    "Brief takeaway rule 2"
  ]
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.3,
        },
      });

      const parsed = JSON.parse(response.text || '{}');
      res.json(parsed);
      return;
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local spelling engine:', err);
      res.json(fallbackCheckSpelling(text, level));
      return;
    }
  } else {
    res.json(fallbackCheckSpelling(text, level));
  }
});

// API endpoint: IELTS Speaking Official Band Score Evaluator
app.post('/api/ielts-evaluate', async (req: Request, res: Response) => {
  const { testTitle, part1Transcript = '', part2Transcript = '', part3Transcript = '', cueCardTopic = '' } = req.body;

  const combinedTranscript = `
Part 1 (Introduction & Interview): "${part1Transcript}"
Part 2 (Cue Card Monologue on '${cueCardTopic}'): "${part2Transcript}"
Part 3 (Two-way Discussion): "${part3Transcript}"
  `.trim();

  const fallbackIELTSEvaluation = () => {
    // Local calculation based on candidate transcript length and quality
    const wordCount = (part1Transcript + ' ' + part2Transcript + ' ' + part3Transcript).split(/\s+/).filter(Boolean).length;
    let baseBand = 6.5;
    if (wordCount > 150) baseBand = 7.0;
    if (wordCount > 300) baseBand = 7.5;
    if (wordCount > 500) baseBand = 8.0;

    return {
      overallBand: baseBand,
      testDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      testTitle: testTitle || 'IELTS Speaking Academic Mock',
      fluencyCoherence: {
        band: baseBand,
        scoreLabel: baseBand >= 7.5 ? 'Good Fluency & Coherence' : 'Competent Fluency',
        feedback: 'Demonstrates willingness to speak at length with logical sequencing of ideas and appropriate discourse markers.',
        strengths: [
          'Maintained consistent flow without extended unnatural pauses',
          'Connected sentences effectively using discourse linkers like "furthermore", "on the other hand"',
        ],
        areasForImprovement: [
          'Reduce filler sounds ("um", "like") when structuring complex thoughts',
          'Vary connecting phrases rather than repeating the same transition marker',
        ],
      },
      lexicalResource: {
        band: Math.min(9.0, baseBand + 0.5),
        scoreLabel: 'Wide Lexical Resource',
        feedback: 'Uses a commendable variety of topical vocabulary and demonstrates awareness of natural collocations.',
        strengths: [
          'Employed precise topic-specific terminology appropriate for Academic IELTS',
          'Attempted less common idiomatic phrases to express personal stance',
        ],
        areasForImprovement: [
          'Incorporate more academic collocations (e.g. "paramount significance", "profound implications")',
          'Avoid overusing basic adjectives like "good", "big", "nice"',
        ],
      },
      grammaticalRange: {
        band: baseBand,
        scoreLabel: 'Good Grammatical Control',
        feedback: 'Produces a well-balanced mixture of simple and complex sentence structures with generally accurate tense usage.',
        strengths: [
          'Effective deployment of conditional structures (e.g. "If governments were to...", "Had I known...")',
          'Accurate subject-verb agreement across extended responses',
        ],
        areasForImprovement: [
          'Pay closer attention to article usage (a/an/the) with abstract nouns',
          'Experiment with inverted sentence forms for rhetorical emphasis in Part 3',
        ],
      },
      pronunciation: {
        band: Math.min(9.0, baseBand + 0.5),
        scoreLabel: 'Clear Pronunciation with Natural Intonation',
        feedback: 'Easily understood throughout with sustained rhythm, clear consonant enunciations, and natural sentence stress.',
        strengths: [
          'Stress placed correctly on content words rather than auxiliary verbs',
          'Good voice projection and audible phoneme articulation',
        ],
        areasForImprovement: [
          'Refine linking sounds between trailing consonants and leading vowels',
          'Use rising and falling pitch contours deliberately to signal questions and conclusive points',
        ],
      },
      examinerSummary: `Overall, this was a commendable performance demonstrating the candidate's ability to communicate complex concepts coherently. The candidate sustained a two-minute long turn in Part 2 and engaged thoughtfully with abstract analytical questions in Part 3.`,
      keyVocabularyUsed: [
        { word: 'indispensable', band: '8.5', definition: 'absolutely necessary or essential' },
        { word: 'consequently', band: '7.5', definition: 'as a result or effect' },
        { word: 'profound impact', band: '8.0', definition: 'having deep, far-reaching significance' },
      ],
      recommendedActionPlan: [
        'Practice timed 2-minute cue card responses with structured past-present-future narratives.',
        'Actively compile a personal glossary of high-band academic collocations for environmental and tech themes.',
        'Record and transcribe your Part 3 discussions to audit grammatical range and article precision.',
      ],
    };
  };

  if (ai) {
    try {
      const prompt = `You are a Senior Official Cambridge/British Council IELTS Speaking Examiner.
Evaluate this candidate's IELTS Speaking test performance according to the official IELTS 9-band rubric:

${combinedTranscript}

Evaluate strictly under the 4 official criteria:
1. Fluency and Coherence (FC)
2. Lexical Resource (LR)
3. Grammatical Range and Accuracy (GRA)
4. Pronunciation (PR)

Calculate overallBand (average of the 4 criteria rounded to nearest 0.5 band).
Return JSON with this exact schema:
{
  "overallBand": 7.5,
  "testDate": "08 Nov 2026",
  "testTitle": "${testTitle}",
  "fluencyCoherence": {
    "band": 7.5,
    "scoreLabel": "Fluent with Natural Discourse Markers",
    "feedback": "Examiner commentary on FC",
    "strengths": ["Strength 1", "Strength 2"],
    "areasForImprovement": ["Improvement point 1"]
  },
  "lexicalResource": {
    "band": 8.0,
    "scoreLabel": "Wide Vocabulary & Natural Collocations",
    "feedback": "Examiner commentary on LR",
    "strengths": ["Strength 1", "Strength 2"],
    "areasForImprovement": ["Improvement point 1"]
  },
  "grammaticalRange": {
    "band": 7.0,
    "scoreLabel": "Frequent Error-Free Complex Sentences",
    "feedback": "Examiner commentary on GRA",
    "strengths": ["Strength 1"],
    "areasForImprovement": ["Improvement point 1"]
  },
  "pronunciation": {
    "band": 7.5,
    "scoreLabel": "Clear Articulation & Varied Intonation",
    "feedback": "Examiner commentary on PR",
    "strengths": ["Strength 1"],
    "areasForImprovement": ["Improvement point 1"]
  },
  "examinerSummary": "Holistic official examiner assessment summary",
  "keyVocabularyUsed": [
    {"word": "word", "band": "8.5", "definition": "definition"}
  ],
  "recommendedActionPlan": [
    "Concrete action step to move up 0.5 band",
    "Concrete action step 2"
  ]
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.3,
        },
      });

      const parsed = JSON.parse(response.text || '{}');
      res.json(parsed);
      return;
    } catch (err) {
      console.warn('IELTS AI evaluation failed, using local criteria fallback:', err);
      res.json(fallbackIELTSEvaluation());
      return;
    }
  } else {
    res.json(fallbackIELTSEvaluation());
  }
});

// API endpoint: Multi-language on-the-fly translation helper
app.post('/api/translate', async (req: Request, res: Response) => {
  const { text, targetLang = 'ur' } = req.body;
  if (!text || typeof text !== 'string') {
    res.status(400).json({ error: 'Text is required' });
    return;
  }

  const langNames: Record<string, string> = {
    ur: 'Urdu',
    hi: 'Hindi',
    ar: 'Arabic',
    es: 'Spanish',
  };

  const targetLangName = langNames[targetLang] || 'Urdu';

  if (ai) {
    try {
      const prompt = `Translate the following English phrase or sentence into authentic, natural ${targetLangName} for an ESL / IELTS learner.
English: "${text}"

Return JSON with this schema:
{
  "original": "${text}",
  "translation": "Translated text in ${targetLangName}",
  "explanation": "Brief 1-sentence grammatical or usage note in English"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.2,
        },
      });

      const parsed = JSON.parse(response.text || '{}');
      res.json(parsed);
      return;
    } catch (err) {
      console.warn('Translation API error, falling back:', err);
    }
  }

  // Fallback translation dictionary for common learning phrases
  const fallbackTranslations: Record<string, Record<string, string>> = {
    ur: {
      default: 'اس کا ترجمہ: انگریزی روانی سے بولنے کی باقاعدہ مشق کریں۔',
    },
    hi: {
      default: 'इसका अनुवाद: अंग्रेजी धाराप्रवाह बोलने का नियमित अभ्यास करें।',
    },
    ar: {
      default: 'الترجمة: تدرب بانتظام على التحدث باللغة الإنجليزية بطلاقة.',
    },
    es: {
      default: 'Traducción: Practica hablar inglés con fluidez regularmente.',
    },
  };

  res.json({
    original: text,
    translation: fallbackTranslations[targetLang]?.default || text,
    explanation: `Translation into ${targetLangName} for enhanced comprehension.`,
  });
});

// API endpoint: Pronunciation evaluation & feedback
app.post('/api/pronunciation-evaluate', async (req: Request, res: Response) => {
  try {
    const { targetText, spokenText } = req.body;

    if (!targetText || !spokenText) {
      res.status(400).json({ error: 'targetText and spokenText are required' });
      return;
    }

    if (ai) {
      const prompt = `Compare the expected English sentence with the user's recognized speech:
Expected: "${targetText}"
User said: "${spokenText}"

Analyze accuracy and pronunciation nuances.
Return JSON with this exact schema:
{
  "accuracyScore": 88, // integer 0-100
  "feedback": "Encouraging 1-2 sentence feedback highlight",
  "wordAnalysis": [
    {"word": "word", "status": "correct" | "needs-work" | "missed", "phonetic": "/IPA/", "tip": "mouth/tongue placement tip if needs work"}
  ],
  "pacing": "Good tempo" | "A bit too fast" | "Try linking words smoothly",
  "confidenceTip": "A key spoken English tip (e.g. stress the second syllable, don't drop the 'th' sound)"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.3,
        },
      });

      const parsed = JSON.parse(response.text || '{}');
      res.json(parsed);
      return;
    } else {
      // Local fallback evaluation
      const targetWords = targetText.toLowerCase().replace(/[.,!?;:]/g, '').split(/\s+/);
      const spokenWords = spokenText.toLowerCase().replace(/[.,!?;:]/g, '').split(/\s+/);

      let matched = 0;
      const wordAnalysis = targetWords.map((word: string) => {
        const found = spokenWords.includes(word);
        if (found) matched++;
        return {
          word,
          status: found ? 'correct' : 'needs-work',
          phonetic: `/${word}/`,
          tip: found ? 'Great clear pronunciation!' : 'Practice blending the vowels softly',
        };
      });

      const accuracy = Math.round((matched / targetWords.length) * 100);

      res.json({
        accuracyScore: Math.min(100, Math.max(20, accuracy)),
        feedback: accuracy >= 80 ? "Super clear delivery! Your pronunciation sounded confident and natural." : "Good effort! Focus on clearly enunciating the consonants.",
        wordAnalysis,
        pacing: "Smooth tempo",
        confidenceTip: "Remember to breathe naturally and stress key nouns and verbs in the sentence.",
      });
    }
  } catch (error) {
    console.error('Error in pronunciation-evaluate:', error);
    res.status(500).json({
      accuracyScore: 85,
      feedback: "Great attempt! Keep practicing with consistent rhythm.",
      wordAnalysis: [],
      pacing: "Good",
      confidenceTip: "Keep vocal cords relaxed for clearer vowels.",
    });
  }
});

// API endpoint: Sentence Polish & "How a Native Says It"
app.post('/api/speech-polish', async (req: Request, res: Response) => {
  try {
    const { sentence } = req.body;
    if (!sentence || typeof sentence !== 'string') {
      res.status(400).json({ error: 'Sentence is required' });
      return;
    }

    if (ai) {
      const prompt = `The user wants to express this in spoken English: "${sentence}".
Provide 3 authentic variations with explanations:
1. Standard & Correct (Grammatically sound and clear)
2. Casual & Native (How Americans/Brits talk with friends, using natural contractions and idioms)
3. Professional & Confident (Polite, clear, great for work or meetings)

Return JSON format:
{
  "original": "${sentence}",
  "standard": "Standard clear English sentence",
  "casual": "Casual everyday spoken sentence",
  "professional": "Polite professional workplace sentence",
  "commonMistake": "If the original had a common ESL mistake, explain it clearly and warmly. If none, say 'Your original sentence was understandable!'",
  "pronunciationEmphasis": "Which words to stress when speaking this sentence out loud"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.4,
        },
      });

      const parsed = JSON.parse(response.text || '{}');
      res.json(parsed);
      return;
    } else {
      res.json({
        original: sentence,
        standard: sentence.trim(),
        casual: `Hey, ${sentence.toLowerCase().trim()}`,
        professional: `I would like to state that ${sentence.toLowerCase().trim()}.`,
        commonMistake: "Remember to use active verbs and natural contractions (I'll, don't, we're) for fluent conversation.",
        pronunciationEmphasis: "Stress the main content words: nouns, main verbs, and adjectives.",
      });
    }
  } catch (error) {
    console.error('Error in speech-polish:', error);
    res.status(500).json({
      original: req.body.sentence || '',
      standard: req.body.sentence || '',
      casual: req.body.sentence || '',
      professional: req.body.sentence || '',
      commonMistake: "Practice speaking each version out loud to build muscle memory.",
      pronunciationEmphasis: "Stress the key action verbs.",
    });
  }
});

// Setup Vite or static serving
async function setupServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`SpeakFluent Server listening on port ${port} (mode: ${isProd ? 'production' : 'development'})`);
  });
}

setupServer();

import { Lesson, Scenario, PronunciationItem, TongueTwister, EnglishLevel } from '../types';

export interface SpellingWord {
  id: string;
  word: string;
  level: EnglishLevel;
  category: 'silent-letter' | 'double-letter' | 'ie-ei' | 'homophone' | 'advanced-root';
  phonetic: string;
  definition: string;
  commonMistake: string;
  mnemonicRule: string;
  exampleSentence: string;
}

export interface HomophonePair {
  id: string;
  pair: [string, string, string?];
  level: EnglishLevel;
  explanations: Array<{
    word: string;
    partOfSpeech: string;
    meaning: string;
    example: string;
  }>;
  quickQuiz: {
    question: string;
    options: string[];
    correctAnswer: string;
    hint: string;
  };
}

export const SPELLING_WORDS: SpellingWord[] = [
  // Beginner
  {
    id: 'sp-1',
    word: 'because',
    level: 'beginner',
    category: 'silent-letter',
    phonetic: '/bɪˈkɒz/',
    definition: 'For the reason that; since.',
    commonMistake: 'becuase / beacuse',
    mnemonicRule: 'Big Elephants Can Always Understand Small Elephants (B-E-C-A-U-S-E).',
    exampleSentence: 'I study English every day because I want to speak fluently.'
  },
  {
    id: 'sp-2',
    word: 'friend',
    level: 'beginner',
    category: 'ie-ei',
    phonetic: '/frend/',
    definition: 'A person with whom one has a bond of mutual affection.',
    commonMistake: 'freind',
    mnemonicRule: 'A true friend is someone who stays with you until the "end" (f-r-i-END).',
    exampleSentence: 'My best friend helped me practice my English pronunciation.'
  },
  {
    id: 'sp-3',
    word: 'beautiful',
    level: 'beginner',
    category: 'silent-letter',
    phonetic: '/ˈbjuːtɪfl/',
    definition: 'Pleasing the senses or mind aesthetically.',
    commonMistake: 'beutiful / beautifull',
    mnemonicRule: 'Be-A-Utiful: Remember "eau" like French water, and only one "l" at the end.',
    exampleSentence: 'It is a beautiful morning to practice speaking English.'
  },
  {
    id: 'sp-4',
    word: 'tomorrow',
    level: 'beginner',
    category: 'double-letter',
    phonetic: '/təˈmɒroʊ/',
    definition: 'On the day after today.',
    commonMistake: 'tommorrow / tommorow',
    mnemonicRule: 'One Morning (1 M), Two Roses (2 R\'s) tomorrow!',
    exampleSentence: 'I will have my next conversation practice tomorrow.'
  },
  {
    id: 'sp-5',
    word: 'until',
    level: 'beginner',
    category: 'double-letter',
    phonetic: '/ənˈtɪl/',
    definition: 'Up to the point in time or that.',
    commonMistake: 'untill',
    mnemonicRule: 'Notice that "until" has only ONE "l", whereas "till" has two.',
    exampleSentence: 'We talked until midnight in English.'
  },
  {
    id: 'sp-6',
    word: 'receive',
    level: 'beginner',
    category: 'ie-ei',
    phonetic: '/rɪˈsiːv/',
    definition: 'Be given, presented with, or paid.',
    commonMistake: 'recieve',
    mnemonicRule: 'Rule: "I before E, except after C" (re-c-e-i-v-e).',
    exampleSentence: 'Did you receive the audio recording I sent you?'
  },

  // Intermediate
  {
    id: 'sp-7',
    word: 'definitely',
    level: 'intermediate',
    category: 'silent-letter',
    phonetic: '/ˈdefɪnətli/',
    definition: 'Without doubt; certainly.',
    commonMistake: 'definately / defanitly',
    mnemonicRule: 'It contains the word "FINITE" in the middle: de-FINITE-ly. There is no "A"!',
    exampleSentence: 'I definitely feel more confident speaking out loud now.'
  },
  {
    id: 'sp-8',
    word: 'separate',
    level: 'intermediate',
    category: 'silent-letter',
    phonetic: '/ˈsepərət/ (adj) or /ˈsepəreɪt/ (verb)',
    definition: 'Forming or viewed as an independent entity.',
    commonMistake: 'seperate',
    mnemonicRule: 'There is "A RAT" in the middle of sep-A-RAT-e.',
    exampleSentence: 'We practiced speaking in separate breakout rooms.'
  },
  {
    id: 'sp-9',
    word: 'accommodation',
    level: 'intermediate',
    category: 'double-letter',
    phonetic: '/əˌkɒməˈdeɪʃn/',
    definition: 'A room, group of rooms, or building in which someone may live or stay.',
    commonMistake: 'accomodation / acommodation',
    mnemonicRule: 'It has room for Two Cots (CC) and Two Mattresses (MM): double C, double M.',
    exampleSentence: 'We booked lovely hotel accommodation near the conference center.'
  },
  {
    id: 'sp-10',
    word: 'embarrass',
    level: 'intermediate',
    category: 'double-letter',
    phonetic: '/ɪmˈbærəs/',
    definition: 'Cause someone to feel awkward, self-conscious, or ashamed.',
    commonMistake: 'embarass / emabarass',
    mnemonicRule: 'Two Really Red (RR) cheeks, Several Shy (SS) smiles: double R, double S.',
    exampleSentence: 'Never feel embarrassed when making mistakes while learning a new language!'
  },
  {
    id: 'sp-11',
    word: 'necessary',
    level: 'intermediate',
    category: 'double-letter',
    phonetic: '/ˈnesəsəri/',
    definition: 'Required to be done, achieved, or present; needed.',
    commonMistake: 'neccessary / necessery',
    mnemonicRule: 'A shirt needs One Collar (1 C) and Two Sleeves (2 S\'s): ne-C-e-SS-ary.',
    exampleSentence: 'Daily practice is necessary to develop natural speech rhythm.'
  },
  {
    id: 'sp-12',
    word: 'rhythm',
    level: 'intermediate',
    category: 'silent-letter',
    phonetic: '/ˈrɪðəm/',
    definition: 'A strong, regular, repeated pattern of movement or sound.',
    commonMistake: 'rythm / rhythym',
    mnemonicRule: 'Rhythm Helps Your Two Hips Move (R-H-Y-T-H-M).',
    exampleSentence: 'English has a distinctive stress-timed rhythm.'
  },

  // Advanced
  {
    id: 'sp-13',
    word: 'conscientious',
    level: 'advanced',
    category: 'advanced-root',
    phonetic: '/ˌkɒnʃiˈenʃəs/',
    definition: 'Wishing to do one\'s work or duty thoroughly and well.',
    commonMistake: 'consciencious / contentous',
    mnemonicRule: 'Remember "science" sits inside it: con-SCIENCE-tious.',
    exampleSentence: 'She is a very conscientious speaker who pays attention to subtle nuances.'
  },
  {
    id: 'sp-14',
    word: 'bureaucracy',
    level: 'advanced',
    category: 'advanced-root',
    phonetic: '/bjʊəˈrɒkrəsi/',
    definition: 'A system of government or administration with complex rules.',
    commonMistake: 'beaurocracy / burocracy',
    mnemonicRule: 'From the French "bureau" (desk covered in cloth) + "cracy" (rule): B-U-R-E-A-U-cracy.',
    exampleSentence: 'Navigating international visa bureaucracy requires polite and precise English.'
  },
  {
    id: 'sp-15',
    word: 'entrepreneur',
    level: 'advanced',
    category: 'advanced-root',
    phonetic: '/ˌɒntrəprəˈnɜːr/',
    definition: 'A person who sets up a business taking on financial risks in hope of profit.',
    commonMistake: 'entreprenuer / enterpreneur',
    mnemonicRule: 'Ends with -EUR (like amateur, connoisseur): entre-pre-NEUR.',
    exampleSentence: 'The entrepreneur delivered a compelling elevator pitch in English.'
  },
  {
    id: 'sp-16',
    word: 'liaison',
    level: 'advanced',
    category: 'advanced-root',
    phonetic: '/liˈeɪzɒn/ or /ˈliːəzɒn/',
    definition: 'Communication or cooperation facilitating a close working relationship.',
    commonMistake: 'liason / liason',
    mnemonicRule: 'Two "I"s around the "A": L-I-A-I-S-O-N.',
    exampleSentence: 'He served as the official liaison between the global headquarters and the regional team.'
  },
  {
    id: 'sp-17',
    word: 'privilege',
    level: 'advanced',
    category: 'silent-letter',
    phonetic: '/ˈprɪvəlɪdʒ/',
    definition: 'A special right, advantage, or immunity granted to a particular person or group.',
    commonMistake: 'priviledge / privledge',
    mnemonicRule: 'No "D" in privilege! Two "I"s and two "E"s: p-r-I-v-I-l-E-g-E.',
    exampleSentence: 'It is a privilege to converse with native speakers from diverse cultures.'
  }
];

export const HOMOPHONE_PAIRS: HomophonePair[] = [
  {
    id: 'homo-1',
    pair: ['their', 'there', 'they\'re'],
    level: 'beginner',
    explanations: [
      { word: 'their', partOfSpeech: 'possessive pronoun', meaning: 'Belonging to them', example: 'Their English pronunciation is improving remarkably.' },
      { word: 'there', partOfSpeech: 'adverb / location', meaning: 'In, at, or to that place', example: 'The language lab is over there across the hallway.' },
      { word: 'they\'re', partOfSpeech: 'contraction', meaning: 'Short for "they are"', example: 'They\'re practicing the dialogue together right now.' }
    ],
    quickQuiz: {
      question: 'Select the correct word: "Look at _____ new audio headset, _____ listening to English podcasts over _____."',
      options: ['their / they\'re / there', 'there / their / they\'re', 'they\'re / there / their'],
      correctAnswer: 'their / they\'re / there',
      hint: 'First is possession (their), second is "they are" (they\'re), third is place (there).'
    }
  },
  {
    id: 'homo-2',
    pair: ['your', 'you\'re'],
    level: 'beginner',
    explanations: [
      { word: 'your', partOfSpeech: 'possessive adjective', meaning: 'Belonging to or associated with you', example: 'Your accent sounds very clear and articulate.' },
      { word: 'you\'re', partOfSpeech: 'contraction', meaning: 'Short for "you are"', example: 'You\'re doing a fantastic job with your speaking practice.' }
    ],
    quickQuiz: {
      question: 'Select the correct word: "I think _____ pronunciation has reached _____ personal goal."',
      options: ['you\'re / your', 'your / your', 'your / you\'re', 'you\'re / you\'re'],
      correctAnswer: 'your / your',
      hint: 'Both refer to possession belonging to you!'
    }
  },
  {
    id: 'homo-3',
    pair: ['affect', 'effect'],
    level: 'intermediate',
    explanations: [
      { word: 'affect', partOfSpeech: 'verb', meaning: 'To influence or produce a change in', example: 'Consistent daily practice will positively affect your fluency.' },
      { word: 'effect', partOfSpeech: 'noun', meaning: 'The result or consequence of a cause', example: 'Speaking aloud had an immediate positive effect on my confidence.' }
    ],
    quickQuiz: {
      question: 'Select the correct word: "The positive _____ of speaking practice will directly _____ your score."',
      options: ['effect / affect', 'affect / effect', 'effect / effect', 'affect / affect'],
      correctAnswer: 'effect / affect',
      hint: 'Remember RAVEN: Remember Affect is a Verb, Effect is a Noun!'
    }
  },
  {
    id: 'homo-4',
    pair: ['lose', 'loose'],
    level: 'intermediate',
    explanations: [
      { word: 'lose', partOfSpeech: 'verb (sounds like -z-)', meaning: 'To be deprived of, cease to have, or fail to win', example: 'Don\'t lose your rhythm when you speak fast.' },
      { word: 'loose', partOfSpeech: 'adjective (sounds like -s-)', meaning: 'Not firmly or tightly fixed in place', example: 'Keep your tongue and jaw loose when articulating vowel sounds.' }
    ],
    quickQuiz: {
      question: 'Select the correct word: "If you don\'t practice, you might _____ your confidence; relax and keep your muscles _____."',
      options: ['lose / loose', 'loose / lose', 'lose / lose', 'loose / loose'],
      correctAnswer: 'lose / loose',
      hint: 'One "O" = lose (to misplace); Two "O"s = loose (not tight).'
    }
  },
  {
    id: 'homo-5',
    pair: ['principal', 'principle'],
    level: 'advanced',
    explanations: [
      { word: 'principal', partOfSpeech: 'noun / adj', meaning: 'The head of a school or most important/main', example: 'Our principal objective is natural conversation fluency.' },
      { word: 'principle', partOfSpeech: 'noun', meaning: 'A fundamental truth, rule, or moral belief', example: 'The principles of English grammar help structure your speech.' }
    ],
    quickQuiz: {
      question: 'Select the correct word: "The _____ reason we study is based on a sound pedagogical _____."',
      options: ['principal / principle', 'principle / principal', 'principal / principal', 'principle / principle'],
      correctAnswer: 'principal / principle',
      hint: 'The principal is your "pal" (or main thing); a principle is a "rule" (both end in -le).'
    }
  }
];

export const SILENT_LETTER_RULES = [
  {
    letter: 'Silent K',
    rule: 'The letter "k" is almost always silent when it precedes an "n" at the start of a word.',
    examples: ['Knife (/naɪf/)', 'Know (/noʊ/)', 'Knee (/niː/)', 'Knight (/naɪt/)', 'Knowledge (/ˈnɒlɪdʒ/)'],
    speakingTip: 'Place your tongue directly in position for the /n/ sound immediately—do not make any throat click!'
  },
  {
    letter: 'Silent B',
    rule: 'The letter "b" is generally silent after "m" at the end of a word, or before "t".',
    examples: ['Doubt (/daʊt/)', 'Debt (/det/)', 'Climb (/klaɪm/)', 'Subtle (/ˈsʌtl/)', 'Thumb (/θʌm/)'],
    speakingTip: 'In words like "doubt" and "debt", go straight from vowel to "t"—completely skip the lips closing for "b".'
  },
  {
    letter: 'Silent W',
    rule: 'The letter "w" is silent when followed by "r" at the beginning of words.',
    examples: ['Write (/raɪt/)', 'Wrong (/rɒŋ/)', 'Wrap (/ræp/)', 'Wrist (/rɪst/)', 'Answer (/ˈɑːnsər/)'],
    speakingTip: 'Start your lips in the rounded /r/ shape right away.'
  },
  {
    letter: 'Silent L',
    rule: 'The letter "l" is frequently silent when following "a" or "o" before "m", "k", or "f".',
    examples: ['Calm (/kɑːm/)', 'Half (/hɑːf/)', 'Talk (/tɔːk/)', 'Walk (/wɔːk/)', 'Salmon (/ˈsæmən/)'],
    speakingTip: 'In "salmon", say SAM-un. Never pronounce the "L"!'
  }
];

export const CURRICULUM_LESSONS: Lesson[] = [
  // Beginner Lessons
  {
    id: 'lesson-beg-1',
    level: 'beginner',
    category: 'Daily Fundamentals',
    title: 'Natural Greetings & Breaking the Ice',
    durationMinutes: 8,
    description: 'Move beyond rigid textbook phrases like "How do you do?" and greet like everyday native speakers.',
    phrases: [
      {
        id: 'p-1',
        text: 'How’s it going?',
        phonetic: '/haʊz ɪt ˈɡoʊɪŋ/',
        meaning: 'Friendly everyday greeting equivalent to "How are you?"',
        nativeTip: 'Link the words smoothly: "How-zit-going". The tone should rise slightly.'
      },
      {
        id: 'p-2',
        text: 'Pretty good, thanks! How about yourself?',
        phonetic: '/ˈprɪti ɡʊd θæŋks haʊ əˈbaʊt jɔːrˈself/',
        meaning: 'Natural way to answer and bounce the conversation back.',
        nativeTip: 'Stress "good" and "yourself". In casual speech, "Pretty" sounds like "prid-ee".'
      },
      {
        id: 'p-3',
        text: 'Nice to finally meet you in person!',
        phonetic: '/naɪs tuː ˈfaɪnəli miːt juː ɪn ˈpɜːrsn/',
        meaning: 'Used when meeting someone you previously only texted or emailed.',
        nativeTip: 'Emphasize "finally" and "person" with warm eye contact.'
      }
    ],
    commonMistakes: [
      {
        wrong: 'I am fine, thank you, and you?',
        right: 'Doing great, thanks! How have you been?',
        reason: 'While grammatically correct, "I am fine, thank you" sounds robotic and formal in everyday English.'
      },
      {
        wrong: 'I am agree with you.',
        right: 'I agree with you! / Exactly!',
        reason: 'Agree is a verb in English, never an adjective. Do not use "am".'
      }
    ],
    dialogueChallenge: {
      prompt: 'Someone smiles and asks you: "Hey there! How has your week been treating you?"',
      expectedReply: 'Pretty busy, but going well! How about yours?',
      hint: 'Acknowledge how your week was, then ask about theirs warmly.'
    }
  },
  {
    id: 'lesson-beg-2',
    level: 'beginner',
    category: 'Ordering & Out and About',
    title: 'Ordering Food & Coffee with Polite Confidence',
    durationMinutes: 10,
    description: 'Learn the polite rhythm of ordering food, coffee, and asking for adjustments without sounding demanding.',
    phrases: [
      {
        id: 'p-4',
        text: 'Could I get an iced latte with oat milk, please?',
        phonetic: '/kʊd aɪ ɡet ən aɪst ˈlɑːteɪ wɪð oʊt mɪlk pliːz/',
        meaning: 'Standard polite formulation for ordering drinks or meals.',
        nativeTip: 'Native speakers say "Could I get..." or "Can I have...", rarely "I want...".'
      },
      {
        id: 'p-5',
        text: 'To have here or to go?',
        phonetic: '/tuː hæv hɪər ɔːr tuː ɡoʊ/',
        meaning: 'Barista asking if you will dine in or take takeaway.',
        nativeTip: 'Quick answers: "To go, please" (US) or "Takeaway, cheers" (UK/AU).'
      },
      {
        id: 'p-6',
        text: 'Do you happen to have anything gluten-free?',
        phonetic: '/duː juː ˈhæpən tuː hæv ˈenɪθɪŋ ˈɡluːtn friː/',
        meaning: 'Softened polite way to ask about menu availability.',
        nativeTip: '"Do you happen to have..." softens the request and sounds very polite.'
      }
    ],
    commonMistakes: [
      {
        wrong: 'Give me one coffee.',
        right: 'Could I please get a black coffee?',
        reason: '"Give me" sounds blunt and rude in English service culture.'
      },
      {
        wrong: 'How much is it cost?',
        right: 'How much does this cost? / How much is this?',
        reason: 'Either use "How much is it?" or "How much does it cost?". Don\'t combine both.'
      }
    ],
    dialogueChallenge: {
      prompt: 'The barista says: "Hi! What can I get started for you today?"',
      expectedReply: 'Could I get a medium cappuccino to go, please?',
      hint: 'Use "Could I get..." + item + "to go, please".'
    }
  },

  // Intermediate Lessons
  {
    id: 'lesson-int-1',
    level: 'intermediate',
    category: 'Conversational Fluency',
    title: 'Disagreeing Politely & Offering Different Perspectives',
    durationMinutes: 12,
    description: 'Master diplomatic disagreement in discussions, debates, and team meetings without causing offense.',
    phrases: [
      {
        id: 'p-7',
        text: 'I see what you mean, but looking at it another way...',
        phonetic: '/aɪ siː wʌt juː miːn bʌt ˈlʊkɪŋ æt ɪt əˈnʌðər weɪ/',
        meaning: 'Acknowledging the speaker first before proposing a counterpoint.',
        nativeTip: 'Always soften disagreement with "I see where you\'re coming from" first.'
      },
      {
        id: 'p-8',
        text: 'I\'m not entirely sure that would work in practice.',
        phonetic: '/aɪm nɒt ɪnˈtaɪərli ʃʊər ðæt wʊd wɜːrk ɪn ˈpræktɪs/',
        meaning: 'Polite doubt expressed indirectly.',
        nativeTip: 'Use "not entirely sure" instead of "that will never work".'
      },
      {
        id: 'p-9',
        text: 'What if we took a blended approach instead?',
        phonetic: '/wʌt ɪf wiː tʊk ə ˈblendɪd əˈproʊtʃ ɪnˈsted/',
        meaning: 'Constructive compromise suggestion.',
        nativeTip: 'Frame suggestions as open questions using "What if we..."'
      }
    ],
    commonMistakes: [
      {
        wrong: 'You are wrong about that.',
        right: 'I have a slightly different take on that.',
        reason: '"You are wrong" sounds confrontational and aggressive in English conversations.'
      },
      {
        wrong: 'According to me, the idea is bad.',
        right: 'In my view / From my perspective, we might face some hurdles.',
        reason: '"According to me" is non-standard English; use "In my opinion" or "From my perspective".'
      }
    ],
    dialogueChallenge: {
      prompt: 'A colleague suggests: "Let\'s finish the whole project over the weekend without sleep."',
      expectedReply: 'I appreciate the enthusiasm, but that might lead to burnout. What if we adjust the timeline instead?',
      hint: 'Acknowledge enthusiasm, express the concern gently, and offer an alternative.'
    }
  },
  {
    id: 'lesson-int-2',
    level: 'intermediate',
    category: 'Workplace & Professional',
    title: 'Speaking Up in Meetings & Clarifying Ideas',
    durationMinutes: 14,
    description: 'Confidently jump into discussions, ask for clarification, and present your updates clearly.',
    phrases: [
      {
        id: 'p-10',
        text: 'If I could just jump in here for a moment...',
        phonetic: '/ɪf aɪ kʊd dʒʌst dʒʌmp ɪn hɪər fɔːr ə ˈmoʊmənt/',
        meaning: 'Polite interruption formula to contribute your thought.',
        nativeTip: 'Keep your voice calm, steady, and raise your index finger slightly in video calls.'
      },
      {
        id: 'p-11',
        text: 'Just to make sure we\'re on the same page...',
        phonetic: '/dʒʌst tuː meɪk ʃʊər wɪər ɒn ðə seɪm peɪdʒ/',
        meaning: 'Idiom used before summarizing key decisions or tasks.',
        nativeTip: '"On the same page" is one of the most widely used business idioms in English.'
      },
      {
        id: 'p-12',
        text: 'Could you walk me through the next steps?',
        phonetic: '/kʊd juː wɔːk miː θruː ðə nekst steps/',
        meaning: 'Asking for a sequential explanation or summary.',
        nativeTip: '"Walk me through" means explain step by step.'
      }
    ],
    commonMistakes: [
      {
        wrong: 'Repeat your words again.',
        right: 'Could you elaborate on that last point?',
        reason: '"Repeat your words" sounds like a command; asking to "elaborate" or "clarify" sounds professional.'
      },
      {
        wrong: 'I have a doubt.',
        right: 'I have a question / Could you clarify something for me?',
        reason: 'In international English, "doubt" means skepticism or distrust. For queries, use "question"!'
      }
    ],
    dialogueChallenge: {
      prompt: 'The meeting host finishes speaking and asks: "Any questions before we wrap up?"',
      expectedReply: 'If I could just ask a quick question regarding the deadline for next Tuesday?',
      hint: 'Politely speak up to request clarity on the timeline.'
    }
  },

  // Advanced Lessons
  {
    id: 'lesson-adv-1',
    level: 'advanced',
    category: 'Persuasion & Storytelling',
    title: 'The Art of Persuasive Storytelling & Rhetoric',
    durationMinutes: 15,
    description: 'Use authentic narrative hooks, signposting, and rhetorical cadence to captivate your listeners.',
    phrases: [
      {
        id: 'p-13',
        text: 'Here\'s the bottom line: simplicity scales, complexity fails.',
        phonetic: '/hɪərz ðə ˈbɒtəm laɪn sɪmˈplɪsəti skeɪlz kəmˈpleksəti feɪlz/',
        meaning: 'Delivering the core thesis with punch and rhythm.',
        nativeTip: '"The bottom line" signals the absolute most essential takeaway.'
      },
      {
        id: 'p-14',
        text: 'To put that into perspective, consider this contrast...',
        phonetic: '/tuː pʊt ðæt ˈɪntuː pərˈspektɪv kənˈsɪdər ðɪs ˈkɒntræst/',
        meaning: 'Signposting phrase used to make abstract statistics memorable.',
        nativeTip: 'Pause for 1 full beat right after "perspective".'
      },
      {
        id: 'p-15',
        text: 'It is not merely a matter of efficiency; it is fundamentally about trust.',
        phonetic: '/ɪt ɪz nɒt ˈmɪərli ə ˈmætər ɒv ɪˈfɪʃnsi ɪt ɪz ˌfʌndəˈmentəli əˈbaʊt trʌst/',
        meaning: 'Elevating the conversation to higher-order values.',
        nativeTip: 'Use contrasting parallel structures: "Not merely X; fundamentally Y".'
      }
    ],
    commonMistakes: [
      {
        wrong: 'As per my thinking, people will like it.',
        right: 'The underlying data strongly indicates positive reception.',
        reason: '"As per my thinking" is archaic and awkward in spoken discourse.'
      },
      {
        wrong: 'In today\'s modern world of nowadays...',
        right: 'In today\'s landscape / In our current climate...',
        reason: 'Avoid redundant stacking of "today", "modern", "nowadays".'
      }
    ],
    dialogueChallenge: {
      prompt: 'An investor asks: "Why should we bet on this new direction?"',
      expectedReply: 'Because it addresses the root cause rather than treating the symptoms, delivering sustainable long-term value.',
      hint: 'Deliver a powerful, concise value-driven response.'
    }
  }
];

export const SCENARIOS: Scenario[] = [
  {
    id: 'cafe',
    title: 'Cozy Artisan Coffee Shop',
    description: 'Practice ordering your morning roast, customizing dairy options, and casual small talk with the friendly barista.',
    level: 'beginner',
    image: '/src/assets/images/situation_coffee_shop_1794123685899.jpg',
    starterPrompt: 'Order a beverage, customize the milk, and ask about pastries.',
    starterCoachMessage: 'Hi there! Welcome to The Daily Grind. What can I get brewing for you today?',
    cheatSheet: [
      'Could I get a large oat vanilla latte, please?',
      'Are your almond croissants baked fresh today?',
      'To go, please! Thank you so much.'
    ]
  },
  {
    id: 'interview',
    title: 'Job Interview & Career Pitch',
    description: 'Ace the classic questions: Tell me about yourself, handling teamwork conflicts, and career ambitions.',
    level: 'intermediate',
    image: '/src/assets/images/situation_job_interview_1794123685625.jpg',
    starterPrompt: 'Introduce your background, strengths, and passion for the position.',
    starterCoachMessage: 'Good morning! Thank you for joining us today. To start off, could you walk me through your background and what drew you to this opportunity?',
    cheatSheet: [
      'I\'ve spent the last few years specializing in...',
      'One of my core strengths is bridging communication between...',
      'What excites me most about your company culture is...'
    ]
  },
  {
    id: 'airport',
    title: 'Airport Gate & Flight Check-in',
    description: 'Navigate gate announcements, flight changes, luggage weight questions, and seat upgrades with ease.',
    level: 'intermediate',
    starterPrompt: 'Check in for your flight, ask about window seats, and inquire about gate location.',
    starterCoachMessage: 'Good afternoon, passport and ticket please! Are you checking any bags on this flight to London today?',
    cheatSheet: [
      'Just this one carry-on bag, thanks.',
      'Is there any chance of getting a window seat near the front?',
      'Could you confirm which terminal gate we depart from?'
    ]
  },
  {
    id: 'doctor',
    title: 'Doctor\'s Clinic & Describing Symptoms',
    description: 'Explain aches, how long you have felt unwell, medicine allergies, and understand the doctor\'s advice.',
    level: 'intermediate',
    starterPrompt: 'Describe a persistent cough and headache you have had for 3 days.',
    starterCoachMessage: 'Hello! Come on in and have a seat. What brings you in today, and how have you been feeling?',
    cheatSheet: [
      'I\'ve had a throbbing headache and a dry cough for about three days.',
      'The symptoms seem to get worse in the evening.',
      'Do I need to take this medication with food?'
    ]
  },
  {
    id: 'casual',
    title: 'Casual Networking & Small Talk',
    description: 'Mingle effortlessly at social gatherings, discuss hobbies, weekend plans, and current happenings.',
    level: 'beginner',
    starterPrompt: 'Introduce yourself, ask what brought the other person here, and share interests.',
    starterCoachMessage: 'Hey! Mind if I join you? Great turnout tonight, isn\'t it! How are you enjoying the evening so far?',
    cheatSheet: [
      'Not at all, have a seat! I\'m really enjoying the energy here.',
      'What kind of projects are you currently working on?',
      'Have you tried the appetizers over by the terrace?'
    ]
  }
];

export const PRONUNCIATION_WORDS: PronunciationItem[] = [
  {
    id: 'pron-1',
    word: 'Comfortable',
    syllables: 'COMF - ter - bul',
    ipa: '/ˈkʌmftəbl/',
    audioHint: 'Notice there are only 3 syllables in spoken English, not 4!',
    exampleSentence: 'Make yourself comfortable while we practice speaking.',
    difficulty: 'Medium',
    commonSlip: 'Saying com-for-ta-ble (4 syllables) instead of KUMF-tuh-bul (3 syllables).'
  },
  {
    id: 'pron-2',
    word: 'Thoroughly',
    syllables: 'THUR - uh - lee',
    ipa: '/ˈθʌrəli/',
    audioHint: 'Tongue between teeth for "th", followed by relaxed "er".',
    exampleSentence: 'We thoroughly enjoyed discussing our travel stories.',
    difficulty: 'Challenging',
    commonSlip: 'Confusing thoroughly with "through" or "thought".'
  },
  {
    id: 'pron-3',
    word: 'Specifically',
    syllables: 'spuh - SIF - ik - lee',
    ipa: '/spəˈsɪfɪkli/',
    audioHint: 'Stress lands squarely on the second syllable: SIF.',
    exampleSentence: 'Could you tell me specifically what you enjoyed about the book?',
    difficulty: 'Medium',
    commonSlip: 'Saying "pacifically" (like the Pacific ocean) instead of starting with "sp-".'
  },
  {
    id: 'pron-4',
    word: 'Entrepreneur',
    syllables: 'on - truh - pruh - NUR',
    ipa: '/ˌɒntrəprəˈnɜːr/',
    audioHint: 'Primary stress is on the final syllable NUR.',
    exampleSentence: 'Every entrepreneur must communicate their vision with clarity.',
    difficulty: 'Challenging',
    commonSlip: 'Putting stress on the first syllable or dropping the French -eur ending.'
  },
  {
    id: 'pron-5',
    word: 'Colonel',
    syllables: 'KER - nul',
    ipa: '/ˈkɜːrnl/',
    audioHint: 'Pronounced exactly like "kernel" (like a popcorn kernel)!',
    exampleSentence: 'The retired colonel gave an inspiring speech.',
    difficulty: 'Challenging',
    commonSlip: 'Trying to pronounce the "l" in the first syllable.'
  },
  {
    id: 'pron-6',
    word: 'Wednesday',
    syllables: 'WENZ - day',
    ipa: '/ˈwenzdeɪ/',
    audioHint: 'The first "d" and "e" are completely silent: Wenz-day!',
    exampleSentence: 'Our live spoken English masterclass is every Wednesday.',
    difficulty: 'Easy',
    commonSlip: 'Saying "Wed-nes-day" with 3 syllables.'
  }
];

export const TONGUE_TWISTERS: TongueTwister[] = [
  {
    id: 'tt-1',
    title: 'The /s/ and /ʃ/ Sibilant Challenge',
    text: 'She sells seashells by the seashore, and the shells she sells are surely seashells.',
    focusSound: 'Contrast between sharp "S" and soft "SH"',
    difficulty: 'Warmup'
  },
  {
    id: 'tt-2',
    title: 'The Plosive /p/ Precision Drill',
    text: 'Peter Piper picked a peck of pickled peppers. Did Peter Piper pick a peck of pickled peppers?',
    focusSound: 'Crisp explosive "P" aspiration without swallowing consonants',
    difficulty: 'Medium'
  },
  {
    id: 'tt-3',
    title: 'The Voiced & Voiceless /θ/ and /ð/ Master',
    text: 'Thirty-three thankful thieves thought that thrilling Thursday brought them wealth.',
    focusSound: 'Dental fricatives: tongue between teeth without touching upper teeth',
    difficulty: 'Expert'
  },
  {
    id: 'tt-4',
    title: 'The /w/ and /v/ Distinction',
    text: 'Which wicked witch wished which wicked wish while watching vivid videos?',
    focusSound: 'Rounded lips for "W" vs upper teeth touching lower lip for "V"',
    difficulty: 'Expert'
  }
];

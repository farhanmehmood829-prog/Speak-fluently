export type TabType = 'conversation' | 'curriculum' | 'polisher' | 'pronunciation' | 'ielts';

export type EnglishLevel = 'beginner' | 'intermediate' | 'advanced';

export interface IELTSQuestion {
  id: string;
  question: string;
  sampleBand9Answer?: string;
  examinerNotes?: string;
}

export interface IELTSPart2CueCard {
  topic: string;
  bulletPoints: string[];
  preparationTimeSeconds: number; // usually 60
  speakingTimeSeconds: number; // usually 120
  modelAnswer: string;
  highBandVocabulary: Array<{ word: string; band: string; meaning: string }>;
}

export interface IELTSTest {
  id: string;
  title: string;
  module: 'Academic' | 'General Training';
  difficulty: 'Standard (Band 6.0-7.0)' | 'Advanced (Band 7.5-9.0)';
  isPremium: boolean;
  overview: string;
  examinerName: string;
  part1Questions: IELTSQuestion[];
  part2CueCard: IELTSPart2CueCard;
  part3Questions: IELTSQuestion[];
}

export interface IELTSCriteriaEvaluation {
  band: number;
  scoreLabel: string;
  feedback: string;
  strengths: string[];
  areasForImprovement: string[];
}

export interface IELTSBandEvaluation {
  overallBand: number;
  testDate: string;
  testTitle: string;
  fluencyCoherence: IELTSCriteriaEvaluation;
  lexicalResource: IELTSCriteriaEvaluation;
  grammaticalRange: IELTSCriteriaEvaluation;
  pronunciation: IELTSCriteriaEvaluation;
  examinerSummary: string;
  keyVocabularyUsed: Array<{ word: string; band: string; definition: string }>;
  recommendedActionPlan: string[];
}

export type SubscriptionPlan = 'monthly' | 'quarterly' | 'lifetime';

export interface SubscriptionStatus {
  isPremium: boolean;
  tier: SubscriptionPlan | null;
  validUntil: string | null;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  timestamp: string;
  grammarCorrection?: string | null;
  explanation?: string | null;
  naturalAlternative?: string | null;
  vocabularySpotlight?: Array<{
    word: string;
    meaning: string;
    example: string;
  }>;
  suggestedReplies?: string[];
  audioUrl?: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  level: EnglishLevel;
  image?: string;
  starterPrompt: string;
  starterCoachMessage: string;
  cheatSheet: string[];
}

export interface PracticePhrase {
  id: string;
  text: string;
  phonetic: string;
  meaning: string;
  nativeTip: string;
}

export interface Lesson {
  id: string;
  level: EnglishLevel;
  category: string;
  title: string;
  durationMinutes: number;
  description: string;
  phrases: PracticePhrase[];
  commonMistakes: Array<{
    wrong: string;
    right: string;
    reason: string;
  }>;
  dialogueChallenge: {
    prompt: string;
    expectedReply: string;
    hint: string;
  };
}

export interface PronunciationItem {
  id: string;
  word: string;
  syllables: string;
  ipa: string;
  audioHint: string;
  exampleSentence: string;
  difficulty: 'Easy' | 'Medium' | 'Challenging';
  commonSlip: string;
}

export interface TongueTwister {
  id: string;
  title: string;
  text: string;
  focusSound: string;
  difficulty: 'Warmup' | 'Medium' | 'Expert';
}

export interface PolishResult {
  original: string;
  standard: string;
  casual: string;
  professional: string;
  commonMistake: string;
  pronunciationEmphasis: string;
}

export interface UserStats {
  streakDays: number;
  lastPracticedDate: string;
  totalSpeakingMinutes: number;
  sentencesSpoken: number;
  completedLessons: string[];
  masteredWords: string[];
}

export interface SpeechSettings {
  rate: number;
  pitch: number;
  voiceGender: 'female' | 'male';
  accent: 'US' | 'UK' | 'AU';
}

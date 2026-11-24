import { SpeechSettings } from '../types';

let cachedVoices: SpeechSynthesisVoice[] = [];

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  if (cachedVoices.length > 0) return cachedVoices;

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    cachedVoices = voices;
  }
  return voices;
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export function speakText(
  text: string,
  settings: SpeechSettings = { rate: 1.0, pitch: 1.0, voiceGender: 'female', accent: 'US' },
  onEnd?: () => void
): boolean {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return false;
  }

  // Cancel any ongoing utterance
  window.speechSynthesis.cancel();

  // Strip markdown or bracket tags from speech
  const cleanedText = text
    .replace(/\*+/g, '')
    .replace(/\[.*?\]/g, '')
    .replace(/`.*?`/g, '')
    .trim();

  if (!cleanedText) return false;

  const utterance = new SpeechSynthesisUtterance(cleanedText);
  utterance.rate = settings.rate;
  utterance.pitch = settings.pitch;

  const voices = getAvailableVoices();

  // Accent targeting
  const langTarget =
    settings.accent === 'UK' ? 'en-GB' :
    settings.accent === 'AU' ? 'en-AU' : 'en-US';

  const preferredVoice = voices.find(v => {
    const isLangMatch = v.lang.startsWith(langTarget) || v.lang.replace('_', '-').startsWith(langTarget);
    if (!isLangMatch) return false;
    const nameLower = v.name.toLowerCase();
    if (settings.voiceGender === 'female') {
      return nameLower.includes('female') || nameLower.includes('samantha') || nameLower.includes('zira') || nameLower.includes('victoria') || nameLower.includes('karen') || nameLower.includes('google us english') || nameLower.includes('serena');
    } else {
      return nameLower.includes('male') || nameLower.includes('david') || nameLower.includes('george') || nameLower.includes('daniel');
    }
  }) || voices.find(v => v.lang.startsWith(langTarget)) || voices.find(v => v.lang.startsWith('en'));

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }
  utterance.lang = langTarget;

  if (onEnd) {
    utterance.onend = () => onEnd();
    utterance.onerror = () => onEnd();
  }

  window.speechSynthesis.speak(utterance);
  return true;
}

export interface SpeechRecognitionResultObject {
  transcript: string;
  isFinal: boolean;
}

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
}

// Helper hook or class for speech recognition
export class SpeechRecognizer {
  private recognition: any = null;
  private isListening = false;

  constructor(
    private onResult: (transcript: string, isFinal: boolean) => void,
    private onError: (errorMsg: string) => void,
    private onStateChange: (listening: boolean) => void
  ) {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';

        this.recognition.onstart = () => {
          this.isListening = true;
          this.onStateChange(true);
        };

        this.recognition.onend = () => {
          this.isListening = false;
          this.onStateChange(false);
        };

        this.recognition.onerror = (event: any) => {
          console.warn('Speech recognition error:', event.error);
          this.isListening = false;
          this.onStateChange(false);
          if (event.error === 'not-allowed') {
            this.onError('Microphone access was denied. Please allow microphone permissions in your browser.');
          } else if (event.error === 'no-speech') {
            this.onError('No speech detected. Please speak closer to your microphone.');
          } else {
            this.onError(`Audio recognition error (${event.error}). You can also type your message.`);
          }
        };

        this.recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }

          const combined = finalTranscript || interimTranscript;
          if (combined) {
            this.onResult(combined, Boolean(finalTranscript));
          }
        };
      }
    }
  }

  public start() {
    if (!this.recognition) {
      this.onError('Speech Recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge, or type your response.');
      return;
    }
    try {
      this.recognition.start();
    } catch (e) {
      console.warn('Recognition start exception:', e);
    }
  }

  public stop() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        console.warn('Recognition stop exception:', e);
      }
    }
  }

  public get active(): boolean {
    return this.isListening;
  }
}

export type AppLanguage = 'en' | 'ur' | 'hi' | 'ar' | 'es';

export interface LanguageOption {
  code: AppLanguage;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', direction: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', direction: 'rtl' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', direction: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', direction: 'rtl' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', direction: 'ltr' },
];

export interface TranslationDictionary {
  nav: {
    tutor: string;
    ielts: string;
    lessons: string;
    spelling: string;
    pronunciation: string;
    proPass: string;
    streak: string;
  };
  levels: {
    beginner: string;
    intermediate: string;
    advanced: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    startSpeaking: string;
    ieltsMock: string;
    spellingDoctor: string;
    minsSpoken: string;
    sentences: string;
    mastered: string;
  };
  ielts: {
    title: string;
    subtitle: string;
    officialSim: string;
    chooseSet: string;
    examiner: string;
    part1Title: string;
    part2Title: string;
    part3Title: string;
    prepTimer: string;
    speakTimer: string;
    scratchpad: string;
    modelBand9: string;
    showModel: string;
    hideModel: string;
    viewReport: string;
    overallBand: string;
    fc: string;
    lr: string;
    gra: string;
    pr: string;
    actionPlan: string;
    unlockPro: string;
  };
  spelling: {
    title: string;
    subtitle: string;
    tabChecker: string;
    tabBee: string;
    tabHomo: string;
    tabSilent: string;
    inputPlaceholder: string;
    checkButton: string;
    standard: string;
    casual: string;
    professional: string;
    mnemonicRule: string;
    listenWord: string;
    typeSpelling: string;
  };
  tutor: {
    coachName: string;
    readyToSpeak: string;
    startMic: string;
    stopMic: string;
    listen: string;
    speechPolish: string;
    howNativeSaysIt: string;
    quickReplies: string;
    typeOrSpeak: string;
    translatePhrase: string;
  };
}

export const TRANSLATIONS: Record<AppLanguage, TranslationDictionary> = {
  en: {
    nav: {
      tutor: 'AI Spoken Tutor',
      ielts: 'IELTS Speaking Prep',
      lessons: 'Daily Lessons',
      spelling: 'Spelling Doctor',
      pronunciation: 'Pronunciation',
      proPass: 'IELTS Pro',
      streak: 'Day Streak',
    },
    levels: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
    },
    hero: {
      badge: 'Beginner · Intermediate · Advanced · IELTS Speaking Mock Preparation',
      title: 'Speak English Easily & Master IELTS Band 9.0',
      subtitle: 'Overcome speaking anxiety with Coach Sarah, practice official IELTS Part 1, 2, and 3 Speaking Mock Tests with 4-criteria Band evaluation, and conquer tricky misspelled words with ease.',
      startSpeaking: 'Coach Sarah Dialogue',
      ieltsMock: 'IELTS Speaking Mock Test',
      spellingDoctor: 'Spelling Doctor',
      minsSpoken: 'mins spoken',
      sentences: 'sentences practiced',
      mastered: 'lessons mastered',
    },
    ielts: {
      title: 'IELTS Speaking Mock Tests & Band Score Evaluation',
      subtitle: 'Simulate the full 14-minute exam: Part 1 Interview, Part 2 Cue Card with 1-min prep timer, and Part 3 Discussion with official 9-Band Rubric Scoring.',
      officialSim: 'Official Cambridge & British Council Simulation',
      chooseSet: 'Choose Examination Set',
      examiner: 'Examiner',
      part1Title: 'Part 1: Introduction & Interview',
      part2Title: 'Part 2: Long Turn (Cue Card)',
      part3Title: 'Part 3: Two-Way Analytical Discussion',
      prepTimer: '1-Minute Preparation Timer',
      speakTimer: '2-Minute Monologue Timer',
      scratchpad: 'Preparation Scratchpad (Notes)',
      modelBand9: 'Band 9.0 Model Response',
      showModel: 'View Sample Band 9.0 Answer',
      hideModel: 'Hide Sample Band 9.0',
      viewReport: 'Official Band Score Report Card',
      overallBand: 'Overall Band Score',
      fc: 'Fluency & Coherence',
      lr: 'Lexical Resource',
      gra: 'Grammatical Range & Accuracy',
      pr: 'Pronunciation',
      actionPlan: 'Targeted Roadmap to Reach Next Band',
      unlockPro: 'Unlock Advanced IELTS Mock Tests',
    },
    spelling: {
      title: 'Fix Spelling & Speak Like a Native',
      subtitle: 'Never second-guess tricky words like "definitely", "separate", or confusing homophones. Instant corrections with authentic pronunciation rules.',
      tabChecker: 'Spelling Corrector',
      tabBee: 'Spelling Bee Quiz',
      tabHomo: 'Confusing Homophones',
      tabSilent: 'Silent Letters Guide',
      inputPlaceholder: 'Write or speak any English sentence to inspect...',
      checkButton: 'Check & Correct Now',
      standard: '1. Corrected Standard',
      casual: '2. Casual Native Spoken',
      professional: '3. Professional Workplace',
      mnemonicRule: 'Memory Rule',
      listenWord: 'Listen to Word & Example',
      typeSpelling: 'Type the exact spelling here',
    },
    tutor: {
      coachName: 'Coach Sarah',
      readyToSpeak: 'Ready to Speak',
      startMic: 'Speak into Microphone',
      stopMic: 'Stop Listening',
      listen: 'Listen',
      speechPolish: 'Gentle Speech Polish',
      howNativeSaysIt: 'How an Everyday Native Speaker Expresses This',
      quickReplies: 'Quick Replies',
      typeOrSpeak: 'Speak into mic or type your answer here...',
      translatePhrase: 'Translate to Native Language',
    },
  },
  ur: {
    nav: {
      tutor: 'اے آئی اسپوکن ٹیوٹر',
      ielts: 'آئی ایل ٹی ایس بولنے کی تیاری',
      lessons: 'روزانہ کے اسباق',
      spelling: 'املا اور ہجے کا ڈاکٹر',
      pronunciation: 'تلفظ کی مشق',
      proPass: 'آئی ایل ٹی ایس پرو',
      streak: 'دنوں کا سلسلہ',
    },
    levels: {
      beginner: 'ابتدائی (Beginner)',
      intermediate: 'درمیانی (Intermediate)',
      advanced: 'اعلیٰ (Advanced)',
    },
    hero: {
      badge: 'ابتدائی · درمیانی · اعلیٰ · آئی ایل ٹی ایس اسپیکنگ موک ٹیسٹ کی تیاری',
      title: 'انگلش آسانی سے بولیں اور IELTS بینڈ 9.0 حاصل کریں',
      subtitle: 'کوچ سارہ کے ساتھ انگلش بولنے کی جھجھک دور کریں، آئی ایل ٹی ایس پارٹ 1، 2 اور 3 کے باقاعدہ موک ٹیسٹ دیں، اور مشکل ہجوں کو آسانی سے درست کریں۔',
      startSpeaking: 'کوچ سارہ سے گفتگو',
      ieltsMock: 'IELTS اسپیکنگ موک ٹیسٹ',
      spellingDoctor: 'املا اور ہجے کا ڈاکٹر',
      minsSpoken: 'منٹ بولنے کی مشق',
      sentences: 'جملے بولے گئے',
      mastered: 'اسباق مکمل',
    },
    ielts: {
      title: 'IELTS اسپیکنگ موک ٹیسٹ اور بینڈ اسکور تجزیہ',
      subtitle: 'مکمل 14 منٹ کا امتحان: پارٹ 1 انٹرویو، پارٹ 2 کیو کارڈ (1 منٹ تیاری ٹائمر کے ساتھ)، اور پارٹ 3 تفصیلی بحث۔',
      officialSim: 'کیمبرج اور برٹش کونسل کا باقاعدہ فارمیٹ',
      chooseSet: 'امتحانی سیٹ منتخب کریں',
      examiner: 'ممتحن (Examiner)',
      part1Title: 'حصہ 1: تعارف اور انٹرویو',
      part2Title: 'حصہ 2: کیو کارڈ پر تقریر (2 منٹ)',
      part3Title: 'حصہ 3: گہری دو طرفہ بحث',
      prepTimer: '1 منٹ تیاری کا ٹائمر',
      speakTimer: '2 منٹ تقریر کا ٹائمر',
      scratchpad: 'تیاری کا نوٹ پیڈ (Scratchpad)',
      modelBand9: 'بینڈ 9.0 کا مثالی جواب',
      showModel: 'بینڈ 9.0 کا جواب دیکھیں',
      hideModel: 'جواب چھپائیں',
      viewReport: 'باقاعدہ بینڈ اسکور رپورٹ کارڈ',
      overallBand: 'مجموعی بینڈ اسکور (Overall Band)',
      fc: 'روانی اور ربط (Fluency & Coherence)',
      lr: 'الفاظ کا ذخیرہ (Lexical Resource)',
      gra: 'گرائمر اور درستی (Grammatical Range)',
      pr: 'تلفظ اور ادائیگی (Pronunciation)',
      actionPlan: 'اگلے بینڈ تک پہنچنے کا ایکشن پلان',
      unlockPro: 'ایڈوانسڈ IELTS موک ٹیسٹ انلاک کریں',
    },
    spelling: {
      title: 'ہجے (Spelling) درست کریں اور فصاحت سے بولیں',
      subtitle: 'مشکل الفاظ جیسے definitely، separate، اور ملتے جلتے الفاظ (homophones) کی غلطیوں کو جادوئی ٹرکس کے ساتھ درست کریں۔',
      tabChecker: 'ہجے درست کرنے والا ٹول',
      tabBee: 'اسپیلنگ بی کوئز',
      tabHomo: 'ملتے جلتے الفاظ (Homophones)',
      tabSilent: 'خاموش حروف (Silent Letters) کی گائیڈ',
      inputPlaceholder: 'جانچنے کے لیے کوئی بھی انگریزی جملہ لکھیں یا بولیں...',
      checkButton: 'ابھی چیک اور درست کریں',
      standard: '1. درست معیاری انگریزی',
      casual: '2. عام بول چال کی قدرتی انگریزی',
      professional: '3. دفتری اور پیشہ ورانہ انگریزی',
      mnemonicRule: 'یاد رکھنے کا فارمولا',
      listenWord: 'لفظ اور مثال سنیں',
      typeSpelling: 'یہاں درست ہجے ٹائپ کریں',
    },
    tutor: {
      coachName: 'کوچ سارہ',
      readyToSpeak: 'بولنے کے لیے تیار',
      startMic: 'مائیکروفون میں بولیں',
      stopMic: 'سننا بند کریں',
      listen: 'سنیں',
      speechPolish: 'جملے کی درستی کی تجویز',
      howNativeSaysIt: 'انگریز اسے قدرتی طور پر کیسے بولتے ہیں',
      quickReplies: 'تیز جوابات',
      typeOrSpeak: 'مائیک میں بولیں یا یہاں ٹائپ کریں...',
      translatePhrase: 'اردو ترجمہ دیکھیں',
    },
  },
  hi: {
    nav: {
      tutor: 'एआई स्पोकन ट्यूटर',
      ielts: 'आईईएलटीएस स्पीकिंग तैयारी',
      lessons: 'दैनिक पाठ',
      spelling: 'स्पेलिंग डॉक्टर',
      pronunciation: 'उच्चारण अभ्यास',
      proPass: 'आईईएलटीएस प्रो',
      streak: 'दिनों की स्ट्रीक',
    },
    levels: {
      beginner: 'शुरुआती (Beginner)',
      intermediate: 'मध्यम (Intermediate)',
      advanced: 'उन्नत (Advanced)',
    },
    hero: {
      badge: 'शुरुआती · मध्यम · उन्नत · आईईएलटीएस स्पीकिंग मॉक टेस्ट तैयारी',
      title: 'आसानी से अंग्रेजी बोलें और IELTS बैंड 9.0 हासिल करें',
      subtitle: 'कोच सारा के साथ अंग्रेजी बोलने की झिझक मिटाएं, आधिकारिक आईईएलटीएस पार्ट 1, 2 और 3 मॉक टेस्ट दें, और कठिन स्पेलिंग आसानी से सुधारें।',
      startSpeaking: 'कोच सारा से बात करें',
      ieltsMock: 'IELTS स्पीकिंग मॉक टेस्ट',
      spellingDoctor: 'स्पेलिंग डॉक्टर',
      minsSpoken: 'मिनट अभ्यास किया',
      sentences: 'वाक्य बोले गए',
      mastered: 'पाठ पूरे किए',
    },
    ielts: {
      title: 'IELTS स्पीकिंग मॉक टेस्ट और बैंड स्कोर मूल्यांकन',
      subtitle: 'पूरे 14 मिनट का अभ्यास: पार्ट 1 साक्षात्कार, पार्ट 2 क्यू कार्ड (1 मिनट तैयारी टाइमर), और पार्ट 3 विश्लेषणात्मक चर्चा।',
      officialSim: 'कैम्ब्रिज और ब्रिटिश काउंसिल का आधिकारिक प्रारूप',
      chooseSet: 'परीक्षा सेट चुनें',
      examiner: 'परीक्षक (Examiner)',
      part1Title: 'भाग 1: परिचय और साक्षात्कार',
      part2Title: 'भाग 2: क्यू कार्ड पर भाषण (2 मिनट)',
      part3Title: 'भाग 3: विश्लेषणात्मक चर्चा',
      prepTimer: '1 मिनट तैयारी का टाइमर',
      speakTimer: '2 मिनट बोलने का टाइमर',
      scratchpad: 'नोट्स स्क्रैचपैड',
      modelBand9: 'बैंड 9.0 का आदर्श उत्तर',
      showModel: 'बैंड 9.0 का उत्तर देखें',
      hideModel: 'उत्तर छिपाएं',
      viewReport: 'आधिकारिक बैंड स्कोर रिपोर्ट कार्ड',
      overallBand: 'कुल बैंड स्कोर (Overall Band)',
      fc: 'प्रवाह और सामंजस्य (Fluency & Coherence)',
      lr: 'शब्दावली भंडार (Lexical Resource)',
      gra: 'व्याकरण और सटीकता (Grammatical Range)',
      pr: 'उच्चारण (Pronunciation)',
      actionPlan: 'अगले बैंड तक पहुंचने की रणनीति',
      unlockPro: 'उन्नत IELTS मॉक टेस्ट अनलॉक करें',
    },
    spelling: {
      title: 'स्पेलिंग सुधारें और देशी वक्ता की तरह बोलें',
      subtitle: 'definitely, separate जैसे कठिन शब्दों और समान उच्चारण वाले शब्दों (homophones) की गलतियों को आसान नियमों से सुधारें।',
      tabChecker: 'स्पेलिंग सुधारक',
      tabBee: 'स्पेलिंग बी क्विज',
      tabHomo: 'समान उच्चारण वाले शब्द (Homophones)',
      tabSilent: 'मूक अक्षर (Silent Letters) गाइड',
      inputPlaceholder: 'जांचने के लिए कोई भी अंग्रेजी वाक्य लिखें या बोलें...',
      checkButton: 'जांचें और सुधारें',
      standard: '1. सही मानक अंग्रेजी',
      casual: '2. आम बोलचाल की अंग्रेजी',
      professional: '3. पेशेवर कार्यक्षेत्र अंग्रेजी',
      mnemonicRule: 'याद रखने का नियम',
      listenWord: 'शब्द और उदाहरण सुनें',
      typeSpelling: 'यहाँ सही स्पेलिंग टाइप करें',
    },
    tutor: {
      coachName: 'कोच सारा',
      readyToSpeak: 'बातचीत के लिए तैयार',
      startMic: 'माइक में बोलें',
      stopMic: 'सुनना बंद करें',
      listen: 'सुनें',
      speechPolish: 'सुधार सुझाव',
      howNativeSaysIt: 'अंग्रेज स्वाभाविक रूप से इसे कैसे कहते हैं',
      quickReplies: 'त्वरित उत्तर',
      typeOrSpeak: 'माइक में बोलें या यहाँ लिखें...',
      translatePhrase: 'हिंदी अनुवाद देखें',
    },
  },
  ar: {
    nav: {
      tutor: 'معلم المحادثة الذكي',
      ielts: 'التحضير لاختبار الآيلتس',
      lessons: 'الدروس اليومية',
      spelling: 'طبيب الإملاء والقواعد',
      pronunciation: 'مختبر النطق',
      proPass: 'آيلتس برو',
      streak: 'سلسلة الأيام',
    },
    levels: {
      beginner: 'مبتدئ (Beginner)',
      intermediate: 'متوسط (Intermediate)',
      advanced: 'متقدم (Advanced)',
    },
    hero: {
      badge: 'مبتدئ · متوسط · متقدم · تحضير اختبار المحادثة للآيلتس',
      title: 'تحدث الإنجليزية بسهولة وحقق الدرجة 9.0 في الآيلتس',
      subtitle: 'تغلب على حاجز الخوف من التحدث مع المعلمة سارة، وتدرب على الأجزاء 1 و 2 و 3 لاختبار الآيلتس الرسمي مع تقييم الدرجات، وصحح الأخطاء الإملائية الشائعة بسهولة.',
      startSpeaking: 'محادثة مع سارة',
      ieltsMock: 'اختبار الآيلتس التجريبي',
      spellingDoctor: 'طبيب الإملاء',
      minsSpoken: 'دقيقة تحدث',
      sentences: 'جملة تم التدرب عليها',
      mastered: 'دروس تم إتقانها',
    },
    ielts: {
      title: 'اختبارات الآيلتس التجريبية وتقييم الدرجات (Band Score)',
      subtitle: 'محاكاة كاملة للاختبار لمدة 14 دقيقة: الجزء 1 المقابلة الشخصية، الجزء 2 بطاقة التحدث (مع مؤقت دقيقة للتحضير ودقيقتين للتحدث)، والجزء 3 النقاش التحليلي.',
      officialSim: 'محاكاة رسمية وفق معايير كامبريدج والمجلس الثقافي البريطاني',
      chooseSet: 'اختر نموذج الاختبار',
      examiner: 'الممتحن (Examiner)',
      part1Title: 'الجزء 1: المقدمة والمقابلة',
      part2Title: 'الجزء 2: الحديث الفردي المطول (Cue Card)',
      part3Title: 'الجزء 3: النقاش التحليلي الموسع',
      prepTimer: 'مؤقت التحضير (دقيقة واحدة)',
      speakTimer: 'مؤقت التحدث (دقيقتان)',
      scratchpad: 'مسودة الملاحظات (Scratchpad)',
      modelBand9: 'إجابة نموذجية للدرجة 9.0',
      showModel: 'عرض الإجابة النموذجية 9.0',
      hideModel: 'إخفاء الإجابة',
      viewReport: 'شهادة تقرير الدرجات الرسمية',
      overallBand: 'الدرجة الكلية (Overall Band)',
      fc: 'الطلاقة والترابط (Fluency & Coherence)',
      lr: 'الثروة اللغوية والمفردات (Lexical Resource)',
      gra: 'التنوع والدقة النحوية (Grammatical Range)',
      pr: 'النطق ومخارج الحروف (Pronunciation)',
      actionPlan: 'خطة عمل للوصول إلى الدرجة التالية',
      unlockPro: 'فتح اختبارات الآيلتس المتقدمة',
    },
    spelling: {
      title: 'صحح الإملاء وتحدث كأهل اللغة الأصليين',
      subtitle: 'تخلص من الشك في الكلمات الخادعة مثل definitely و separate والكلمات المتجانسة لفظاً مع قواعد ذهبية للتذكر.',
      tabChecker: 'المدقق الإملائي والنحوي',
      tabBee: 'مسابقة التهجئة (Spelling Bee)',
      tabHomo: 'الكلمات المتجانسة لفظاً (Homophones)',
      tabSilent: 'دليل الحروف الصامتة (Silent Letters)',
      inputPlaceholder: 'اكتب أو انطق أي جملة بالإنجليزية لفحصها...',
      checkButton: 'فحص وتصحيح الآن',
      standard: '1. إنجليزية قياسية مصححة',
      casual: '2. إنجليزية عفوية دارجة',
      professional: '3. إنجليزية مهنية رسمية',
      mnemonicRule: 'قاعدة التذكر السريع',
      listenWord: 'استمع للكلمة والمثال',
      typeSpelling: 'اكتب التهجئة الصحيحة هنا',
    },
    tutor: {
      coachName: 'المعلمة سارة',
      readyToSpeak: 'جاهزة للمحادثة',
      startMic: 'تحدث عبر الميكروفون',
      stopMic: 'إيقاف الاستماع',
      listen: 'استمع',
      speechPolish: 'تصحيح مقترح للجملة',
      howNativeSaysIt: 'كيف يعبر أهل اللغة عن هذا المعنى',
      quickReplies: 'ردود سريعة مقترحة',
      typeOrSpeak: 'تحدث في الميكروفون أو اكتب هنا...',
      translatePhrase: 'عرض الترجمة العربية',
    },
  },
  es: {
    nav: {
      tutor: 'Tutor de Conversación IA',
      ielts: 'Preparación IELTS Speaking',
      lessons: 'Lecciones Diarias',
      spelling: 'Doctor de Ortografía',
      pronunciation: 'Laboratorio de Fonética',
      proPass: 'IELTS Pro',
      streak: 'Racha de Días',
    },
    levels: {
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado',
    },
    hero: {
      badge: 'Principiante · Intermedio · Avanzado · Preparación de Examen IELTS Speaking',
      title: 'Habla Inglés con Fluidez y Logra Band 9.0 en IELTS',
      subtitle: 'Supera el miedo a hablar en voz alta con la Coach Sarah, practica exámenes simulados oficiales de IELTS Partes 1, 2 y 3 con evaluación de Band score, y domina la ortografía en inglés.',
      startSpeaking: 'Conversar con Sarah',
      ieltsMock: 'Examen Simulado IELTS',
      spellingDoctor: 'Doctor de Ortografía',
      minsSpoken: 'minutos hablados',
      sentences: 'frases practicadas',
      mastered: 'lecciones completadas',
    },
    ielts: {
      title: 'Simulacros de IELTS Speaking y Evaluación de Band Score',
      subtitle: 'Simula el examen real de 14 minutos: Parte 1 Entrevista, Parte 2 Cue Card (con cronómetro de 1 minuto de preparación), y Parte 3 Discusión analítica.',
      officialSim: 'Formato Oficial Cambridge & British Council',
      chooseSet: 'Seleccionar Examen',
      examiner: 'Examinador',
      part1Title: 'Parte 1: Introducción y Entrevista',
      part2Title: 'Parte 2: Monólogo con Tarjeta (Cue Card)',
      part3Title: 'Parte 3: Discusión Analítica Profunda',
      prepTimer: 'Cronómetro de Preparación (1 Minuto)',
      speakTimer: 'Cronómetro de Discurso (2 Minutos)',
      scratchpad: 'Bloc de Notas para Preparación',
      modelBand9: 'Respuesta Modelo Band 9.0',
      showModel: 'Ver Respuesta Modelo Band 9.0',
      hideModel: 'Ocultar Respuesta Modelo',
      viewReport: 'Reporte Oficial de Band Score (TRF)',
      overallBand: 'Puntuación Total (Overall Band)',
      fc: 'Fluidez y Coherencia (FC)',
      lr: 'Recursos Léxicos (LR)',
      gra: 'Rango Gramatical y Precisión (GRA)',
      pr: 'Pronunciación (PR)',
      actionPlan: 'Plan de Acción para el Próximo Band',
      unlockPro: 'Desbloquear Exámenes Avanzados IELTS',
    },
    spelling: {
      title: 'Corrige la Ortografía y Habla como Nativo',
      subtitle: 'Elimina las dudas con palabras difíciles como "definitely", "separate" u homófonos confusos. Reglas nemotécnicas instantáneas.',
      tabChecker: 'Corrector Ortográfico y Gramatical',
      tabBee: 'Concurso de Deletreo (Spelling Bee)',
      tabHomo: 'Homófonos Confusos',
      tabSilent: 'Guía de Letras Mudas (Silent Letters)',
      inputPlaceholder: 'Escribe o pronuncia una oración en inglés para revisarla...',
      checkButton: 'Revisar y Corregir Ahora',
      standard: '1. Inglés Estándar Corregido',
      casual: '2. Inglés Coloquial Nativo',
      professional: '3. Inglés Profesional de Negocios',
      mnemonicRule: 'Regla Mnemotécnica',
      listenWord: 'Escuchar Palabra y Contexto',
      typeSpelling: 'Escribe la ortografía exacta aquí',
    },
    tutor: {
      coachName: 'Coach Sarah',
      readyToSpeak: 'Lista para Conversar',
      startMic: 'Hablar por el Micrófono',
      stopMic: 'Detener Micrófono',
      listen: 'Escuchar',
      speechPolish: 'Sugerencia de Corrección',
      howNativeSaysIt: 'Cómo lo Expresa un Hablante Nativo',
      quickReplies: 'Respuestas Rápidas',
      typeOrSpeak: 'Habla por el micrófono o escribe aquí...',
      translatePhrase: 'Ver Traducción al Español',
    },
  },
};

import { IELTSTest } from '../types';

export const IELTS_TESTS: IELTSTest[] = [
  {
    id: 'ielts-test-1',
    title: 'Technology, Modern Work & Remote Lifestyles',
    module: 'Academic',
    difficulty: 'Standard (Band 6.0-7.0)',
    isPremium: false,
    overview: 'Explore everyday questions about tech habits, a 2-minute monologue on an essential device, and in-depth Part 3 discussion on automation and social connectivity.',
    examinerName: 'Dr. Alistair Finch',
    part1Questions: [
      {
        id: 'p1-1',
        question: 'Do you work or are you a student?',
        sampleBand9Answer: 'Currently, I work full-time as a software consultant for a multinational tech firm, though I also dedicate several hours each week to independent research in machine learning.',
        examinerNotes: 'Answer promptly and extend with one relevant supporting clause without reciting a pre-memorized speech.',
      },
      {
        id: 'p1-2',
        question: 'How often do you use technology in your day-to-day life?',
        sampleBand9Answer: 'Practically around the clock. From the smart alarm that wakes me up in the morning to cloud-based project management platforms at work, technology is completely woven into the fabric of my daily routine.',
        examinerNotes: 'Show natural idioms like "around the clock" and "woven into the fabric of".',
      },
      {
        id: 'p1-3',
        question: 'Do you prefer working from home or in an office environment?',
        sampleBand9Answer: 'I have a strong inclination toward a hybrid setup. While working remotely offers unmatched flexibility and eliminates the daily commute, being physically present in the office stimulates spontaneous collaboration.',
        examinerNotes: 'Demonstrate nuanced contrast using "While X, Y offers...".',
      },
    ],
    part2CueCard: {
      topic: 'Describe a piece of technology that you find difficult to live without.',
      bulletPoints: [
        'What the piece of technology is',
        'When and where you first got it',
        'What specific tasks you rely on it for',
        'And explain why it would be difficult for you to live without it.'
      ],
      preparationTimeSeconds: 60,
      speakingTimeSeconds: 120,
      modelAnswer: 'If I had to single out one piece of technology that has become utterly indispensable to my daily existence, it would undoubtedly be my noise-cancelling wireless headphones. I acquired them approximately two years ago just before embarking on a rigorous professional certification course. At the time, I was frequently studying in bustling cafes and communal workspaces, so finding a sanctuary of concentration was paramount. I rely on these headphones for a myriad of purposes—from conducting client video conferences with pristine audio clarity to immersing myself in focus-enhancing binaural beats while drafting technical documentation. What makes living without them almost unimaginable is the psychological boundary they create. The moment I toggle on active noise cancellation, ambient distractions fade into the background, allowing me to enter a state of uninterrupted deep work.',
      highBandVocabulary: [
        { word: 'indispensable', band: '8.5', meaning: 'absolutely necessary; essential' },
        { word: 'sanctuary of concentration', band: '8.5', meaning: 'a quiet, undisturbed space for deep thinking' },
        { word: 'myriad of purposes', band: '8.0', meaning: 'a countless or extremely great number of uses' },
        { word: 'ambient distractions', band: '8.0', meaning: 'background noise or surrounding disturbances' }
      ]
    },
    part3Questions: [
      {
        id: 'p3-1',
        question: 'To what extent do you believe artificial intelligence will replace human jobs in the coming decades?',
        sampleBand9Answer: 'Rather than wholesale replacement, I anticipate a profound transformation in the nature of work. Repetitive cognitive and manual tasks will inevitably be automated, yet roles demanding empathy, strategic synthesis, and ethical judgment will remain firmly within the human domain.',
        examinerNotes: 'Avoid simple "yes/no" binaries. Frame answers in terms of degrees and balanced possibilities.',
      },
      {
        id: 'p3-2',
        question: 'Has technology made human relationships deeper or more superficial?',
        sampleBand9Answer: 'It is a double-edged sword. On one hand, video conferencing and instant messaging bridge geographic divides, allowing families across continents to remain tightly connected. Conversely, the asynchronous nature of social media often promotes curated personas rather than authentic vulnerability.',
        examinerNotes: 'Collocations like "double-edged sword", "bridge geographic divides", "curated personas".',
      },
      {
        id: 'p3-3',
        question: 'What measures should governments take to protect digital privacy?',
        sampleBand9Answer: 'Legislatures must implement stringent, enforceable data governance frameworks analogous to the GDPR, ensuring tech conglomerates obtain informed consent and face severe penalties for unauthorized data commercialization.',
        examinerNotes: 'Use high-register vocabulary like "stringent data governance", "analogous", "commercialization".',
      }
    ]
  },
  {
    id: 'ielts-test-2',
    title: 'Environment, Urban Planning & Sustainable Cities',
    module: 'Academic',
    difficulty: 'Advanced (Band 7.5-9.0)',
    isPremium: true,
    overview: 'High-scoring academic test on urban climate resilience, green architectural developments, biodiversity conservation, and international ecological summits.',
    examinerName: 'Prof. Margaret Hensley',
    part1Questions: [
      {
        id: 'p1-env-1',
        question: 'Are there many parks or green spaces in your hometown?',
        sampleBand9Answer: 'Fortunately, yes. My municipality has made a concerted effort over the past decade to intersperse urban residential quarters with lush public commons and tree-lined promenades.',
        examinerNotes: 'Band 9 vocabulary: "concerted effort", "intersperse", "residential quarters".',
      },
      {
        id: 'p1-env-2',
        question: 'How do weather patterns influence your day-to-day mood and productivity?',
        sampleBand9Answer: 'Sunlit mornings undeniably give me an invigorating burst of energy, whereas protracted stretches of overcast skies can induce a sense of lethargy if I am not mindful.',
        examinerNotes: 'Sophisticated adjectives: "invigorating", "protracted stretches", "lethargy".',
      },
    ],
    part2CueCard: {
      topic: 'Describe an environmental initiative or policy that has improved your local area.',
      bulletPoints: [
        'What the initiative is and who implemented it',
        'When it was introduced',
        'How it changed the local environment',
        'And explain your personal perspective on its long-term viability.'
      ],
      preparationTimeSeconds: 60,
      speakingTimeSeconds: 120,
      modelAnswer: 'I would like to highlight the pedestrianization and low-emission zone initiative recently implemented in the metropolitan core of my city. Rolled out approximately eighteen months ago by the city council, this policy restricted diesel vehicular traffic in the historical center while expanding segregated cycling lanes. Initially, local merchants expressed skepticism fearing reduced foot traffic. However, the subsequent transformation has been nothing short of extraordinary. Ambient air pollution plummeted by nearly thirty percent, and the streets have evolved into vibrant, community-centered hubs. In terms of long-term viability, I believe it serves as an exemplary blueprint for sustainable urban design.',
      highBandVocabulary: [
        { word: 'pedestrianization', band: '8.5', meaning: 'converting a street or area into a car-free pedestrian zone' },
        { word: 'exemplary blueprint', band: '9.0', meaning: 'an outstanding model or guide for future imitation' },
        { word: 'subsequent transformation', band: '8.0', meaning: 'the dramatic positive change that followed' }
      ]
    },
    part3Questions: [
      {
        id: 'p3-env-1',
        question: 'Should developing nations be held to the same emissions standards as historically industrialized nations?',
        sampleBand9Answer: 'This touches upon the principle of climate justice. While global carbon mitigation is imperative, historical responsibility cannot be disregarded. Industrialized nations that accrued their wealth through decades of fossil fuel exploitation have a moral obligation to provide financial and technological subsidies to emerging economies transitioning to clean infrastructure.',
        examinerNotes: 'Exceptional coherence with philosophical principles: "climate justice", "fossil fuel exploitation", "moral obligation".',
      },
      {
        id: 'p3-env-2',
        question: 'Can individual consumer choices truly combat global climate change, or is systemic government regulation the only answer?',
        sampleBand9Answer: 'They are fundamentally symbiotic. Individual choices—such as plant-rich diets or adopting micro-mobility—signal market demand, yet without rigorous carbon taxation, renewable subsidies, and regulatory mandates on corporate emissions, grassroot efforts alone lack the scale required.',
        examinerNotes: 'Use of "fundamentally symbiotic" and "regulatory mandates".',
      }
    ]
  },
  {
    id: 'ielts-test-3',
    title: 'Global Culture, Art, Heritage & Traditional Customs',
    module: 'Academic',
    difficulty: 'Advanced (Band 7.5-9.0)',
    isPremium: true,
    overview: 'Critically discuss intangible cultural heritage, globalization versus homogenization of languages, and the role of art galleries in modern education.',
    examinerName: 'Dr. Evelyn Ward',
    part1Questions: [
      {
        id: 'p1-cul-1',
        question: 'Do you enjoy visiting historical museums and art exhibitions?',
        sampleBand9Answer: 'Immensely so. Walking through curated galleries offers an illuminating window into the artistic sensibilities and social movements of bygone eras.',
        examinerNotes: 'Sophisticated phrasing: "curated galleries", "illuminating window", "bygone eras".',
      },
      {
        id: 'p1-cul-2',
        question: 'Are traditional holidays still important to young people in your country?',
        sampleBand9Answer: 'While modern consumerism has altered how festivals are celebrated, the core emotional resonance—gathering with family and sharing ancestral recipes—remains deeply cherished across generations.',
        examinerNotes: 'Balanced discourse: "emotional resonance", "ancestral recipes", "deeply cherished".',
      }
    ],
    part2CueCard: {
      topic: 'Describe a traditional festival or cultural celebration that you find meaningful.',
      bulletPoints: [
        'What the festival is called and where it takes place',
        'What people do during the celebration',
        'What special food or clothes are associated with it',
        'And explain why this tradition holds significance for you.'
      ],
      preparationTimeSeconds: 60,
      speakingTimeSeconds: 120,
      modelAnswer: 'A celebration that holds profound cultural resonance for me is the annual Lantern Festival, which marks the culmination of the Lunar New Year festivities. Streets and temple courtyards are adorned with thousands of intricately crafted paper lanterns glowing in crimson and gold. Families gather at dusk to solve witty riddles inscribed on lantern ribbons and partake in sweet glutinous rice dumplings known as tangyuan, which symbolize harmony and reunion. Beyond the visual spectacle, what renders this festival uniquely meaningful to me is its celebration of light conquering darkness and the deliberate preservation of centuries-old folklore in an era dominated by rapid modernization.',
      highBandVocabulary: [
        { word: 'profound cultural resonance', band: '9.0', meaning: 'deep emotional and historical connection to one\'s culture' },
        { word: 'culmination', band: '8.5', meaning: 'the highest or climactic point of something' },
        { word: 'intricately crafted', band: '8.0', meaning: 'made with complex, detailed artistry' },
        { word: 'visual spectacle', band: '8.0', meaning: 'an impressive, eye-catching visual display' }
      ]
    },
    part3Questions: [
      {
        id: 'p3-cul-1',
        question: 'Is globalization causing cultural homogenization across the globe?',
        sampleBand9Answer: 'There is unquestionably a degree of cultural convergence in consumer habits, fashion, and pop music driven by multinational corporations. Nonetheless, globalization has simultaneously prompted communities to revitalize localized heritage as a means of reaffirming their distinct identity in an interconnected world.',
        examinerNotes: 'High-level synthesis: "cultural convergence", "revitalize localized heritage", "reaffirming distinct identity".',
      }
    ]
  },
  {
    id: 'ielts-test-4',
    title: 'Business, Corporate Strategy & Future of Workplaces',
    module: 'Academic',
    difficulty: 'Advanced (Band 7.5-9.0)',
    isPremium: true,
    overview: 'High-stakes speaking test examining leadership ethics, algorithmic hiring, employee wellbeing, and economic resilience.',
    examinerName: 'Gordon Vance, MA',
    part1Questions: [
      {
        id: 'p1-biz-1',
        question: 'Do you prefer shopping in physical stores or on digital platforms?',
        sampleBand9Answer: 'For standardized commodities, e-commerce offers peerless convenience. However, for apparel or high-end electronics where tactile assessment is crucial, I still value the brick-and-mortar retail experience.',
        examinerNotes: 'Precise lexical collocations: "peerless convenience", "tactile assessment", "brick-and-mortar".',
      }
    ],
    part2CueCard: {
      topic: 'Describe a visionary business leader or entrepreneur whom you admire.',
      bulletPoints: [
        'Who this person is and what company they lead',
        'What makes their leadership style distinctive',
        'What challenges they overcame',
        'And explain why their achievements inspire your own professional goals.'
      ],
      preparationTimeSeconds: 60,
      speakingTimeSeconds: 120,
      modelAnswer: 'The business figure whose trajectory I find most captivating is Yvon Chouinard, the visionary founder of the outdoor apparel company Patagonia. Unlike conventional corporate executives driven by quarterly shareholder dividends, Chouinard pioneered a paradigm of stakeholder capitalism where environmental stewardship is intertwined with commercial enterprise. Under his leadership, the brand actively encouraged consumers to repair existing garments rather than excessively purchase new ones—a radical counter-intuitive move that actually forged fierce brand loyalty. His recent decision to transfer company ownership into an environmental trust cements his legacy as an authentic changemaker whose principles never yielded to commercial pressure.',
      highBandVocabulary: [
        { word: 'captivating trajectory', band: '9.0', meaning: 'fascinating career path and progression' },
        { word: 'stakeholder capitalism', band: '8.5', meaning: 'a system where companies serve all stakeholders, not just shareholders' },
        { word: 'fierce brand loyalty', band: '8.0', meaning: 'unwavering devotion and dedication from customers' }
      ]
    },
    part3Questions: [
      {
        id: 'p3-biz-1',
        question: 'What ethical dilemmas arise when algorithms and AI are used to screen job applicants?',
        sampleBand9Answer: 'The most insidious peril is algorithmic bias. Because machine learning models are trained on historical recruitment datasets, they inevitably risk perpetuating historical demographic inequities under the guise of mathematical objectivity.',
        examinerNotes: 'Band 9 analytical language: "insidious peril", "perpetuating demographic inequities", "guise of objectivity".',
      }
    ]
  }
];

export const IELTS_BAND_DESCRIPTORS = [
  {
    band: 'Band 9.0 (Expert Speaker)',
    summary: 'Speaks fluently with only rare repetition or self-correction; uses vocabulary with full flexibility, precision, and natural idiomatic structures; grammar is fully accurate and complex; effortless native-level pronunciation.'
  },
  {
    band: 'Band 8.0-8.5 (Very Good Speaker)',
    summary: 'Speaks fluently with occasional hesitation; wide vocabulary with flexible collocations and rare inaccuracies; wide range of complex grammatical structures; high pronunciation clarity throughout.'
  },
  {
    band: 'Band 7.0-7.5 (Good Speaker)',
    summary: 'Speaks at length without noticeable effort; uses some less common and idiomatic vocabulary; frequently produces error-free complex sentences; easily understood with subtle L1 accent.'
  },
  {
    band: 'Band 6.0-6.5 (Competent Speaker)',
    summary: 'Willing to speak at length though may lose coherence at times due to occasional hesitation; vocabulary generally sufficient; uses mixed simple and complex forms with occasional grammatical slips.'
  },
  {
    band: 'Band 5.0-5.5 (Modest Speaker)',
    summary: 'Usually maintains flow of speech but uses repetition and self-correction to keep going; vocabulary is basic; complex structures rarely attempted and cause errors.'
  }
];

export const person = {
  name: "Offiong Bassey Edet",
  shortName: "Offiong Bassey",
  role: "Machine Learning Researcher",
  tagline:
    "Speech & language technology for low-resource African languages",
  location: "Lagos, Nigeria",
  email: "offiongbassey99@gmail.com",
  affiliation: "Plotweaver · EfikAI · Machine Learning Collective",
  bio: [
    "Hi, I'm Offiong, a machine learning engineer and researcher specialising in natural language processing, with work spanning audio processing, speech synthesis, machine translation, and real-time conversational AI. My research centres on low-resource and multilingual language settings, particularly Efik, an extremely low-resource tonal language spoken in southeastern Nigeria.",
    "I currently work as a Machine Learning Research Engineer at Plotweaver, where I build multilingual speech systems for African languages, and I founded EfikAI, a research initiative building the first publicly documented machine translation, speech recognition, and text-to-speech systems for Efik. I'm also a volunteer researcher with Howard University's NLP Group, a Machine Learning Researcher with Machine Learning Collective, and a research community member of Masakhane.",
  ],
  interests: [
    "Natural Language Processing",
    "Speech Recognition & Synthesis",
    "Machine Translation",
    "Low-Resource Languages",
    "African Language Technology",
    "Conversational AI",
    "Scaling Laws",
    "Emotional Speech, Paralinguistics",
  ],
  social: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=lQYjASYAAAAJ&hl=en" },
    { label: "GitHub", href: "https://github.com/offiongbassey" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/offiong-bassey-dev" },
    { label: "Twitter / X", href: "https://twitter.com/OffiongBassi" },
    { label: "Medium", href: "https://medium.com/@offiongbassey99" },
    { label: "YouTube", href: "https://www.youtube.com/@OffiongBassey-zj5rv" },
  ],
};

export type NewsItem = {
  date: string;
  sortDate: string;
  body: string;
};

export const news: NewsItem[] = [
  {
    date: "June 2026",
    sortDate: "2026-06",
    body: "Paper accepted to **Interspeech 2026**, Sydney, Australia.",
  },
  {
    date: "March 2026",
    sortDate: "2026-03",
    body: "Paper, *Adapting Foundational ASR Models to Efik*, accepted to **Speakable @ LREC 2026**, Spain.",
  },
  {
    date: "February 2026",
    sortDate: "2026-02",
    body: "Awarded full sponsorship to attend the **AfricaNLP Workshop @ EACL 2026**, Rabat, Morocco.",
  },
  {
    date: "February 2026",
    sortDate: "2026-02-b",
    body: "Joined **Plotweaver** as a Machine Learning Research Engineer.",
  },
  {
    date: "January 2026",
    sortDate: "2026-01-b",
    body: "Gave a talk at **Kabod Group** on funding opportunities for African language industry projects.",
  },
  {
    date: "January 2026",
    sortDate: "2026-01-a",
    body: "First paper accepted to **AfricaNLP @ EACL 2026**, Morocco.",
  },
];

export type Publication = {
  venue: string;
  title: string;
  abstract: string;
  href: string;
  linkLabel: string;
  year: string;
};

export const publications: Publication[] = [
  {
    venue: "Interspeech 2026",
    title: "Towards Digital Preservation of Efik: TTS for a Low-Resource African Language",
    abstract:
      "We curated a high-quality Efik speech dataset, trained and evaluated the performance of four neural text-to-speech models for Efik under low-resource settings, with the goal of advancing speech technology and contributing to the digital preservation of the Efik language.",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=lQYjASYAAAAJ&citation_for_view=lQYjASYAAAAJ:eQOLeE2rZwMC",
    linkLabel: "Scholar",
    year: "2026",
  },
  {
    venue: "Speakable @ LREC 2026",
    title:
      "Adapting Foundational ASR Models to Efik: An Empirical Study of an Extremely Low-Resource Tonal Language",
    abstract:
      "This paper investigates the adaptation of state-of-the-art foundational ASR models, including XLS-R and Whisper, through fine-tuning for Efik, a low-resource tonal language, and empirically evaluates their performance.",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=lQYjASYAAAAJ&citation_for_view=lQYjASYAAAAJ:WF5omc3nYNoC",
    linkLabel: "Scholar",
    year: "2026",
  },
  {
    venue: "AfricaNLP @ EACL 2026",
    title:
      "Developing an English-Efik Corpus and Machine Translation System for Digitization Inclusion",
    abstract:
      "This study evaluates the effectiveness of state-of-the-art multilingual neural machine translation models for English–Efik translation, leveraging a small-scale, community-curated parallel corpus of 13,865 sentence pairs.",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=lQYjASYAAAAJ&citation_for_view=lQYjASYAAAAJ:W7OEmFMy1HYC",
    linkLabel: "arXiv",
    year: "2026",
  },
];

export type Affiliation = {
  org: string;
  role: string;
  dates: string;
  link: string;
  bullets: string[];
};

export const affiliations: Affiliation[] = [
  {
    org: "Howard University NLP Group",
    role: "Volunteer Research Assistant",
    dates: "2026 — Present",
    link: "https://nlp.howard.edu/",
    bullets: [
      "Conduct research on LLM-based question answering, multilingual NLP, speech processing, and speech synthesis, with a focus on low-resource and domain-specific settings.",
      "Clean and preprocess extremely low-resource language data for multilingual NLP tasks, including question answering, machine translation, audio processing, and speech synthesis.",
    ],
  },
  {
    org: "Machine Learning Collective",
    role: "Machine Learning Researcher",
    dates: "2025 — Present",
    link: "https://mlcollective.org/",
    bullets: [
      "Conduct research on multilingual NLP and speech AI, with a focus on low-resource language modeling.",
      "Lead research on Efik language technologies, including machine translation, ASR, and TTS.",
    ],
  },
  {
    org: "Masakhane Research Foundation",
    role: "Research Community Member",
    dates: "2025 — Present",
    link: "https://www.masakhane.io/",
    bullets: [
      "Member of the pan-African NLP research community advancing language technology for African languages.",
      "Participate in community research discussions, workshops, and knowledge-sharing on multilingual NLP.",
    ],
  },
  {
    org: "EfikAI",
    role: "Founder & Machine Learning Researcher",
    dates: "July 2025 — Present",
    link: "https://www.efikai.ng",
    bullets: [
      "Founded EfikAI, building the first publicly documented MT, ASR, and TTS research systems for Efik.",
      "Curated 13,865 parallel English–Efik sentence pairs with linguists and native speakers.",
      "Developed natural-sounding ASR and TTS systems using Whisper, XLS-R, VITS, and diffusion-based models.",
    ],
  },
];

export type Position = {
  org: string;
  role: string;
  dates: string;
  link: string;
  summary: string;
};

export const positions: Position[] = [
  {
    org: "Plotweaver",
    role: "Machine Learning Engineer — NLP",
    dates: "Jan 2026 — Present",
    link: "https://www.plotweaver.app/",
    summary:
      "Multilingual text-to-speech and real-time ASR → MT → TTS pipelines for Yoruba, Swahili, Hausa, and other African languages; reduced end-to-end latency by 87%.",
  },
  {
    org: "RapidMind AI",
    role: "AI Engineer",
    dates: "Jun 2025 — Oct 2025",
    link: "/",
    summary:
      "Conversational AI systems and Rasa NLU chatbots for fintech customer support automation.",
  },
  {
    org: "Klas",
    role: "Full Stack Engineer",
    dates: "May 2024 — Present",
    link: "https://www.tryklas.com/",
    summary:
      "Real-time transcription pipelines and LLM-based summarisation for an AI note-taker used in live classes and meetings.",
  },
  {
    org: "Sycamore NG",
    role: "Backend Developer Intern",
    dates: "Jun 2023 — Oct 2023",
    link: "https://www.sycamore.ng/",
    summary: "RESTful APIs in Node.js and database performance tuning.",
  },
];

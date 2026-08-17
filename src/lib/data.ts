export const profile = {
  name: "Manohar Kharvi",
  role: "Full Stack Software Engineer",
  years: "5.7 years",
  location: "Bengaluru, India",
  email: "manoharkharvi43@gmail.com",
  phone: "+91 90719 82083",
  github: "https://github.com/manoharkharvi43",
  linkedin: "https://linkedin.com/in/manohar-kharvi-230607180",
  blurb:
    "I build scalable, distributed systems across fintech, enterprise, and cloud-native platforms — from high-throughput payment rails to reusable SDKs and AI-powered automation pipelines.",
};

export const stats = [
  { value: "5.7", label: "Years of\nexperience" },
  { value: "4", label: "Companies\nshipped for" },
  { value: "2", label: "SDKs published\nnpm · pub.dev" },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "React Native", "Flutter", "Redux", "Zustand"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Fastify", "Express.js", "REST", "GraphQL", "Microservices"],
  },
  {
    group: "Data & Infra",
    items: ["MongoDB", "Redis", "Kafka", "AWS", "Docker", "Jenkins", "CI/CD"],
  },
  {
    group: "AI",
    items: ["LLM Integration", "Prompt Engineering", "OpenAI API", "RAG", "FFmpeg Pipelines"],
  },
];

export const experience = [
  {
    company: "Neokred Technologies",
    title: "Full Stack SDE 3",
    period: "Aug 2025 — Present",
    points: [
      "Architected Blutic, a consent & cookie management platform (Next.js, Fastify, MongoDB).",
      "Published reusable SDKs (blutic-webview) to npm and pub.dev for React Native and Flutter.",
      "Lead a team of 3 — system design, architecture calls, and end-to-end delivery.",
    ],
  },
  {
    company: "Saksoft",
    title: "Senior Software Engineer",
    period: "Feb 2025 — Jul 2025",
    points: [
      "Shipped enterprise logistics features with React.js, TypeScript, and Redux.",
      "Built reusable UI components and frontend architecture patterns adopted team-wide.",
    ],
  },
  {
    company: "Lemonpay",
    title: "Tech Lead",
    period: "Jul 2024 — Jan 2025",
    points: [
      "Led Cube, a fintech payment platform processing high-volume pay-ins and payouts.",
      "Architected event-driven microservices on Node.js, Kafka, Redis, and MongoDB.",
    ],
  },
  {
    company: "Neokred Technologies",
    title: "Full Stack SDE 2",
    period: "Jan 2021 — Jun 2024",
    points: [
      "Built CoreSystem, a CRM powering onboarding and customer lifecycle management.",
      "Engineered Collectbot, a fault-tolerant payment orchestration platform with retries and real-time monitoring.",
    ],
  },
];

export const projects = [
  {
    name: "Findex",
    tagline: "Financial data discovery and indexing platform.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    href: null,
    note: null,
  },
  {
    name: "Tripa Thrills",
    tagline: "My own tour and travel package company — website, bookings, and brand.",
    stack: ["Next.js", "Tailwind"],
    href: "https://tripathrills.com",
    note: "@tripa_thrills",
  },
  {
    name: "PrintMesh",
    tagline:
      "Peer-to-peer marketplace connecting people who need a part with nearby 3D printer owners.",
    stack: ["Next.js 16", "Supabase", "Three.js", "TanStack"],
    href: "https://printlink-blr.vercel.app/",
    note: "In progress",
  },
  {
    name: "AI Video Editing Pipeline",
    tagline:
      "Automated editing — scene detection, captions, clip generation, and rendering driven by LLMs.",
    stack: ["Python", "FFmpeg", "LLMs"],
    href: null,
    note: null,
  },
];

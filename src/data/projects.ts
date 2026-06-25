export type ProjectCategory =
  | "game-dev"
  | "software-ai"
  | "web"
  | "creative-data";

export const categoryLabels: Record<ProjectCategory, string> = {
  "game-dev": "Game Development",
  "software-ai": "Software & AI",
  web: "Web Development",
  "creative-data": "Creative & Data",
};

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  featured: boolean;
  category: ProjectCategory;
  color: string;
  initial: string;
  appIcon?: string;
  url?: string;
  githubUrl?: string;
  launched: string;
  timeline: string;
  stars: number;
  forks: number;
  promoted?: boolean;
  rank?: number;
  screenshots: string[];
  team: { name: string; role: string; initial: string }[];
  teamMembers?: string[];
  projectType?: "team" | "individual";
  openSource?: "open" | "closed";
  facts: string[];
  process: { title: string; description: string }[];
}

const maker = [{ name: "Delvin Salman", role: "Maker", initial: "D" }];

export function getProjectOpenSourceLabel(
  project: Project,
): "Open" | "Closed" | null {
  if (project.openSource) {
    return project.openSource === "open" ? "Open" : "Closed";
  }
  if (project.category === "game-dev") {
    return project.id === "space-toast" ? "Open" : "Closed";
  }
  return null;
}

export const projects: Project[] = [
  {
    id: "cattlemans-crossing",
    name: "Cattleman's Crossing",
    description:
      "A 3D open-world narrative game inspired by Canadian landscapes.",
    longDescription:
      "Led level design and development for Cattleman’s Crossing, a 3D open-world narrative game inspired by Canadian landscapes. Built the main map with varied biomes, terrain features, and environmental storytelling, implemented interactive systems and gameplay triggers.\n\n Supported core gameplay mechanics such as quests and world navigation, while optimizing layout for pacing, exploration, and player engagement. Canadian-inspired regions—from wide open plains to dense forests—give each area its own identity and reward players who venture off the main path. Showcased at the 2025 Level Up Showcase as a top student project.",
    tech: ["Unreal", "C++", "Blueprint Scripting", "Blender"],
    featured: true,
    category: "game-dev",
    color: "#0071e3",
    initial: "C",
    url: "riordan-palmer.itch.io/cattlemans-crossing",
    launched: "2025",
    timeline: "8 months",
    stars: 143,
    forks: 12,
    projectType: "team",
    facts: [
      "Stylized open-world traversal mechanics",
      "Exploration-driven environmental storytelling",
      "Atmospheric third-person world design",
      "Showcased at the 2025 Level Up Showcase.",
    ],
    process: [
      {
        title: "Concept & World Planning",
        description:
          "Set the tone, biomes, and core exploration loop.",
      },
      {
        title: "Level Design & Environment",
        description:
          "Built terrain and landmarks to guide discovery.",
      },
      {
        title: "Systems & Gameplay",
        description:
          "Built quests and traversal in Unreal with C++.",
      },
    ],
    screenshots: [
      "https://img.itch.zone/aW1hZ2UvMzMyNDUwNi8yMDQwODIxMy5wbmc=/original/vODp15.png",
      "https://img.itch.zone/aW1hZ2UvMzMyNDUwNi8yMDQwODIxMi5wbmc=/original/4b1UIK.png",
      "https://img.itch.zone/aW1hZ2UvMzMyNDUwNi8yMDQwODIxNS5wbmc=/original/dWQFC3.png",
      "https://img.itch.zone/aW1hZ2UvMzMyNDUwNi8yMDQwODIxNC5wbmc=/original/AyrTtn.png",
    ],
    team: maker,
    teamMembers: ["Shana Isaac", "Raju Sivanantham", "Tarek El Jarab", "Riordan Palmer"],
  },
  {
    id: "ash",
    name: "Ash",
    description:
      "A 3D, triple open-world stylized adventure/narrative game developed in Unreal.",
    longDescription:
      "Developed a stylized 3D open-world exploration game featuring gliding, dynamic traversal, environmental puzzles, interactive systems, and player ability progression.\n\nDesigned the world layout, traversal mechanics, and gameplay flow to encourage exploration and discovery. Players move through three distinct worlds, uncovering murals and environmental story moments tied to ancient civilizations and restoring light.\n\nThe experience focuses on calm, atmospheric traversal with fluid movement abilities like gliding, launching, diving, and dashing. Showcased at the 2024 Level Up Showcase as a top student project.",
    tech: ["Unreal", "Blueprint Scripting", "C++", "Blender"],
    featured: true,
    category: "game-dev",
    color: "#34c759",
    initial: "A",
    url: "rajusivanantham.itch.io/ash",
    launched: "2024",
    timeline: "6 months",
    stars: 123,
    forks: 6,
    projectType: "team",
    facts: [
      "Featured at Level Up Showcase 2024",
      "Open-world exploration with gliding",
      "Team-developed 3D adventure game",
    ],
    process: [
      {
        title: "Vision & Mechanics",
        description:
          "Set the art direction and gliding traversal loop.",
      },
      {
        title: "World Layout",
        description:
          "Designed map flow and ability progression.",
      },
      {
        title: "Gameplay Implementation",
        description:
          "Built puzzles and abilities with Unreal and Blueprint.",
      },
    ],
    screenshots: [
      "https://img.itch.zone/aW1hZ2UvMjU4MTY0Ni8xNTkyOTc1Ny5wbmc=/original/3txxPY.png",
      "https://img.itch.zone/aW1hZ2UvMjU4MTY0Ni8xNTkyOTc2Mi5wbmc=/original/37qVmj.png",
      "https://img.itch.zone/aW1hZ2UvMjU4MTY0Ni8xNTkyOTc2NC5wbmc=/original/qD1ReC.png",
      "https://img.itch.zone/aW1hZ2UvMjU4MTY0Ni8xNTkyOTc2My5wbmc=/original/DDFFAu.png",
    ],
    team: maker,
    teamMembers: ["Nicholas Meng", "Riordan Palmer", "Raju Sivanantham", "Shana Isaac"],
  },
  {
    id: "space-toast",
    name: "Space Toast",
    description:
      "A 2D top down, endless bullet hell shooter game developed in Unity.",
    longDescription:
      "Space Toast is a fast-paced 2D top-down bullet hell shooter where you play as a lone slice of toast lost in space. Blast through relentless enemy waves, dodge incoming fire, and chase the highest score on the local leaderboard.\n\nFeatures three unique weapon types with upgrade tiers, health and shield pickups, and a risk-reward system where taking damage can drop your weapon upgrades. Built in Unity with C#, featuring procedural enemy spawning, smooth animations, and responsive WASD controls.\n\nDesigned with readable visuals, escalating difficulty, and tight arcade feedback to keep every run intense and replayable.",
    tech: ["Unity", "C#", "2D Game Development", "Animation"],
    featured: true,
    category: "game-dev",
    color: "#ff9500",
    initial: "S",
    url: "delvinsalman.github.io/SpaceToast/",
    githubUrl: "github.com/delvinsalman/SpaceToast",
    launched: "2024",
    timeline: "4 months",
    stars: 203,
    forks: 14,
    projectType: "team",
    openSource: "open",
    facts: [
      "2D top-down bullet hell arcade shooter",
      "Three weapon types with upgrade tiers",
      "Built with Unity and C#",
    ],
    process: [
      {
        title: "Arcade Design",
        description:
          "Sketched the shooter loop and wave difficulty.",
      },
      {
        title: "Combat Systems",
        description:
          "Built movement, weapons, and enemy behaviors.",
      },
      {
        title: "Visual Readability",
        description:
          "Tuned visuals so threats stay readable in combat.",
      },
    ],
    screenshots: [
      "image/Space1.png",
      "image/Space2.png",
      "image/Space3.png",
      "image/Space4.png",
    ],
    team: maker,
  },
  {
    id: "grave-digger",
    name: "Grave Digger",
    description:
      "A top-down death stealth puzzle game with reactive enemy AI.",
    longDescription:
      "Grave Digger combines endless runner momentum with boss-fight set pieces in a stylized skull-themed world. Players dodge hazards, survive escalating runs, and face off against larger encounters designed to test reflexes and pattern recognition.\n\nBuilt around strong visual identity, readable telegraphs, and arcade-style replayability. Implements progressively increasing difficulty, dynamic obstacle patterns, and boss encounters that challenge player reflexes, timing, and adaptability throughout each run. Developed using game design principles focused on responsive controls, engaging risk- reward gameplay, and high replay value to encourage repeated play sessions and score improvement.",
    tech: ["Unreal", "Blueprint Scripting", "Maya", "Git"],
    featured: true,
    category: "game-dev",
    color: "#af52de",
    initial: "G",
    url: "gravedigger.game",
    launched: "2024",
    timeline: "4 months",
    stars: 222,
    forks: 93,
    projectType: "team",
    teamMembers: ["Jaylen Lie", "Riordan Palmer", "Shana Isaac", "Raju Sivanantham", "Tarek Jrab"],
    facts: [
      "Endless runner with boss-fight encounters",
      "Skull-themed arcade visual identity",
      "Team project · Launched 2024",
    ],
    process: [
      {
        title: "Core Loop Design",
        description:
          "Defined the runner structure and boss pacing.",
      },
      {
        title: "Enemy AI & Hazards",
        description:
          "Built reactive enemies and stealth-puzzle moments.",
      },
      {
        title: "Art & Identity",
        description:
          "Created the skull-themed art in Aseprite.",
      },
    ],
    screenshots: [
      "https://img.itch.zone/aW1nLzE4NzcwNDQ1LnBuZw==/original/eg7ZAD.png",
      "https://img.itch.zone/aW1nLzE4NzcwNDIxLnBuZw==/original/4U1cJk.png",
      "https://img.itch.zone/aW1nLzE4NzcwNDI4LnBuZw==/original/q29p%2B3.png",
      "https://img.itch.zone/aW1nLzE4NzcwNDM1LnBuZw==/original/qmkdkX.png",
      "https://img.itch.zone/aW1nLzE4NzcwNDUwLnBuZw==/original/yZ5%2B8z.png",
    ],
    team: maker,
  },
  {
    id: "ai-chat-interface",
    name: "AI Chat Interface",
    description:
      "Full-stack AI chatbot with persistent memory and multimodal support.",
    longDescription:
      "Developed a full-stack AI chatbot featuring a modern, responsive UI, persistent chat history, multi-file analysis, and AI image generation. Supports customizable model settings to tailor responses and behavior.\n\nEngineered for high accuracy, contextual awareness, and realistic, human-like interactions, with a scalable architecture designed for future feature expansion. The system operates as a beta of what ChatGPT system would look like.\n\nImplemented secure user authentication and efficient data management to support personalized experiences and seamless conversation continuity.",
    tech: ["Python", "Flask", "JavaScript", "Hugging Face"],
    featured: true,
    category: "software-ai",
    color: "#5856d6",
    initial: "A",
    url: "github.com/delvinsalman/Chatbot",
    githubUrl: "github.com/delvinsalman/Chatbot",
    launched: "2024",
    timeline: "5 months",
    stars: 233,
    forks: 3,
    projectType: "individual",
    openSource: "open",
    facts: [
      "Interactive multi-modal processing",
      "Persistent context-aware sessions",
      "Scalable modular AI architecture",
      "Makes use of OpenAI and Hugging Face APIs",
    ],
    process: [
      {
        title: "Architecture Planning",
        description:
          "Mapped a modular Flask backend and frontend.",
      },
      {
        title: "Core Chat Experience",
        description:
          "Built persistent sessions and model settings.",
      },
      {
        title: "Multimodal Features",
        description:
          "Added file analysis and AI image generation.",
      },
    ],
    screenshots: [
      "image/Chatbot1.png",
      "image/Chatbot2.png",
      "image/Chatbot3.png",
    ],
    team: maker,
  },
  {
    id: "ai-image-editor",
    name: "AI Image Editor",
    description:
      "An AI-powered app for generating, editing, and enhancing images using AI.",
    longDescription:
      "An AI-powered image editing application that integrates with external AI APIs to enable both programmatic and prompt-based editing workflows. The app allows users to upload or generate images and apply a range of editing operations such as brightness/contrast adjustments, background removal, layered edits, and AI-assisted modifications.\n\nDesigned with modern web technologies like Next.js and React, it offers undo/redo history, multi-layer support, and export functionality, and requires users to provide their own OpenAI API key for AI services.",
    tech: ["Next.js", "React", "OpenAI API", "Tailwind CSS"],
    featured: true,
    category: "software-ai",
    color: "#00c7be",
    initial: "A",
    url: "github.com/delvinsalman/ImageEditingApp",
    githubUrl: "github.com/delvinsalman/ImageEditingApp",
    launched: "2026",
    timeline: "4 months",
    stars: 187,
    forks: 24,
    projectType: "individual",
    openSource: "open",
    facts: [
      "Hybrid AI-assisted image manipulation",
      "Multi-layered programmatic editing workflow",
      "User-authenticated external API integration",
    ],
    process: [
      {
        title: "Workflow Design",
        description:
          "Planned manual and AI edit paths with layers.",
      },
      {
        title: "Editor UI",
        description:
          "Built the Next.js editor UI and layer controls.",
      },
      {
        title: "AI Integration",
        description:
          "Connected OpenAI APIs with user-supplied keys.",
      },
    ],
    screenshots: [
      "image/ImageGen1.png",
      "image/ImageGen2.png",
      "image/ImageGen3.png",
      "image/ImageGen4.png",
    ],
    team: maker,
  },
  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    description:
      "Customizable QR code generator supporting multiple data types.",
    longDescription:
      "An advanced QR code generator with customizable logos, color themes, and unique visual styles. Supports multiple data types including URLs, contact information, plain text, and Wi-Fi credentials. Designed for speed and ease of use, it features real-time QR generation, high-resolution exports, instant previews, and a clean, intuitive interface for seamless user interaction.\n\nFeatures extensive customization options, including embedded logos, dynamic color palettes, and unique visual styles, enabling users to create branded QR codes without compromising scannability. Built with a responsive, user-focused design that delivers real-time generation, instant previews, and high-resolution exports for both digital and print applications.",
    tech: ["JavaScript", "HTML/CSS", "QRCode.js"],
    featured: true,
    category: "software-ai",
    color: "#ff375f",
    initial: "Q",
    url: "delvinsalman.github.io/QRGenerator/",
    githubUrl: "github.com/delvinsalman/QRGenerator",
    launched: "2024",
    timeline: "2 months",
    stars: 312,
    forks: 41,
    projectType: "individual",
    openSource: "open",
    facts: [
      "Customizable stylistic branding elements",
      "Multi-format data encoding support",
      "Real-time dynamic code generation",
    ],
    process: [
      {
        title: "Feature Scoping",
        description:
          "Outlined data types, styling, and live preview.",
      },
      {
        title: "Generation Engine",
        description:
          "Wired QRCode.js encoding for every data type.",
      },
      {
        title: "Customization Layer",
        description:
          "Added logos and color themes, kept it instant.",
      },
    ],
    screenshots: [
      "image/QRNet.png",
      "image/QR1.png",
      "image/QR2.png",
      "image/QR3.png",
    ],
    team: maker,
  },
  {
    id: "captures-io",
    name: "Captures.io",
    description:
      "A fast, user-friendly image and video search engine tool.",
    longDescription:
      "Developed a user-friendly image and video search engine using JavaScript and the Pexels API, providing real-time access to high-quality visuals. Features fast search performance, smooth downloads, responsive design, and an intuitive UI for seamless browsing.\n\nIncludes efficient API handling and optimized user interactions for an improved search experience.\n\n Leveraged asynchronous JavaScript and optimized API requests to reduce load times and improve overall application responsiveness. Incorporated responsive design principles and efficient state management to deliver a seamless cross-device browsing experience.",
    tech: ["JavaScript", "Pexels API", "HTML/CSS"],
    featured: true,
    category: "web",
    color: "#ffd60a",
    initial: "C",
    url: "delvinsalman.github.io/SearchEngine/",
    githubUrl: "github.com/delvinsalman/SearchEngine",
    launched: "2024",
    timeline: "5 months",
    stars: 456,
    forks: 78,
    projectType: "individual",
    openSource: "open",
    facts: [
      "Image and video search powered by Pexels",
      "Fast browse, preview, download workflow",
      "Responsive web app with intuitive UI",
    ],
    process: [
      {
        title: "User Flow",
        description:
          "Mapped search, preview, and download paths.",
      },
      {
        title: "API Integration",
        description:
          "Connected the Pexels API with fast requests.",
      },
      {
        title: "Interface Build",
        description:
          "Built the media grids for clarity and speed.",
      },
    ],
    screenshots: [
      "image/SearchEngine1.png",
      "image/SearchEngine2.png",
      "image/SearchEngine3.png",
      "image/SearchEngine4.png",
      "image/SearchEngine5.png",
    ],
    team: maker,
  },
  {
    id: "weather-application",
    name: "Weather Application",
    description:
      "Interactive weather app with real-time global forecasts, powered by API.",
    longDescription:
      "Weather Application delivers location-based forecasts with a clean, readable interface. It presents current conditions, upcoming trends, and key weather metrics in a layout designed for quick daily checks.\n\nBuilt with responsive design and API-driven data updates for a smooth cross-device experience. Integrated geolocation services and real-time API data fetching to deliver accurate, location-based weather updates with minimal latency. Dynamic weather visuals, condition-based icons, and robust error handling enhance usability while ensuring a reliable and engaging user experience across devices.",
    tech: ["JavaScript", "Leaflet.js", "Weather API"],
    featured: true,
    category: "web",
    color: "#ff453a",
    initial: "W",
    url: "delvinsalman.github.io/WeatherApplication/",
    githubUrl: "github.com/delvinsalman/WeatherApplication",
    launched: "2024",
    timeline: "3 months",
    stars: 98,
    forks: 11,
    projectType: "individual",
    openSource: "open",
    facts: [
      "Location-based weather forecasts",
      "Clean, minimal data presentation",
      "API-driven responsive web application",
    ],
    process: [
      {
        title: "Data & Layout",
        description:
          "Structured conditions and forecasts cleanly.",
      },
      {
        title: "API Layer",
        description:
          "Integrated weather APIs for location lookups.",
      },
      {
        title: "Frontend Build",
        description:
          "Built a responsive UI for phone and desktop.",
      },
    ],
    screenshots: [
      "image/Weather1.png",
      "image/Weather2.png",
      "image/Weather3.png",
      "image/Weather4.png",
    ],
    team: maker,
  },
  {
    id: "smells-fishy",
    name: "Smells Fishy",
    description:
      "A visual data project on seafood consumption using flocking & boids.",
    longDescription:
      "A visual data project on seafood consumption. Explore patterns and insights in global seafood consumption through interactive visualizations. Interactive D3.js visualizations reveal trends, regional preferences, and sustainability metrics with drill-down capabilities for deeper analysis.\n\nLeverages advanced computer vision and machine learning techniques to analyze visual indicators of fish quality, delivering fast and consistent freshness assessments from uploaded images. Designed with scalability and extensibility in mind, enabling future integration of enhanced AI models, larger datasets, and additional seafood categories to continuously improve detection accuracy and reliability.",
    tech: ["Data Programming", "JavaScript", "p5.js"],
    featured: true,
    category: "creative-data",
    color: "#5e5ce6",
    initial: "S",
    url: "https://editor.p5js.org/Delvin/full/bG7XyZZw2",
    githubUrl: "github.com/delvinsalman/SmellsFishy",
    launched: "2025",
    timeline: "2 months",
    stars: 98,
    forks: 11,
    projectType: "individual",
    openSource: "open",
    facts: [
      "Interactive seafood consumption data visualization",
      "Explores trends, regions, and sustainability metrics",
      "Built with D3.js and JavaScript",
    ],
    process: [
      {
        title: "Data Exploration",
        description:
          "Researched datasets for trends and sustainability.",
      },
      {
        title: "Visualization Design",
        description:
          "Sketched interactive flocking/boids views.",
      },
      {
        title: "D3 Implementation",
        description:
          "Built drill-down D3.js charts and visuals.",
      },
    ],
    screenshots: [
      "image/Fish1.png",
      "image/Fish2.png",
      "image/Fish3.png",
    ],
    team: maker,
  },
  {
    id: "visual-touch",
    name: "Visual Touch",
    description:
      "Interactive art generator using algorithmic patterns using Javascript.",
    longDescription:
      "Developed an interactive JavaScript data visualization featuring a boid simulation that mimics an aquatic ecosystem in a variety of unique ways.Users explore dynamic, color-coded visuals with responsive, emergent movement, driven by real-time interaction and integrated creative-coding libraries to highlight behavioral patterns and flow. The system also uses sound recognizes to move boids, create movement and new patterns.\n\nThe simulation models collective behavior through simple rule-based interactions, demonstrating how complex and lifelike movement patterns can emerge from individual agents following basic behaviors.",
    tech: ["p5.js", "JavaScript", "p5.sound", "Dat.GUI"],
    featured: true,
    category: "creative-data",
    color: "#30b0c7",
    initial: "V",
    url: "editor.p5js.org/Delvin/full/7vD8Lushj",
    launched: "2024",
    timeline: "2 months",
    stars: 174,
    forks: 32,
    projectType: "individual",
    openSource: "closed",
    facts: [
      "Generative boid simulation art piece",
      "Real-time interaction with sound and motion",
      "Built with p5.js and creative-coding libraries",
    ],
    process: [
      {
        title: "Concept & Motion",
        description:
          "Defined the aquatic ecosystem boid metaphor.",
      },
      {
        title: "Simulation Build",
        description:
          "Built flocking and real-time interaction in p5.js.",
      },
      {
        title: "Audio & Controls",
        description:
          "Added p5.sound and Dat.GUI live controls.",
      },
    ],
    screenshots: [
      "image/Art1.png",
      "image/Art2.png",
      "image/Art3.png",
      "image/Art4.png",
      "image/Art5.png",
    ],
    team: maker,
  },
];

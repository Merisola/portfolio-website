export interface Project {
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  img: string; // Made mandatory to ensure the UI stays "Gold"
}

export const devProjects: Project[] = [
  {
    title: "Amazon Commerce Clone",
    description:
      "Modeled real-world e-commerce flows with cart, auth, and order management to practice production patterns.",
    stack: ["React", "Node.js", "Express", "Stripe"],
    repo: "https://github.com/Merisola/amazon-clone",
    demo: "https://amazon-clone-six-xi-93.vercel.app",
    img: "/img/amazon.jpg", 
  },
  {
    title: "Color Game",
    description:
      "Designed a small, focused game to explore interaction, feedback loops, and mobile UX under constraints.",
    stack: ["React Native", "Game State", "Mobile UX"],
    repo: "https://github.com/Merisola/color-guessing-game",
    img: "/img/color.jpg",
  },
  {
    title: "Netflix Clone",
    description:
      "Recreated a content-heavy interface with dynamic data, focusing on layout rhythm and browsing experience.",
    stack: ["React", "TMDB API", "Tailwind"],
    repo: "https://github.com/Merisola/netflix-clone",
    demo: "https://netflix-clone-weld-nu.vercel.app/",
    img: "/img/netflix.jpg",
  },
  {
    title: "Apple Landing Clone",
    description:
      "Explored high-polish marketing design with precise spacing, type hierarchy, and motion that stays calm.",
    stack: ["React", "Framer Motion", "Modern CSS"],
    repo: "https://github.com/Merisola/apple-clone",
    img: "/img/apple_react.jpg",
  },
  {
    title: "Evangadi Forum",
    description:
      "Built a discussion platform with auth, threads, and replies, emphasizing clarity and safe data flows.",
    stack: ["React", "Node.js", "PostgreSQL"],
    repo: "https://github.com/Merisola/evangadi-forum",
    demo: "https://evangadiforumproject.themeronway.com",
    img: "/img/evangadi_forum.jpg",
  },
  {
    title: "Movie Recommendation App",
    description:
      "Prototyped a recommendation interface that balances discoverability with a focused, uncluttered layout.",
    stack: ["Next.js", "Server Components", "TMDB API"],
    repo: "https://github.com/Merisola/movie-recommendation-app",
    demo: "https://movie-recommendation-app-murex.vercel.app/",
    img: "/img/movie.jpg",
  },
];

export const pmProjects: Project[] = [
  {
    title: "Agile Transformation Lab",
    description:
      "Scaling engineering velocity by 40% through custom Jira workflows and sprint optimization.",
    stack: ["Agile", "Scrum", "Jira", "KPI Tracking"],
    img: "/img/agile.jpg", // Ensure this file exists in /public/img/
  },
  {
    title: "Evangadi Forum PM",
    description:
      "Orchestrated full-stack community platform delivery with focus on user-centric features and safe data flows.",
    stack: ["SDLC", "Stakeholder Mgmt", "PostgreSQL", "React"],
    repo: "https://github.com/Merisola/evangadi-forum",
    img: "/img/evangadi_forum.jpg",
  },
];

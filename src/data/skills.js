export const DEVICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { name: "Java", slug: "java" },
      { name: "JavaScript", slug: "javascript" },
      { name: "C++", slug: "cplusplus" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs", file: "nextjs-plain.svg", inv: true },
      { name: "Nuxt.js", slug: "nuxtjs" },
      { name: "Vue", slug: "vuejs" },
    ],
  },
  {
    title: "Web",
    items: [
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css3" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "Bootstrap", slug: "bootstrap" },
      { name: "Bulma", slug: "bulma", file: "bulma-plain.svg" },
      { name: "Tilda", slug: "__tilda" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "SQLite", slug: "sqlite" },
    ],
  },
  {
    title: "Deployment & DevOps",
    items: [
      { name: "Nginx", slug: "nginx" },
      { name: "Docker", slug: "docker" },
      { name: "Vercel", slug: "vercel", inv: true },
      { name: "Streamlit", slug: "__streamlit" },
    ],
  },
  {
    title: "Workflow",
    items: [
      { name: "GitHub", slug: "github", inv: true },
      { name: "Figma", slug: "figma" },
      { name: "GitLab", slug: "gitlab" },
    ],
  },
];

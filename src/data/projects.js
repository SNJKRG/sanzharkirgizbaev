const imageModules = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" }
);

const imagesByFolder = {};
for (const path in imageModules) {
  const m = path.match(/\.\.\/assets\/([^/]+)\/(.+)$/);
  if (!m) continue;
  const [, folder, file] = m;
  if (folder === "stack") continue; // tech icons, not project shots
  (imagesByFolder[folder] ||= []).push({ file, url: imageModules[path] });
}
for (const folder in imagesByFolder) {
  imagesByFolder[folder].sort((a, b) =>
    a.file.localeCompare(b.file, undefined, { numeric: true })
  );
}

// All gallery URLs for a folder, in order.
const galleryFor = (folder) => (imagesByFolder[folder] || []).map((i) => i.url);

// The cover URL: always the first image in the folder.
function coverFor(folder) {
  const imgs = imagesByFolder[folder] || [];
  return imgs.length ? imgs[0].url : null;
}

const GLYPHS = ["◆", "▲", "❖", "◈", "⬡", "✦", "◇", "⬢", "✕", "◐", "⬣", "✣"];

const RAW = [
  {
    folder: "tochno-generator", title: "Tochno Generator",
    cat: "fullstack", catLabel: "Fullstack", year: "2025", role: "Full-stack developer",
    status: "Internal tool",
    desc: "Internal generator for real estate Instagram Stories",
    overview:
      "Tochno Generator is a full-stack internal tool for generating ready-to-publish Instagram Stories for real estate marketing. I built the workflow, pricing calculator, image-generation logic, admin panel, and database structure around 10,000+ apartment records. The tool reduced manual design work and increased story production speed by roughly 3x.",
    highlights: [
      "Built a one-step workflow for generating branded real estate Stories.",
      "Implemented pricing and layout logic based on internal business rules.",
      "Optimized data handling around 10,000+ apartment records.",
      "Added an admin panel for non-technical content management.",
      "Increased marketing story production speed by roughly 3x.",
    ],
    tags: ["Vite", "React", "TypeScript", "PostgreSQL", "Tailwind CSS", "Python / Flask"],
    links: { demo: "https://tochno-generator.ru" },
  },

  {
    folder: "tochno-direct", title: "Tochno Direct",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack developer",
    status: "Internal tool",
    desc: "Ad-platform automation over the Yandex Direct API",
    overview:
      "Tochno Direct is an internal service that automates ad-placement management on top of the Yandex Direct API v5. It applies rules to exclude suspicious and underperforming placements across selected projects and campaigns, and keeps a full history of every processed placement for auditing and recovery. Operators control automation per project and view all statistics in one dashboard.",
    highlights: [
      "Built a React SPA and FastAPI backend integrating the Yandex Direct API v5.",
      "Automated exclusion of suspicious and underperforming placements per project and campaign.",
      "Implemented a scheduler that runs the exclusion logic on a recurring basis.",
      "Stored full placement history in PostgreSQL to audit runs and restore mistaken removals.",
      "Consolidated campaign statistics into a single operator dashboard.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "FastAPI", "SQLAlchemy", "PostgreSQL", "APScheduler", "Docker"],
    links: { demo: "https://tochno-direct.ru" },
  },
  {
    folder: "tochno-creatives", title: "Tochno Creatives",
    cat: "fullstack", catLabel: "Fullstack", year: "2025", role: "Full-stack developer",
    status: "Internal tool",
    desc: "Unified ad-creative analytics across Yandex and VK",
    overview:
      "Tochno Creatives is an internal dashboard that consolidates ad-creative statistics from the Yandex and VK APIs across 10 projects into a single view. The backend walks each platform's hierarchy down to individual creatives, so staff review performance without navigating each platform manually.",
    highlights: [
      "Developed a Next.js frontend and FastAPI backend aggregating Yandex and VK creative data across 10 projects.",
      "Built a pipeline that traverses each platform's hierarchy down to individual creatives.",
      "Implemented JWT authentication with per-project permissions for shared and personal accounts.",
      "Added email notifications and a unified data-aggregation layer.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SWR", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT Auth", "Docker"],
    links: { demo: "https://точно-креативы.рф" },
  },
  {
    folder: "tochno-edit", title: "Tochno Feed Processor",
    cat: "fullstack", catLabel: "Fullstack", year: "2025", role: "Full-stack developer",
    status: "Internal tool",
    desc: "Bulk feed editor with apartment-cover image generation",
    overview:
      "Tochno Feed Processor is an internal tool for bulk-updating product feed entities for a construction company, centered on regenerating cover images for apartment floor plans. It stores each original floor plan in its own database, so covers can be swapped repeatedly without losing the source image.",
    highlights: [
      "Built server-side image processing with Pillow to regenerate apartment floor-plan covers.",
      "Implemented XML feed parsing with lxml across 50 feeds.",
      "Designed a database that preserves original floor plans for repeated cover updates.",
      "Developed an admin panel to manage all 50 feeds from one place.",
    ],
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Pillow", "lxml", "SQLAlchemy", "PostgreSQL", "Docker"],
    links: { demo: "https://generatorfeed.ru" },
  },
  {
    folder: "tochno-utm", title: "Tochno UTM",
    cat: "fullstack", catLabel: "Fullstack", year: "2025", role: "Full-stack developer",
    status: "Internal tool",
    desc: "UTM tag builder with stored history and Metrika analytics",
    overview:
      "Tochno UTM is an internal web app that generates UTM tags following standard conventions and stores every tag it creates. By connecting one or more Yandex Metrika accounts, users pull analytics back for each tag, turning a throwaway link builder into a place where tags are stored and measured together. It is used by around 50 people across the company each month.",
    highlights: [
      "Built a React frontend and FastAPI backend with validation and JWT authentication.",
      "Integrated Yandex Metrika to attach analytics to each generated tag.",
      "Implemented support for personal, corporate, and multiple linked Metrika accounts.",
      "Stored full UTM history so tags can be reused and measured in one place.",
    ],
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS", "Zod", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT Auth", "Docker"],
    links: { demo: "https://tochno-utm.ru" },
  },
  {
    folder: "tochno-basis", title: "Tochno Basis",
    cat: "fullstack", catLabel: "Fullstack", year: "2025", role: "Full-stack developer",
    status: "Internal tool",
    desc: "Electronic queue for office key handover, built on the Basis API",
    overview:
      "Tochno Basis is an electronic-queue web app built on the Basis real estate platform API, used in company offices to manage key handover. Managers process clients in order while clients see their place in the queue.",
    highlights: [
      "Developed a React frontend and a Node.js and Express backend with JWT authentication.",
      "Integrated the Basis API to drive the office key-handover queue.",
      "Built separate manager and client views for processing and tracking the queue.",
      "Containerized the full stack with Docker for deployment.",
    ],
    tags: ["React", "Vite", "React Router", "Bootstrap", "Node.js", "Express", "JWT Auth", "Docker"],
    links: { demo: "https://tochno-queue.ru" },
  },

  {
    folder: "atalyk", title: "Atalyk School",
    cat: "tilda", catLabel: "Tilda", year: "2025", role: "Web developer",
    status: "Live",
    desc: "School website for announcements and documents",
    overview:
      "Atalyk School is a Tilda website that lets the administration publish announcements and keep content current without developer involvement. The documents section gathers all of the school's documentation in one place.",
    highlights: [
      "Built the school site on Tilda for low-maintenance, self-service content updates.",
      "Designed a documents section that centralizes all school documentation.",
      "Configured SEO settings and a working lead form.",
    ],
    tags: ["Tilda", "SEO"],
    links: { demo: "https://atalyk.ru" },
  },
  {
    folder: "portfolio", title: "Arcade Portfolio",
    cat: "frontend", catLabel: "Frontend", year: "2024", role: "Frontend developer",
    status: "Completed",
    desc: "Retro arcade-themed portfolio with a word-guessing game",
    overview:
      "Arcade Portfolio is a personal portfolio styled after classic arcade video games, and one of my first layout projects. It includes a playable word-prediction game built in vanilla JavaScript.",
    highlights: [
      "Designed and hand-coded a retro arcade interface in HTML and CSS.",
      "Implemented a word-guessing game in vanilla JavaScript.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    links: { repo: "https://github.com/itu-itis24-kirgizbaev23/TermProject" },
  },
  {
    folder: "kvantlandia", title: "Kvantlandia",
    cat: "fullstack", catLabel: "Fullstack", year: "2025", role: "Full-stack developer / Team lead",
    status: "Live",
    desc: "Interactive Olympiad platform for math, physics, and CS tournaments",
    overview:
      "Kvantlandia is an interactive platform that delivers Olympiad-style problems to school students. Over two years it hosted 5 full tournaments across math, physics, and computer science, with real-time components on both the frontend and backend. I led a team of 4 developers building full-stack tournaments end to end.",
    highlights: [
      "Led a team of 4 developers building full-stack tournaments end to end.",
      "Contributed to 5 tournaments across math, physics, and computer science over two years.",
      "Built real-time interactive components on both the frontend and backend.",
      "Helped redesign the platform's interface.",
    ],
    tags: ["Vue", "Nuxt", "Python / Flask", "PostgreSQL", "GitLab"],
    links: { demo: "https://kvantland.com" },
  },
  {
    folder: "parkovki", title: "Parking Reservation",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack developer",
    status: "Live",
    desc: "Parking-space booking with an interactive SVG complex map",
    overview:
      "Parking Reservation is a parking-space booking service built from scratch. An interactive SVG map of the complex shows occupied, free, and pending-confirmation spaces in real time, and bookings flow into the company CRM. The improved booking experience increased parking rental requests by 50%.",
    highlights: [
      "Built a React frontend and FastAPI backend for parking reservations.",
      "Integrated SVG floor plans into an interactive map showing space status in real time.",
      "Wired the booking form to a Bitrix webhook to track reservations in the CRM.",
      "Increased parking rental requests by 50% through a clearer booking flow.",
    ],
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS", "FastAPI", "RabbitMQ", "Docker"],
    links: {},
  },
  {
    folder: "m-starter", title: "M-Starter",
    cat: "fullstack", catLabel: "Fullstack", year: "2025", role: "Full-stack developer",
    status: "Live",
    desc: "Full-stack e-commerce store built and maintained end to end",
    overview:
      "M-Starter is a full-stack e-commerce application built from scratch with a colleague. After my colleague left, I took over full ownership across the frontend, backend, and database.",
    highlights: [
      "Developed the frontend from design mockups and structured the project for scalability.",
      "Took over full ownership of the frontend, backend, and database.",
      "Hardened server security by tightening the Docker configuration.",
    ],
    tags: ["Go", "Next.js", "TypeScript", "Tailwind CSS", "Docker"],
    links: { demo: "https://mstarter.kz" },
  },
  {
    folder: "staysafe", title: "StaySafe",
    cat: "frontend", catLabel: "Frontend", year: "2024", role: "Frontend developer",
    status: "Completed",
    desc: "Landing page with Telegram-bot lead capture",
    overview:
      "StaySafe is a landing page built from scratch with a lead-capture form that delivers submissions straight to a Telegram bot, so leads reach the team instantly.",
    highlights: [
      "Built a responsive landing page with smooth animations from scratch.",
      "Implemented a lead form that sends submissions to a Telegram bot in real time.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Python", "Telegram API"],
    links: { repo: "https://github.com/SNJKRG/staySafe" },
  },
  {
    folder: "catalog-tg", title: "Catalog TG",
    cat: "frontend", catLabel: "Frontend", year: "2025", role: "Full-stack developer",
    status: "Live",
    desc: "Telegram web-app catalog spanning 10 residential projects",
    overview:
      "Catalog TG is a Telegram web-app catalog that lets users browse apartments from 10 residential projects and submit a booking or information request in a few taps. It follows the familiar Telegram bot UI for a low-friction experience.",
    highlights: [
      "Built a Telegram bot and web-app catalog aggregating apartments from 10 projects.",
      "Implemented a feed-parsing pipeline that serves listings through the bot.",
      "Developed a booking and information request flow.",
      "Containerized the bot and API with Docker.",
    ],
    tags: ["Node.js", "Telegram Bot API", "xml2js", "HTML", "CSS", "JavaScript", "Docker"],
    links: { demo: "https://catalog-tochno-tg.ru" },
  },
  {
    folder: "chatplace", title: "ChatPlace Bot",
    cat: "frontend", catLabel: "Frontend", year: "2024", role: "Bot developer",
    status: "Completed",
    desc: "Telegram sales bot with payment verification",
    overview:
      "ChatPlace Bot is a Telegram bot built on the ChatPlace platform for selling digital content. It handles the purchase flow and confirms payment before delivering content.",
    highlights: [
      "Built a Telegram sales bot on the ChatPlace platform.",
      "Automated payment verification before content delivery.",
    ],
    tags: ["ChatPlace", "Telegram"],
  },

  {
    folder: "elitstom", title: "Elit Stom",
    cat: "tilda", catLabel: "Tilda", year: "2025", role: "Web developer",
    status: "Live",
    desc: "41-page dental clinic website rebuilt on Tilda",
    overview:
      "Elit Stom is a 41-page dental clinic website rebuilt on Tilda around a refreshed design, migrated to cut maintenance and operating costs. A simplified lead-submission flow doubled the number of received applications.",
    highlights: [
      "Built a 41-page dental clinic website on Tilda around a new design.",
      "Migrated the site to Tilda to simplify maintenance and reduce operating costs.",
      "Collaborated with marketing and SEO specialists to reach top Yandex rankings.",
      "Doubled received applications by simplifying the lead-submission flow.",
    ],
    tags: ["Tilda", "SEO"],
    links: { demo: "https://elit-stom-med.ru" },
  },
  {
    folder: "restom", title: "Re-Stom",
    cat: "tilda", catLabel: "Tilda", year: "2025", role: "Web developer",
    status: "Live",
    desc: "Redesigned and built a family of 6 dental landing pages",
    overview:
      "Re-Stom is a redesigned dental landing page on Tilda, updated with a new color palette and a fixed mobile layout. Most blocks are custom Zero Blocks driven by hand-written JavaScript, and the work extended into a family of 6 specialty landing pages.",
    highlights: [
      "Redesigned the landing's color palette and fixed its mobile layout.",
      "Built custom Zero Blocks driven by hand-written JavaScript.",
      "Created 6 distinct landing pages, one per dental specialty.",
    ],
    tags: ["Tilda", "Zero Block", "JavaScript", "CSS"],
    links: { demo: "https://www.re-stom.ru" },
  },
  {
    folder: "kuzovkin", title: "Kuzovkin",
    cat: "frontend", catLabel: "Frontend", year: "2025", role: "Frontend developer",
    status: "Completed",
    desc: "Three functional pages built with Bulma on a Flask app",
    overview:
      "Kuzovkin is a set of 3 functional pages built with the Bulma CSS framework, integrated into a Python Flask application.",
    highlights: [
      "Built 3 responsive pages with the Bulma CSS framework.",
      "Integrated the pages cleanly into an existing Flask backend.",
    ],
    tags: ["Bulma", "Python / Flask", "HTML", "CSS"],
    links: { demo: "https://kuzovkin.info" },
  },
  {
    folder: "raduga", title: "Raduga Kindergarten",
    cat: "tilda", catLabel: "Tilda", year: "2024", role: "Web developer",
    status: "Live",
    desc: "Colorful, fully responsive kindergarten website",
    overview:
      "Raduga Kindergarten is a bright, playful website built on Tilda, fully responsive across devices, that holds all the kindergarten's practical information in one place.",
    highlights: [
      "Built a colorful, fully responsive kindergarten website on Tilda.",
      "Configured an admin panel for content management and SEO settings.",
    ],
    tags: ["Tilda", "SEO"],
    links: { demo: "https://детскийсадрадуга.рф" },
  },
  {
    folder: "eurotour", title: "Eurotour",
    cat: "fullstack", catLabel: "Fullstack", year: "2024", role: "Full-stack developer",
    status: "Completed",
    desc: "Full-stack geography quiz with an interactive world map",
    overview:
      "Eurotour is a full-stack geography quiz built on a client-server architecture in Python, with an interactive world map for country selection.",
    highlights: [
      "Developed a client-server quiz application in Python.",
      "Implemented an interactive world map for country selection.",
      "Built user registration, login, answer validation, and a dynamic question database.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    
  },
  {
    folder: "biamino", title: "Biamino Club",
    cat: "frontend", catLabel: "Frontend", year: "2025", role: "Frontend developer",
    status: "Live",
    desc: "Investment tracking and management platform",
    overview:
      "Biamino Club is a platform that gives users a convenient interface for tracking and managing investments with professional-grade financial tools. I contributed to the frontend on a Supabase backend.",
    highlights: [
      "Built frontend interface components for investment tracking and management.",
      "Integrated a Supabase backend and managed server state with React Query.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "Supabase"],
    links: { demo: "https://biamino-club-od30tr2qa-arslankamchybekovs-projects.vercel.app" },
  },
  {
    folder: "mujiru", title: "Mujiri",
    cat: "frontend", catLabel: "Frontend", year: "2024", role: "Frontend developer",
    status: "Completed",
    desc: "Clean, responsive landing page",
    overview:
      "Mujiri is a clean landing page hand-coded to look right on every screen size.",
    highlights: [
      "Hand-coded a responsive landing page in HTML, CSS, and JavaScript.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    links: { repo: "https://github.com/irina228stu/mujiri-room1" },
  },
  {
    folder: "gifty", title: "Gifty Mini App",
    cat: "frontend", catLabel: "Frontend", year: "2024", role: "Frontend developer",
    status: "Completed",
    desc: "Telegram Mini App for sending gifts (contest entry)",
    overview:
      "Gifty is a Telegram Mini App for sending gifts, built for a contest organized by @CryptoBot using Telegram's then-new Mini Apps feature. I built the frontend.",
    highlights: [
      "Built the frontend for a Telegram Mini App using the Mini Apps feature.",
      "Developed a native-feeling gift-sending interface inside the Telegram client.",
    ],
    tags: ["React", "CSS", "Telegram API"],
    links: { repo: "https://github.com/SNJKRG/gifty" },
  },
  {
    folder: "ushoo", title: "Ushoo",
    cat: "frontend", catLabel: "Frontend", year: "2024", role: "Frontend developer",
    status: "Live",
    desc: "Hand-coded landing page with an interactive gallery",
    overview:
      "Ushoo is a hand-coded, fully responsive landing page with an interactive image gallery.",
    highlights: [
      "Designed and hand-coded a responsive landing page in HTML and CSS.",
      "Added an interactive image gallery with JavaScript.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    links: { demo: "https://ushoo.vercel.app" },
  },
  {
    folder: "sneakercare", title: "Sneakercare.kz",
    cat: "frontend", catLabel: "Frontend", year: "2024", role: "Frontend developer",
    status: "Completed",
    desc: "E-commerce web app with cart, orders, and accounts",
    overview:
      "Sneakercare.kz is an e-commerce web app where users browse products, check size and availability details, build a cart, and place orders. It includes account creation and login.",
    highlights: [
      "Built product browsing with detailed size and availability information.",
      "Implemented cart, checkout, and order placement.",
      "Added account creation and login, managing state with Redux.",
    ],
    tags: ["React", "Redux", "Bootstrap", "HTML", "CSS", "JavaScript"],
    links: { repo: "https://github.com/SNJKRG/JReact_Sneakercare_kz" },
  },
  {
    folder: "football", title: "Football Match Prediction",
    cat: "ml", catLabel: "Academic ", year: "2026", role: "ML / Data Science",
    status: "Completed",
    desc: "Predicting top-5 league match outcomes with scikit-learn",
    overview:
      "Football Match Prediction is a notebook that predicts match outcomes across the top 5 European leagues from an open Kaggle dataset. It reaches 60% accuracy on a three-class problem, with a log-loss of 0.893 and a Ranked Probability Score of 0.171.",
    highlights: [
      "Built a scikit-learn pipeline on an open Kaggle dataset for top-5 league matches.",
      "Achieved 60% accuracy on a three-class classification problem.",
      "Reached a log-loss of 0.893 and a Ranked Probability Score of 0.171.",
      "Compared Logistic Regression, Decision Tree, SVM, and Random Forest models.",
    ],
    tags: ["Python", "scikit-learn", "pandas", "Jupyter Notebook"],
    links: { repo: "https://github.com/tuibekovsanzhar/BBF304E_2526_Football_ML" },
  },
  {
    folder: "phpapp", title: "Appointment System",
    cat: "fullstack", catLabel: "Fullstack", year: "2023", role: "Full-stack developer",
    status: "Completed",
    desc: "Self-service booking app backed by Google Calendar",
    overview:
      "Appointment System is a self-service booking app I built so students could reserve personal sessions on my calendar. It integrates the Google Calendar API to keep bookings in sync with my real schedule.",
    highlights: [
      "Built a self-service slot-booking app in PHP.",
      "Integrated the Google Calendar API to sync bookings with a live calendar.",
    ],
    tags: ["PHP", "HTML", "CSS", "Google API"],
    links: { repo: "https://github.com/SNJKRG/MySlots" },
  },

  {
    folder: "image-captioner", title: "Image Captioner",
    cat: "ml", catLabel: "Academic ", year: "2026", role: "ML / Data Science",
    status: "Completed",
    desc: "AI app that generates captions for uploaded images",
    overview:
      "Image Captioner is a Streamlit app that lets users upload an image, preview it, and instantly generate a descriptive caption with a computer-vision model.",
    highlights: [
      "Built a Streamlit app for image upload, preview, and captioning.",
      "Integrated a computer-vision model to generate captions in one step.",
    ],
    tags: ["Python", "Streamlit", "Computer Vision"],
    links: { demo: "https://150230923yzv211hw3.streamlit.app" },
  },
  {
    folder: "point-cloud", title: "Point Cloud Processing",
    cat: "ml", catLabel: "Academic ", year: "2026", role: "ML / Data Science",
    status: "Completed",
    desc: "From-scratch SVD applied to 3D point-cloud geometry",
    overview:
      "Point Cloud Processing implements SVD from scratch, without libraries, and applies it to 3D point clouds for bounding boxes, surface normals, curvature, and ICP alignment. The custom SVD matched NumPy's and converged to within 1e-15.",
    highlights: [
      "Implemented SVD from scratch without external libraries.",
      "Compared axis-aligned (AABB) and oriented (OBB) bounding boxes.",
      "Estimated surface normals and visualized curvature on the Stanford bunny.",
      "Aligned point clouds with ICP and converged to within 1e-15 against NumPy's SVD.",
    ],
    tags: ["Python", "NumPy", "Jupyter Notebook"],
    links: { repo: "https://github.com/SNJKRG/BBF202E-TermProject" },
  },
  {
    folder: "optimization", title: "Optimization for Data Science",
    cat: "ml", catLabel: "Academic ", year: "2026", role: "ML / Data Science",
    status: "Completed",
    desc: "Two-stage modeling and budget optimization for DALY burden",
    overview:
      "Optimization for Data Science is a two-stage project on the global DALY (disability-adjusted life year) burden: first fitting an exponential burden function, then optimizing fund allocation against it. Allocating a 10 billion dollar budget produced a 60% better outcome than an equal-split baseline.",
    highlights: [
      "Fit an exponential DALY-burden function with Gauss-Newton and Levenberg-Marquardt NLS regression.",
      "Optimized fund allocation with SLSQP and a Genetic Algorithm.",
      "Achieved a 60% better outcome than an equal-split baseline on a 10 billion dollar budget.",
    ],
    tags: ["Python", "SciPy", "NumPy", "Jupyter Notebook"],
    links: { repo: "https://github.com/tuibekovsanzhar/yzv202e-global-health-optimization" },
  },
  {
    folder: "scrapper", title: "Scraper Builder",
    cat: "frontend", catLabel: "Frontend", year: "2025", role: "Frontend developer",
    status: "Internal tool",
    desc: "Visual no-code builder for web-scraping scenarios",
    overview:
      "Scraper Builder is a visual, no-code editor for composing web-scraping and browser-automation scenarios from reusable command blocks. Each block targets elements via CSS selectors and compiles to a structured JSON scenario, with a synchronized raw-JSON view for advanced editing.",
    highlights: [
      "Built a block-based editor with variables, conditionals, forks, waits, clicks, and form fills.",
      "Compiled visual scenarios into structured JSON targeting elements via CSS selectors.",
      "Added a synchronized raw-JSON view for direct script editing.",
    ],
    tags: ["React", "TypeScript", "JSON", "CSS Selectors"],
    links: {},
  },
  {
    folder: "r2r", title: "R2R Hotel Templates",
    cat: "tilda", catLabel: "Tilda", year: "2025", role: "Web developer",
    status: "Live",
    desc: "Reusable Tilda templates with a customized booking module",
    overview:
      "R2R Hotel Templates is a set of 3 reusable Tilda templates for a startup building hotel websites. The Shelter booking module is integrated and customized to fit each template.",
    highlights: [
      "Created 3 reusable hotel-website templates on Tilda.",
      "Integrated and customized the Shelter booking module with CSS and JavaScript.",
    ],
    tags: ["Tilda", "Shelter", "CSS", "JavaScript"],
    links: {},
  },
];


export const PROJECTS = RAW
  .filter((p) => (imagesByFolder[p.folder] || []).length > 0)
  .sort((a, b) => Number(b.year) - Number(a.year))
  .map((p, i) => ({
    glyph: GLYPHS[i % GLYPHS.length],
    accent: i % 2 === 1,
    ...p,
    id: p.folder,
    cover: coverFor(p.folder),
    images: galleryFor(p.folder),
  }));

// Category filters. `key` matches a project's `cat` ("all" shows everything).
export const PROJECT_FILTERS = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Fullstack" },
  { key: "frontend", label: "Frontend" },
  { key: "tilda", label: "Tilda" },
  { key: "ml", label: "Academic" },
];

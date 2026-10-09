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
    folder: "analytics", title: "Tochno Analytics",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack / AI developer",
    status: "Internal platform",
    desc: "AI-powered sales-call analysis and quality-control dashboard",
    overview:
      "Tochno Analytics is an AI-powered post-call analysis platform for a real estate sales department. It turns call recordings into transcripts, evaluates conversations against the company's methodology and checklists, and gives team leads a single dashboard for tracking manager performance and investigating individual calls.",
    highlights: [
      "Built the React dashboard and FastAPI service for call-level and team-level quality analytics.",
      "Connected Bitrix24 call ingestion to a GigaAM speech-to-text pipeline.",
      "Implemented checklist scoring with YandexGPT and company sales methodology.",
      "Added personal-data masking and role-aware audio processing before model evaluation.",
      "Created drill-down reports for scores, failed criteria, transcripts, and critical triggers.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "YandexGPT", "GigaAM", "Bitrix24", "PostgreSQL", "Docker"],
    links: { demo: "https://ai-analytics.tochnodev.ru" },
  },
  {
    folder: "tochno-ai", title: "Tochno AI Assistant",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack / AI developer",
    status: "Live",
    desc: "Conversational real estate search, mortgage guidance, and lead capture",
    overview:
      "Tochno AI Assistant is an embeddable conversational assistant for the developer's real estate websites. It understands a buyer's needs in natural language, searches live apartment inventory, explains mortgage and installment options, surfaces current promotions, and turns qualified conversations into sales leads.",
    highlights: [
      "Built an embeddable React chat widget with streaming AI responses and interactive property cards.",
      "Implemented apartment search and ranking across synchronized XML feeds and project data.",
      "Grounded answers in mortgage programs, installment plans, promotions, and project knowledge.",
      "Added secure user sessions, lead capture, CRM delivery, and a dialog analytics admin panel.",
      "Created scheduled inventory and offer synchronization for up-to-date recommendations.",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Redis", "Qdrant", "LLM APIs"],
    links: { demo: "https://tochno-ai.ru", repo: "https://github.com/SNJKRG/tochno-ai" },
  },
  {
    folder: "tochno-agent", title: "Tochno Agent",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack developer",
    status: "Internal platform",
    desc: "Self-service workspace for real estate agents and partner sales",
    overview:
      "Tochno Agent is a self-service portal for the developer's partner agents. It brings client registration, deal status, project information, calculators, promotional materials, news, and notifications into one account while keeping the operational workflow synchronized with Bitrix24.",
    highlights: [
      "Built a mobile-first Vue application and FastAPI backend with phone-based authentication.",
      "Implemented client registration and deal creation with Bitrix24 business rules.",
      "Added searchable client records, status timelines, documents, commissions, and notifications.",
      "Integrated project calculators and automatically generated top-apartment banners.",
      "Created admin settings and audit history for operational rules without code changes.",
    ],
    tags: ["Vue 3", "TypeScript", "Tailwind CSS", "FastAPI", "SQLite", "Bitrix24", "Docker"],
    links: { demo: "https://tochno-agent.ru", repo: "https://github.com/SNJKRG/tochno-agent" },
  },
  {
    folder: "trainer", title: "Tochno AI Trainer",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack / AI developer",
    status: "Internal platform",
    desc: "Voice-based sales training with a virtual client and live copilot",
    overview:
      "Tochno AI Trainer is a sales enablement platform for real estate managers. Employees practice calls with a voice-driven virtual client, receive real-time copilot prompts, and get a structured debrief based on the company's sales methodology, checklists, and product knowledge.",
    highlights: [
      "Built real-time voice training sessions over WebSockets with streaming speech recognition and synthesis.",
      "Created configurable virtual-client personas, objections, emotions, and conversation scenarios.",
      "Implemented a live copilot that suggests the next best response from company methodology.",
      "Added post-call scoring, delivery metrics, progress history, and AI coaching recommendations.",
      "Structured one shared knowledge base for training, copilot guidance, and evaluation.",
    ],
    tags: ["React", "FastAPI", "WebSockets", "PostgreSQL", "Redis", "Yandex SpeechKit", "LLM APIs", "Docker"],
    links: { demo: "https://ai-manager.tochnodev.ru" },
  },
  {
    folder: "hydrolink", title: "HydroLink",
    cat: "ml", catLabel: "Academic", year: "2026", role: "Computer Vision / Robotics developer",
    status: "Research prototype",
    desc: "Distributed perception and telemetry for an autonomous surface vehicle",
    overview:
      "HydroLink is a research platform for automatic system identification and autonomous-vessel experiments in a test basin. It connects ship-side sensors and shore-side control software with a distributed computer-vision pipeline, giving the team synchronized telemetry and marker observations for control and reinforcement-learning experiments.",
    highlights: [
      "Designed ship-side and shore-side services connected through MQTT telemetry and command channels.",
      "Built real-time AprilTag detection across five shore cameras and two onboard CSI cameras.",
      "Combined YOLO proposals with AprilTag decoding for low-latency detection on Jetson Orin Nano devices.",
      "Implemented timestamp-aware capture, multi-device fusion, recording, and performance telemetry.",
      "Integrated the perception pipeline with desktop monitoring and algorithm-selection interfaces.",
    ],
    tags: ["Python", "OpenCV", "YOLO", "AprilTag", "MQTT", "Jetson", "MongoDB", "PySide6", "Reinforcement Learning"],
    links: { repo: "https://github.com/d7-tech/HydroRL" },
  },
  {
    folder: "tochno-test", title: "Tochno Report",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack / AI developer",
    status: "Internal tool",
    desc: "Checks construction drawings and specifications before submission",
    overview:
      "Tochno Report checks construction documentation before it is sent to the contractor system (USS). An engineer uploads VOR exports, specifications and drawings in DWG or PDF; the app detects each file type, runs rule-based checks and model analysis, and shows every issue in the Excel cell or on the drawing where it was found. Issues are resolved on a working copy of the file with a full action log.",
    highlights: [
      "Converted DWG to DXF and repaired the long text entries that libredwg breaks, so ezdxf reads exact geometry, text and dimensions in millimetres.",
      "Ran deterministic checks first and model analysis second: one model reads the whole sheet, another searches tiles for errors, and every AI finding is matched against the source text before it is shown.",
      "Placed each issue where it lives: the cell in Excel, or a marker on the drawing when the exact location is known.",
      "Compared drawing quantities with the VOR floor by floor and let engineers fix issues in a working copy of the workbook with undo.",
      "Reported progress in real units, such as 6 of 9 sheets, with cancel and partial results; cached model answers so a rerun after a failure costs nothing extra.",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "SQLite", "ezdxf", "PyMuPDF", "LLM APIs"],
    links: {},
  },
  {
    folder: "bogatovsoft", title: "Bogatov Soft",
    cat: "frontend", catLabel: "Frontend", year: "2026", role: "Frontend / 3D developer",
    status: "Live",
    desc: "Product site where a 3D residential quarter tells the story of seven products",
    overview:
      "Bogatov Soft sells software to property developers: a website chat, call review, a realtor cabinet, apartment selection, document checks, Avito and CIAN listings and a parking map. The site presents all seven as one real-time 3D residential quarter. Scrolling moves a single camera from building to building, and each stop explains one product. It runs in Russian and English.",
    highlights: [
      "Built the 3D quarter in React Three Fiber with one camera driven by scroll position.",
      "Kept all text in an HTML layer above the canvas instead of rendering it in 3D.",
      "Added product pages, a lead form API route and a proxy for the chat widget.",
      "Wrote scripts that build textures, materials, brand marks and product decks from source files.",
      "Shipped Russian and English versions as two deployments, bogatovsoft.ru and bogatovsoft.com.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Three.js", "React Three Fiber", "Docker"],
    links: { demo: "https://bogatovsoft.ru" },
  },
  {
    folder: "muras-nuru", title: "Muras Nuru BLVD",
    cat: "frontend", catLabel: "Frontend", year: "2026", role: "Frontend developer / designer",
    status: "Live demo",
    desc: "Landing page for a residential quarter in Bishkek built around a boulevard",
    overview:
      "Muras Nuru BLVD is a residential quarter in the south of Bishkek by the developer Nurzaman, built in three stages around a pedestrian boulevard. The landing page has 16 sections that take a buyer from the idea of the project to a chosen floor plan and a question to the sales office. The visual language pairs project renders with flat gouache illustrations and Kyrgyz ornament on a white page.",
    highlights: [
      "Built an apartment finder that filters plans by stage, rooms and terrace and passes the chosen plan into the contact form and the WhatsApp message.",
      "Generated a set of gouache illustrations in one style, cut them out with transparency and added separate crops for mobile.",
      "Used native dialog elements for the menu, contact panel and image viewer instead of a modal library.",
      "Loaded the map only on request and images lazily, so the first screen ships two images.",
      "Linked the 210 MB of stage catalogs from the developer's site instead of hosting the PDFs.",
    ],
    tags: ["React", "TypeScript", "Vite", "Vercel"],
    links: { demo: "https://muras-nuru.vercel.app", repo: "https://github.com/SNJKRG/muras-nuru" },
  },
  {
    folder: "sales-copilot", title: "Sales Copilot",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack / AI developer",
    status: "Prototype",
    desc: "Live hints for a sales manager during an in-person meeting",
    overview:
      "Sales Copilot listens to a sales meeting and shows the manager one hint at a time: a fact from the knowledge base, a question to ask, or an answer to an objection. Audio comes from an office camera or a recording, goes through speech recognition, then through rules and an optional language model. Every card shows its source, and the manager marks it as useful or not.",
    highlights: [
      "Fed audio from an RTSP camera or a file into speech recognition with three switchable providers: Gemini Live, Deepgram and Yandex SpeechKit.",
      "Made rule-based hints the default; model hints and video analysis are paid, so they turn on only when chosen at the start.",
      "Pushed the panel state to the browser over WebSocket: current card, card history, transcript and the manager's feedback.",
      "Added a replay mode that plays a ready transcript in real time, to test hints without paying for recognition.",
      "Measured time to card (p50 and p95), recognition latency and session cost; wrote offline scripts that compare ASR and LLM providers on the AMI meeting corpus.",
    ],
    tags: ["React", "TypeScript", "Vite", "FastAPI", "WebSockets", "PostgreSQL", "Gemini", "Deepgram", "Yandex SpeechKit"],
    links: {},
  },
  {
    folder: "continental-club", title: "Continental Club Concierge",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack / AI developer",
    status: "Prototype",
    desc: "Chat concierge for a Dubai real estate agency",
    overview:
      "A concierge widget for continentalclub.ae. A buyer describes what they need in plain words; the concierge asks only for what is missing, offers verified listings, compares them, estimates costs and passes the lead to a broker with the full context. Without an API key it falls back to rules and still works.",
    highlights: [
      "Split each turn into three steps: a model parses the message into intent and filters, code decides what to ask or show, and a model writes the reply from catalog facts.",
      "Kept the decisions in code: one question at a time, only listings on sale with a full price, and no change to the buyer's conditions without consent.",
      "Streamed replies over SSE; questions and routing use templates and cost no model call.",
      "Kept the server stateless: the widget sends the dialog state with every turn.",
      "Built the broker handoff, which turns the conversation into a short summary for the agent.",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "SSE", "LLM APIs"],
    links: {},
  },
  {
    folder: "tochno-merch", title: "Tochno Showroom",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack / AI developer",
    status: "Live",
    desc: "AI fitting room for a branded clothing capsule",
    overview:
      "An AI fitting room for the TOCHNO / ORBIT merch capsule. A visitor uploads a photo, picks the weather, a style and part of the outfit, and writes a wish. A stylist model picks items from the 27-piece catalog, a second model puts the visitor in that outfit on the showroom podium, and points on the image lead to product cards. Visitor photos are not stored on the server.",
    highlights: [
      "Built the stylist endpoint: photo, filters, wish and catalog go to the model, which returns one outfit as strict JSON; the server drops unknown items and items from other categories.",
      "Ran the try-on as a background job that the client polls every 2.5 seconds; one image takes about a minute.",
      "Asked a model for a point on each garment in the result and linked those points to product cards.",
      "Built the white showroom scene, product dialogs, cart and favorites from a design kit in the TOCHNO palette.",
      "Generated the capsule itself, with descriptions and product photos, using a one-off script.",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "Polza.ai", "Docker", "nginx"],
    links: { demo: "https://merch.snjkrg.tochnodev.ru" },
  },
  {
    folder: "tochno-iflat", title: "Tochno Staff Cabinet",
    cat: "frontend", catLabel: "Frontend", year: "2026", role: "Frontend developer",
    status: "In development",
    desc: "Staff workspace for apartment handover and construction paperwork",
    overview:
      "A workspace for developer staff who hand apartments over to buyers. It covers units, deals, handover inspections with checklists, defects and technical requests, plus the construction side: work acceptance, journals, acts, schedules, contracts and prescriptions. Managers, inspectors and admins see different menus and actions.",
    highlights: [
      "Built the handover flow: inspection schedule, checklists, and defects tied to a checklist item and a unit.",
      "Added role-based routes and menus: a manager plans handovers but does not inspect, an inspector records defects, settings are admin-only.",
      "Kept filters, page and sorting in the URL so they survive a reload and the back button.",
      "Wrote dependency-free mock services for ten reports with XLSX export, DOCX documents from HTML templates, automations and integrations.",
      "Extracted the UI kit, API client with token refresh and layout into a starter template; the client cabinet was built from it.",
    ],
    tags: ["Vue 3", "TypeScript", "Vite", "Pinia", "Tailwind CSS", "Vitest"],
    links: {},
  },
  {
    folder: "tochno-client", title: "Tochno Client Cabinet",
    cat: "frontend", catLabel: "Frontend", year: "2026", role: "Frontend developer",
    status: "In development",
    desc: "Mobile cabinet where apartment buyers prepare for key handover",
    overview:
      "A personal cabinet for people buying apartments from the developer. A buyer logs in with an SMS code, sees each deal and its stage, fills in participant forms, books a handover slot and follows the path to getting the keys. It runs on its own subdomain and as an Android app, and shares the backend with the staff cabinet.",
    highlights: [
      "Built phone login with an SMS code and a lockout after five failed attempts.",
      "Showed each deal as three stages: participant forms, booking the handover, getting the keys.",
      "Added support requests with statuses and a searchable FAQ.",
      "Wrote a mock API with no dependencies that doubles as the API contract for the backend team.",
      "Packaged the same web app as an Android APK with Capacitor.",
    ],
    tags: ["Vue 3", "TypeScript", "Vite", "Tailwind CSS", "Pinia", "Capacitor", "Vitest"],
    links: {},
  },
  {
    folder: "ship-detection", title: "Ship Detection & Ranging",
    cat: "ml", catLabel: "Academic", year: "2026", role: "Computer Vision developer",
    status: "Research prototype",
    desc: "Boat detection, tracking and distance estimation from onboard cameras",
    overview:
      "Offline tools for two model boats with cameras in a covered test basin, the follow-up to HydroLink. The pipeline detects the other boat, tracks it, estimates the distance to it and its course and speed, and checks the results against telemetry and a simulated basin.",
    highlights: [
      "Fine-tuned a YOLO boat detector on reviewed basin footage; at confidence 0.45 precision went from 0.740 to 0.832 and F1 from 0.616 to 0.670.",
      "Tracked boats with persistent ids using CSRT, a Kalman filter or ByteTrack.",
      "Estimated distance from Depth Anything V2 depth maps or from the waterline angle, and the other boat's course and speed from bearings.",
      "Calibrated the cameras against UWB and IMU telemetry recorded from the boats over MQTT.",
      "Built a digital twin of the basin to score the pipeline against known positions, plus a recording viewer and a labeling UI.",
    ],
    tags: ["Python", "PyTorch", "YOLO", "OpenCV", "Depth Anything V2", "ByteTrack", "MQTT"],
    links: { repo: "https://github.com/arminekberi/shipDetection-distancePrediction" },
  },
  {
    folder: "tochno-careers", title: "Tochno Careers",
    cat: "frontend", catLabel: "Frontend", year: "2026", role: "Frontend developer",
    status: "Live",
    desc: "Careers site with live vacancies from hh.ru",
    overview:
      "The careers site of the TOCHNO group: a landing page, career track pages, internships, a referral program and a vacancy list that loads the company's open positions from hh.ru. Applications go to HR by email.",
    highlights: [
      "Loaded the employer's vacancies from the hh.ru API and mapped site tags to hh.ru directions for filtering.",
      "Proxied hh.ru through nginx with a 10-minute cache; nginx adds the API token, so it never reaches the browser.",
      "Wrote a small Node service with Nodemailer that sends application forms to HR.",
      "Built pages for career tracks, internships and the referral program.",
      "Collected tokens, components and assets into a design system that the document-checking tool later reused.",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Nodemailer", "nginx", "Docker"],
    links: { demo: "https://tochno-careers.ru" },
  },
  {
    folder: "navat", title: "NAVAT Chaikhana",
    cat: "frontend", catLabel: "Frontend", year: "2026", role: "Frontend developer",
    status: "In development",
    desc: "Redesign of a Central Asian restaurant chain's website",
    overview:
      "A new website for NAVAT, a chaikhana chain in Bishkek and Osh. Before the redesign I audited what exists: three sites on three engines (Tilda, OkayCMS and a QR-menu template), their navigation, brand, colors, type and every piece of copy. The new site starts with the Kyrgyz version.",
    highlights: [
      "Documented the current sites with screenshots, design tokens, menu structure and branch data in one archive.",
      "Found a spam page injected into the live navat.kg during the audit.",
      "Built a scroll-driven hero with an arabesque gate, drifting dust and video.",
      "Kept all texts and data in one content file that the menu and branch list render from.",
      "Deployed on Vercel with cache headers for static assets.",
    ],
    tags: ["React", "TypeScript", "Vite", "Vercel"],
    links: { repo: "https://github.com/SNJKRG/navat" },
  },
  {
    folder: "tochno-visuals", title: "Tochno VisualAI",
    cat: "fullstack", catLabel: "Fullstack", year: "2026", role: "Full-stack developer",
    status: "Internal tool",
    desc: "Internal image and video generation for architectural visuals",
    overview:
      "An internal service for architectural visualizations. A designer writes a prompt, attaches up to eight references, including PDF pages, and gets an image; the video tab animates from a first and an optional last frame. The price of each run is shown before it starts.",
    highlights: [
      "Built prompt-to-image generation with image and PDF references.",
      "Prepared references on the server: Pillow and pypdfium2 turn uploads into model-ready images and thumbnails.",
      "Offered a cheaper model for drafts and a second one for final renders up to 4K.",
      "Added video generation with duration, quality and sound settings and a cost estimate.",
      "Stored files on disk and metadata in PostgreSQL through async SQLAlchemy with Alembic migrations.",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    links: {},
  },
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

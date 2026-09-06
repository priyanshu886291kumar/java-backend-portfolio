export const portfolioData = {
  personal: {
    name: "Priyanshu Kumar",
    title: "Java Backend & Distributed Systems Engineer",
    tagline: "Architecting high-throughput backend systems.",
    email: "priyanshu886291@gmail.com",
    phone: "+91 6202763514",
    location: "India",
    github: "https://github.com/priyanshu886291kumar",
    linkedin: "https://www.linkedin.com/in/priyanshu-kumar-048a37258/",
    codolio: "https://codolio.com/profile/priyanshu8862",
    leetcode: "https://leetcode.com/u/priyanshu79033_coder/",
    bio: "Software Engineer with production experience at MAQ Software and Computer Science background at IIIT Guwahati. Specializing in Java, Spring Boot, Microservices, PostgreSQL, and Distributed Caching. Deep algorithmic foundation with 600+ DSA problems solved across LeetCode and GFG.",
  },
  stats: {
    dsaSolved: "600+",
    experienceMonths: "6 Mos",
    college: "IIIT Guwahati '26",
    dsaBreakdown: {
      easy: 180,
      medium: 360,
      hard: 60,
    },
    achievements: [
      {
        title: "600+ DSA Problems Solved",
        desc: "Unified 600+ problem solutions across LeetCode & GeeksforGeeks tracked on Codolio with 100-Day Challenge badge.",
        highlight: "600+ Solved",
      },
      {
        title: "Flipkart GRID 6.0 & 7.0",
        desc: "Shortlisted in GRID 6.0 (Level 1.1) and cleared Coding Round 1 in GRID 7.0.",
        highlight: "Finalist & Rd 1",
      },
      {
        title: "JEE Mains All India Rank",
        desc: "Secured top 2% nationwide rank among 1,200,000+ candidates.",
        highlight: "AIR 26,373",
      },
    ]
  },
  skills: {
    languages: ["Java (Core & OOP)", "Python", "C / C++", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["Spring Boot", "Spring Security", "RESTful APIs", "FastAPI", "Node.js", "Express.js", "JWT & RBAC"],
    databases: ["PostgreSQL", "MySQL", "Redis (Cache)", "MongoDB", "ACID Transactions"],
    tools: ["Docker", "Git / GitHub", "IntelliJ IDEA", "Azure App Insights", "KQL", "Postman", "Render"],
  },
  projects: [
    {
      id: "airbnb-backend",
      title: "AirBnb Backend API — Accommodation Booking System",
      category: "backend",
      date: "Jun 2026",
      featured: true,
      repo: "https://github.com/priyanshu886291kumar/airbnb-backend",
      description: "Engineered ~17 production RESTful APIs using Spring Boot covering authentication, accommodation booking, multi-criteria search, and payments. Designed relational schemas with dynamic pricing logic to handle real-time room availability, rate adjustments, and conflict prevention.",
      highlights: [
        { label: "JWT & RBAC", text: "Strict role-based authorization across guest, host, and admin privileges." },
        { label: "PostgreSQL & JPA", text: "Normalized schema design with index optimizations on location & date ranges." },
        { label: "Stripe Webhooks", text: "Webhook-based asynchronous verification for reliable transaction lifecycles." },
      ],
      tags: ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL", "Hibernate", "Stripe API", "REST APIs"],
    },
    {
      id: "convocam",
      title: "ConvoCam — Real-Time Chat & Video Platform",
      category: "realtime",
      date: "Jun 2025",
      featured: false,
      repo: "https://github.com/priyanshu886291kumar/ConvoCam",
      description: "Full-stack real-time platform with peer-to-peer WebRTC video streaming, JWT auth, friend requests, real-time presence tracking, and Gemini API integration for automated smart replies.",
      highlights: [
        { label: "Low Latency", text: "Bidirectional state sync with Socket.IO room management." },
        { label: "Rich Media", text: "Cloudinary media uploads with 30+ responsive themes & infinite pagination." },
      ],
      tags: ["Socket.IO", "WebRTC", "React.js", "Node.js", "Express", "MongoDB", "Gemini API"],
    },
    {
      id: "ai-news-curator",
      title: "AI News Curator Platform",
      category: "realtime",
      date: "Jan 2025",
      featured: false,
      repo: "https://github.com/priyanshu886291kumar/AI-News-Curator",
      description: "Full-stack AI news platform automating retrieval, clustering, summarization, and translation across 7 categories, boosting curation efficiency by 30%.",
      highlights: [
        { label: "LangChain Agents", text: "MiniLM embeddings for semantic clustering & newspaper3k for extraction." },
        { label: "5-Language Support", text: "Integrated Google Translate API and deployed microservice on Render." },
      ],
      tags: ["FastAPI", "LangChain", "Gemini API", "Python", "Render", "Google Translate"],
    }
  ],
  experience: [
    {
      company: "MAQ Software",
      role: "Associate Software Engineer (Intern)",
      duration: "Jan 2026 – Jun 2026 (6 Months)",
      bullets: [
        "Enhanced production web resources by introducing structured logging and Azure Application Insights telemetry, improving traceability and reducing diagnostic time.",
        "Validated and debugged critical flows end-to-end across Test, Release Branch (RB), and Pre-Production (PPE) environments using targeted KQL (Kusto) queries.",
        "Authored and executed comprehensive test suites covering telemetry pipelines and edge cases to ensure zero regression before deployment."
      ],
      tags: ["Azure App Insights", "KQL", "JavaScript", "Dynamics 365", "Power Platform"],
    }
  ],
  education: [
    {
      school: "Indian Institute of Information Technology (IIIT) Guwahati",
      degree: "B.Tech in Computer Science & Engineering",
      score: "CGPA: 7.30",
      year: "2022 – 2026",
    },
    {
      school: "Gaya College",
      degree: "Class XII (Bihar Board)",
      score: "85.8%",
      year: "2021 – 2022",
    },
    {
      school: "Gyan Bharti Public School",
      degree: "Class X (CBSE)",
      score: "94.2%",
      year: "2019 – 2020",
    }
  ],
  certifications: [
    {
      title: "Data Structures & Algorithms Specialization",
      issuer: "Physics Wallah",
      desc: "Comprehensive coverage of arrays, trees, dynamic programming, graphs, and algorithmic complexity."
    },
    {
      title: "Full-Stack Web & TypeScript Engineering",
      issuer: "Professional Credentials",
      desc: "Modern ES6+, TypeScript, responsive CSS systems, and REST API architectural patterns."
    }
  ]
};

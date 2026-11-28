import type { ProjectEntry } from "./types";

const todoLink = (todo: string) => ({
  value: null,
  isTodo: true as const,
  todo,
});

const sourceLink = (value: string) => ({
  value,
  isTodo: false as const,
});

export const projects: ProjectEntry[] = [
  {
    name: "BuildTrack",
    category: "Construction project management and site monitoring platform",
    period: "July–August 2026",
    description:
      "A MERN platform for construction project management and site monitoring.",
    stack: [
      "MERN",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Multer",
      "Cloudinary",
      "Render",
      "Vercel",
    ],
    details: [
      "Role-based access with JWT authentication.",
      "Project, milestone and site-progress tracking with delay reporting.",
      "Resource allocation and workforce attendance.",
      "Inventory with an audit log; vendor and procurement flow restocks inventory on delivery.",
      "In-app notifications, PDF and Excel report export, document uploads, and budget and expense tracking.",
      "Project Manager and admin dashboards with charts.",
      "Led backend and database development as part of the Infosys Springboard team.",
    ],
    links: {
      live: sourceLink("https://buildtrack-frontend-eta.vercel.app/"),
      code: sourceLink("https://github.com/priyanshu-Raj26/team-01"),
    },
  },
  {
    name: "TravelStay",
    category: "Vacation rental marketplace",
    period: "August–September 2026",
    description: "An Airbnb-style vacation rental marketplace.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Passport.js",
      "Cloudinary",
      "Mapbox",
    ],
    details: [
      "Passport.js session authentication with password hashing.",
      "Image uploads through Multer and Cloudinary.",
      "Mapbox geocoding shown as map markers with GeoJSON coordinates.",
      "A 1–5 star review system with Mongoose references between users, listings and reviews.",
      "Ownership-based authorization, Joi server-side validation, and a custom ExpressError class with async error wrapping.",
    ],
    links: {
      live: sourceLink("https://travelstay-sziz.onrender.com/listings"),
      code: sourceLink("https://github.com/priyanshu-Raj26/TravelStay"),
    },
  },
  {
    name: "Stocksense",
    category: "Stock intelligence dashboard for Indian equities",
    description:
      "A stock intelligence dashboard for Indian equities with market summaries, historical prices, volatility, and stock comparison.",
    stack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "React 19",
      "Redux Toolkit",
      "Tailwind CSS",
      "Chart.js",
    ],
    details: [
      "Top gainers and losers.",
      "30-, 90- and 180-day price history; 52-week high and low.",
      "A volatility score and two-stock comparison with Pearson correlation.",
      "Data seeded from Yahoo Finance; Postman collection included.",
    ],
    links: {
      live: sourceLink("https://stocksense-ochre.vercel.app/"),
      code: sourceLink("https://github.com/priyanshu-Raj26/Stocksense"),
    },
  },
  {
    name: "Yarron Chat",
    category: "Chat board app",
    period: "May–June 2026",
    description: "A chat board app.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "express-session",
      "method-override",
      "connect-flash",
    ],
    details: [
      "Full CRUD and RESTful routing.",
      "Flash messages, a custom error class, and reusable EJS partials.",
    ],
    links: {
      live: todoLink("No live URL is listed in the source profile."),
      code: sourceLink("https://github.com/priyanshu-Raj26/Yaaron-chat"),
    },
  },
  {
    name: "UserBase",
    category: "User management app",
    period: "April–May 2026",
    description: "A user management app.",
    stack: ["Node.js", "Express.js", "raw MySQL", "EJS"],
    details: ["Schema-first design, full CRUD, and custom error handling."],
    links: {
      live: todoLink("No live URL is listed in the source profile."),
      code: sourceLink("https://github.com/priyanshu-Raj26/UserBase"),
    },
  },
];

export const learningRepositories = [
  {
    name: "Mastering-JavaScript",
    description: "ES6+, DOM, algorithms",
  },
  {
    name: "Simon-says-web",
    description: "Vanilla JS memory game",
  },
  {
    name: "React practice repo",
    description: null,
  },
  {
    name: "DSA-using-java",
    description: null,
  },
] as const;

export const publicRepositoryCount = 28;

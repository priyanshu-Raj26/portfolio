import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Developer Intern",
    organization: "Infosys Springboard Virtual Internship 7.0",
    period: "June 29 – August 31, 2026",
    location: "Remote",
    details: [
      "Certificate of Completion issued October 26, 2026.",
      "Worked on BuildTrack with a team of five.",
      "Led backend and database development: 12 core modules across 4 milestones.",
      "Designed RESTful APIs in Node.js, Express.js and MongoDB with full CRUD, JWT authentication and role-based access control.",
      "Found and fixed 27 bugs, including race conditions in report exports, validation errors and unpopulated database references, tracked to closure in a shared bug and fix log.",
      "Deployed the backend on Render and frontend on Vercel, and resolved live environment and database-connectivity issues.",
      "Worked a develop, pull request, main Git flow on the organisation's repository.",
      "The project was reviewed at each milestone and demoed to and approved by his mentor before the final merge.",
    ],
  },
  {
    role: "Event Organizer",
    organization: "Robonixx Club, BCET",
    department: "Technical Department",
    period: "August 2025 – August 2026",
    details: [
      "Organises robotics and technical events and recruits new members from incoming juniors to grow club participation.",
    ],
    metrics: {
      value: null,
      isTodo: true,
      todo: "Confirm events run, attendance, and members recruited; do not estimate.",
    },
  },
  {
    role: "Event Coordinator",
    organization: "Robonixx Club, BCET",
    department: "Technical Department",
    period: "September 2024 – August 2025",
    details: [
      "Coordinated club activities and supported technical event execution.",
      "Two years in the club in total; promoted from coordinator to organizer.",
    ],
  },
];

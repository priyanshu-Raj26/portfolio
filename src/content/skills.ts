import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Back end",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT",
      "Role-based access control",
      "Joi validation",
      "Multer",
      "Passport.js"
    ]
  },
  {
    category: "Front end",
    skills: [
      "React.js",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Chart.js",
      "Recharts"
    ]
  },
  {
    category: "Databases",
    skills: ["MySQL (raw SQL, schema-first)", "MongoDB with Mongoose"]
  },
  {
    category: "Tools and deployment",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "Mapbox API",
      "Render",
      "Vercel",
      "MongoDB Atlas"
    ]
  },
  {
    category: "Learning now",
    skills: [
      "System design",
      "Advanced DSA",
      "Testing",
      "Linux",
      "Docker",
      "AWS",
      "Cloud platforms"
    ]
  },
  {
    category: "People skills",
    skills: [
      "Teamwork on a five-person remote team",
      "Mentor-reviewed milestones",
      "Club leadership and recruiting",
      "Training teammates"
    ]
  }
];

export const additionalProfileLanguage = "C";

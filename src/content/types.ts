export type SourceValue<T> = {
  value: T;
  isTodo: false;
};

export type TodoValue = {
  value: null;
  isTodo: true;
  todo: string;
};

export type ContentValue<T> = SourceValue<T> | TodoValue;

export type ContentLink = ContentValue<string>;

export type ProfileContent = {
  name: string;
  headline: string;
  location: string;
  story: string;
  approach: string;
  availability: string[];
  interestedRoles: string[];
  collaborationInterests: string[];
  careerVision: string;
};

export type EducationEntry = {
  qualification: string;
  field?: string;
  institution?: string;
  board?: string;
  location?: string;
  periodOrYear: string;
  result?: string;
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  department?: string;
  period: string;
  location?: string;
  details: string[];
  metrics?: ContentValue<string[]>;
};

export type ProjectEntry = {
  name: string;
  category: string;
  period?: string;
  description: string;
  stack: string[];
  details: string[];
  links: {
    live: ContentLink;
    code: ContentLink;
  };
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type DsaStats = {
  platform: string;
  username: string;
  problemsSolved: number;
  problemsByDifficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
  longestStreakDays: number;
  activeDaysPastYear: number;
  submissionsPastYear: number;
  badges: number;
  featuredBadge: string;
  contestRating: number;
  contests: number;
  topPercent: number;
  figuresAsOf: string;
};

export type LinkEntry = {
  label: string;
  href: ContentLink;
};

export type NavigationEntry = {
  label: string;
  id: string;
};

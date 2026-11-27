import type { LinkEntry } from "./types";

const todoLink = (todo: string) => ({
  value: null,
  isTodo: true as const,
  todo,
});

const sourceLink = (value: string) => ({
  value,
  isTodo: false as const,
});

export const links: LinkEntry[] = [
  {
    label: "Email",
    href: sourceLink("er.priyansu@gmail.com"),
  },
  {
    label: "GitHub",
    href: sourceLink("https://github.com/priyanshu-Raj26"),
  },
  {
    label: "LinkedIn",
    href: sourceLink("https://www.linkedin.com/in/priyanshu~raj/"),
  },
  {
    label: "LeetCode",
    href: sourceLink("https://leetcode.com/u/Priyanshu_Raj26/"),
  },
  {
    label: "DSA repository",
    href: sourceLink("https://github.com/priyanshu-Raj26/DSA-using-java"),
  },
  {
    label: "Instagram",
    href: sourceLink("https://www.instagram.com/priyanshu.raj_26/"),
  },
];

export const resumeLink = {
  href: todoLink("Resume file is a TODO in the source profile."),
  publicDownload: false,
} as const;

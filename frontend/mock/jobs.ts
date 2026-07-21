import type { Job } from "@/features/jobs/types";


export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Remote",
    type: "Full Time",
    remote: true,
    platform: "LinkedIn",
    postedDate: "2 days ago",
    summary:
      "Build modern React applications with TypeScript.",
    applyLink: "#",
  },

  {
    id: "2",
    title: "React Engineer",
    company: "Startup Labs",
    location: "Addis Ababa",
    type: "Internship",
    remote: false,
    platform: "Indeed",
    postedDate: "5 days ago",
    summary:
      "Work on scalable frontend products.",
    applyLink: "#",
  },

  {
    id: "3",
    title: "Next.js Developer",
    company: "AI Solutions",
    location: "Remote",
    type: "Contract",
    remote: true,
    platform: "JSearch",
    postedDate: "1 week ago",
    summary:
      "Create AI-powered web experiences.",
    applyLink: "#",
  },
];
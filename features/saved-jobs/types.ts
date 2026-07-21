export interface SavedJob {
  id: string;
  title: string;
  company: string;
  location: string;
  savedDate: string;
  status: "Saved" | "Applied";
}
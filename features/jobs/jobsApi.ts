import type { Job } from "./types";


export async function searchJobs(
  filters?: object
): Promise<Job[]> {


  // Later replace with:
  //
  // axios.get("/api/jobs/search")


  console.log(filters);


  return [];

}
import SavedJobCard from "./SavedJobCard";
import { savedJobs } from "@/mock/savedJobs";


export default function SavedJobList(){

return (

<div className="
mt-8
grid
gap-6
md:grid-cols-2
">


{
savedJobs.map(job=>(
<SavedJobCard
key={job.id}
job={job}
/>
))
}


</div>

)

}
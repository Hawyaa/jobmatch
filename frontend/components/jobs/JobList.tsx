import JobCard from "./JobCard";
import {mockJobs} from "@/mock/jobs";


export default function JobList(){


return (

<div className="
mt-8
grid
gap-6
lg:grid-cols-2
">


{
mockJobs.map(job=>(
<JobCard
key={job.id}
job={job}
/>
))
}


</div>

)

}
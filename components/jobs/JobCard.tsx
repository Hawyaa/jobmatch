import type { Job } from "@/features/jobs/types";
import {
  MapPin,
  Bookmark
} from "lucide-react";


interface Props {
 job: Job;
}


export default function JobCard({
job
}:Props){


return (

<div className="
rounded-2xl
border border-bronze/30
bg-white
p-6
transition
hover:-translate-y-1
">


<div className="flex justify-between">


<div>

<h3 className="
text-xl
font-bold
text-burgundy
">

{job.title}

</h3>


<p className="mt-1 text-espresso">
{job.company}
</p>


</div>


<button
className="
rounded-lg
border border-bronze/40
p-2
text-burgundy
"
>

<Bookmark size={18}/>

</button>


</div>



<div className="
mt-4
flex
gap-3
text-sm
text-espresso
">


<MapPin size={16}/>

{job.location}

</div>



<p className="
mt-4
text-sm
text-espresso/80
">

{job.summary}

</p>



<div className="
mt-5
flex
justify-between
items-center
">


<span className="
rounded-full
bg-cream
px-3
py-1
text-xs
text-burgundy
">

{job.type}

</span>


<a
href={job.applyLink}
className="
rounded-xl
bg-burgundy
px-5
py-2
text-sm
font-semibold
text-cream
"
>

Apply

</a>


</div>


</div>

)

}
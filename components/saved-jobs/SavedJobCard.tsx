import type { SavedJob } from "@/features/saved-jobs/types";
import { BookmarkCheck } from "lucide-react";


interface Props {
  job: SavedJob;
}


export default function SavedJobCard({
  job
}: Props){

return (

<div className="
rounded-2xl
border border-bronze/30
bg-white
p-6
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



<BookmarkCheck
className="text-bronze"
/>


</div>



<div className="mt-4 text-sm text-espresso">

<p>
Location: {job.location}
</p>


<p>
Saved: {job.savedDate}
</p>


</div>



<span className="
mt-5
inline-block
rounded-full
bg-cream
px-4
py-2
text-sm
text-burgundy
">

{job.status}

</span>



</div>

)

}
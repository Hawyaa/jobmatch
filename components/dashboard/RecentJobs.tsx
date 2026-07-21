const jobs = [
{
title:"Frontend Developer",
company:"Tech Company",
location:"Remote"
},
{
title:"React Developer",
company:"Startup",
location:"Addis Ababa"
}
];


export default function RecentJobs(){

return (

<div className="rounded-2xl border border-bronze/30 bg-white p-6">


<h3 className="text-xl font-bold text-burgundy">
Recent Matches
</h3>



<div className="mt-5 space-y-4">


{
jobs.map((job)=>(
<div
key={job.title}
className="rounded-xl bg-cream-light p-4"
>

<h4 className="font-semibold text-burgundy">
{job.title}
</h4>


<p className="text-sm text-espresso">
{job.company}
</p>


<p className="text-sm text-bronze">
{job.location}
</p>


</div>
))
}


</div>


</div>

)

}
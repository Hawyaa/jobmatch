import JobFilters from "@/components/jobs/JobFilters";
import JobList from "@/components/jobs/JobList";


export default function JobsPage(){


return (

<main className="
min-h-screen
bg-cream-light
px-6
py-12
">


<div className="
mx-auto
max-w-7xl
">


<h1 className="
text-4xl
font-bold
text-burgundy
">

Find Jobs

</h1>


<p className="
mt-3
text-espresso
">

AI matched opportunities based on your profile.

</p>



<div className="mt-8">

<JobFilters/>

</div>



<JobList/>


</div>


</main>

)

}
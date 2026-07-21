import SavedJobList from "@/components/saved-jobs/SavedJobList";


export default function SavedJobsPage(){

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

Saved Jobs

</h1>


<p className="
mt-3
text-espresso
">

Manage your saved opportunities.

</p>


<SavedJobList/>


</div>


</main>

)

}
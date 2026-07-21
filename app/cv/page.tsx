import UploadCV from "@/components/cv/UploadCV";


export default function CVPage(){

return (

<main className="min-h-screen bg-cream-light px-6 py-12">


<div className="mx-auto max-w-3xl">


<h1 className="text-4xl font-bold text-burgundy">
CV Management
</h1>


<p className="mt-3 text-espresso">
Upload your resume and improve your AI job matches.
</p>



<div className="mt-8">

<UploadCV/>

</div>


</div>


</main>

)

}
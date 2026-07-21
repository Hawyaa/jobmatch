"use client";


import SkillsInput from "./SkillsInput";
import ExperienceCard from "./ExperienceCard";


export default function ProfileForm(){


function handleSave(){

// Later:
// PUT /api/profile

console.log("save profile");

}



return (

<div className="space-y-8">


{/* Personal Information */}

<div className="
rounded-3xl
bg-white
border border-bronze/30
p-8
">


<h2 className="text-xl font-bold text-burgundy">
Personal Information
</h2>



<div className="mt-6 grid gap-5 md:grid-cols-2">


<input
defaultValue="Mahelet"
className="
rounded-xl
border border-bronze/40
p-3
outline-none
"
/>


<input
defaultValue="Software Engineer"
className="
rounded-xl
border border-bronze/40
p-3
outline-none
"
/>


</div>


</div>




{/* Skills */}

<div className="
rounded-3xl
bg-white
border border-bronze/30
p-8
">

<SkillsInput/>

</div>




{/* Experience */}

<div className="
rounded-3xl
bg-white
border border-bronze/30
p-8
">


<h2 className="text-xl font-bold text-burgundy">
Experience
</h2>


<div className="mt-5 space-y-4">


<ExperienceCard
title="Frontend Developer Intern"
company="Tech Company"
duration="2025 - Present"
/>


<ExperienceCard
title="Mobile App Developer"
company="SSGI"
duration="2025"
/>


</div>


</div>




<button
onClick={handleSave}
className="
rounded-xl
bg-burgundy
px-8
py-3
font-semibold
text-cream
hover:bg-burgundy-dark
"
>

Save Profile

</button>



</div>

)

}
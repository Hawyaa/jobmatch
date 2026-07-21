"use client";

import { useState } from "react";
import { X } from "lucide-react";


export default function SkillsInput(){

const [skills,setSkills] = useState([
"React",
"TypeScript",
"Next.js"
]);


function removeSkill(skill:string){

setSkills(
skills.filter(
(item)=>item !== skill
)
);

}


return (

<div>

<label className="text-sm font-medium text-espresso">
Skills
</label>


<div className="mt-3 flex flex-wrap gap-3">


{
skills.map(skill=>(

<div
key={skill}
className="
flex items-center gap-2
rounded-full
bg-burgundy
px-4 py-2
text-sm text-cream
"
>


{skill}


<button
onClick={()=>removeSkill(skill)}
>

<X size={14}/>

</button>


</div>

))
}


</div>


</div>

)

}
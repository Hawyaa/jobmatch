type Props={
title:string;
company:string;
duration:string;
};


export default function ExperienceCard({
title,
company,
duration
}:Props){

return (

<div className="
rounded-2xl
border border-bronze/30
bg-white
p-5
">


<h3 className="font-bold text-burgundy">
{title}
</h3>


<p className="mt-1 text-espresso">
{company}
</p>


<p className="mt-2 text-sm text-bronze">
{duration}
</p>


</div>

)

}
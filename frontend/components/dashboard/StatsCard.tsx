type Props = {
  title:string;
  value:string;
  description:string;
};


export default function StatsCard({
title,
value,
description
}:Props){

return (

<div className="rounded-2xl border border-bronze/30 bg-white p-6">


<p className="text-sm text-espresso/70">
{title}
</p>


<h3 className="mt-3 text-3xl font-bold text-burgundy">
{value}
</h3>


<p className="mt-2 text-sm text-espresso/60">
{description}
</p>


</div>

)

}
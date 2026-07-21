"use client";


export default function JobFilters(){


return (

<div className="
grid
gap-4
rounded-2xl
border border-bronze/30
bg-white
p-6
md:grid-cols-4
">


<select className="rounded-xl border p-3">

<option>
Platform
</option>

<option>
LinkedIn
</option>

<option>
Indeed
</option>

</select>



<select className="rounded-xl border p-3">

<option>
Location
</option>

<option>
Remote
</option>

<option>
Ethiopia
</option>

</select>



<select className="rounded-xl border p-3">

<option>
Employment Type
</option>

<option>
Full Time
</option>

<option>
Internship
</option>

</select>



<button
className="
rounded-xl
bg-burgundy
text-cream
"
>

Search

</button>


</div>

)

}
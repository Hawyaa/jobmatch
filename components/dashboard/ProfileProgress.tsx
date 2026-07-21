export default function ProfileProgress(){

return (

<div className="rounded-2xl border border-bronze/30 bg-white p-6">


<div className="flex justify-between">

<h3 className="font-bold text-burgundy">
Profile Completion
</h3>


<span className="text-bronze">
75%
</span>

</div>



<div className="mt-5 h-3 rounded-full bg-cream">


<div
className="h-3 rounded-full bg-burgundy"
style={{
width:"75%"
}}
/>


</div>


<p className="mt-4 text-sm text-espresso/70">
Complete your profile to get better job matches.
</p>


</div>

)

}
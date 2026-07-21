"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";


export default function LoginForm(){

const [loading,setLoading]=useState(false);



function handleSubmit(e:React.FormEvent){

e.preventDefault();

setLoading(true);


setTimeout(()=>{

setLoading(false);

},1000)

}



return (

<form
onSubmit={handleSubmit}
className="space-y-5"
>


<div>

<label className="text-sm font-medium text-espresso">
Email
</label>


<div className="mt-2 flex items-center rounded-xl border border-bronze/40 bg-cream-light px-4">

<Mail
size={18}
className="text-bronze"
/>


<input
type="email"
placeholder="example@email.com"
className="w-full bg-transparent p-3 outline-none"
/>


</div>

</div>



<div>

<label className="text-sm font-medium text-espresso">
Password
</label>


<div className="mt-2 flex items-center rounded-xl border border-bronze/40 bg-cream-light px-4">


<Lock
size={18}
className="text-bronze"
/>


<input
type="password"
placeholder="Your password"
className="w-full bg-transparent p-3 outline-none"
/>


</div>

</div>



<button
disabled={loading}
className="w-full rounded-xl bg-burgundy py-3 font-semibold text-cream hover:bg-burgundy-dark"
>

{loading ? "Logging in..." : "Login"}

</button>


</form>

)

}
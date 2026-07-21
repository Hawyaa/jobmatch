import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";


export default function LoginPage(){

return (

<main className="flex min-h-screen items-center justify-center bg-cream-light px-6">


<div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">


<h1 className="text-3xl font-bold text-burgundy">
Welcome Back
</h1>


<p className="mt-2 text-espresso/70">
Continue your job search journey.
</p>


<div className="mt-8">

<LoginForm/>

</div>



<p className="mt-6 text-center text-sm text-espresso">

Don't have an account?


<Link
href="/signup"
className="ml-2 font-semibold text-burgundy hover:text-bronze"
>
Sign up
</Link>


</p>


</div>


</main>

)

}
import Link from "next/link";
import SignupForm from "@/components/auth/SignupForm";


export default function SignupPage(){

  return (

    <main className="flex min-h-screen items-center justify-center bg-cream-light px-6">


      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">


        <h1 className="text-3xl font-bold text-burgundy">
          Create Account
        </h1>


        <p className="mt-2 text-espresso/70">
          Start finding jobs smarter with AI.
        </p>



        <div className="mt-8">

          <SignupForm/>

        </div>



        <p className="mt-6 text-center text-sm text-espresso">

          Already have an account?

          <Link
            href="/login"
            className="ml-2 font-semibold text-burgundy hover:text-bronze"
          >
            Login
          </Link>

        </p>


      </div>


    </main>

  );
}
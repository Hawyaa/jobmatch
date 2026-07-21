"use client";


import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";


export default function SignupForm() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");


  function handleSubmit(e:React.FormEvent){

    e.preventDefault();

    console.log({
      name,
      email,
      password
    });

  }


  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >


      <div>

        <label className="text-sm text-espresso">
          Full Name
        </label>

        <div className="mt-2 flex items-center rounded-xl border border-bronze/40 bg-white px-4">

          <User size={18}
            className="text-bronze"
          />

          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 outline-none"
            placeholder="John Doe"
          />

        </div>

      </div>



      <div>

        <label className="text-sm text-espresso">
          Email
        </label>

        <div className="mt-2 flex items-center rounded-xl border border-bronze/40 bg-white px-4">

          <Mail size={18}
            className="text-bronze"
          />

          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 outline-none"
            placeholder="email@example.com"
          />

        </div>

      </div>



      <div>

        <label className="text-sm text-espresso">
          Password
        </label>


        <div className="mt-2 flex items-center rounded-xl border border-bronze/40 bg-white px-4">

          <Lock size={18}
            className="text-bronze"
          />


          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 outline-none"
            placeholder="********"
          />


        </div>

      </div>



      <button
        className="w-full rounded-xl bg-burgundy py-3 font-semibold text-cream hover:bg-burgundy-dark"
      >
        Create Account
      </button>


    </form>

  );
}
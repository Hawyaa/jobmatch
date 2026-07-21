"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", cred.user.uid), {
        email: cred.user.email,
        createdAt: serverTimestamp(),
      });
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-burgundy-dark text-cream p-10"
      >
        <h1 className="font-display text-3xl mb-1">Create account</h1>
        <p className="font-body text-cream/60 text-sm mb-8">
          Start matching jobs to your CV.
        </p>

        {error && (
          <p className="font-body text-sm text-red-300 mb-4">{error}</p>
        )}

        <label className="block font-body text-xs uppercase tracking-wider mb-2">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border border-cream/30 px-4 py-2 mb-5 font-body focus:outline-none focus:border-gold"
        />

        <label className="block font-body text-xs uppercase tracking-wider mb-2">
          Password
        </label>
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-transparent border border-cream/30 px-4 py-2 mb-8 font-body focus:outline-none focus:border-gold"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold text-burgundy-dark font-body text-sm uppercase tracking-wide py-3 hover:bg-cream transition-colors disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>

        <p className="font-body text-sm text-cream/60 mt-6 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-gold hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </main>
  );
}
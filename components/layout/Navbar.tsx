import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-bronze/30 bg-burgundy">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold text-cream"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bronze text-burgundy">
            <BriefcaseBusiness size={22} />
          </div>

          <span>
            JobMatch
          </span>
        </Link>


        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/jobs"
            className="text-sm text-cream/80 transition hover:text-bronze"
          >
            Find Jobs
          </Link>


          <Link
            href="/dashboard"
            className="text-sm text-cream/80 transition hover:text-bronze"
          >
            Dashboard
          </Link>


          <Link
            href="/profile"
            className="text-sm text-cream/80 transition hover:text-bronze"
          >
            Profile
          </Link>

        </div>


        {/* Actions */}
        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="rounded-xl px-5 py-2 text-sm font-medium text-cream transition hover:text-bronze"
          >
            Login
          </Link>


          <Link
            href="/signup"
            className="rounded-xl bg-bronze px-5 py-2 text-sm font-semibold text-burgundy transition hover:opacity-90"
          >
            Get Started
          </Link>

        </div>

      </nav>
    </header>
  );
}
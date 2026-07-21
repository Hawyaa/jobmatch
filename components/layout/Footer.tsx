import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-burgundy">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">


          {/* Brand */}
          <div>

            <h3 className="text-2xl font-bold text-cream">
              JobMatch
            </h3>

            <p className="mt-4 max-w-sm text-sm text-cream/70">
              AI-powered job search platform that helps you discover
              opportunities faster and smarter.
            </p>

          </div>


          {/* Links */}
          <div>

            <h4 className="font-semibold text-bronze">
              Platform
            </h4>

            <div className="mt-4 flex flex-col gap-3">

              <Link
                href="/jobs"
                className="text-sm text-cream/70 hover:text-bronze"
              >
                Jobs
              </Link>

              <Link
                href="/dashboard"
                className="text-sm text-cream/70 hover:text-bronze"
              >
                Dashboard
              </Link>

              <Link
                href="/profile"
                className="text-sm text-cream/70 hover:text-bronze"
              >
                Profile
              </Link>

            </div>

          </div>


          {/* Company */}
          <div>

            <h4 className="font-semibold text-bronze">
              Company
            </h4>

            <p className="mt-4 text-sm text-cream/70">
              Built with AI to simplify your career journey.
            </p>

          </div>


        </div>


        <div className="mt-10 border-t border-bronze/30 pt-6 text-center">

          <p className="text-sm text-cream/60">
            © {new Date().getFullYear()} JobMatch. All rights reserved.
          </p>

        </div>


      </div>

    </footer>
  );
}
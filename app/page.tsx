import Link from "next/link";
import {
  Sparkles,
  UploadCloud,
  Search,
  Target,
} from "lucide-react";


const features = [
  {
    icon: UploadCloud,
    title: "Upload Your CV",
    description:
      "Upload your resume and let AI understand your skills, experience, and career goals.",
  },

  {
    icon: Search,
    title: "AI Job Matching",
    description:
      "Discover jobs that match your profile using intelligent recommendations.",
  },

  {
    icon: Target,
    title: "Track Applications",
    description:
      "Save opportunities and manage your job search journey in one place.",
  },
];


export default function Home() {
  return (
    <main className="bg-cream-light">


      {/* Hero Section */}
      <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">


        {/* Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-bronze/40 bg-white px-5 py-2 text-sm text-burgundy shadow-sm">

          <Sparkles size={16} className="text-bronze" />

          AI Powered Job Search

        </div>



        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-bold leading-tight text-burgundy md:text-7xl">

          Find Your Dream Job

          <br />

          Smarter With AI

        </h1>



        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-espresso/80">

          Upload your CV, get AI-powered job matches,
          discover opportunities, and track your career journey
          from one intelligent platform.

        </p>



        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">


          <Link
            href="/signup"
            className="rounded-xl bg-burgundy px-8 py-4 font-semibold text-cream transition hover:bg-burgundy-dark"
          >
            Get Started
          </Link>



          <Link
            href="/jobs"
            className="rounded-xl border border-burgundy px-8 py-4 font-semibold text-burgundy transition hover:bg-burgundy hover:text-cream"
          >
            Explore Jobs
          </Link>


        </div>


      </section>



      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 pb-24">


        <div className="grid gap-6 md:grid-cols-3">


          {features.map((feature) => {

            const Icon = feature.icon;


            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-bronze/30 bg-white p-8 shadow-sm transition hover:-translate-y-1"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy text-bronze">

                  <Icon size={24}/>

                </div>


                <h3 className="text-xl font-bold text-burgundy">

                  {feature.title}

                </h3>


                <p className="mt-3 text-sm leading-relaxed text-espresso/80">

                  {feature.description}

                </p>


              </div>
            );

          })}


        </div>


      </section>


    </main>
  );
}
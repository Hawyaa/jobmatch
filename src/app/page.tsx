export default function Home() {
  const features = [
    { label: "01", title: "CV Upload", desc: "Drop your CV, we read it in seconds." },
    { label: "02", title: "Smart Matching", desc: "AI extracts your skills and seniority." },
    { label: "03", title: "Multi-Platform", desc: "LinkedIn, Indeed, Glassdoor, and more." },
    { label: "04", title: "Save & Track", desc: "Bookmark roles, revisit your history." },
  ];

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-burgundy-dark text-cream flex flex-col items-center justify-center text-center px-6 py-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
          CV-Based Job Search
        </p>
        <h1 className="font-display text-6xl md:text-7xl font-semibold mb-6">
          JobMatch
        </h1>
        <div className="w-16 h-px bg-gold mb-6" />
        <p className="font-body text-cream/70 max-w-md mb-10">
          Upload your CV, set your filters, and find roles that actually fit —
          across every platform, in one place.
        </p>
        <button className="font-body text-sm tracking-wide uppercase border border-cream/40 px-8 py-3 hover:bg-cream hover:text-burgundy-dark transition-colors">
          Get Started
        </button>
      </section>

      {/* What we do */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-burgundy text-center mb-16">
          What It Does
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-burgundy/20">
          {features.map((f) => (
            <div key={f.label} className="px-6 py-8 md:py-0 text-center">
              <p className="font-display text-gold text-sm mb-3">{f.label}</p>
              <h3 className="font-display text-burgundy-dark text-lg mb-2">
                {f.title}
              </h3>
              <p className="font-body text-burgundy-dark/60 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
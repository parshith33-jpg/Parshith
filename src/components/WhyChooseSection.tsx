import { WHY_CHOOSE_PILLARS } from '../data/fsicData';

export function WhyChooseSection() {
  const [leadPillar, ...otherPillars] = WHY_CHOOSE_PILLARS;

  return (
    <section id="why-fsic" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-700">Why Choose FSIC</p>
          <h2 className="font-display headline-balance mt-2 text-3xl font-bold tracking-tight text-[#0F294A] sm:text-4xl">
            Training Designed Around Clarity, Practice, and Student Progress
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Every aspect of our Chennai training environment is structured to help learners absorb concepts deeply and apply them with confidence.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Marquee Pillar Card (col-span-2) */}
          <article className="flex flex-col justify-between rounded-2xl bg-[#0F294A] p-8 text-white lg:col-span-2">
            <div>
              <p className="font-display text-sm font-semibold text-orange-400 tabular-nums">
                {leadPillar.index} · Core Pillar
              </p>
              <h3 className="font-display headline-balance mt-3 text-2xl font-bold text-white sm:text-3xl">
                {leadPillar.title}
              </h3>
              <p className="mt-3 text-base font-medium text-blue-100">
                {leadPillar.summary}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                {leadPillar.detail}
              </p>
            </div>
            <div className="mt-8 border-t border-white/15 pt-5 text-xs text-slate-300">
              Applied lab exercises · Guided mentor reviews · Real-world problem solving
            </div>
          </article>

          {/* Remaining 4 Structured Pillars */}
          {otherPillars.map((pillar) => (
            <article
              key={pillar.index}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div>
                <p className="font-display text-sm font-semibold text-blue-700 tabular-nums">
                  {pillar.index}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-[#0F294A]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-orange-700">{pillar.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/fsicData';

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-blue-700">About FSIC</p>
          <h2 className="font-display headline-balance mt-2 text-3xl font-bold tracking-tight text-[#0F294A] sm:text-4xl">
            Built Around Practical Readiness and Long-Term Career Confidence
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Future Skill Innovation Centre (FSIC) in Chennai is dedicated to helping learners move beyond textbook theory through structured skill training, personal mentorship, and steady professional preparation.
          </p>
        </div>

        {/* Vision, Mission, Philosophy Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7">
            <div>
              <p className="text-xs font-semibold text-orange-600">01 · Vision</p>
              <h3 className="font-display mt-2 text-xl font-bold text-[#0F294A]">
                Our Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {ABOUT_CONTENT.vision}
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7">
            <div>
              <p className="text-xs font-semibold text-blue-700">02 · Mission</p>
              <h3 className="font-display mt-2 text-xl font-bold text-[#0F294A]">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {ABOUT_CONTENT.mission}
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#0F294A] p-7 text-white">
            <div>
              <p className="text-xs font-semibold text-orange-300">03 · Philosophy</p>
              <h3 className="font-display mt-2 text-xl font-bold text-white">
                Educational Philosophy
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                {ABOUT_CONTENT.philosophy}
              </p>
            </div>
          </article>
        </div>

        {/* Core Objectives & Commitment */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-blue-700">Core Objectives</p>
              <h3 className="font-display headline-balance mt-2 text-2xl font-bold text-[#0F294A]">
                Commitment to Developing Future-Ready Skills
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether supporting college students preparing for their first role or professionals refreshing their capabilities, FSIC prioritizes clear outcomes, consistent practice, and honest academic guidance.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {ABOUT_CONTENT.objectives.map((objective, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 border-t border-slate-100 pt-4 sm:border-t-0 sm:pt-0"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-slate-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

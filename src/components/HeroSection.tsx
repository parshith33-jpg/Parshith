import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { FSIC_INFO } from '../data/fsicData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onEnquireClick: () => void;
}

export function HeroSection({ onEnquireClick }: HeroSectionProps) {
  return (
    <section id="home" className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Column: Core Proposition */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-sm font-semibold tracking-wide text-blue-700">
              {FSIC_INFO.name} · Chennai, Tamil Nadu
            </p>

            <h1
              className="font-display headline-balance mt-4 font-bold tracking-tight text-[#0F294A]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.12 }}
            >
              Practical Skill Development for Modern Careers.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Welcome to <strong className="font-semibold text-slate-900">{FSIC_INFO.name} ({FSIC_INFO.shortName})</strong> in Chennai. We focus on structured, hands-on training, guided career preparation, and professional readiness designed to help students and job seekers step into the workforce with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onEnquireClick}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0F294A] transition-colors duration-150 hover:border-blue-700 hover:bg-blue-50/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 whitespace-nowrap shrink-0"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <a
                href={FSIC_INFO.phoneHref}
                className="inline-flex items-center gap-2 font-medium text-slate-800 transition-colors hover:text-blue-700 tabular-nums"
              >
                <Phone className="h-4 w-4 text-orange-600" aria-hidden="true" />
                <span>{FSIC_INFO.phoneDisplay}</span>
              </a>
              <span aria-hidden="true" className="hidden text-slate-300 sm:inline">
                /
              </span>
              <span className="inline-flex items-center gap-2 text-slate-600">
                <MapPin className="h-4 w-4 text-blue-700" aria-hidden="true" />
                <span>{FSIC_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Primary Campus Visual */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:min-h-[360px]">
              <ResilientImage
                src="/src/assets/images/hero_fsic_campus_1795412567438.jpg"
                alt="Learners collaborating with a mentor at modern workstations inside Future Skill Innovation Centre in Chennai"
                fallbackTitle="FSIC Training Campus — Chennai"
                loading="eager"
                className="h-full w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Institutional Summary Strip */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          <div className="p-5">
            <p className="text-xs font-medium text-slate-500">Institution</p>
            <p className="mt-1 font-display text-sm font-semibold text-[#0F294A]">
              {FSIC_INFO.name}
            </p>
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-slate-500">Training Focus</p>
            <p className="mt-1 font-display text-sm font-semibold text-[#0F294A]">
              Skill & Career Development
            </p>
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-slate-500">Centre Location</p>
            <p className="mt-1 font-display text-sm font-semibold text-[#0F294A]">
              Chennai, Tamil Nadu
            </p>
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-slate-500">Admissions Helpline</p>
            <a
              href={FSIC_INFO.phoneHref}
              className="mt-1 inline-block font-display text-sm font-semibold text-blue-700 tabular-nums hover:underline"
            >
              {FSIC_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

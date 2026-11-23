import { useState, useEffect } from 'react';
import { Clock, GraduationCap, Award, ArrowRight, X, Info } from 'lucide-react';
import { COURSE_CATALOGUE, type CoursePlaceholder } from '../data/fsicData';

interface CoursesSectionProps {
  onSelectCourseForEnquiry: (courseTitle: string) => void;
}

type CategoryFilter = 'All' | CoursePlaceholder['category'];

const CATEGORIES: CategoryFilter[] = ['All', 'Technical', 'Career & Soft Skills', 'Workshops'];

export function CoursesSection({ onSelectCourseForEnquiry }: CoursesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedCourse, setSelectedCourse] = useState<CoursePlaceholder | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCourse(null);
      }
    };
    if (selectedCourse) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCourse]);

  const filteredCourses =
    activeCategory === 'All'
      ? COURSE_CATALOGUE
      : COURSE_CATALOGUE.filter((course) => course.category === activeCategory);

  return (
    <section id="courses" className="bg-white py-16 sm:py-20 lg:py-24 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-700">Courses & Training</p>
            <h2 className="font-display headline-balance mt-2 text-3xl font-bold tracking-tight text-[#0F294A] sm:text-4xl">
              Structured Training Catalogue
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Explore our training framework below. Contact our Chennai centre directly at{' '}
              <span className="font-semibold text-slate-800 tabular-nums">9176138892</span> for current batch availability and official program brochures.
            </p>
          </div>

          {/* Interactive Category Segmented Filter */}
          <div
            role="tablist"
            aria-label="Filter courses by category"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 self-start"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0F294A] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Transparent Placeholder Notice */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-slate-700">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
          <p>
            <strong className="font-semibold text-[#0F294A]">Catalogue Placeholder Notice:</strong>{' '}
            Program titles, durations, eligibility criteria, and certification details shown below are clearly marked placeholders ready to be updated with FSIC&apos;s official curriculum and accreditation records.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-colors duration-150 hover:border-blue-300 hover:bg-white sm:p-8"
            >
              <div>
                {/* Clean unboxed metadata row */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="text-orange-600 font-semibold">{course.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.deliveryMode}</span>
                </div>

                <h3 className="font-display headline-balance mt-3 text-xl font-bold text-[#0F294A]">
                  {course.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-blue-700">{course.statusNote}</p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {course.description}
                </p>

                {/* Key Learning Outcomes Preview */}
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-slate-800">Key Learning Outcomes</p>
                  <ul className="mt-2.5 space-y-2">
                    {course.outcomes.slice(0, 2).map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600"
                        />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration, Eligibility & Accreditation Metadata */}
                <dl className="mt-5 space-y-2.5 border-t border-slate-200 pt-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                    <div>
                      <dt className="inline font-semibold text-slate-900">Duration: </dt>
                      <dd className="inline text-slate-600">{course.durationPlaceholder}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <GraduationCap
                      className="mt-0.5 h-4 w-4 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="inline font-semibold text-slate-900">Eligibility: </dt>
                      <dd className="inline text-slate-600">{course.eligibilityPlaceholder}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" aria-hidden="true" />
                    <div>
                      <dt className="inline font-semibold text-slate-900">Certification: </dt>
                      <dd className="inline text-slate-600">{course.accreditationPlaceholder}</dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Card Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5">
                <button
                  type="button"
                  onClick={() => onSelectCourseForEnquiry(course.title)}
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-700 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Enquire About Program</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCourse(course)}
                  className="inline-flex min-h-[42px] items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0F294A] transition-colors hover:border-blue-700 hover:bg-blue-50/50 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  View Full Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-orange-600">
                  {selectedCourse.code} · {selectedCourse.category}
                </p>
                <h3
                  id="course-modal-title"
                  className="font-display mt-1 text-2xl font-bold text-[#0F294A]"
                >
                  {selectedCourse.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                aria-label="Close course details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {selectedCourse.description}
            </p>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <h4 className="font-display text-sm font-bold text-[#0F294A]">
                Key Learning Outcomes
              </h4>
              <ul className="mt-3 space-y-2.5">
                {selectedCourse.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-6 grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold text-slate-500">Duration</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  {selectedCourse.durationPlaceholder}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-slate-500">Eligibility</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  {selectedCourse.eligibilityPlaceholder}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold text-slate-500">
                  Certification & Accreditation
                </dt>
                <dd className="mt-1 font-medium text-slate-900">
                  {selectedCourse.accreditationPlaceholder}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="min-h-[42px] rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = selectedCourse.title;
                  setSelectedCourse(null);
                  onSelectCourseForEnquiry(title);
                }}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-orange-600 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-700 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

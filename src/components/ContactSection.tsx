import { useState, useEffect, type FormEvent } from 'react';
import {
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  ExternalLink,
} from 'lucide-react';
import { FSIC_INFO, COURSE_CATALOGUE, buildWhatsAppLink } from '../data/fsicData';

interface ContactSectionProps {
  preselectedCourse: string;
}

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  program: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function ContactSection({ preselectedCourse }: ContactSectionProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    phone: '',
    email: '',
    program: preselectedCourse || 'General Skill & Career Enquiry',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  useEffect(() => {
    if (preselectedCourse) {
      setValues((prev) => ({
        ...prev,
        program: preselectedCourse,
      }));
      setSubmittedData(null);
    }
  }, [preselectedCourse]);

  const validate = (formValues: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!formValues.fullName.trim() || formValues.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const digitsOnly = formValues.phone.replace(/\D/g, '');
    const validIndianPhone =
      digitsOnly.length === 10 || (digitsOnly.length === 12 && digitsOnly.startsWith('91'));
    if (!validIndianPhone) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.message.trim() || formValues.message.trim().length < 10) {
      nextErrors.message = 'Please include a brief enquiry message (at least 10 characters).';
    }

    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(values);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setValues({
      fullName: '',
      phone: '',
      email: '',
      program: 'General Skill & Career Enquiry',
      message: '',
    });
    setErrors({});
  };

  const whatsappDirectHref = buildWhatsAppLink(
    `Hello FSIC Chennai, I would like to enquire about ${values.program}.`
  );

  return (
    <section id="contact" className="bg-slate-50 py-16 sm:py-20 lg:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-700">Contact Us</p>
          <h2 className="font-display headline-balance mt-2 text-3xl font-bold tracking-tight text-[#0F294A] sm:text-4xl">
            Connect With Future Skill Innovation Centre
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Have questions about upcoming batches, career guidance, or training schedules in Chennai? Reach us directly by phone, WhatsApp, or the enquiry form below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Contact Details + WhatsApp + Google Maps Placeholder */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <h3 className="font-display text-lg font-bold text-[#0F294A]">
                Centre Contact Information
              </h3>

              <dl className="mt-5 space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">Phone & Admissions</dt>
                    <dd className="mt-0.5">
                      <a
                        href={FSIC_INFO.phoneHref}
                        className="font-display text-base font-bold text-[#0F294A] tabular-nums hover:text-blue-700"
                      >
                        {FSIC_INFO.phoneDisplay}
                      </a>
                    </dd>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Click to call directly from mobile or desktop
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">Location</dt>
                    <dd className="mt-0.5 font-semibold text-slate-900">{FSIC_INFO.location}</dd>
                    <p className="mt-1 text-xs text-slate-500">{FSIC_INFO.addressPlaceholder}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">Enquiry Hours</dt>
                    <dd className="mt-0.5 text-slate-700">{FSIC_INFO.timingsPlaceholder}</dd>
                  </div>
                </div>
              </dl>

              {/* WhatsApp Direct CTA */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <a
                  href={whatsappDirectHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#0F294A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <MessageCircle className="h-4 w-4 text-orange-400" aria-hidden="true" />
                  <span>Enquire via WhatsApp ({FSIC_INFO.phoneDisplay})</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Google Maps Location Placeholder */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-sm font-bold text-[#0F294A]">
                    Google Maps Location Placeholder
                  </h3>
                  <p className="text-xs text-slate-500">{FSIC_INFO.location}</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:underline whitespace-nowrap shrink-0"
                >
                  <span>Open Chennai Map</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>

              {/* Clean Architectural Map Placeholder Grid */}
              <div
                aria-label="Google Maps location placeholder for Chennai, Tamil Nadu"
                className="relative flex h-56 flex-col items-center justify-center bg-slate-100 p-6 text-center"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(15, 41, 74, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 41, 74, 0.06) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white shadow-md">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="font-display mt-3 text-sm font-bold text-[#0F294A]">
                  {FSIC_INFO.name}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600">{FSIC_INFO.location}</p>
                <p className="mt-2 max-w-xs text-xs text-slate-500">
                  Replace this placeholder with your verified Google Maps Embed iframe URL once exact street coordinates are confirmed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Enquiry Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
            {submittedData ? (
              <div role="status" className="py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display mt-4 text-2xl font-bold text-[#0F294A]">
                  Enquiry Ready & Validated
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Thank you, <strong className="text-slate-900">{submittedData.fullName}</strong>. Your enquiry details have been recorded in this session. For immediate assistance from our Chennai admissions desk, send your message directly via WhatsApp or call{' '}
                  <a
                    href={FSIC_INFO.phoneHref}
                    className="font-semibold text-blue-700 underline tabular-nums"
                  >
                    {FSIC_INFO.phoneDisplay}
                  </a>
                  .
                </p>

                <dl className="mt-6 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="text-slate-500">Program Interest:</dt>
                    <dd className="font-semibold text-slate-900">{submittedData.program}</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="text-slate-500">Mobile:</dt>
                    <dd className="font-semibold text-slate-900 tabular-nums">
                      {submittedData.phone}
                    </dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="text-slate-500">Email:</dt>
                    <dd className="font-semibold text-slate-900">{submittedData.email}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppLink(
                      `Hello FSIC Chennai, my name is ${submittedData.fullName} (${submittedData.phone}). I am enquiring about: ${submittedData.program}. Message: ${submittedData.message}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Send This Enquiry on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="FSIC Course Enquiry Form">
                <div className="border-b border-slate-200 pb-5">
                  <h3 className="font-display text-xl font-bold text-[#0F294A]">
                    Send an Enquiry
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Share your details and training interest. Required fields are marked with *.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="enquiry-name"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Full Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={values.fullName}
                      onChange={(e) => {
                        setValues({ ...values, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'error-name' : undefined}
                      placeholder="Enter your full name"
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-2 focus:outline-offset-0 ${
                        errors.fullName
                          ? 'border-red-600 focus:outline-red-600'
                          : 'border-slate-300 focus:border-blue-700 focus:outline-blue-700'
                      }`}
                    />
                    {errors.fullName && (
                      <p
                        id="error-name"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Mobile Number <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => {
                        setValues({ ...values, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                      placeholder="10-digit mobile number"
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 tabular-nums placeholder:text-slate-400 focus:outline-2 focus:outline-offset-0 ${
                        errors.phone
                          ? 'border-red-600 focus:outline-red-600'
                          : 'border-slate-300 focus:border-blue-700 focus:outline-blue-700'
                      }`}
                    />
                    {errors.phone && (
                      <p
                        id="error-phone"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Email Address <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      placeholder="you@example.com"
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-2 focus:outline-offset-0 ${
                        errors.email
                          ? 'border-red-600 focus:outline-red-600'
                          : 'border-slate-300 focus:border-blue-700 focus:outline-blue-700'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="error-email"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Program Select */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="enquiry-program"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Program / Training Interest
                    </label>
                    <select
                      id="enquiry-program"
                      name="program"
                      value={values.program}
                      onChange={(e) => setValues({ ...values, program: e.target.value })}
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-blue-700 focus:outline-2 focus:outline-blue-700"
                    >
                      <option value="General Skill & Career Enquiry">
                        General Skill & Career Enquiry
                      </option>
                      {COURSE_CATALOGUE.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="enquiry-message"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Enquiry Message <span className="text-orange-600">*</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(e) => {
                        setValues({ ...values, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      placeholder="Tell us about your current educational background, preferred schedule, or questions..."
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-2 focus:outline-offset-0 ${
                        errors.message
                          ? 'border-red-600 focus:outline-red-600'
                          : 'border-slate-300 focus:border-blue-700 focus:outline-blue-700'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="error-message"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    Or call{' '}
                    <a
                      href={FSIC_INFO.phoneHref}
                      className="font-semibold text-blue-700 tabular-nums hover:underline"
                    >
                      {FSIC_INFO.phoneDisplay}
                    </a>{' '}
                    for direct counselling.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 cursor-pointer"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

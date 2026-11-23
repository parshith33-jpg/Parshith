import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { FSIC_INFO, buildWhatsAppLink } from '../data/fsicData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F294A] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 font-display text-xs font-extrabold text-white"
              >
                F
              </span>
              <span className="font-display text-lg font-bold text-white">
                {FSIC_INFO.name} ({FSIC_INFO.shortName})
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              Dedicated to practical skill development, career readiness, and professional growth in Chennai, Tamil Nadu.
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-bold text-white">Navigation</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Courses & Training
                </a>
              </li>
              <li>
                <a href="#why-fsic" className="hover:text-white transition-colors">
                  Why Choose FSIC
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h2 className="font-display text-sm font-bold text-white">Direct Contact</h2>
            <ul className="mt-3 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={FSIC_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors tabular-nums"
                >
                  <Phone className="h-4 w-4 text-orange-400" aria-hidden="true" />
                  <span>{FSIC_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-orange-400" aria-hidden="true" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" aria-hidden="true" />
                <span>{FSIC_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {FSIC_INFO.name} ({FSIC_INFO.shortName}). All rights reserved.
          </p>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}

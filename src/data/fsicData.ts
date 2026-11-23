export const FSIC_INFO = {
  name: 'Future Skill Innovation Centre',
  shortName: 'FSIC',
  phoneDisplay: '9176138892',
  phoneFormatted: '+91 91761 38892',
  phoneHref: 'tel:+919176138892',
  whatsappBaseUrl: 'https://wa.me/919176138892',
  location: 'Chennai, Tamil Nadu, India',
  addressPlaceholder:
    '[Address Placeholder: Insert FSIC Street Address, Landmark & PIN Code, Chennai, Tamil Nadu]',
  emailPlaceholder: '[Email Placeholder: admissions@fsic-chennai.example]',
  timingsPlaceholder: 'Monday – Saturday · 9:30 AM – 6:30 PM (Customizable)',
};

export function buildWhatsAppLink(customMessage?: string): string {
  const defaultMsg =
    'Hello FSIC Chennai, I would like to enquire about skill development and training programs.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `${FSIC_INFO.whatsappBaseUrl}?text=${text}`;
}

export interface CoursePlaceholder {
  id: string;
  code: string;
  category: 'Technical' | 'Career & Soft Skills' | 'Workshops';
  title: string;
  statusNote: string;
  description: string;
  outcomes: string[];
  durationPlaceholder: string;
  eligibilityPlaceholder: string;
  accreditationPlaceholder: string;
  deliveryMode: string;
}

export const COURSE_CATALOGUE: CoursePlaceholder[] = [
  {
    id: 'track-01',
    code: 'Program Slot 01',
    category: 'Technical',
    title: 'Core Technical & Digital Foundations [Placeholder Track]',
    statusNote: 'Sample syllabus structure — replace with official FSIC course title',
    description:
      'Placeholder description for a hands-on technical skill module designed to build practical fluency with modern digital tools, structured workflows, and applied problem-solving.',
    outcomes: [
      '[Outcome Placeholder] Apply foundational technical concepts in supervised lab exercises',
      '[Outcome Placeholder] Complete structured practical assignments and capstone evaluations',
      '[Outcome Placeholder] Document project workflows using industry-standard practices',
    ],
    durationPlaceholder: '[Duration Placeholder: e.g., 8–12 Weeks]',
    eligibilityPlaceholder: '[Eligibility Placeholder: Students, Graduates & Working Learners]',
    accreditationPlaceholder:
      '[Certification / Accreditation Placeholder: Update with official FSIC certificate details]',
    deliveryMode: 'Classroom & Lab Practicals · Chennai',
  },
  {
    id: 'track-02',
    code: 'Program Slot 02',
    category: 'Technical',
    title: 'Applied Innovation & Project Lab [Placeholder Track]',
    statusNote: 'Sample syllabus structure — replace with official FSIC course title',
    description:
      'Placeholder description for an intermediate practical track focusing on team-based prototyping, real-world case exercises, and guided mentor reviews inside FSIC training labs.',
    outcomes: [
      '[Outcome Placeholder] Translate conceptual briefs into working practical deliverables',
      '[Outcome Placeholder] Collaborate effectively in small cohort teams with trainer feedback',
      '[Outcome Placeholder] Present completed project work during internal review sessions',
    ],
    durationPlaceholder: '[Duration Placeholder: e.g., 10–16 Weeks]',
    eligibilityPlaceholder: '[Eligibility Placeholder: Basic domain familiarity or foundational degree]',
    accreditationPlaceholder:
      '[Certification / Accreditation Placeholder: Update with official FSIC certificate details]',
    deliveryMode: 'Hands-On Lab & Mentorship · Chennai',
  },
  {
    id: 'track-03',
    code: 'Program Slot 03',
    category: 'Career & Soft Skills',
    title: 'Career Readiness & Workplace Communication [Placeholder Track]',
    statusNote: 'Sample syllabus structure — replace with official FSIC course title',
    description:
      'Placeholder description for a structured career preparation program focused on professional communication, interview readiness, resume presentation, and workplace etiquette.',
    outcomes: [
      '[Outcome Placeholder] Structure clear professional resumes and project portfolios',
      '[Outcome Placeholder] Participate in guided mock interviews with constructive feedback',
      '[Outcome Placeholder] Strengthen verbal, written, and team communication clarity',
    ],
    durationPlaceholder: '[Duration Placeholder: e.g., 4–6 Weeks]',
    eligibilityPlaceholder: '[Eligibility Placeholder: Final-year students & job seekers]',
    accreditationPlaceholder:
      '[Certification / Accreditation Placeholder: Update with official FSIC certificate details]',
    deliveryMode: 'Interactive Classroom & Coaching · Chennai',
  },
  {
    id: 'track-04',
    code: 'Program Slot 04',
    category: 'Workshops',
    title: 'Weekend Industry Skill Workshops [Placeholder Track]',
    statusNote: 'Sample syllabus structure — replace with official FSIC workshop series',
    description:
      'Placeholder description for short-format intensive workshops and bootcamps tailored for college cohorts, working professionals, and institutional skill-building initiatives.',
    outcomes: [
      '[Outcome Placeholder] Gain focused exposure to emerging tools and practical methodologies',
      '[Outcome Placeholder] Work through guided exercises in a single-day or weekend sprint',
      '[Outcome Placeholder] Receive direct Q&A and career pathway guidance from trainers',
    ],
    durationPlaceholder: '[Duration Placeholder: e.g., 2–5 Days / Weekend Batch]',
    eligibilityPlaceholder: '[Eligibility Placeholder: Open to students & professionals]',
    accreditationPlaceholder:
      '[Certification / Accreditation Placeholder: Participation / completion format to be confirmed]',
    deliveryMode: 'Short-Term Intensive · Chennai',
  },
];

export interface WhyChoosePillar {
  index: string;
  title: string;
  summary: string;
  detail: string;
}

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    index: '01',
    title: 'Practical Learning First',
    summary: 'Every module centres on doing rather than passive memorisation.',
    detail:
      'Learners spend dedicated hours applying concepts through lab exercises, guided assignments, and structured project reviews so skills hold up in real work environments.',
  },
  {
    index: '02',
    title: 'Industry-Relevant Skills',
    summary: 'Training aligned with current workplace expectations.',
    detail:
      'Programs are structured around practical workflows, contemporary tools, and problem-solving habits sought by employers across technical and professional roles.',
  },
  {
    index: '03',
    title: 'Experienced Trainers',
    summary: 'Guidance from dedicated educators and practitioners.',
    detail:
      'Instructors bring subject-matter clarity and practical perspective, breaking complex topics down step by step and answering questions in real time.',
  },
  {
    index: '04',
    title: 'Structured Career Guidance',
    summary: 'Support that extends beyond classroom instruction.',
    detail:
      'From portfolio structuring and interview preparation to clarifying next career steps, FSIC helps learners connect newly built skills with realistic career paths.',
  },
  {
    index: '05',
    title: 'Student-Focused Learning',
    summary: 'Supportive cohort sizes and accessible mentorship.',
    detail:
      'Each learner receives attentive feedback, clear milestones, and an encouraging environment in Chennai designed to build lasting professional confidence.',
  },
];

export interface GalleryItem {
  id: string;
  category: 'Training Labs' | 'Workshops' | 'Collaboration' | 'Showcase';
  title: string;
  caption: string;
  imageSrc: string;
  alt: string;
  note: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'Training Labs',
    title: 'Main Skill Innovation Workspace',
    caption: 'Bright workstation bays designed for mentored small-group technical practice.',
    imageSrc: '/src/assets/images/hero_fsic_campus_1795412567438.jpg',
    alt: 'Students collaborating with an instructor at modern computer workstations inside FSIC',
    note: 'Representative institutional visual — replace with official FSIC campus photography',
  },
  {
    id: 'gal-2',
    category: 'Training Labs',
    title: 'Hands-On Technical Lab Session',
    caption: 'Guided hardware and software practical exercises led by an experienced trainer.',
    imageSrc: '/src/assets/images/gallery_practical_lab_1795412569492.jpg',
    alt: 'Trainer guiding learners around lab equipment and laptops during a practical session',
    note: 'Representative lab activity visual — replace with official FSIC lab photography',
  },
  {
    id: 'gal-3',
    category: 'Workshops',
    title: 'Career Readiness & Skill Workshop',
    caption: 'Interactive seminar rooms built for discussion, presentations, and career coaching.',
    imageSrc: '/src/assets/images/gallery_workshop_seminar_1795412569575.jpg',
    alt: 'Instructor presenting career development strategies to engaged learners in a modern classroom',
    note: 'Representative workshop visual — replace with official FSIC seminar photography',
  },
  {
    id: 'gal-4',
    category: 'Collaboration',
    title: 'Peer Collaboration & Project Reviews',
    caption: 'Learners working side by side on applied assignments and peer problem-solving.',
    imageSrc: '/src/assets/images/gallery_team_collaboration_1795412569515.jpg',
    alt: 'Four young learners discussing project notebooks and laptops around a sunlit study table',
    note: 'Representative student collaboration visual — replace with official FSIC cohort photography',
  },
  {
    id: 'gal-5',
    category: 'Showcase',
    title: 'Student Project Showcase & Lounge',
    caption: 'Dedicated exhibition space for student project demonstrations and mentor discussions.',
    imageSrc: '/src/assets/images/gallery_achievement_showcase_1795412570154.jpg',
    alt: 'Contemporary showcase area displaying student projects and mentoring seating',
    note: 'Representative achievement showcase visual — replace with official FSIC showcase photography',
  },
];

export const ABOUT_CONTENT = {
  vision:
    'To serve as a trusted regional centre in Chennai where students, graduates, and aspiring professionals build practical competence, adaptability, and confidence for evolving careers.',
  mission:
    'To deliver structured, hands-on skill development and career training led by attentive mentors—bridging the gap between theoretical education and real workplace readiness.',
  philosophy:
    'We believe lasting capability comes from active practice, honest feedback, and clear guidance. Rather than rushing through slides, FSIC emphasizes comprehension, real-world application, and steady personal growth.',
  objectives: [
    'Provide accessible, practical training tracks tailored for learners entering or advancing in modern professions.',
    'Cultivate problem-solving habits, technical literacy, and professional communication side by side.',
    'Support every participant with clear learning milestones, mentored practice, and realistic career preparation.',
    'Maintain transparent communication with learners and families regarding program structure, duration, and expectations.',
  ],
};

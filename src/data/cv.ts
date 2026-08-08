export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface WorkExperienceItem {
  title: string;
  organization: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  instructorOrOrg: string;
  year: string;
}

export const CV_DATA_EN = {
  name: "Janne Sakkinen",
  title: "OMT Physical Therapist & Occupational Health Specialist",
  location: "Oulu, Finland",

  degrees: [
    {
      degree: "OMT Physical Therapist (2.5 years)",
      institution: "Finnish Association of Orthopaedic Manual Therapy (SOMTY)",
      duration: "1/2018 – 8/2020",
      description: "Highest postgraduate clinical specialization in orthopaedic manual physical therapy.",
    },
    {
      degree: "Bachelor of Health Care in Physical Therapy (3.5 years)",
      institution: "Rovaniemi University of Applied Sciences",
      duration: "9/2007 – 12/2010",
      description: "Professional physical therapy degree.",
    },
  ] as EducationItem[],

  workExperience: [
    {
      title: "Occupational Physical Therapist (Independent Practitioner)",
      organization: "Norre Occupational Health — Kempele",
      period: "4.2.2025 – Present",
    },
    {
      title: "Clinical Workshop Instructor (TMJ Therapy)",
      organization: "Northern Ostrobothnia Summer University & Clinical Organizations",
      period: "2024 – Present",
    },
    {
      title: "Occupational Physical Therapist (Digital Telehealth)",
      organization: "Terveystalo",
      period: "21.8.2023 – Present",
    },
    {
      title: "Visiting Lecturer & Ergonomics Specialist",
      organization: "University of Oulu, Institute of Dentistry",
      period: "1.1.2017 – Present",
    },
    {
      title: "Occupational Physical Therapist",
      organization: "Terveystalo",
      period: "1.1.2014 – Present",
    },
    {
      title: "Outpatient Physical Therapist",
      organization: "City of Kotka Health Center",
      period: "17.1.2011 – 31.12.2011",
    },
  ] as WorkExperienceItem[],

  certifications: [
    { title: "Visuo-Vestibular Skills in High Performance", instructorOrOrg: "Vesa Tabell, Tampere Summer University", year: "2026" },
    { title: "Functional Neurology Protocols", instructorOrOrg: "Vesa Tabell, Tampere Summer University", year: "2025" },
    { title: "Mulligan Lower & Upper Quadrant Course", instructorOrOrg: "David Yuval & Toni Jääskeläinen, Mulligan Finland", year: "2022–2023" },
    { title: "Pain Physical Therapy Specialization (Modules 1–5)", instructorOrOrg: "Finnish Association of Physiotherapists", year: "2021–2022" },
    { title: "Stecco Fascial Manipulation", instructorOrOrg: "Tiina Lahtinen-Suopanki, SOMTY", year: "2020–2021" },
    { title: "Kinetic Control Muscles Synergies for Low Back & Hip", instructorOrOrg: "Kari Niemi, SOMTY", year: "2018, 2020" },
    { title: "Direct Access Physical Therapist", instructorOrOrg: "Terveystalo", year: "2019" },
    { title: "Maitland Concept Level 1", instructorOrOrg: "Jukka Kangas, IMTA", year: "2017" },
    { title: "Somatic Physio (Modules 1–4)", instructorOrOrg: "Jarmo Ahonen, Somatic Center Finland", year: "2016" },
    { title: "Physical Therapy for TMJ & Orofacial Disorders (TMD)", instructorOrOrg: "Tuija Mänttäri, SOMTY", year: "2015" },
    { title: "MET Technique (Cervical, Thoracic & Lumbar Spine)", instructorOrOrg: "Darren Higgins, FYSI", year: "2014" },
    { title: "Occupational Health Specialist Certification", instructorOrOrg: "Finnish Institute of Occupational Health", year: "2013" },
    { title: "McKenzie Method (MDT) Part A", instructorOrOrg: "Tuija Siitonen", year: "2012" },
    { title: "Neurological Physical Therapy", instructorOrOrg: "Riitta Sairanen", year: "2011" },
    { title: "Spinal Examination & Treatment (C1/C2)", instructorOrOrg: "SOMTY", year: "2011" },
  ] as CertificationItem[],

  references: [
    { name: "Marja-Liisa Laitala", title: "DDS, PhD, University of Oulu, Institute of Dentistry" },
    { name: "Neela Säily-Moilanen", title: "Account Manager, Työterveys Virta" },
    { name: "Timo Virtanen", title: "Lead Specialist, Kotkan Työterveys Oy" },
    { name: "Kaisa Turpeeniemi", title: "Principal Lecturer, PhD, RAMK" },
  ],
};

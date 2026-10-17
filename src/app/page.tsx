"use client";

import React, { useState } from "react";
import MegaNavbar from "@/components/MegaNavbar";
import HeroVideo from "@/components/HeroVideo";
import LegacySection from "@/components/LegacySection";
import PrincipalMessage from "@/components/PrincipalMessage";
import CampusShowcase from "@/components/CampusShowcase";
import AcademicHallOfFame from "@/components/AcademicHallOfFame";
import NoticeBoard from "@/components/NoticeBoard";
import AdmissionsStepper from "@/components/AdmissionsStepper";
import TestimonialsSection from "@/components/TestimonialsSection";
import CampusLocation from "@/components/CampusLocation";
import MegaFooter from "@/components/MegaFooter";
import AdmissionModal from "@/components/AdmissionModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function SchoolHomePage() {
  const [admissionOpen, setAdmissionOpen] = useState(false);

  return (
    <div className="flex-grow-1 d-flex flex-column position-relative bg-dark text-light">
      {/* 1. Institutional Mega Navbar with Multi-column dropdowns */}
      <MegaNavbar onOpenAdmissionModal={() => setAdmissionOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow-1">
        {/* 2. Hero Video Section with React Bits text animations and stats */}
        <HeroVideo onOpenAdmissionModal={() => setAdmissionOpen(true)} />

        {/* 3. 135+ Years Vedic & Modern Values Philosophy */}
        <LegacySection />

        {/* 4. Principal's Inspiring Message & Vision */}
        <PrincipalMessage />

        {/* 5. 35-Acre Smart Campus Infrastructure & Arenas */}
        <CampusShowcase />

        {/* 6. Academic Hall of Fame & Accolades */}
        <AcademicHallOfFame />

        {/* 7. Live Interactive Notice Board & Circulars */}
        <NoticeBoard />

        {/* 8. 4-Stage Admissions Roadmap */}
        <AdmissionsStepper onOpenAdmissionModal={() => setAdmissionOpen(true)} />

        {/* 9. Testimonials from Alumni & Parents */}
        <TestimonialsSection />

        {/* 10. Campus Location & Interactive Directions (Just above Footer) */}
        <CampusLocation />
      </main>

      {/* 11. Institutional Mega Footer */}
      <MegaFooter />

      {/* 11. Interactive Admission Application Modal */}
      <AdmissionModal isOpen={admissionOpen} onClose={() => setAdmissionOpen(false)} />

      {/* 12. Floating Interactive WhatsApp Enquiry Desk */}
      <WhatsAppWidget />
    </div>
  );
}

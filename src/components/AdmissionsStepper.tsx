"use client";

import React, { useState } from "react";
import { Magnet } from "@/components/reactbits";

interface AdmissionsStepperProps {
  onOpenAdmissionModal: () => void;
}

export default function AdmissionsStepper({ onOpenAdmissionModal }: AdmissionsStepperProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: 1,
      title: "Online Inquiry & Registration",
      subtitle: "Stage 1",
      icon: "bi-laptop",
      details:
        "Fill out the intuitive online application form with basic student details, previous academic records, and upload recent photographs.",
      timeline: "Rolling Basis",
    },
    {
      step: 2,
      title: "Interaction & Aptitude Discovery",
      subtitle: "Stage 2",
      icon: "bi-chat-dots",
      details:
        "An informal, stress-free interaction for early grades to gauge natural curiosity; diagnostic aptitude evaluation for Grade VI onwards.",
      timeline: "Within 5 Working Days",
    },
    {
      step: 3,
      title: "Document Verification & Offer",
      subtitle: "Stage 3",
      icon: "bi-patch-check",
      details:
        "Verification of birth certificate, transfer certificate (TC), immunization record, and issuance of formal admission offer letter.",
      timeline: "Immediate Post-Interaction",
    },
    {
      step: 4,
      title: "Induction & Dynamic Family Welcome",
      subtitle: "Stage 4",
      icon: "bi-mortarboard",
      details:
        "Orientation ceremony, allotment of House & Section, issuance of student ID/LMS credentials, and parent-teacher baseline meeting.",
      timeline: "Start of Academic Term",
    },
  ];

  return (
    <section id="admissions-stepper" className="py-5 py-md-6 position-relative border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge-gold mb-3 d-inline-block">
              <i className="bi bi-compass-fill me-1"></i> Transparent Enrollment
            </span>
            <h2 className="display-6 fw-bold text-white mb-3">
              Your 4-Stage Journey to <span className="gold-gradient-text">Joining the Dynamic Family</span>
            </h2>
            <p className="text-secondary">
              A smooth, supportive, and digitized admission process designed to discover and champion your child’s innate brilliance.
            </p>
          </div>
        </div>

        {/* Stepper Progress Ribbon */}
        <div className="row g-4 mb-4">
          {steps.map((s, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div
                onClick={() => setActiveStep(idx)}
                className={`dav-card p-4 text-center cursor-pointer h-100 ${
                  activeStep === idx ? "border-warning shadow-lg" : ""
                }`}
                style={{
                  cursor: "pointer",
                  background:
                    activeStep === idx
                      ? "linear-gradient(145deg, rgba(30, 48, 85, 0.95) 0%, rgba(15, 25, 48, 0.98) 100%)"
                      : undefined,
                }}
              >
                <div
                  className="stepper-node"
                  style={{
                    backgroundColor: activeStep === idx ? "#d4af37" : undefined,
                    color: activeStep === idx ? "#060b17" : undefined,
                  }}
                >
                  {s.step}
                </div>
                <div className="badge bg-secondary bg-opacity-25 text-warning small rounded-pill px-3 py-1 mb-2">
                  {s.subtitle}
                </div>
                <h3 className="h6 fw-bold text-white mb-1">{s.title}</h3>
                <small className="text-secondary">{s.timeline}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="p-4 rounded-4 glass-panel border border-warning border-opacity-25">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge bg-warning text-dark fw-bold">Step {steps[activeStep].step} Spotlight</span>
                <span className="text-secondary small">• {steps[activeStep].timeline}</span>
              </div>
              <h4 className="fw-bold text-white mb-2">{steps[activeStep].title}</h4>
              <p className="text-secondary leading-relaxed mb-0">{steps[activeStep].details}</p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <Magnet padding={25} magnetStrength={0.3}>
                <button
                  onClick={onOpenAdmissionModal}
                  className="btn btn-gold px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2 shadow"
                >
                  <i className="bi bi-pencil-square"></i>
                  <span>Start Online Application</span>
                </button>
              </Magnet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

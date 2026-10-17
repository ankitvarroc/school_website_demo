import React from "react";
import { TrueFocus } from "@/components/reactbits";

export default function LegacySection() {
  const pillars = [
    {
      icon: "bi-flower1",
      title: "Vedic Ethos & Character",
      desc: "Instilling timeless universal values of truth, integrity, and humility through morning meditation, Vedic heritage, and service to humanity.",
      badge: "Moral Foundation",
    },
    {
      icon: "bi-cpu",
      title: "Scientific Inquiry & AI",
      desc: "Fostering progressive analytical inquiry with high-tech robotics, coding from Grade III, and project-based STEM innovation labs.",
      badge: "Future-Ready",
    },
    {
      icon: "bi-globe2",
      title: "Global Leadership",
      desc: "Preparing cosmopolitan thinkers with multilingual proficiency, Model United Nations, global exchange programs, and environmental stewardship.",
      badge: "World Citizen",
    },
    {
      icon: "bi-heart-pulse",
      title: "Sports & Wellness",
      desc: "Balancing intellectual rigor with Olympic athletic training, 50m swimming facility, yoga, and mindful psychological counseling.",
      badge: "Holistic Health",
    },
  ];

  return (
    <section id="legacy" className="py-5 py-md-6 bg-surface position-relative border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge-gold mb-3 d-inline-block">
              <i className="bi bi-shield-fill-check me-1"></i> 135+ Years of Proven Pedagogy
            </span>
            <h2 className="display-6 fw-bolder text-white mb-3">
              The <span className="gold-gradient-text">Dynamic Public School</span> Philosophy: Core Values Meet 21st-Century Science
            </h2>
            <div className="my-2">
              <TrueFocus
                sentence="Character Knowledge Innovation Leadership"
                borderColor="#d4af37"
                glowColor="rgba(212, 175, 55, 0.45)"
                animationDuration={0.6}
              />
            </div>
            <p className="text-secondary mt-3">
              Founded on principles of character, academic rigor, and compassionate leadership, Dynamic Public School stands tall as a premier CBSE institution sculpting generations of progressive thinkers, scholars, and national achievers.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="row g-4">
          {pillars.map((item, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="dav-card p-4 d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "52px",
                        height: "52px",
                        background: "rgba(212, 175, 55, 0.12)",
                        border: "1px solid rgba(212, 175, 55, 0.25)",
                      }}
                    >
                      <i className={`bi ${item.icon} fs-4 text-warning`}></i>
                    </div>
                    <span className="badge bg-secondary bg-opacity-25 text-white-50 small rounded-pill px-3 py-1">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="h5 fw-bold text-white mb-2">{item.title}</h3>
                  <p className="text-secondary small leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="pt-3 border-top border-secondary border-opacity-10 d-flex align-items-center justify-content-between">
                  <span className="text-warning small fw-semibold">Pillar {idx + 1}</span>
                  <i className="bi bi-arrow-right text-secondary"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

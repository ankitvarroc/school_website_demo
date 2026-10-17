"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SpotlightCard } from "@/components/reactbits";

export default function CampusShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "academic" | "sports" | "creative">("all");

  const facilities = [
    {
      category: "academic",
      title: "STEM, AI & Robotics Hub",
      image: "/images/smart_lab.jpg",
      desc: "Equipped with 3D printers, IoT workstations, humanoid robotics kits, and dedicated coding stations for machine learning.",
      features: ["Robotics Workbenches", "AI Neural Training", "3D Rapid Prototyping", "Research Stations"],
      badge: "Innovation Center",
      spotlight: "rgba(6, 182, 212, 0.28)",
    },
    {
      category: "sports",
      title: "Olympic Sports Complex",
      image: "/images/sports_complex.jpg",
      desc: "50-meter heated Olympic swimming pool, 8-lane synthetic athletics track, indoor basketball arena, and FIFA-standard turf.",
      features: ["50m Olympic Pool", "8-Lane Synthetic Track", "Indoor Badminton & Squash", "Certified National Coaches"],
      badge: "Athletic Excellence",
      spotlight: "rgba(245, 158, 11, 0.28)",
    },
    {
      category: "creative",
      title: "Knowledge City & Central Library",
      image: "/images/hero_campus.jpg",
      desc: "35-acre Wi-Fi enabled green sanctuary featuring a 45,000-volume digital library, amphitheater, and Vedic Yagyashala.",
      features: ["45,000+ Physical & e-Books", "JSTOR & Research Access", "1,200-Seat Auditorium", "Vedic Heritage Pavilions"],
      badge: "Campus Grounds",
      spotlight: "rgba(212, 175, 55, 0.28)",
    },
  ];

  const filtered = activeTab === "all" ? facilities : facilities.filter((f) => f.category === activeTab);

  return (
    <section id="campus" className="py-5 py-md-6 bg-surface position-relative border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge-gold mb-3 d-inline-block">
              <i className="bi bi-building-check me-1"></i> 35-Acre Smart Infrastructure
            </span>
            <h2 className="display-6 fw-bold text-white mb-3">
              World-Class Arenas Built for <span className="gold-gradient-text">Exploration & Glory</span>
            </h2>
            <p className="text-secondary">
              A holistic campus designed to stimulate the intellect, invigorate the body, and inspire artistic creativity at international standards.
            </p>

            {/* Filter Tabs */}
            <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
              <button
                className={`btn btn-sm rounded-pill px-4 ${activeTab === "all" ? "btn-gold" : "btn-outline-gold"}`}
                onClick={() => setActiveTab("all")}
              >
                All Facilities
              </button>
              <button
                className={`btn btn-sm rounded-pill px-4 ${activeTab === "academic" ? "btn-gold" : "btn-outline-gold"}`}
                onClick={() => setActiveTab("academic")}
              >
                STEM & Labs
              </button>
              <button
                className={`btn btn-sm rounded-pill px-4 ${activeTab === "sports" ? "btn-gold" : "btn-outline-gold"}`}
                onClick={() => setActiveTab("sports")}
              >
                Sports Arenas
              </button>
              <button
                className={`btn btn-sm rounded-pill px-4 ${activeTab === "creative" ? "btn-gold" : "btn-outline-gold"}`}
                onClick={() => setActiveTab("creative")}
              >
                Library & Grounds
              </button>
            </div>
          </div>
        </div>

        {/* Facilities Grid with SpotlightCard */}
        <div className="row g-4">
          {filtered.map((item, idx) => (
            <div key={idx} className="col-lg-4">
              <SpotlightCard className="h-100 p-0 overflow-hidden" spotlightColor={item.spotlight}>
                <div className="position-relative" style={{ height: "240px", width: "100%" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-fit-cover"
                  />
                  <div
                    className="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 text-warning px-3 py-2 rounded-pill small"
                    style={{ border: "1px solid rgba(212, 175, 55, 0.3)" }}
                  >
                    {item.badge}
                  </div>
                </div>

                <div className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h4 fw-bold text-white mb-2">{item.title}</h3>
                    <p className="text-secondary small leading-relaxed mb-3">{item.desc}</p>
                  </div>

                  <div>
                    <div className="border-top border-secondary border-opacity-20 pt-3">
                      <div className="row g-2">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="col-6">
                            <div className="small text-white-50 d-flex align-items-center gap-1">
                              <i className="bi bi-check2 text-warning"></i>
                              <span style={{ fontSize: "0.78rem" }}>{feat}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

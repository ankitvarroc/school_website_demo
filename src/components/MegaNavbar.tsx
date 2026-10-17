"use client";

import React, { useState, useEffect, useRef } from "react";
import { Magnet } from "@/components/reactbits";

interface MegaNavbarProps {
  onOpenAdmissionModal: () => void;
}

export default function MegaNavbar({ onOpenAdmissionModal }: MegaNavbarProps) {
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>("academics");
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close mega menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMega(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Monitor scroll: make navbar background solid without transparency after scrolling hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("hero");
      const threshold = heroElement ? heroElement.offsetHeight - 140 : 400;
      setIsScrolledPastHero(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMega = (menu: string) => {
    setActiveMega(activeMega === menu ? null : menu);
  };

  const closeMega = () => {
    setActiveMega(null);
  };

  const toggleMobileAccordion = (key: string) => {
    setActiveMobileAccordion(activeMobileAccordion === key ? null : key);
  };

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    setActiveMega(null);
  };

  return (
    <header className={`institutional-header ${isScrolledPastHero ? "scrolled-past-hero" : ""}`} ref={headerRef}>
      {/* Main Navigation Bar - Floating Rounded Pill */}
      <div className="floating-navbar-container">
        <nav
          className={`navbar navbar-expand-lg navbar-dark floating-rounded-navbar py-2 px-3 px-xl-4 position-relative ${
            isScrolledPastHero ? "scrolled-past-hero" : ""
          }`}
          aria-label="Main Navigation"
        >
          <div className="container-fluid px-0">
            {/* Brand Logo & Crest Icon Only */}
            <a
              className="navbar-brand d-flex align-items-center py-1 me-lg-4"
              href="#hero"
              onClick={closeMega}
              aria-label="Dynamic Public School Home"
            >
              <div
                className="p-2 rounded-circle d-flex align-items-center justify-content-center shadow flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #d4af37 0%, #b45309 100%)",
                  width: "44px",
                  height: "44px",
                }}
              >
                <i className="bi bi-mortarboard-fill fs-4 text-dark"></i>
              </div>
            </a>

          {/* Desktop Navigation Links */}
          <div className="d-none d-lg-flex align-items-center mx-auto">
            <ul className="navbar-nav align-items-center gap-1 mb-0">
              <li className="nav-item">
                <a className="nav-link text-light px-3 fw-medium" href="#hero" onClick={closeMega}>
                  Home
                </a>
              </li>

              {/* Academics Mega Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link text-light px-3 fw-medium bg-transparent border-0 d-flex align-items-center gap-1"
                  onClick={() => toggleMega("academics")}
                  aria-expanded={activeMega === "academics"}
                >
                  Academics{" "}
                  <i
                    className="bi bi-chevron-down small text-warning"
                    style={{
                      transition: "transform 0.2s ease",
                      transform: activeMega === "academics" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  ></i>
                </button>
              </li>

              {/* Admissions Mega Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link text-light px-3 fw-medium bg-transparent border-0 d-flex align-items-center gap-1"
                  onClick={() => toggleMega("admissions")}
                  aria-expanded={activeMega === "admissions"}
                >
                  Admissions{" "}
                  <i
                    className="bi bi-chevron-down small text-warning"
                    style={{
                      transition: "transform 0.2s ease",
                      transform: activeMega === "admissions" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  ></i>
                </button>
              </li>

              {/* Campus Life Mega Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link text-light px-3 fw-medium bg-transparent border-0 d-flex align-items-center gap-1"
                  onClick={() => toggleMega("campus")}
                  aria-expanded={activeMega === "campus"}
                >
                  Campus Life{" "}
                  <i
                    className="bi bi-chevron-down small text-warning"
                    style={{
                      transition: "transform 0.2s ease",
                      transform: activeMega === "campus" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  ></i>
                </button>
              </li>

              {/* About Dynamic Public School */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link text-light px-3 fw-medium bg-transparent border-0 d-flex align-items-center gap-1"
                  onClick={() => toggleMega("about")}
                  aria-expanded={activeMega === "about"}
                >
                  About Us{" "}
                  <i
                    className="bi bi-chevron-down small text-warning"
                    style={{
                      transition: "transform 0.2s ease",
                      transform: activeMega === "about" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  ></i>
                </button>
              </li>

              {/* Notice Board */}
              <li className="nav-item">
                <a className="nav-link text-light px-3 fw-medium" href="#notices" onClick={closeMega}>
                  Notices
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Right CTAs */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <a
              href="#campus"
              onClick={closeMega}
              className="btn btn-outline-gold d-inline-flex align-items-center gap-2 py-2 px-3 rounded-pill text-decoration-none small"
            >
              <i className="bi bi-compass"></i>
              <span>Virtual Tour</span>
            </a>

            <Magnet padding={20} magnetStrength={0.3}>
              <button
                onClick={() => {
                  closeMega();
                  onOpenAdmissionModal();
                }}
                className="btn btn-gold py-2 px-4 rounded-pill d-inline-flex align-items-center gap-2 shadow"
                id="desktop-apply-btn"
              >
                <i className="bi bi-pencil-square"></i>
                <span>Apply Now</span>
              </button>
            </Magnet>
          </div>

          {/* Mobile Right Controls (Apply button + Hamburger drawer toggle) */}
          <div className="d-flex d-lg-none align-items-center gap-2">
            <button
              onClick={() => {
                closeMega();
                onOpenAdmissionModal();
              }}
              className="btn btn-gold btn-sm px-3 py-1 rounded-pill"
            >
              Apply
            </button>

            <button
              className="btn btn-outline-light border-secondary p-2 rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "38px", height: "38px" }}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <i className="bi bi-list fs-5 text-warning"></i>
            </button>
          </div>
        </div>

        {/* ==============================================================
           Desktop Full-Width Mega Menus
           ============================================================== */}
        {activeMega && (
          <div className="mega-menu-dropdown d-none d-lg-block" onMouseLeave={closeMega}>
            <div className="container">
              {/* Academics Mega Menu */}
              {activeMega === "academics" && (
                <div className="row g-4">
                  <div className="col-lg-3">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-book-half me-1"></i> Academic Wings
                    </h6>
                    <a href="#legacy" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-balloon-heart"></i></div>
                      <div>
                        <div className="fw-semibold">Early Years (Pre-K - UKG)</div>
                        <small className="text-secondary">Playful experiential discovery</small>
                      </div>
                    </a>
                    <a href="#legacy" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-backpack4"></i></div>
                      <div>
                        <div className="fw-semibold">Primary Wing (Classes I - V)</div>
                        <small className="text-secondary">Foundation literacy & curiosity</small>
                      </div>
                    </a>
                    <a href="#legacy" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-journal-code"></i></div>
                      <div>
                        <div className="fw-semibold">Middle School (VI - VIII)</div>
                        <small className="text-secondary">Analytical inquiry & projects</small>
                      </div>
                    </a>
                    <a href="#legacy" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-mortarboard"></i></div>
                      <div>
                        <div className="fw-semibold">Senior Secondary (IX - XII)</div>
                        <small className="text-secondary">Science, Commerce & Humanities</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-3">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-cpu me-1"></i> Modern STEM & AI
                    </h6>
                    <a href="#campus" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-robot"></i></div>
                      <div>
                        <div className="fw-semibold">AI & Robotics Center</div>
                        <small className="text-secondary">Arduino, Python & ML training</small>
                      </div>
                    </a>
                    <a href="#campus" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-radioactive"></i></div>
                      <div>
                        <div className="fw-semibold">Advanced Science Labs</div>
                        <small className="text-secondary">Physics, Chemistry, Biology</small>
                      </div>
                    </a>
                    <a href="#hall-of-fame" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-trophy"></i></div>
                      <div>
                        <div className="fw-semibold">Olympiad & NTSE Wing</div>
                        <small className="text-secondary">National & global coaching</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-3">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-stars me-1"></i> Values & Methodology
                    </h6>
                    <a href="#legacy" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-flower1"></i></div>
                      <div>
                        <div className="fw-semibold">Vedic Moral Heritage</div>
                        <small className="text-secondary">Universal ethics & Havans</small>
                      </div>
                    </a>
                    <a href="#legacy" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-globe-americas"></i></div>
                      <div>
                        <div className="fw-semibold">NEP 2020 Framework</div>
                        <small className="text-secondary">Holistic 360° progress card</small>
                      </div>
                    </a>
                    <a href="#legacy" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-translate"></i></div>
                      <div>
                        <div className="fw-semibold">Multilingual Enrichment</div>
                        <small className="text-secondary">Sanskrit, German, French & Hindi</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-3">
                    <div className="p-3 rounded-3 glass-panel h-100 d-flex flex-column justify-content-between border border-warning border-opacity-25">
                      <div>
                        <span className="badge bg-warning text-dark fw-bold mb-2">99.8% Distinction</span>
                        <h6 className="text-white fw-bold mb-1">CBSE Class X & XII Results 2025</h6>
                        <p className="text-secondary small mb-3">
                          Over 140+ students scored above 95% with 100% placement in top global universities and IITs.
                        </p>
                      </div>
                      <a href="#hall-of-fame" className="btn btn-outline-gold btn-sm rounded-pill w-100" onClick={closeMega}>
                        View Hall of Fame
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Admissions Mega Menu */}
              {activeMega === "admissions" && (
                <div className="row g-4">
                  <div className="col-lg-4">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-card-checklist me-1"></i> Admissions 2026-27
                    </h6>
                    <a href="#admissions-stepper" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-diagram-3"></i></div>
                      <div>
                        <div className="fw-semibold">Step-by-Step Procedure</div>
                        <small className="text-secondary">Transparent 4-stage admission guide</small>
                      </div>
                    </a>
                    <a href="#admissions-stepper" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-file-earmark-check"></i></div>
                      <div>
                        <div className="fw-semibold">Eligibility & Age Criteria</div>
                        <small className="text-secondary">Detailed grade-wise date cutoffs</small>
                      </div>
                    </a>
                    <a href="#admissions-stepper" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-receipt"></i></div>
                      <div>
                        <div className="fw-semibold">Fee Structure & Transparency</div>
                        <small className="text-secondary">Tuition, transport & lab breakdown</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-award me-1"></i> Scholarships & Support
                    </h6>
                    <a href="#admissions-stepper" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-patch-check"></i></div>
                      <div>
                        <div className="fw-semibold">Merit Scholarships</div>
                        <small className="text-secondary">Up to 100% tuition waiver for toppers</small>
                      </div>
                    </a>
                    <a href="#admissions-stepper" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-trophy"></i></div>
                      <div>
                        <div className="fw-semibold">National Sports Quota</div>
                        <small className="text-secondary">State & national level champions</small>
                      </div>
                    </a>
                    <a href="#admissions-stepper" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-people"></i></div>
                      <div>
                        <div className="fw-semibold">Sibling Concession</div>
                        <small className="text-secondary">Special privilege for DPS families</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4">
                    <div className="p-3 rounded-3 glass-panel h-100 d-flex flex-column justify-content-between border border-warning border-opacity-25">
                      <div>
                        <span className="badge bg-success fw-bold mb-2">Registrations Open</span>
                        <h6 className="text-white fw-bold mb-1">Apply for Session 2026-27</h6>
                        <p className="text-secondary small mb-3">
                          Online registration is open for Nursery to Grade IX and Grade XI. Early evaluation slots are filling fast.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          closeMega();
                          onOpenAdmissionModal();
                        }}
                        className="btn btn-gold btn-sm rounded-pill w-100"
                      >
                        <i className="bi bi-pencil-square me-1"></i> Open Application Form
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Campus Life Mega Menu */}
              {activeMega === "campus" && (
                <div className="row g-4">
                  <div className="col-lg-3">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-building me-1"></i> Infrastructure
                    </h6>
                    <a href="#campus" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-tv"></i></div>
                      <div>
                        <div className="fw-semibold">Smart Classrooms</div>
                        <small className="text-secondary">4K Interactive panels & Wi-Fi 6</small>
                      </div>
                    </a>
                    <a href="#campus" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-book"></i></div>
                      <div>
                        <div className="fw-semibold">Central Digital Library</div>
                        <small className="text-secondary">45,000+ volumes & JSTOR access</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-3">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-dribbble me-1"></i> Sports & Wellness
                    </h6>
                    <a href="#campus" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-water"></i></div>
                      <div>
                        <div className="fw-semibold">Olympic Swimming Pool</div>
                        <small className="text-secondary">50m heated pool with coaches</small>
                      </div>
                    </a>
                    <a href="#campus" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-activity"></i></div>
                      <div>
                        <div className="fw-semibold">Athletics & Indoor Arena</div>
                        <small className="text-secondary">Synthetic track, basketball, squash</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-3">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-shield-check me-1"></i> Safety & Transport
                    </h6>
                    <a href="#campus" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-bus-front"></i></div>
                      <div>
                        <div className="fw-semibold">GPS Bus Fleet</div>
                        <small className="text-secondary">CCTV monitored & female marshals</small>
                      </div>
                    </a>
                    <a href="#campus" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-hospital"></i></div>
                      <div>
                        <div className="fw-semibold">Medical Infirmary</div>
                        <small className="text-secondary">Full-time doctors & emergency care</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-3">
                    <div className="p-3 rounded-3 glass-panel h-100 d-flex flex-column justify-content-between border border-warning border-opacity-25">
                      <div>
                        <span className="badge bg-info text-dark fw-bold mb-2">35-Acre Campus</span>
                        <h6 className="text-white fw-bold mb-1">Take a Virtual Walkthrough</h6>
                        <p className="text-secondary small mb-3">
                          Explore our world-class laboratories, sports pavilions, amphitheater, and Vedic Yagyashala.
                        </p>
                      </div>
                      <a href="#campus" className="btn btn-outline-gold btn-sm rounded-pill w-100" onClick={closeMega}>
                        Explore Facilities
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* About DAV Mega Menu */}
              {activeMega === "about" && (
                <div className="row g-4">
                  <div className="col-lg-4">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-bank me-1"></i> Heritage & Trust
                    </h6>
                    <a href="#legacy" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-hourglass-split"></i></div>
                      <div>
                        <div className="fw-semibold">135+ Years of Legacy</div>
                        <small className="text-secondary">Estd. 1886 by Lala Lajpat Rai & leaders</small>
                      </div>
                    </a>
                    <a href="#legacy" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-compass"></i></div>
                      <div>
                        <div className="fw-semibold">Vision & Mission</div>
                        <small className="text-secondary">Nurturing holistic global citizens</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-person-badge me-1"></i> Leadership
                    </h6>
                    <a href="#principal-message" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-chat-quote"></i></div>
                      <div>
                        <div className="fw-semibold">Principal&apos;s Message</div>
                        <small className="text-secondary">Visionary pedagogical guidance</small>
                      </div>
                    </a>
                    <a href="#principal-message" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-building-check"></i></div>
                      <div>
                        <div className="fw-semibold">Dynamic Public School Trust</div>
                        <small className="text-secondary">Governing council & visionaries</small>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4">
                    <h6 className="text-warning text-uppercase fw-bold small mb-3 letter-spacing-1">
                      <i className="bi bi-file-earmark-lock me-1"></i> Compliance & Trust
                    </h6>
                    <a href="#compliance" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-shield-check"></i></div>
                      <div>
                        <div className="fw-semibold">Mandatory Public Disclosure</div>
                        <small className="text-secondary">CBSE compliance & certificates</small>
                      </div>
                    </a>
                    <a href="#compliance" className="mega-menu-link" onClick={closeMega}>
                      <div className="mega-icon-box"><i className="bi bi-patch-check"></i></div>
                      <div>
                        <div className="fw-semibold">POCSO & Safety Committees</div>
                        <small className="text-secondary">Rigorous child safety measures</small>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
      </div>

      {/* ==============================================================
         3. Mobile Responsive Offcanvas Drawer & Backdrop
         ============================================================== */}
      {mobileMenuOpen && (
        <>
          {/* Dark Backdrop */}
          <div
            className="mobile-drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Drawer */}
          <div className="mobile-drawer p-3" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu" data-lenis-prevent>
            {/* Drawer Header */}
            <div className="d-flex align-items-center justify-content-between pb-3 border-bottom border-secondary border-opacity-25">
              <div className="d-flex align-items-center">
                <div
                  className="p-2 rounded-3 d-flex align-items-center justify-content-center shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, #d4af37 0%, #b45309 100%)",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <i className="bi bi-mortarboard-fill fs-5 text-dark"></i>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-sm btn-outline-secondary rounded-circle"
                style={{ width: "34px", height: "34px" }}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Mobile Menu"
              >
                <i className="bi bi-x-lg text-white"></i>
              </button>
            </div>

            {/* Quick Badge */}
            <div className="my-3">
              <div className="badge bg-danger bg-opacity-75 text-white w-100 py-2 rounded-pill small text-center">
                <i className="bi bi-bell-fill me-1"></i> Admissions 2026-27 Open (Pre-K - Grade XI)
              </div>
            </div>

            {/* Mobile Nav Accordions */}
            <div className="flex-grow-1 overflow-auto pe-1">
              <div className="d-flex flex-column gap-2 mb-3">
                {/* Home link */}
                <a href="#hero" className="mobile-sub-link fw-semibold text-white py-2" onClick={handleMobileNavClick}>
                  <i className="bi bi-house-door text-warning"></i>
                  <span>Home</span>
                </a>

                {/* Academics Accordion */}
                <div>
                  <button
                    className="mobile-accordion-btn"
                    onClick={() => toggleMobileAccordion("academics")}
                    aria-expanded={activeMobileAccordion === "academics"}
                  >
                    <span><i className="bi bi-book-half text-warning me-2"></i>Academics</span>
                    <i className={`bi bi-chevron-${activeMobileAccordion === "academics" ? "up" : "down"} small text-secondary`}></i>
                  </button>
                  {activeMobileAccordion === "academics" && (
                    <div className="ps-2 pt-2 d-flex flex-column gap-1">
                      <a href="#legacy" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-balloon-heart text-info"></i>
                        <span>Early Years (Pre-K - UKG)</span>
                      </a>
                      <a href="#legacy" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-backpack4 text-success"></i>
                        <span>Primary & Middle Wings</span>
                      </a>
                      <a href="#legacy" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-mortarboard text-warning"></i>
                        <span>Senior Secondary (Sci/Comm/Hum)</span>
                      </a>
                      <a href="#campus" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-robot text-cyan"></i>
                        <span>AI & Robotics Hub</span>
                      </a>
                      <a href="#hall-of-fame" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-trophy text-warning"></i>
                        <span>Olympiad & NTSE Wing</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Admissions Accordion */}
                <div>
                  <button
                    className="mobile-accordion-btn"
                    onClick={() => toggleMobileAccordion("admissions")}
                    aria-expanded={activeMobileAccordion === "admissions"}
                  >
                    <span><i className="bi bi-card-checklist text-warning me-2"></i>Admissions</span>
                    <i className={`bi bi-chevron-${activeMobileAccordion === "admissions" ? "up" : "down"} small text-secondary`}></i>
                  </button>
                  {activeMobileAccordion === "admissions" && (
                    <div className="ps-2 pt-2 d-flex flex-column gap-1">
                      <a href="#admissions-stepper" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-diagram-3 text-info"></i>
                        <span>Step-by-Step Procedure</span>
                      </a>
                      <a href="#admissions-stepper" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-file-earmark-check text-success"></i>
                        <span>Age & Eligibility Criteria</span>
                      </a>
                      <a href="#admissions-stepper" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-receipt text-warning"></i>
                        <span>Fee Structure & Transparency</span>
                      </a>
                      <a href="#admissions-stepper" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-patch-check text-primary"></i>
                        <span>Merit & Sports Scholarships</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Campus Life Accordion */}
                <div>
                  <button
                    className="mobile-accordion-btn"
                    onClick={() => toggleMobileAccordion("campus")}
                    aria-expanded={activeMobileAccordion === "campus"}
                  >
                    <span><i className="bi bi-building text-warning me-2"></i>Campus Life</span>
                    <i className={`bi bi-chevron-${activeMobileAccordion === "campus" ? "up" : "down"} small text-secondary`}></i>
                  </button>
                  {activeMobileAccordion === "campus" && (
                    <div className="ps-2 pt-2 d-flex flex-column gap-1">
                      <a href="#campus" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-tv text-info"></i>
                        <span>Smart Classrooms & Labs</span>
                      </a>
                      <a href="#campus" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-water text-primary"></i>
                        <span>Olympic Swimming & Sports Arena</span>
                      </a>
                      <a href="#campus" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-book text-warning"></i>
                        <span>Central Digital Library</span>
                      </a>
                      <a href="#campus" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-bus-front text-success"></i>
                        <span>GPS Bus Fleet & Safety</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* About DAV Accordion */}
                <div>
                  <button
                    className="mobile-accordion-btn"
                    onClick={() => toggleMobileAccordion("about")}
                    aria-expanded={activeMobileAccordion === "about"}
                  >
                    <span><i className="bi bi-bank text-warning me-2"></i>About Dynamic Public School</span>
                    <i className={`bi bi-chevron-${activeMobileAccordion === "about" ? "up" : "down"} small text-secondary`}></i>
                  </button>
                  {activeMobileAccordion === "about" && (
                    <div className="ps-2 pt-2 d-flex flex-column gap-1">
                      <a href="#legacy" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-hourglass-split text-warning"></i>
                        <span>135+ Years of Vedic Heritage</span>
                      </a>
                      <a href="#principal-message" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-chat-quote text-info"></i>
                        <span>Principal&apos;s Message</span>
                      </a>
                      <a href="#testimonials" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-people text-success"></i>
                        <span>Alumni & Parent Testimonials</span>
                      </a>
                      <a href="#hall-of-fame" className="mobile-sub-link" onClick={handleMobileNavClick}>
                        <i className="bi bi-award text-warning"></i>
                        <span>Hall of Fame & Results</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Direct Links */}
                <a href="#notices" className="mobile-sub-link fw-semibold text-white py-2" onClick={handleMobileNavClick}>
                  <i className="bi bi-megaphone-fill text-warning"></i>
                  <span>Official Notice Board</span>
                </a>
              </div>

              {/* Portal Links */}
              <div className="p-3 rounded-3 glass-panel border border-secondary border-opacity-25 mb-3">
                <div className="text-secondary small fw-bold text-uppercase mb-2">Institutional Portals</div>
                <div className="d-flex flex-column gap-2">
                  <a href="#portal" className="text-white-50 text-decoration-none small d-flex align-items-center gap-2">
                    <i className="bi bi-person-circle text-info"></i> Parent ERP Login
                  </a>
                  <a href="#portal" className="text-white-50 text-decoration-none small d-flex align-items-center gap-2">
                    <i className="bi bi-laptop text-warning"></i> Student LMS Portal
                  </a>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-3 border-top border-secondary border-opacity-25 d-flex flex-column gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionModal();
                }}
                className="btn btn-gold py-2 rounded-pill w-100 fw-bold shadow"
              >
                <i className="bi bi-pencil-square me-2"></i>Apply For Admissions 2026
              </button>

              <a
                href="tel:+911126591886"
                className="btn btn-outline-light border-secondary btn-sm py-2 rounded-pill w-100 text-center text-decoration-none small"
              >
                <i className="bi bi-telephone-fill text-warning me-2"></i>Helpline: +91 (11) 2659-1886
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%21%20I%20would%20like%20to%20enquire%20about%20admissions%20for%20the%202026-27%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm py-2 rounded-pill w-100 text-center text-decoration-none small d-flex align-items-center justify-content-center gap-2 fw-semibold"
                style={{
                  background: "rgba(37, 211, 102, 0.15)",
                  border: "1px solid rgba(37, 211, 102, 0.4)",
                  color: "#25D366",
                }}
              >
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp Admissions Desk</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

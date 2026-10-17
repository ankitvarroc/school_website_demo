"use client";

import React, { useState } from "react";

export default function MegaFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="mega-footer pt-5 pb-4 position-relative" aria-label="Institutional Footer">
      <div className="container pt-4 pb-5">
        <div className="row g-5">
          {/* Column 1: School Identity & Motto */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="p-2 rounded-3 d-flex align-items-center justify-content-center shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #d4af37 0%, #b45309 100%)",
                  width: "42px",
                  height: "42px",
                }}
              >
                <i className="bi bi-mortarboard-fill fs-5 text-dark"></i>
              </div>
              <div>
                <div className="fw-bolder fs-5 text-white letter-spacing-1 lh-1">
                  DYNAMIC <span className="gold-gradient-text">PUBLIC SCHOOL</span>
                </div>
                <small className="text-secondary" style={{ fontSize: "0.68rem", letterSpacing: "0.08em" }}>
                  EXCELLENCE IN HOLISTIC EDUCATION • CBSE AFFILIATED
                </small>
              </div>
            </div>

            <p className="text-secondary small leading-relaxed mb-3">
              Affiliated with the Central Board of Secondary Education (CBSE No. 103004). Dedicated to nurturing intellectually fearless, morally grounded, and culturally proud global pioneers.
            </p>

            <div className="p-3 rounded-3 glass-panel border border-warning border-opacity-20 mb-4">
              <div className="text-warning small fw-bold mb-1">
                <i className="bi bi-quote me-1"></i> तमसो मा ज्योतिर्गमय
              </div>
              <div className="text-white-50 small fst-italic" style={{ fontSize: "0.78rem" }}>
                &ldquo;Lead me from darkness into light, from ignorance to truth.&rdquo;
              </div>
            </div>

            {/* Social Media Links */}
            <div className="d-flex gap-2">
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer-social-btn" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Academic Wings */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-3 text-uppercase letter-spacing-1 small">
              <i className="bi bi-book-half text-warning me-1"></i> Academics
            </h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#academics" className="footer-link">Pre-Primary Wing</a></li>
              <li><a href="#academics" className="footer-link">Primary & Middle</a></li>
              <li><a href="#academics" className="footer-link">Senior Secondary</a></li>
              <li><a href="#academics" className="footer-link">Science & AI Stream</a></li>
              <li><a href="#academics" className="footer-link">Commerce & Finance</a></li>
              <li><a href="#academics" className="footer-link">Humanities & Law</a></li>
              <li><a href="#academics" className="footer-link">Olympiad Foundation</a></li>
            </ul>
          </div>

          {/* Column 3: Compliance & Portals */}
          <div className="col-6 col-lg-3">
            <h6 className="text-white fw-bold mb-3 text-uppercase letter-spacing-1 small">
              <i className="bi bi-shield-check text-warning me-1"></i> Compliance & Portals
            </h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#compliance" className="footer-link">Mandatory Public Disclosure</a></li>
              <li><a href="#compliance" className="footer-link">CBSE Affiliation Certificate</a></li>
              <li><a href="#compliance" className="footer-link">Transfer Certificate (TC) Portal</a></li>
              <li><a href="#compliance" className="footer-link">POCSO & Safety Cell</a></li>
              <li><a href="#compliance" className="footer-link">Anti-Bullying Committee</a></li>
              <li><a href="#portal" className="footer-link">Parent ERP Login</a></li>
              <li><a href="#portal" className="footer-link">Student LMS Portal</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="col-lg-3">
            <h6 className="text-white fw-bold mb-3 text-uppercase letter-spacing-1 small">
              <i className="bi bi-geo-alt-fill text-warning me-1"></i> Campus Contact
            </h6>

            <div className="text-secondary small mb-3">
              <div className="text-white fw-semibold mb-1">DAV Knowledge City Campus</div>
              <div>Sector 15, Knowledge Boulevard</div>
              <div>National Capital Region, New Delhi - 110001</div>
            </div>

            <div className="text-secondary small mb-3">
              <div><strong className="text-white">Helpline:</strong> +91 (11) 2659-1886</div>
              <div>
                <strong className="text-white">WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/919876543210?text=Hello%21%20I%20would%20like%20to%20enquire%20about%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success text-decoration-none fw-semibold"
                >
                  <i className="bi bi-whatsapp me-1"></i>+91 98765 43210
                </a>
              </div>
              <div><strong className="text-white">Email:</strong> admissions@davpublicschool.edu</div>
              <div><strong className="text-white">Visiting:</strong> Mon - Sat (8:30 AM - 3:30 PM)</div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-3">
              <div className="text-white small fw-bold mb-2">Subscribe to Institutional Digest</div>
              {subscribed ? (
                <div className="alert alert-success py-2 px-3 small rounded-3 mb-0">
                  <i className="bi bi-check-circle-fill me-1"></i> Thank you! You are subscribed.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="input-group input-group-sm">
                  <input
                    type="email"
                    required
                    className="form-control bg-dark border-secondary text-light small shadow-none"
                    placeholder="Enter parent email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="btn btn-gold small" type="submit">
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="border-top border-secondary border-opacity-15 pt-4 mt-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-secondary small">
          <div>
            © 2026 <strong>Dynamic Public School Educational Trust</strong>. All Rights Reserved.
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="footer-link mb-0">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="footer-link mb-0">Terms of Service</a>
            <span>•</span>
            <a href="#" className="footer-link mb-0">Sitemap</a>
            <span>•</span>
            <a href="#" className="footer-link mb-0">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

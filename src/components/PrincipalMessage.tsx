import React from "react";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section id="principal-message" className="py-5 py-md-6 position-relative border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          {/* Portrait Column */}
          <div className="col-lg-5 text-center text-lg-start">
            <div className="position-relative d-inline-block mx-auto">
              <div
                className="position-relative overflow-hidden rounded-4 shadow-2xl"
                style={{
                  border: "2px solid rgba(212, 175, 55, 0.4)",
                  width: "100%",
                  maxWidth: "420px",
                  aspectRatio: "1 / 1",
                }}
              >
                <Image
                  src="/images/principal.jpg"
                  alt="Dr. Sunita Sharma - Principal of Dynamic Public School"
                  width={420}
                  height={420}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>

              {/* Floating Leadership Badge */}
              <div
                className="position-absolute bottom-0 start-50 translate-middle-x p-3 rounded-3 shadow-lg glass-panel text-center text-nowrap"
                style={{
                  border: "1px solid rgba(212, 175, 55, 0.5)",
                  backdropFilter: "blur(12px)",
                  marginBottom: "-20px",
                }}
              >
                <div className="fw-bold text-white small">Dr. Sunita Sharma, Ph.D.</div>
                <div className="text-warning small" style={{ fontSize: "0.75rem" }}>
                  <i className="bi bi-award-fill me-1"></i> National Pedagogical Awardee
                </div>
              </div>
            </div>
          </div>

          {/* Quote & Vision Column */}
          <div className="col-lg-7">
            <span className="badge-gold mb-3 d-inline-block">
              <i className="bi bi-chat-square-quote-fill me-1"></i> Leadership Vision
            </span>
            <h2 className="display-6 fw-bold text-white mb-4">
              &ldquo;Education is Not Merely Instruction, But the <span className="gold-gradient-text">Awakening of the Inner Spirit</span>.&rdquo;
            </h2>

            <div className="ps-3 border-start border-3 border-warning mb-4">
              <p className="text-light leading-relaxed fs-6 mb-3">
                At Dynamic Public School, we view each child as an extraordinary universe of untapped capability. In an era accelerated by Artificial Intelligence and rapid globalization, education must transcend textbook rote. It must anchor the heart in immutable ethical values while providing the intellectual audacity to question, innovate, and conquer frontiers.
              </p>
              <p className="text-secondary small leading-relaxed mb-0">
                Our classrooms are vibrant sanctuaries where Sanskrit shlokas and Python neural networks share harmonious space. We nurture courageous innovators who will not just adapt to the future, but will lead it with compassioned conscience.
              </p>
            </div>

            <div className="row g-3 pt-2">
              <div className="col-sm-6">
                <div className="p-3 glass-panel rounded-3 d-flex align-items-center gap-3">
                  <div className="mega-icon-box text-warning bg-warning bg-opacity-10">
                    <i className="bi bi-person-check fs-5"></i>
                  </div>
                  <div>
                    <div className="text-white fw-bold small">1:15 Teacher Ratio</div>
                    <small className="text-secondary">Personalized mentoring</small>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-3 glass-panel rounded-3 d-flex align-items-center gap-3">
                  <div className="mega-icon-box text-info bg-info bg-opacity-10">
                    <i className="bi bi-mortarboard fs-5"></i>
                  </div>
                  <div>
                    <div className="text-white fw-bold small">100% Faculty Certified</div>
                    <small className="text-secondary">CBSE & Global Pedagogy</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

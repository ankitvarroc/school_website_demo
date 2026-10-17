import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Vikramaditya Sen",
      role: "Senior Consultant Cardiologist & Proud Parent of Grade X Scholar",
      quote:
        "What sets Dynamic Public School apart is its refusal to treat academic excellence and moral grounding as mutually exclusive. My daughter not only tops her CBSE science exams, but she starts her mornings with self-discipline and empathy.",
      badge: "Parent Community",
      stars: 5,
    },
    {
      name: "Siddharth Malhotra, IAS",
      role: "Alumnus (Batch 2012) • Joint Secretary, Civil Administration",
      quote:
        "The moral integrity, unyielding perseverance, and values instilled in me during my twelve years at Dynamic Public School were the silent anchors that carried me through the UPSC Civil Services.",
      badge: "Distinguished Alumni",
      stars: 5,
    },
    {
      name: "Priyanka Roy",
      role: "Alumna (Batch 2018) • AI Research Scientist, Tech Innovator",
      quote:
        "My journey in Neural Networks began in the 8th-grade robotics lab at Dynamic Public School. The teachers never bounded our imagination by the CBSE syllabus—they encouraged us to publish papers and dream internationally.",
      badge: "Global Innovator",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-5 py-md-6 bg-surface position-relative border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge-gold mb-3 d-inline-block">
              <i className="bi bi-star-fill me-1"></i> Enduring Legacies
            </span>
            <h2 className="display-6 fw-bold text-white mb-3">
              Voices of Trust: <span className="gold-gradient-text">Alumni & Parents</span>
            </h2>
            <p className="text-secondary">
              Hear from generations who have walked our corridors and gone forth to serve the nation and the world with distinction.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="col-lg-4">
              <div className="dav-card p-4 d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-secondary bg-opacity-25 text-warning small rounded-pill px-3 py-1">
                      {t.badge}
                    </span>
                    <div className="text-warning small">
                      {[...Array(t.stars)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill me-1"></i>
                      ))}
                    </div>
                  </div>

                  <p className="text-light fst-italic small leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-15">
                  <div className="fw-bold text-white">{t.name}</div>
                  <small className="text-secondary" style={{ fontSize: "0.78rem" }}>
                    {t.role}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

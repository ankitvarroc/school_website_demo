import React from "react";

export default function AcademicHallOfFame() {
  const toppers = [
    {
      stream: "Science Stream",
      name: "Aarav Sharma",
      score: "99.4%",
      achievement: "AIR 4 JEE Advanced • IIT Bombay CSE",
      icon: "bi-rocket-takeoff-fill",
      tag: "All India Ranker",
    },
    {
      stream: "Commerce Stream",
      name: "Ananya Gupta",
      score: "99.0%",
      achievement: "100/100 in Economics & Accounts • SRCC",
      icon: "bi-graph-up-arrow",
      tag: "Perfect Century",
    },
    {
      stream: "Humanities Stream",
      name: "Kabir Verma",
      score: "98.8%",
      achievement: "St. Stephen's College • National Debater",
      icon: "bi-journal-bookmark-fill",
      tag: "State Rank 1",
    },
  ];

  const honors = [
    {
      title: "NASA Space Settlement Global Contest",
      badge: "1st Prize Worldwide",
      desc: "Dynamic Public School student team designed orbital eco-habitat model judged by NASA scientists.",
      icon: "bi-globe",
    },
    {
      title: "International Physics Olympiad (IPhO)",
      badge: "Silver Medal",
      desc: "Represented Team India in Tokyo among 85 participating nations.",
      icon: "bi-award",
    },
    {
      title: "Khelo India National Games",
      badge: "3 Gold Medals",
      desc: "Championship victories in 50m Butterfly & 200m Freestyle aquatic events.",
      icon: "bi-trophy",
    },
  ];

  return (
    <section id="hall-of-fame" className="py-5 py-md-6 position-relative border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge-gold mb-3 d-inline-block">
              <i className="bi bi-trophy-fill me-1"></i> Academic Dominance
            </span>
            <h2 className="display-6 fw-bold text-white mb-3">
              The Pride of Dynamic Public School: <span className="gold-gradient-text">Hall of Fame</span>
            </h2>
            <p className="text-secondary">
              Excellence is not an exception here; it is our cherished tradition. Celebrating our highest achievers who set national and international benchmarks.
            </p>
          </div>
        </div>

        {/* Board Toppers */}
        <div className="row g-4 mb-5">
          {toppers.map((t, idx) => (
            <div key={idx} className="col-lg-4">
              <div className="dav-card p-4 text-center d-flex flex-column justify-content-between position-relative">
                <div
                  className="position-absolute top-0 end-0 m-3 badge bg-warning text-dark fw-bold small rounded-pill px-3 py-1 shadow-sm"
                >
                  {t.tag}
                </div>

                <div>
                  <div
                    className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center shadow-lg"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "linear-gradient(135deg, #d4af37 0%, #b45309 100%)",
                      color: "#060b17",
                    }}
                  >
                    <i className={`bi ${t.icon} fs-3`}></i>
                  </div>
                  <div className="text-secondary small text-uppercase letter-spacing-1">{t.stream}</div>
                  <h3 className="h4 fw-bold text-white my-1">{t.name}</h3>
                  <div className="display-5 fw-extrabold gold-gradient-text my-2">{t.score}</div>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-20 text-white-50 small">
                  <i className="bi bi-mortarboard text-warning me-1"></i>
                  {t.achievement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Competitions & Sports Glory */}
        <div className="p-4 rounded-4 glass-panel border border-warning border-opacity-20">
          <div className="row align-items-center g-4">
            <div className="col-lg-3 text-center text-lg-start">
              <span className="badge bg-primary bg-opacity-25 text-info px-3 py-1 rounded-pill small mb-2">
                Beyond Academics
              </span>
              <h4 className="fw-bold text-white mb-1">Global Accolades</h4>
              <p className="text-secondary small mb-0">National and global laurels brought home by our students.</p>
            </div>

            <div className="col-lg-9">
              <div className="row g-3">
                {honors.map((h, hIdx) => (
                  <div key={hIdx} className="col-md-4">
                    <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-15 h-100">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <i className={`bi ${h.icon} text-warning fs-5`}></i>
                        <span className="badge bg-warning bg-opacity-20 text-warning small">{h.badge}</span>
                      </div>
                      <div className="text-white fw-bold small mb-1">{h.title}</div>
                      <p className="text-secondary small mb-0" style={{ fontSize: "0.78rem" }}>
                        {h.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

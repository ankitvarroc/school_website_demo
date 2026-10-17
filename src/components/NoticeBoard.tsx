"use client";

import React, { useState } from "react";

export default function NoticeBoard() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const notices = [
    {
      id: 1,
      category: "admissions",
      badge: "Admissions",
      dateDay: "24",
      dateMonth: "OCT",
      title: "Commencement of Online Registration for Pre-School & Class XI (Session 2026-27)",
      target: "Parents & Prospective Students",
      isUrgent: true,
    },
    {
      id: 2,
      category: "academic",
      badge: "Academic",
      dateDay: "02",
      dateMonth: "NOV",
      title: "Schedule for CBSE Pre-Board Examinations & Remedial Booster Classes",
      target: "Classes X & XII",
      isUrgent: false,
    },
    {
      id: 3,
      category: "events",
      badge: "Cultural Fest",
      dateDay: "14",
      dateMonth: "NOV",
      title: "Annual Dynamic Public School Inter-School Innovation & Cultural Conclave 2026",
      target: "All Grades (Classes VI - XII)",
      isUrgent: false,
    },
    {
      id: 4,
      category: "sports",
      badge: "Sports",
      dateDay: "21",
      dateMonth: "NOV",
      title: "Selection Trials for State CBSE Swimming Championship & Athletics Meet",
      target: "Junior & Senior Aquatics Squad",
      isUrgent: false,
    },
  ];

  const filteredNotices = notices.filter((n) => {
    const matchesFilter = filter === "all" || n.category === filter;
    const matchesSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.target.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="notices" className="py-5 py-md-6 bg-surface position-relative border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        <div className="row justify-content-between align-items-end mb-4">
          <div className="col-lg-7">
            <span className="badge-gold mb-3 d-inline-block">
              <i className="bi bi-megaphone-fill me-1"></i> Official Notice Board
            </span>
            <h2 className="display-6 fw-bold text-white mb-2">
              Circulars, Updates & <span className="gold-gradient-text">Upcoming Events</span>
            </h2>
            <p className="text-secondary mb-0">
              Stay updated with academic schedules, institutional circulars, and campus announcements.
            </p>
          </div>

          <div className="col-lg-4 mt-3 mt-lg-0">
            <div className="input-group glass-panel rounded-pill p-1">
              <span className="input-group-text bg-transparent border-0 text-secondary">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control bg-transparent border-0 text-light shadow-none small"
                placeholder="Search circulars by keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="d-flex gap-2 mb-4 flex-wrap">
          <button
            className={`btn btn-sm rounded-pill px-3 ${filter === "all" ? "btn-gold" : "btn-outline-gold"}`}
            onClick={() => setFilter("all")}
          >
            All Notices
          </button>
          <button
            className={`btn btn-sm rounded-pill px-3 ${filter === "admissions" ? "btn-gold" : "btn-outline-gold"}`}
            onClick={() => setFilter("admissions")}
          >
            Admissions
          </button>
          <button
            className={`btn btn-sm rounded-pill px-3 ${filter === "academic" ? "btn-gold" : "btn-outline-gold"}`}
            onClick={() => setFilter("academic")}
          >
            Academic
          </button>
          <button
            className={`btn btn-sm rounded-pill px-3 ${filter === "events" ? "btn-gold" : "btn-outline-gold"}`}
            onClick={() => setFilter("events")}
          >
            Events & Fests
          </button>
          <button
            className={`btn btn-sm rounded-pill px-3 ${filter === "sports" ? "btn-gold" : "btn-outline-gold"}`}
            onClick={() => setFilter("sports")}
          >
            Sports Trials
          </button>
        </div>

        {/* Notices List */}
        <div className="row g-3">
          {filteredNotices.map((notice) => (
            <div key={notice.id} className="col-12">
              <div className="dav-card p-3 p-md-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-3">
                  {/* Date Badge */}
                  <div
                    className="rounded-3 text-center p-2 d-flex flex-column justify-content-center flex-shrink-0"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "rgba(212, 175, 55, 0.15)",
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                    }}
                  >
                    <span className="fw-bolder fs-5 text-warning lh-1">{notice.dateDay}</span>
                    <span className="small text-secondary" style={{ fontSize: "0.7rem", fontWeight: 700 }}>
                      {notice.dateMonth}
                    </span>
                  </div>

                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                      <span className="badge bg-secondary bg-opacity-25 text-warning small rounded-pill px-2 py-1">
                        {notice.badge}
                      </span>
                      {notice.isUrgent && (
                        <span className="badge bg-danger bg-opacity-75 text-white small rounded-pill px-2 py-1">
                          Urgent
                        </span>
                      )}
                      <span className="text-secondary small">
                        <i className="bi bi-people me-1"></i> {notice.target}
                      </span>
                    </div>
                    <h3 className="h6 fw-bold text-white mb-0">{notice.title}</h3>
                  </div>
                </div>

                <div className="flex-shrink-0 align-self-start align-self-md-center">
                  <button className="btn btn-outline-gold btn-sm rounded-pill px-3 d-flex align-items-center gap-2">
                    <i className="bi bi-file-earmark-pdf"></i>
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredNotices.length === 0 && (
            <div className="col-12 text-center py-5 glass-panel">
              <i className="bi bi-search text-secondary fs-2 mb-2 d-block"></i>
              <div className="text-white-50">No notices match your search criteria.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

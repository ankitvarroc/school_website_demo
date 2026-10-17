"use client";

import React from "react";

export default function CampusLocation() {
  return (
    <section id="location" className="py-5 py-md-6 position-relative border-bottom border-secondary border-opacity-10 bg-surface">
      <div className="container py-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge-gold mb-3 d-inline-block">
              <i className="bi bi-geo-alt-fill me-1"></i> Interactive Campus Map & Directions
            </span>
            <h2 className="display-6 fw-bold text-white mb-3">
              Visit <span className="gold-gradient-text">Dynamic Public School</span>
            </h2>
            <p className="text-secondary">
              Conveniently accessible via major arterial expressways, equipped with high-security access gates and dedicated parking for visitors and parents.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          {/* Direction & Contact Details */}
          <div className="col-lg-5">
            <div className="dav-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
                  <i className="bi bi-building text-warning fs-4"></i>
                  <span>Campus Grounds</span>
                </h4>

                <div className="d-flex flex-column gap-3 text-secondary small mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="p-2 rounded-3 text-warning bg-warning bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <i className="bi bi-geo-alt-fill fs-5"></i>
                    </div>
                    <div>
                      <strong className="text-white d-block mb-1">Campus Address</strong>
                      <span>Dynamic Public School Campus, Sector 15, Knowledge Boulevard, NCR</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="p-2 rounded-3 text-info bg-info bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <i className="bi bi-clock-history fs-5"></i>
                    </div>
                    <div>
                      <strong className="text-white d-block mb-1">Visiting Hours</strong>
                      <span>Monday to Saturday: 8:00 AM – 3:30 PM (Prior Appointment Recommended)</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="p-2 rounded-3 text-success bg-success bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <i className="bi bi-shield-check fs-5"></i>
                    </div>
                    <div>
                      <strong className="text-white d-block mb-1">Visitor Security Check-in</strong>
                      <span>Visitor Entry via Security Gate No. 1. Government-issued Photo ID required for gate pass.</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="p-2 rounded-3 text-primary bg-primary bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <i className="bi bi-bus-front fs-5"></i>
                    </div>
                    <div>
                      <strong className="text-white d-block mb-1">Transport Connectivity</strong>
                      <span>Covering 40+ GPS-tracked bus routes with female security marshals.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 pt-2 border-top border-secondary border-opacity-15">
                <a
                  href="https://maps.google.com/?cid=17290435889505868076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 shadow"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href="tel:+911126591886"
                  className="btn btn-outline-gold btn-sm rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-telephone-fill"></i>
                  <span>Call Reception</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed Frame */}
          <div className="col-lg-7">
            <div
              className="position-relative overflow-hidden rounded-4 shadow-2xl border border-warning border-opacity-30"
              style={{
                height: "460px",
                width: "100%",
                background: "#08101d",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6420876083002!2d83.78135731207968!3d25.046217626702674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398dc550a17784c7%3A0xeff3baa89909192c!2sDynamic%20Public%20School!5e0!3m2!1sen!2sin!4v1792162766232!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Dynamic Public School Google Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

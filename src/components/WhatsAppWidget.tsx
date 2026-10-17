"use client";

import React, { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919876543210"; // School admissions WhatsApp number
  const defaultMessage = "Hello! I would like to enquire about admissions for the 2026-27 academic session at Dynamic Public School.";

  const quickInquiries = [
    "Admission Criteria & Eligibility",
    "Fee Structure & Scholarships",
    "Schedule a Campus Visit",
    "Senior Secondary Stream Options (Sci/Comm/Hum)",
  ];

  const handleSendCustom = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div
      className="position-fixed"
      style={{
        bottom: "28px",
        left: "28px",
        zIndex: 1045,
      }}
    >
      {/* Interactive Flyout Popup */}
      {isOpen && (
        <div
          className="glass-panel text-light shadow-2xl p-0 overflow-hidden mb-3 animate-fade-in"
          style={{
            width: "330px",
            borderRadius: "1.25rem",
            border: "1px solid rgba(37, 211, 102, 0.4)",
            background: "#08131e",
          }}
        >
          {/* Header */}
          <div
            className="p-3 d-flex align-items-center justify-content-between"
            style={{
              background: "linear-gradient(135deg, #128c7e 0%, #075e54 100%)",
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <div className="position-relative">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center bg-white text-dark shadow-sm"
                  style={{ width: "38px", height: "38px" }}
                >
                  <i className="bi bi-mortarboard-fill text-success fs-5"></i>
                </div>
                <span
                  className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"
                  style={{ width: "10px", height: "10px" }}
                />
              </div>
              <div>
                <div className="fw-bold text-white small lh-1">Admissions Helpdesk</div>
                <small className="text-white-50" style={{ fontSize: "0.72rem" }}>
                  Online • Replies within minutes
                </small>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-link text-white text-decoration-none p-1"
              aria-label="Close WhatsApp Flyout"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          {/* Body with Welcome Message */}
          <div className="p-3 bg-dark bg-opacity-75">
            <div
              className="p-2 rounded-3 text-secondary small mb-3 border border-secondary border-opacity-15"
              style={{ background: "rgba(255, 255, 255, 0.03)" }}
            >
              <p className="mb-1 text-white-50">
                👋 Namaste! Welcome to the Admissions & Inquiry Portal.
              </p>
              <p className="mb-0">How can our counselors assist your child today?</p>
            </div>

            <div className="text-secondary small fw-semibold mb-2" style={{ fontSize: "0.72rem" }}>
              FREQUENT INQUIRIES:
            </div>

            <div className="d-flex flex-column gap-2 mb-3">
              {quickInquiries.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendCustom(`Hi, I would like to inquire about: ${q}`)}
                  className="btn btn-sm text-start py-2 px-3 rounded-pill d-flex align-items-center justify-content-between"
                  style={{
                    background: "rgba(37, 211, 102, 0.08)",
                    border: "1px solid rgba(37, 211, 102, 0.25)",
                    color: "#f8fafc",
                    fontSize: "0.8rem",
                  }}
                >
                  <span>{q}</span>
                  <i className="bi bi-arrow-right-short text-success fs-5"></i>
                </button>
              ))}
            </div>

            {/* Direct WhatsApp Chat Action */}
            <button
              onClick={() => handleSendCustom(defaultMessage)}
              className="btn w-100 py-2 rounded-pill fw-bold text-dark d-flex align-items-center justify-content-center gap-2 shadow"
              style={{
                background: "#25D366",
              }}
            >
              <i className="bi bi-whatsapp fs-5"></i>
              <span>Start WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn p-0 rounded-circle shadow-2xl d-flex align-items-center justify-content-center"
        style={{
          width: "56px",
          height: "56px",
          background: "linear-gradient(135deg, #25D366 0%, #128c7e 100%)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 10px 25px rgba(37, 211, 102, 0.45)",
          color: "#fff",
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-label="Open WhatsApp Enquiry Chat"
        title="Chat on WhatsApp"
      >
        <i className={`bi ${isOpen ? "bi-x-lg fs-4" : "bi-whatsapp fs-2"}`}></i>
      </button>
    </div>
  );
}

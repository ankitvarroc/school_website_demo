"use client";

import React, { useState } from "react";

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "Grade I",
    phone: "",
    email: "",
    stream: "Science (PCM / PCB + AI)",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(3, 7, 18, 0.8)", backdropFilter: "blur(12px)", zIndex: 1055 }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      data-lenis-prevent
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content glass-panel border border-warning border-opacity-30 text-light shadow-2xl overflow-hidden">
          <div className="modal-header border-bottom border-secondary border-opacity-20 p-4">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-warning text-dark p-2 rounded-3">
                <i className="bi bi-mortarboard-fill fs-5"></i>
              </span>
              <div>
                <h5 className="modal-title fw-bold text-white mb-0">
                  Admissions Application • Academic Session 2026-27
                </h5>
                <small className="text-secondary">Dynamic Public School • CBSE Affiliated Campus</small>
              </div>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white shadow-none"
              aria-label="Close modal"
              onClick={handleReset}
            ></button>
          </div>

          <div className="modal-body p-4">
            {submitted ? (
              <div className="text-center py-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(34, 197, 94, 0.2)",
                    border: "2px solid #22c55e",
                  }}
                >
                  <i className="bi bi-check2-all text-success fs-1"></i>
                </div>
                <h4 className="fw-bold text-white mb-2">Application Successfully Received!</h4>
                <div className="badge bg-warning text-dark fw-bold px-3 py-2 fs-6 mb-3">
                  Application ID: DPS-2026-8941
                </div>
                <p className="text-secondary small mx-auto mb-4" style={{ maxWidth: "480px" }}>
                  Thank you, <strong>{formData.parentName}</strong>. Our Admissions Committee has registered your inquiry for <strong>{formData.studentName}</strong> ({formData.grade}). An automated confirmation has been sent to <strong>{formData.email}</strong>, and our counselor will contact you within 24 hours.
                </p>
                <button onClick={handleReset} className="btn btn-gold rounded-pill px-4 py-2">
                  Done & Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="alert alert-info py-2 px-3 small rounded-3 mb-4 d-flex align-items-center gap-2">
                  <i className="bi bi-info-circle-fill fs-5 text-info"></i>
                  <span>
                    Early application benefits include priority slots for classroom readiness interactions.
                  </span>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-white small fw-semibold">
                      Parent / Guardian Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control bg-dark border-secondary text-light shadow-none"
                      placeholder="e.g., Rajesh Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white small fw-semibold">
                      Student Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control bg-dark border-secondary text-light shadow-none"
                      placeholder="e.g., Aarav Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white small fw-semibold">
                      Applying For Grade <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select bg-dark border-secondary text-light shadow-none"
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    >
                      <option value="Pre-School / Nursery">Pre-School / Nursery (Age 3+)</option>
                      <option value="Kindergarten / UKG">Kindergarten / UKG (Age 4+)</option>
                      <option value="Grade I">Grade I</option>
                      <option value="Grade II - V">Grade II - V (Primary)</option>
                      <option value="Grade VI - VIII">Grade VI - VIII (Middle)</option>
                      <option value="Grade IX - X">Grade IX - X (Secondary)</option>
                      <option value="Grade XI - XII">Grade XI - XII (Senior Secondary)</option>
                    </select>
                  </div>

                  {formData.grade.includes("XI") && (
                    <div className="col-md-6">
                      <label className="form-label text-white small fw-semibold">
                        Select Stream Choice
                      </label>
                      <select
                        className="form-select bg-dark border-secondary text-light shadow-none"
                        value={formData.stream}
                        onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                      >
                        <option value="Science (PCM / PCB + AI)">Science (PCM / PCB + AI & Robotics)</option>
                        <option value="Commerce (Maths / Informatics)">Commerce (Economics, Accounts & Maths)</option>
                        <option value="Humanities (Psychology & Law)">Humanities (Pol. Sci, History, Legal Studies)</option>
                      </select>
                    </div>
                  )}

                  <div className="col-md-6">
                    <label className="form-label text-white small fw-semibold">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="form-control bg-dark border-secondary text-light shadow-none"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white small fw-semibold">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="form-control bg-dark border-secondary text-light shadow-none"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="modal-footer border-top border-secondary border-opacity-20 px-0 pb-0 mt-4">
                  <button type="button" className="btn btn-outline-secondary rounded-pill px-4" onClick={handleReset}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-gold rounded-pill px-4 shadow">
                    Submit Formal Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

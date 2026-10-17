"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { SplitText, BlurText, ShinyText, Magnet } from "@/components/reactbits";

interface HeroVideoProps {
  onOpenAdmissionModal: () => void;
}

export default function HeroVideo({ onOpenAdmissionModal }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Check user's motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="hero" className="hero-video-wrapper position-relative d-flex flex-column justify-content-between" aria-label="Hero Introduction">
      {/* Background Poster Image (Renders immediately for optimal LCP) */}
      <Image
        src="/images/hero_campus.jpg"
        alt="Dynamic Public School Prestigious Campus and Architecture"
        fill
        priority
        className="object-fit-cover"
        style={{
          zIndex: 0,
          opacity: isVideoLoaded ? 0.3 : 1,
          transition: "opacity 1s ease",
        }}
      />

      {/* Video Layer (Ambient loop with school atmosphere) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero_campus.jpg"
        onLoadedData={() => setIsVideoLoaded(true)}
        className="hero-video-element"
        aria-hidden="true"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-43364-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Modern Gradient Overlays for optimal readability and contrast */}
      <div className="hero-gradient-overlay" />
      <div className="hero-radial-vignette" />

      {/* Foreground Hero Content (Centered) */}
      <div className="container hero-content my-auto py-3">
        <div className="row justify-content-center text-center">
          <div className="col-xl-10">
            {/* Prestige Badge with ShinyText */}
            <div className="d-inline-flex mb-3">
              <span className="badge-gold d-inline-flex align-items-center gap-2 shadow-lg">
                <i className="bi bi-stars text-warning fs-6"></i>
                <ShinyText
                  text="★ INDIA'S PREMIER CBSE DAY-CUM-BOARDING INSTITUTION"
                  speed={4}
                />
              </span>
            </div>

            {/* Main H1 Heading with SplitText animation */}
            <h1 className="display-2 fw-bolder text-white tracking-tight mb-3">
              <SplitText
                text="Dynamic Public School"
                delay={0.04}
                duration={0.6}
                by="character"
              />
            </h1>

            {/* Subheading with BlurText */}
            <div className="mx-auto fs-5 text-white-50 mb-4" style={{ maxWidth: "820px", lineHeight: "1.7" }}>
              <BlurText
                text="Empowering future leaders through cutting-edge STEM innovation, Olympic athletic arenas, and values-led holistic education across an eco-smart 35-acre green campus."
                delay={0.02}
                animateBy="words"
              />
            </div>

            {/* Magnetic CTA Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 pt-2">
              <Magnet padding={35} magnetStrength={0.35}>
                <button
                  onClick={onOpenAdmissionModal}
                  className="btn btn-gold btn-lg px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2 shadow-lg"
                  id="hero-apply-btn"
                >
                  <i className="bi bi-mortarboard-fill fs-5"></i>
                  <span>Admissions 2026-27</span>
                  <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </Magnet>

              <Magnet padding={35} magnetStrength={0.35}>
                <a
                  href="#campus"
                  className="btn btn-outline-gold btn-lg px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2 shadow"
                >
                  <i className="bi bi-compass-fill"></i>
                  <span>Explore Campus Facilities</span>
                </a>
              </Magnet>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Metric Ribbon - Anchored at the last part of hero image */}
      <div className="container position-relative pb-3 pb-md-4 mt-auto" style={{ zIndex: 5 }}>
        <div className="hero-stat-ribbon p-3 p-md-4 mx-auto" style={{ maxWidth: "1080px" }}>
          <div className="row g-3 g-md-4 text-center divide-cols align-items-center">
            <div className="col-6 col-md-3 border-end border-secondary border-opacity-25">
              <div className="display-6 fw-bolder gold-gradient-text mb-0">135+</div>
              <div className="small text-white-50 mt-1">Years of Legacy</div>
            </div>
            <div className="col-6 col-md-3 border-end border-secondary border-opacity-25">
              <div className="display-6 fw-bolder text-info mb-0">99.8%</div>
              <div className="small text-white-50 mt-1">Board Distinction</div>
            </div>
            <div className="col-6 col-md-3 border-end border-secondary border-opacity-25">
              <div className="display-6 fw-bolder text-success mb-0">100%</div>
              <div className="small text-white-50 mt-1">University Placements</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="display-6 fw-bolder text-warning mb-0">35 Acres</div>
              <div className="small text-white-50 mt-1">Eco-Smart Green Campus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Media Controls (Accessible play/pause & mute/unmute) */}
      <div className="position-absolute bottom-0 end-0 p-3 p-md-4 d-flex gap-2" style={{ zIndex: 10 }}>
        <button
          onClick={togglePlay}
          className="media-ctrl-btn"
          title={isPlaying ? "Pause background video" : "Play background video"}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"} fs-5`}></i>
        </button>
        <button
          onClick={toggleMute}
          className="media-ctrl-btn"
          title={isMuted ? "Unmute video sound" : "Mute video sound"}
          aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
        >
          <i className={`bi ${isMuted ? "bi-volume-mute-fill" : "bi-volume-up-fill"} fs-5`}></i>
        </button>
      </div>
    </section>
  );
}

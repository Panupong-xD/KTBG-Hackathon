'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemGrid from '../components/ProblemGrid';
import Scrollytelling from '../components/Scrollytelling';
import FeatureDeepDive from '../components/FeatureDeepDive';
import InteractiveSimulator from '../components/InteractiveSimulator';
import TrustSecurityBanner from '../components/TrustSecurityBanner';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Problem Statement (01 - 04 Grid) */}
      <ProblemGrid />

      {/* 4. How It Works: Split-Screen Scrollytelling Walkthrough */}
      <Scrollytelling />

      {/* 5. Deep-Dive: 2 Merged Superpowers */}
      <FeatureDeepDive />

      {/* 6. Interactive Runway & Auto-Save Simulator Playground */}
      <InteractiveSimulator />

      {/* 7. Architecture & Trust Banner (Compliance & Security) */}
      <TrustSecurityBanner />

      {/* 8. Call To Action & Prototype Request */}
      <CallToAction />

      {/* 9. Innovation Footer */}
      <Footer />
    </div>
  );
}

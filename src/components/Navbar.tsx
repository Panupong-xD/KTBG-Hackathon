'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#00A950] flex items-center justify-center text-white font-extrabold text-base tracking-tight shadow-sm">
                <span>K<span className="text-emerald-200">+</span></span>
              </div>
              <div className="flex flex-col">
                <div className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight leading-none">
                  K-Runway & Auto-Save
                </div>
                <span className="text-[10px] font-semibold text-[#00A950] tracking-wider uppercase mt-1">
                  K PLUS Innovation Concept
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-[#00A950] transition-colors">
              ปัญหา
            </a>
            <a href="#how-it-works" className="hover:text-[#00A950] transition-colors">
              ขั้นตอนการทำงาน
            </a>
            <a href="#features" className="hover:text-[#00A950] transition-colors">
              2 เสาหลักนวัตกรรม
            </a>
            <a href="#simulator" className="hover:text-[#00A950] transition-colors">
              เครื่องคำนวณจำลอง
            </a>
            <a href="#security" className="hover:text-[#00A950] transition-colors">
              ความปลอดภัย
            </a>
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#simulator"
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              ลองคำนวณ Runway
            </a>
            <a
              href="#how-it-works"
              className="kbank-btn px-4 py-2 text-xs font-bold rounded-xl shadow-sm hover:brightness-105 flex items-center gap-1 transition-all"
            >
              <span>ดู Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#00A950]"
          >
            ปัญหาที่แก้ (Pain Points)
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#00A950]"
          >
            ขั้นตอนการทำงาน (Scrollytelling)
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#00A950]"
          >
            2 เสาหลักนวัตกรรม
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#00A950]"
          >
            เครื่องคำนวณจำลอง
          </a>
          <a
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#00A950]"
          >
            ความปลอดภัย & PDPA
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold"
            >
              ลองคำนวณ Runway
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl kbank-btn text-xs font-bold"
            >
              ดู Live Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

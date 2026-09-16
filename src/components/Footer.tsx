'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#00A950] flex items-center justify-center text-white font-extrabold text-sm">
                <span>K<span className="text-emerald-200">+</span></span>
              </div>
              <span className="font-extrabold text-slate-900 text-base">
                K-Runway & Auto-Save
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed max-w-md">
              โครงการนำเสนอแนวคิดนวัตกรรม FinTech: การผสานระหว่าง Financial Runway Intelligence และ Intelligent Auto-Save Engine สำหรับพัฒนาประสบการณ์แอป K PLUS
            </p>
            <div className="text-[11px] text-[#008744] font-medium">
              Concept Prototype for Demonstration Purposes
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-3">
              โครงสร้างเนื้อหา
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#problem" className="hover:text-[#00A950] transition-colors">
                  01. ปัญหา (Pain Points)
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#00A950] transition-colors">
                  02. Scrollytelling 5 ขั้นตอน
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#00A950] transition-colors">
                  03. 2 เสาหลักนวัตกรรม
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-[#00A950] transition-colors">
                  04. เครื่องคำนวณ Runway
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#00A950] transition-colors">
                  05. ความปลอดภัย & PDPA
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-3">
              เทคโนโลยี
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Next.js & React (TypeScript)</li>
              <li>• Tailwind CSS & KBank Theme</li>
              <li>• Native Sticky & Intersection Observer</li>
              <li>• Lucide React Icons</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 K-Runway & Auto-Save Showcase. Designed for K PLUS Innovation Exploration.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 text-xs"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>กลับขึ้นด้านบน</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

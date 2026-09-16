'use client';

import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Lock, Gauge, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white border-b border-slate-100 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none -z-10">
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-[#00A950]/5 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#00A950]/10 text-[#008744] border border-[#00A950]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00A950]" />
            <span>AI-Powered Cash Flow & Algorithmic Micro-Saving</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-[1.2] sm:leading-[1.15]">
            รู้ล่วงหน้าว่าเงินจะพอถึงสิ้นเดือนไหม <br className="hidden sm:inline" />
            พร้อมให้ AI ช่วยเก็บเงินส่วนเกิน <br className="hidden sm:inline" />
            <span className="text-[#00A950]">แบบปลอดภัย ไร้กังวล</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            เปลี่ยนแอป <strong className="text-slate-900">K PLUS</strong> ให้ไม่ใช่แค่สมุดบัญชีที่ดูเงินในอดีต แต่ใช้ Machine Learning พยากรณ์กระแสเงินสดล่วงหน้า ตรวจจับเงินเหลือที่ปลอดภัย <span className="text-[#00A950] font-semibold">(Safe-to-Sweep)</span> แล้วแนะแนวการออมแบบกึ่งอัตโนมัติ ภายใต้การอนุมัติของคุณ
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="#how-it-works"
              className="w-full sm:w-auto kbank-btn px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:brightness-105 transition-all"
            >
              <span>ดูขั้นตอนการทำงาน</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#simulator"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors"
            >
              <span>ทดลองระบบจำลอง (Demo)</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </a>
          </div>

          {/* Metric Badges แนวนอน */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl text-left">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00A950] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Zero Overdraft Guarantee</div>
                <div className="text-xs text-slate-500 mt-0.5">การันตีไม่มีวันเงินติดลบหรือโดนค่าปรับ</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">PDPA & Bounded Consent</div>
                <div className="text-xs text-slate-500 mt-0.5">คุณกำหนดเพดานเงินและเงื่อนไขเอง 100%</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Probabilistic ML Forecasting</div>
                <div className="text-xs text-slate-500 mt-0.5">จำลองกระแสเงินสด 10,000 รูปแบบล่วงหน้า</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

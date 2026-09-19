'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, X, Mail } from 'lucide-react';

export default function CallToAction() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean KBank Green Card */}
        <div className="rounded-3xl bg-[#00A950] text-white p-8 sm:p-14 text-center shadow-lg shadow-emerald-700/20">
          <span className="inline-block text-xs font-bold uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full mb-4">
            K PLUS Innovation Concept
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            มองเห็นเส้นทางการเงินล่วงหน้า <br />
            สร้างเงินออมก้อนแรกอย่างมั่นใจ
          </h2>

          <p className="mt-4 text-emerald-50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            ระบบพยากรณ์กระแสเงินสดที่ช่วยวางแผนยอดใช้ได้ต่อวันล่วงหน้าถึงวันเงินเดือนออก พร้อมให้คุณเป็นผู้ควบคุมและตัดสินใจอนุมัติการออมด้วยตนเอง 100%
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto bg-white text-[#008744] hover:bg-emerald-50 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all"
            >
              ขอรับสิทธิ์ Early Prototype
            </button>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all"
            >
              ดูขั้นตอนการทำงานอีกครั้ง
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-100">
            <span>• Overdraft Protection (Hard Floor ฿1,000)</span>
            <span>• PDPA Bounded Consent</span>
            <span>• สิทธิการอนุมัติ 100% โดยผู้ใช้ (ไม่หักเงินเอง)</span>
          </div>
        </div>

      </div>

      {/* Early Access Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl">
            <button
              onClick={() => {
                setModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  ขอรับสิทธิ์ Early Prototype
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  กรอกอีเมลของคุณเพื่อรับสิทธิ์ทดสอบ K-Runway Interactive Prototype และรับข้อมูลอัปเดตสถาปัตยกรรม
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      อีเมลของคุณ
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@domain.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A950]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full kbank-btn py-3 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all"
                  >
                    ยืนยันขอรับสิทธิ์ Prototype
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#00A950] mx-auto flex items-center justify-center mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  ส่งคำขอเรียบร้อยแล้ว
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  บันทึกอีเมล <span className="font-semibold text-slate-900">{email}</span> เรียบร้อยแล้ว ขอบคุณที่ให้ความสนใจ
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

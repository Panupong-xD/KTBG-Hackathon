'use client';

import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, ChevronRight, Sliders, Info, Sparkles } from 'lucide-react';

export default function Screen4Consent() {
  const [isApproved, setIsApproved] = useState(false);

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 p-4 select-none">
      {/* Header Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs font-bold text-white">Co-pilot Consent & Control</span>
        </div>
        <span className="text-[10px] bg-blue-500/20 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/30">
          PDPA Compliant
        </span>
      </div>

      {/* Main Approval Modal Frame */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-850 border border-emerald-500/40 rounded-2xl p-4 mb-3 shadow-xl">
        <div className="text-center mb-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-2 border border-emerald-400/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">ยืนยันการกวาดเงินเย็น (Safe-to-Sweep)</h4>
          <p className="text-[11px] text-slate-300 mt-0.5">ระบบจะไม่ตัดเงินโดยพลการหากไม่ได้รับความยินยอม</p>
        </div>

        {/* Amount Summary */}
        <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700/60 mb-3">
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-slate-400">จากบัญชีหลัก:</span>
            <span className="text-slate-200 font-medium">xxx-2-89412-x</span>
          </div>
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="text-slate-400">ไปยัง:</span>
            <span className="text-emerald-400 font-semibold">Pocket ทริปโตเกียว</span>
          </div>
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-300">ยอดเงินเย็นที่แนะนำ:</span>
            <span className="text-xl font-extrabold text-white">฿150.00</span>
          </div>
        </div>

        {/* Interactive Slide to Sweep Button */}
        <button
          onClick={() => setIsApproved(!isApproved)}
          className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 ${
            isApproved
              ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
              : 'bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-lg shadow-emerald-900/40'
          }`}
        >
          {isApproved ? (
            <>
              <CheckCircle2 className="w-4 h-4" /> อนุมัติการกวาดเงินเรียบร้อย!
            </>
          ) : (
            <>
              <span>สไลด์หรือแตะเพื่ออนุมัติ (Slide to Sweep)</span>
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </>
          )}
        </button>
      </div>

      {/* Bounded Consent Rule Toggles */}
      <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 mt-auto">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-emerald-400" /> ขอบเขตความยินยอม (Bounded Consent)
          </span>
          <span className="text-[10px] text-emerald-400 font-semibold">Active</span>
        </div>

        <div className="space-y-2 text-[11px]">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-slate-700/40">
            <span className="text-slate-300">อนุญาตเฉพาะวันที่ Runway &gt; 80%</span>
            <div className="w-7 h-4 bg-emerald-500 rounded-full flex items-center justify-end px-0.5">
              <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
            </div>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-slate-700/40">
            <span className="text-slate-300">เพดานการออมสูงสุดไม่เกิน ฿150 / ครั้ง</span>
            <div className="w-7 h-4 bg-emerald-500 rounded-full flex items-center justify-end px-0.5">
              <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="mt-2 text-[10px] text-slate-400 text-center font-mono">
          Consent Token: SHA-256 #KP-8842-BOUNDED
        </div>
      </div>
    </div>
  );
}

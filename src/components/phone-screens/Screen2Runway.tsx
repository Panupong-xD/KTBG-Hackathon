'use client';

import React from 'react';
import { Gauge, ShieldCheck, Flame, Calendar, Info, TrendingUp, AlertTriangle } from 'lucide-react';

export default function Screen2Runway() {
  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 p-4 select-none">
      {/* Top Tag */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
          <Gauge className="w-4 h-4 text-emerald-400" />
          Financial Runway Intelligence
        </span>
        <span className="text-[10px] bg-emerald-500/10 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/20">
          Monte Carlo v2.4
        </span>
      </div>

      {/* Main Runway Circular Gauge Card */}
      <div className="relative bg-gradient-to-b from-slate-800/90 to-slate-800/50 border border-slate-700/70 rounded-2xl p-4 text-center mb-3 shadow-lg shadow-black/30">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-emerald-500/5 blur-xl rounded-2xl pointer-events-none" />

        {/* Circular Gauge Graphic */}
        <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r="48"
              className="text-slate-700/60"
              strokeWidth="9"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Progress Arc (85%) */}
            <circle
              cx="60"
              cy="60"
              r="48"
              className="text-emerald-500 transition-all duration-1000 ease-out"
              strokeWidth="9"
              strokeDasharray={2 * Math.PI * 48}
              strokeDashoffset={2 * Math.PI * 48 * (1 - 0.85)}
              strokeLinecap="round"
              stroke="url(#emeraldGradient)"
              fill="transparent"
            />
            <defs>
              <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#00A950" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Content */}
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold text-white tracking-tight">
              85%
            </span>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1 mt-0.5">
              <ShieldCheck className="w-3 h-3" /> Safe Zone
            </span>
          </div>
        </div>

        <div className="mt-1 text-xs text-slate-300 font-medium">
          โอกาส 85% ที่เงินจะพอถึงวันเงินเดือนออก
        </div>
        <div className="text-[11px] text-slate-400 mt-0.5">
          จำลอง 10,000 รูปแบบ พร้อมเกลี่ยชดเชยหากใช้เกิน
        </div>
      </div>

      {/* Burn Rate & Payday Dual Stat */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>ยอดใช้ได้วันนี้</span>
          </div>
          <div className="text-base font-bold text-white">
            ฿380 <span className="text-xs font-normal text-slate-400">/ วัน</span>
          </div>
          <div className="text-[10px] text-emerald-400 mt-0.5">
            เกลี่ยชดเชยนุ่มนวลหากเกิน
          </div>
        </div>

        <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>เงินเดือนออกใน</span>
          </div>
          <div className="text-base font-bold text-white">
            18 วัน
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">
            รอบถัดไป: 28 ก.ย.
          </div>
        </div>
      </div>

      {/* Confidence Intervals Breakdown */}
      <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 mt-auto">
        <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
          <span>Confidence Intervals (กรอบพยากรณ์)</span>
          <span className="text-[10px] text-slate-400 font-mono">95% CI</span>
        </div>
        <div className="space-y-1.5">
          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
              <span className="text-slate-400">Worst Case (ใช้หนัก):</span>
              <span className="font-semibold text-amber-400">14 วัน (ความเสี่ยง 15%)</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-1.5">
              <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '45%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
              <span className="text-slate-400">Expected Case (ตามปกติ):</span>
              <span className="font-semibold text-emerald-400">24 วัน (Safe to Payday)</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-1.5">
              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '85%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

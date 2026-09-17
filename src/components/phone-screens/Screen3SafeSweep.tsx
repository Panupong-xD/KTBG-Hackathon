'use client';

import React from 'react';
import { Sparkles, ArrowRight, Target, ShieldCheck, TrendingUp, DollarSign, Utensils } from 'lucide-react';

export default function Screen3SafeSweep() {
  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 p-4 select-none">
      {/* Header Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
          <span className="text-xs font-bold text-white">AI Detection & Safe-to-Sweep</span>
        </div>
        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
          Daily Scan Completed
        </span>
      </div>

      {/* Main Safe-to-Sweep Found Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900/60 via-slate-800 to-slate-900 border-2 border-emerald-500/50 rounded-2xl p-4 mb-3 shadow-lg shadow-emerald-950/50">
        <div className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[11px] text-emerald-300 font-semibold tracking-wide uppercase flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> ตรวจพบเงินเหลือสิ้นวัน (Safe-to-Sweep)
            </span>
            <div className="text-3xl font-black text-white mt-1 tracking-tight">
              ฿150.00
            </div>
            <p className="text-[11px] text-slate-300 mt-1">
              คำนวณจากวันที่ใช้ต่ำกว่างบ และหักบิลล่วงหน้าครบ 100% แล้ว
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 font-bold">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
          <span className="text-slate-400">เงินเหลือจริง:</span>
          <span className="font-semibold text-emerald-400">ปลอดภัยสำหรับกดยืนยันออม</span>
        </div>
      </div>

      {/* Least-Disruptive Intervention (LDI) Card */}
      <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            Least-Disruptive Action (LDI)
          </span>
          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
            +7% Safety Boost
          </span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          หากลดสั่ง <span className="text-amber-300 font-medium">Food Delivery ลง ฿80/วัน</span> จะดัน Runway Safe Zone พุ่งจาก <span className="font-semibold text-slate-200">85%</span> เป็น <span className="font-bold text-emerald-400">92%</span> โดยกระทบการใช้ชีวิตน้อยที่สุด
        </p>
      </div>

      {/* Recommended Pocket Routing Card */}
      <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 mt-auto">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-blue-400" /> แนะนำเป้าหมายการออม
          </span>
          <span className="text-[10px] text-blue-400 font-mono">68% Reached</span>
        </div>
        
        <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-700/40">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-slate-200">✈️ Pocket: ทริปโตเกียว 2026</span>
            <span className="font-mono text-emerald-400 text-xs">฿34,000 / ฿50,000</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
            <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2 rounded-full" style={{ width: '68%' }} />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span>ย้าย ฿150 วันนี้</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              เร่งถึงเป้าหมายเร็วขึ้น 3 วัน <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { CheckCircle, ShieldAlert, Undo2, ShieldCheck, ArrowRight, Clock, Award } from 'lucide-react';

export default function Screen5Shield() {
  const [undone, setUndone] = useState(false);

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 p-4 select-none">
      {/* Success Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs font-bold text-white">Liquidity Shield Active</span>
        </div>
        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
          Zero Overdraft
        </span>
      </div>

      {/* Main Success Card */}
      <div className="bg-gradient-to-br from-emerald-950/70 via-slate-800 to-slate-900 border border-emerald-500/40 rounded-2xl p-4 text-center mb-3 shadow-lg">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-2 border-2 border-emerald-400/40 shadow-lg shadow-emerald-500/20">
          <CheckCircle className="w-7 h-7" />
        </div>
        <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">
          ยืนยันโอนออมสำเร็จ
        </div>
        <div className="text-2xl font-black text-white mt-0.5">
          ฿150.00
        </div>
        <p className="text-[11px] text-slate-300 mt-1">
          ย้ายเข้า <span className="text-emerald-400 font-bold">K-eSavings</span> รับดอกเบี้ยสูง 1.50% ต่อปี
        </p>
      </div>

      {/* Liquidity Shield Protection Banner */}
      <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 mb-3">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-bold text-slate-200 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Hard Floor Buffer คุ้มกันบัญชี
          </span>
          <span className="text-[10px] text-emerald-400 font-bold">฿1,000.00 Floor</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          การันตีเงินติดบัญชีหลักไม่ต่ำกว่า ฿1,000 เสมอ แม้กดยืนยันออมไปแล้ว หากมีบิลด่วนฉุกเฉินก็มีระบบดึงเงินกลับได้ทันที
        </p>
      </div>

      {/* Reverse Sweep & Undo Engine */}
      <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 mt-auto">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-semibold text-slate-300 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            ระบบความปลอดภัยย้อนกลับ (Reverse Sweep)
          </span>
        </div>
        <p className="text-[10px] text-slate-400 leading-normal mb-2.5">
          หากมีเหตุฉุกเฉิน เงินจะถูกดึงกลับเข้าบัญชีหลักทันทีโดยไร้ค่าธรรมเนียม
        </p>

        {/* Undo Button */}
        <button
          onClick={() => setUndone(!undone)}
          className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            undone
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              : 'bg-slate-700/60 hover:bg-slate-700 text-slate-200 border-slate-600'
          }`}
        >
          <Undo2 className="w-3.5 h-3.5" />
          {undone ? 'ดึงเงิน ฿150 กลับเข้าบัญชีหลักเรียบร้อย' : 'ยกเลิก / ดึงเงินกลับ (Undo ภายใน 24 ชม.)'}
        </button>
      </div>
    </div>
  );
}

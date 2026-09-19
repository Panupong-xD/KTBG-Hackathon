'use client';

import React from 'react';
import { ArrowDownLeft, ArrowUpRight, ShoppingBag, Coffee, Home, Zap, TrendingUp, Sparkles } from 'lucide-react';

export default function Screen1Data() {
  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 p-4 select-none">
      {/* Account Balance Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-4 shadow-lg shadow-emerald-950/40 border border-emerald-400/20 mb-3">
        <div className="flex items-center justify-between text-xs text-emerald-100/80 mb-1">
          <div className="font-medium">
            <span>K-eSavings (บัญชีหลัก)</span>
          </div>
          <span className="font-mono">xxx-2-89412-x</span>
        </div>
        <div className="text-2xl font-bold tracking-tight text-white mt-1">
          ฿15,000.00
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-emerald-500/30 text-[11px] text-emerald-100/90">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" /> AI Classification Active
          </span>
          <span className="bg-emerald-950/50 px-2 py-0.5 rounded-full text-[10px] font-semibold text-emerald-300 border border-emerald-400/30">
            98.4% Target*
          </span>
        </div>
      </div>

      {/* Volatility & Behavior Bar */}
      <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 mb-3">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> พฤติกรรมใช้จ่ายรายสัปดาห์
          </span>
          <span className="text-[10px] text-amber-400 font-medium bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
            Weekend Spike Detected
          </span>
        </div>
        <div className="flex items-end justify-between gap-1.5 h-12 pt-1 px-1">
          {[
            { day: 'จ', h: '35%', spend: '350', fixed: false },
            { day: 'อ', h: '30%', spend: '300', fixed: false },
            { day: 'พ', h: '40%', spend: '420', fixed: false },
            { day: 'พฤ', h: '38%', spend: '390', fixed: false },
            { day: 'ศ', h: '75%', spend: '890', fixed: false },
            { day: 'ส', h: '95%', spend: '1,420', fixed: false, high: true },
            { day: 'อา', h: '65%', spend: '780', fixed: false }
          ].map((item, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`w-full rounded-t-sm transition-all duration-500 ${
                  item.high
                    ? 'bg-gradient-to-t from-amber-500 to-amber-400 shadow-sm shadow-amber-500/50'
                    : 'bg-gradient-to-t from-emerald-600 to-emerald-400'
                }`}
                style={{ height: item.h }}
              />
              <span className={`text-[9px] ${item.high ? 'text-amber-300 font-bold' : 'text-slate-400'}`}>
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction Feed Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1 mb-2 font-medium">
        <span>รายการล่าสุด (AI Tagged)</span>
        <span className="text-[10px] text-emerald-400">จำแนกครบถ้วน</span>
      </div>

      {/* Transactions List */}
      <div className="space-y-2 flex-1 overflow-y-auto pr-0.5">
        {/* Item 1 - Fixed */}
        <div className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 rounded-xl p-2.5 flex items-center justify-between transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">ค่าเช่าหอพัก & ห้องพัก</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] bg-blue-500/20 text-blue-300 font-medium px-1.5 py-0.2 rounded border border-blue-500/30">
                  Fixed Obligation
                </span>
                <span className="text-[10px] text-slate-400">ตัดทุกวันที่ 25</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-rose-400">-฿5,500.00</div>
            <div className="text-[9px] text-slate-400">จำเป็น</div>
          </div>
        </div>

        {/* Item 2 - Discretionary */}
        <div className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 rounded-xl p-2.5 flex items-center justify-between transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">EVEANDBOY สยามสแควร์</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] bg-amber-500/20 text-amber-300 font-medium px-1.5 py-0.2 rounded border border-amber-500/30">
                  Discretionary
                </span>
                <span className="text-[10px] text-slate-400">ช้อปปิ้งวันหยุด</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-rose-400">-฿1,420.00</div>
            <div className="text-[9px] text-slate-400">อารมณ์</div>
          </div>
        </div>

        {/* Item 3 - Fixed utility */}
        <div className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 rounded-xl p-2.5 flex items-center justify-between transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">บิลน้ำไฟ & ค่าเน็ต</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] bg-blue-500/20 text-blue-300 font-medium px-1.5 py-0.2 rounded border border-blue-500/30">
                  Fixed Utility
                </span>
                <span className="text-[10px] text-slate-400">ตัดรอบ 20 ก.ย.</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-rose-400">-฿1,660.00</div>
            <div className="text-[9px] text-slate-400">จำเป็น</div>
          </div>
        </div>

        {/* Item 4 - Cafe */}
        <div className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 rounded-xl p-2.5 flex items-center justify-between transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Starbucks Reserve EmQuartier</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] bg-amber-500/20 text-amber-300 font-medium px-1.5 py-0.2 rounded border border-amber-500/30">
                  Discretionary
                </span>
                <span className="text-[10px] text-slate-400">เครื่องดื่ม</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-rose-400">-฿185.00</div>
            <div className="text-[9px] text-slate-400">ยืดหยุ่นได้</div>
          </div>
        </div>
      </div>
    </div>
  );
}

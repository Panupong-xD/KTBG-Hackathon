'use client';

import React, { useState } from 'react';
import {
  Wifi,
  Battery,
  Signal,
  Bell,
  Power,
  ArrowRightLeft,
  Download,
  Barcode,
  Banknote,
  Eye,
  Home,
  ShoppingBag,
  QrCode,
  MoreHorizontal,
  Star,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

interface KBankPhoneMockupProps {
  activeStep: number;
  onSelectStep?: (index: number) => void;
}

export default function KBankPhoneMockup({ activeStep, onSelectStep }: KBankPhoneMockupProps) {
  const [slideConfirmed, setSlideConfirmed] = useState(false);
  const [undone, setUndone] = useState(false);

  return (
    <div className="relative mx-auto flex flex-col items-center select-none">
      
      {/* Smartphone Hardware Frame (Matte Black Titanium iPhone with Side Buttons) */}
      <div className="relative w-[320px] sm:w-[355px] h-[700px] bg-[#0A0D10] rounded-[52px] p-[10px] shadow-2xl shadow-slate-900/35 border-[4px] border-[#1C2127] ring-1 ring-white/10">
        
        {/* Left Side Volume Buttons on Hardware Frame */}
        <div className="absolute -left-[6px] top-[110px] w-[3px] h-[28px] bg-[#1C2127] rounded-l-sm" />
        <div className="absolute -left-[6px] top-[148px] w-[3px] h-[48px] bg-[#1C2127] rounded-l-sm" />
        <div className="absolute -left-[6px] top-[204px] w-[3px] h-[48px] bg-[#1C2127] rounded-l-sm" />
        
        {/* Right Side Power Button on Hardware Frame */}
        <div className="absolute -right-[6px] top-[140px] w-[3px] h-[65px] bg-[#1C2127] rounded-r-sm" />

        {/* Screen Display Container */}
        <div className="relative w-full h-full bg-[#12272E] text-white rounded-[42px] overflow-hidden flex flex-col font-sans">
          
          {/* iPhone Floating Dynamic Island (Clean pill shape, NOT cutting/แหว่ง into screen) */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-[24px] w-[96px] bg-black rounded-full flex items-center justify-between px-3 z-40 shadow-sm pointer-events-none">
            {/* Camera sensor */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#0d0d0d] ring-1 ring-white/10 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#1a2b3c]/60" />
            </div>
            {/* Green status indicator */}
            <div className="w-2 h-2 rounded-full bg-black flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#00A950] animate-pulse" />
            </div>
          </div>

          {/* iOS Status Bar (Flanking the Dynamic Island) */}
          <div className="h-11 px-6 flex items-center justify-between text-xs text-white z-30 pt-1 shrink-0">
            <span className="font-semibold text-xs tracking-tight pl-1">9:41</span>
            
            {/* Status Icons */}
            <div className="flex items-center gap-1.5 text-white pr-1">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4 text-[#00A950]" />
            </div>
          </div>

          {/* K PLUS App Top Header */}
          <div className="relative px-5 py-2.5 flex items-center justify-between z-20 shrink-0">
            {/* User Avatar with KBank Green Accent Ring */}
            <div className="w-9 h-9 rounded-full bg-[#00A950] p-0.5 shadow-sm shrink-0">
              <div className="w-full h-full rounded-full bg-[#1C3A43] flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                <span className="text-[11px] font-bold tracking-tight">K+</span>
              </div>
            </div>

            {/* Perfectly Centered KBank App Icon (Absolute positioned to ensure true horizontal center) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              <img
                src="/KbankAppIcon.svg"
                alt="KBank App Icon"
                className="w-9 h-9 rounded-xl shadow-md"
              />
            </div>

            {/* Right Icons: Bell with Notification Badge & Power */}
            <div className="flex items-center gap-3 text-slate-200 shrink-0">
              <div className="relative cursor-pointer">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF3B30] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  1
                </span>
              </div>
              <Power className="w-5 h-5 cursor-pointer hover:text-rose-400 transition-colors" />
            </div>
          </div>

          {/* App Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-4 pt-2 pb-24 space-y-4 text-slate-100">
            
            {/* Section 1: K+ To Do / Innovation Feature Card */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-3.5 bg-[#00A950] rounded-full" />
                <span className="text-xs font-bold text-white tracking-wide">
                  K+ To Do
                </span>
              </div>

              {/* Dynamic Feature Card (Replaces Welcome to K+) */}
              <div className="relative bg-white text-slate-900 rounded-2xl p-4 shadow-lg min-h-[148px] flex flex-col justify-between transition-all duration-300">
                
                {/* State 1: Data Ingestion & Classification */}
                {activeStep === 0 && (
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-[11px] font-semibold text-slate-500">ยอดเงินคงเหลือ (วิเคราะห์แล้ว)</div>
                        <div className="text-lg font-extrabold text-slate-900">฿32,500.00</div>
                      </div>
                      {/* <span className="text-[10px] font-bold text-[#00A950] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        ML Categorized
                      </span> */}
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                        <span className="text-slate-600 font-medium truncate">ค่าเช่าที่พัก</span>
                        <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.2 rounded shrink-0">
                          Fixed -฿7,500
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                        <span className="text-slate-600 font-medium truncate">ช้อปปิ้ง & อาหาร</span>
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded shrink-0">
                          Discretionary -฿1,420
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* State 2: Probabilistic Cash-Flow Runway */}
                {activeStep === 1 && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800">Financial Runway</span>
                      <span className="text-[10px] font-bold text-[#00A950] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        85% Safe Zone
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2 overflow-hidden">
                      <div className="bg-[#00A950] h-2.5 rounded-full transition-all duration-500" style={{ width: '85%' }} />
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <div>
                        <div className="text-[10px] text-slate-500">Burn Rate แนะนำ</div>
                        <div className="font-bold text-slate-900">฿380 / วัน</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500">เงินเดือนออกใน</div>
                        <div className="font-bold text-[#00A950]">18 วัน (28 ก.ย.)</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* State 3: Safe-to-Sweep Detection & Recommendation */}
                {activeStep === 2 && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold text-slate-700">ตรวจพบเงินเย็นปลอดภัยวันนี้</span>
                      <span className="text-base font-extrabold text-[#00A950]">฿150.00</span>
                    </div>
                    
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-xs mb-2">
                      <div className="font-bold text-[#008744] text-[11px]">Least-Disruptive Action:</div>
                      <div className="text-slate-700 text-[11px] mt-0.5">
                        ลดชานม/Delivery ฿80/วัน ดัน Safe Zone เป็น 92%
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-600 flex items-center justify-between font-medium">
                      <span>เป้าหมาย: เงินสำรองฉุกเฉิน</span>
                      <span className="text-[#00A950] font-bold">เร็วขึ้น 3 วัน</span>
                    </div>
                  </div>
                )}

                {/* State 4: User Approval with Bounded Consent */}
                {activeStep === 3 && (
                  <div>
                    <div className="text-xs font-bold text-slate-800 mb-1">
                      อนุมัติการออม (Co-pilot Approval)
                    </div>
                    <div className="text-[11px] text-slate-500 mb-2">
                      กวาดเงินเย็น ฿150 เข้า Pocket (Runway 85% ปลอดภัย)
                    </div>

                    <button
                      onClick={() => setSlideConfirmed(!slideConfirmed)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        slideConfirmed
                          ? 'bg-[#00A950] text-white shadow-sm'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {slideConfirmed ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> อนุมัติเรียบร้อย
                        </>
                      ) : (
                        <>
                          <span>สไลด์เพื่อออม ฿150</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <div className="mt-2 text-[10px] text-slate-400 text-center font-medium">
                      Bounded Consent: ออมเฉพาะวันที่ Runway &gt; 80%
                    </div>
                  </div>
                )}

                {/* State 5: Liquidity Shield & Multi-tier Routing */}
                {activeStep === 4 && (
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#00A950] mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#00A950]" />
                      <span>โอน ฿150 เข้า K-eSavings สำเร็จ!</span>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2 text-[11px] mb-2 text-slate-600">
                      <div className="font-bold text-slate-800">Liquidity Shield คุ้มกัน ฿1,000 เสมอ</div>
                      <div>Reverse Sweep ดึงเงินกลับอัตโนมัติหากมีบิลด่วน</div>
                    </div>

                    <button
                      onClick={() => setUndone(!undone)}
                      className="w-full py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{undone ? 'ดึงเงินกลับเรียบร้อย' : 'ยกเลิก / Undo (ภายใน 24 ชม.)'}</span>
                    </button>
                  </div>
                )}

              </div>
            </div>

            {/* Section 2: Quick Banking (4 Outline Buttons) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-3.5 bg-[#00A950] rounded-full" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    Quick Banking
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 cursor-pointer hover:text-white">
                  Edit &gt;
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                {/* Transfer */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-slate-600/80 bg-[#163038] flex items-center justify-center text-slate-200 hover:text-white hover:border-[#00A950] transition-colors">
                    <ArrowRightLeft className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-slate-300 mt-1">Transfer</span>
                </div>

                {/* Top-Up */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-slate-600/80 bg-[#163038] flex items-center justify-center text-slate-200 hover:text-white hover:border-[#00A950] transition-colors">
                    <Download className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-slate-300 mt-1">Top-Up</span>
                </div>

                {/* Payment */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-slate-600/80 bg-[#163038] flex items-center justify-center text-slate-200 hover:text-white hover:border-[#00A950] transition-colors">
                    <Barcode className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-slate-300 mt-1">Payment</span>
                </div>

                {/* Withdraw */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-slate-600/80 bg-[#163038] flex items-center justify-center text-slate-200 hover:text-white hover:border-[#00A950] transition-colors">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-slate-300 mt-1">Withdraw</span>
                </div>
              </div>
            </div>

            {/* Section 3: Quick Balance Card */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-3.5 bg-[#00A950] rounded-full" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    Quick Balance
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 cursor-pointer hover:text-white">
                  Settings &gt;
                </span>
              </div>

              <div className="bg-white text-slate-900 rounded-2xl p-3.5 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-slate-900">My Account</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">xxx-x-x8888-x</div>
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono">
                    XX.XX
                  </div>
                </div>
                <div className="flex justify-end mt-2 pt-1.5 border-t border-slate-100">
                  <span className="text-[10px] text-[#00A950] font-semibold flex items-center gap-1 cursor-pointer">
                    View balance <Eye className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* Section 4: Highlight */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-3.5 bg-[#00A950] rounded-full" />
                <span className="text-xs font-bold text-white tracking-wide">
                  Highlight
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#18353E] border border-slate-700/50 rounded-xl p-2.5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">K Point</div>
                    <div className="text-[10px] text-slate-400">Ease of your lifestyle</div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#00A950] flex items-center justify-center text-white">
                    <Star className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="bg-[#18353E] border border-slate-700/50 rounded-xl p-2.5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Member Point</div>
                    <div className="text-[10px] text-slate-400">Collect points</div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center text-white">
                    <CreditCard className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Floating Navigation Bar (Authentic K PLUS Style) */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-100 flex items-center justify-between px-4 z-40 text-slate-600">
            {/* Home */}
            <div className="flex flex-col items-center cursor-pointer text-[#00A950]">
              <Home className="w-5 h-5" />
              <span className="text-[9px] font-bold mt-0.5">Home</span>
            </div>

            {/* K+ market */}
            <div className="flex flex-col items-center cursor-pointer hover:text-slate-900">
              <ShoppingBag className="w-5 h-5" />
              <span className="text-[9px] font-medium mt-0.5">K+ market</span>
            </div>

            {/* Elevated Banking Button (Round Center ฿) */}
            <div className="flex flex-col items-center -mt-6 cursor-pointer group">
              <div className="w-13 h-13 rounded-full bg-[#52646B] group-hover:bg-[#00A950] p-1 shadow-lg transition-colors flex items-center justify-center">
                <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-white font-extrabold text-base">
                  ฿
                </div>
              </div>
              <span className="text-[9px] font-bold text-slate-700 mt-0.5">Banking</span>
            </div>

            {/* Scan/MyQR */}
            <div className="flex flex-col items-center cursor-pointer hover:text-slate-900">
              <QrCode className="w-5 h-5" />
              <span className="text-[9px] font-medium mt-0.5">Scan/MyQR</span>
            </div>

            {/* More */}
            <div className="flex flex-col items-center cursor-pointer hover:text-slate-900">
              <MoreHorizontal className="w-5 h-5" />
              <span className="text-[9px] font-medium mt-0.5">More</span>
            </div>
          </div>

          {/* Home Indicator Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-300 rounded-full z-50 pointer-events-none" />

        </div>
      </div>

    </div>
  );
}

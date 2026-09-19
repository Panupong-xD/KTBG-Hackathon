'use client';

import React, { useState, useMemo } from 'react';
import { RefreshCw, ShieldCheck } from 'lucide-react';

export default function InteractiveSimulator() {
  const [income, setIncome] = useState<number>(38000);
  const [fixedExpenses, setFixedExpenses] = useState<number>(14500);
  const [daysRemaining, setDaysRemaining] = useState<number>(18);
  const [dailyDiscretionary, setDailyDiscretionary] = useState<number>(450);

  const calculation = useMemo(() => {
    const discretionaryPool = Math.max(0, income - fixedExpenses);
    const projectedSpend = daysRemaining * dailyDiscretionary;
    const projectedSurplus = discretionaryPool - projectedSpend;
    
    let safeZone = 85;
    if (projectedSurplus >= 5000) {
      safeZone = 96;
    } else if (projectedSurplus >= 2500) {
      safeZone = 88;
    } else if (projectedSurplus >= 0) {
      safeZone = 72;
    } else if (projectedSurplus >= -3000) {
      safeZone = 45;
    } else {
      safeZone = 22;
    }

    let safeSweepDaily = 0;
    if (projectedSurplus > 0) {
      safeSweepDaily = Math.min(250, Math.max(50, Math.floor((projectedSurplus * 0.4) / daysRemaining / 10) * 10));
    }

    const monthlySavingPotential = safeSweepDaily * daysRemaining;

    let advice = '';
    let adviceType: 'safe' | 'warning' | 'danger' = 'safe';

    if (safeZone >= 80) {
      advice = `กระแสเงินสดอยู่ในเกณฑ์ปลอดภัยสูง ตรวจพบเงินเย็นเฉลี่ย ฿${safeSweepDaily}/วัน ที่สามารถกวาดเข้ากระเป๋าออมเงินได้โดยไม่สะดุด`;
      adviceType = 'safe';
    } else if (safeZone >= 60) {
      advice = `อยู่ในเกณฑ์ปานกลาง หากลดค่าใช้จ่ายตามอารมณ์ลง ฿50-฿80/วัน จะช่วยดัน Safe Zone ให้เกิน 85% ได้ทันที`;
      adviceType = 'warning';
    } else {
      advice = `สัญญาณเตือนเงินตึงมือ หากใช้จ่ายวันละ ฿${dailyDiscretionary} อาจไม่พอถึงวันเงินเดือนออก แนะนำปรับลดรายจ่ายตามอารมณ์`;
      adviceType = 'danger';
    }

    return {
      discretionaryPool,
      projectedSpend,
      projectedSurplus,
      safeZone,
      safeSweepDaily,
      monthlySavingPotential,
      advice,
      adviceType
    };
  }, [income, fixedExpenses, daysRemaining, dailyDiscretionary]);

  const handleReset = () => {
    setIncome(38000);
    setFixedExpenses(14500);
    setDaysRemaining(18);
    setDailyDiscretionary(450);
  };

  return (
    <section id="simulator" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-[#00A950] bg-[#00A950]/10 px-3 py-1 rounded-full mb-3">
            RUNWAY SIMULATOR
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            ทดลองคำนวณ Runway & Safe-to-Sweep
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            ปรับเปลี่ยนตัวเลขรายได้ รายจ่ายประจำ และวันที่เหลือ เพื่อดูการประเมินโอกาสรอดและเงินเย็นที่ออมได้จริง
          </p>
        </div>

        {/* Playground (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Sliders (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-sm font-bold text-slate-900">
                  ตัวแปรทางการเงินของคุณ
                </span>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" /> คืนค่าเริ่มต้น
                </button>
              </div>

              <div className="space-y-6">
                {/* Income */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2">
                    <span className="text-slate-700">รายรับต่อเดือน (Monthly Income)</span>
                    <span className="font-mono text-[#00A950] font-bold text-base">
                      ฿{income.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="18000"
                    max="100000"
                    step="1000"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00A950]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>฿18,000</span>
                    <span>฿100,000</span>
                  </div>
                </div>

                {/* Fixed Expenses */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2">
                    <span className="text-slate-700">ค่าใช้จ่ายคงที่ (ค่าเช่า/บิล)</span>
                    <span className="font-mono text-slate-900 font-bold text-base">
                      ฿{fixedExpenses.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="45000"
                    step="500"
                    value={fixedExpenses}
                    onChange={(e) => setFixedExpenses(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>฿5,000</span>
                    <span>฿45,000</span>
                  </div>
                </div>

                {/* Days remaining */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2">
                    <span className="text-slate-700">วันที่เหลือถึงวันเงินเดือนออก</span>
                    <span className="font-mono text-slate-900 font-bold text-base">
                      {daysRemaining} วัน
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={daysRemaining}
                    onChange={(e) => setDaysRemaining(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00A950]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1 วัน</span>
                    <span>30 วัน</span>
                  </div>
                </div>

                {/* Daily Spend */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2">
                    <span className="text-slate-700">ค่ากินอยู่เฉลี่ยต่อวัน (Daily Spend)</span>
                    <span className="font-mono text-slate-900 font-bold text-base">
                      ฿{dailyDiscretionary.toLocaleString()} / วัน
                    </span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="1200"
                    step="50"
                    value={dailyDiscretionary}
                    onChange={(e) => setDailyDiscretionary(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00A950]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>฿150</span>
                    <span>฿1,200</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>เงินส่วนที่กินใช้ได้ทั้งเดือน:</span>
              <span className="font-bold text-slate-900 text-sm">
                ฿{calculation.discretionaryPool.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Results Box (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  ผลลัพธ์พยากรณ์
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    calculation.adviceType === 'safe'
                      ? 'bg-emerald-50 text-[#008744]'
                      : calculation.adviceType === 'warning'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}
                >
                  {calculation.adviceType === 'safe' ? 'Safe Runway' : 'Attention'}
                </span>
              </div>

              {/* Safe Zone Probability */}
              <div className="text-center py-4 bg-slate-50 rounded-2xl border border-slate-100 mb-5">
                <div className="text-xs text-slate-500 mb-1">ความน่าจะเป็นที่จะพอใช้ถึงสิ้นเดือน</div>
                <div
                  className={`text-4xl font-extrabold tracking-tight ${
                    calculation.safeZone >= 80
                      ? 'text-[#00A950]'
                      : calculation.safeZone >= 60
                      ? 'text-amber-600'
                      : 'text-rose-600'
                  }`}
                >
                  {calculation.safeZone}%
                </div>
                <div className="w-3/4 mx-auto bg-slate-200 rounded-full h-2 my-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      calculation.safeZone >= 80
                        ? 'bg-[#00A950]'
                        : calculation.safeZone >= 60
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${calculation.safeZone}%` }}
                  />
                </div>
              </div>

              {/* Numbers grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                  <div className="text-[11px] text-slate-500">Safe-to-Sweep แนะนำ</div>
                  <div className="text-base font-bold text-slate-900 mt-1">
                    ฿{calculation.safeSweepDaily} <span className="text-xs font-normal text-slate-500">/ วัน</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                  <div className="text-[11px] text-slate-500">เงินเก็บรอบนี้</div>
                  <div className="text-base font-bold text-[#00A950] mt-1">
                    ฿{calculation.monthlySavingPotential.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Advice */}
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3.5 text-xs text-slate-700 leading-relaxed">
                <strong className="text-emerald-900 block mb-0.5">คำแนะนำ:</strong>
                {calculation.advice}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-[#00A950]">
                <ShieldCheck className="w-3.5 h-3.5" /> Bounded Consent
              </span>
              <span>Overdraft Protection Policy</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

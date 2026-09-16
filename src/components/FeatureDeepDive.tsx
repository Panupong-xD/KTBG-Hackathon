'use client';

import React from 'react';
import { Brain, Coins, Check, ArrowRight } from 'lucide-react';

export default function FeatureDeepDive() {
  return (
    <section id="features" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-[#00A950] bg-[#00A950]/10 px-3 py-1 rounded-full mb-3">
            CORE ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            การผสาน 2 พลังนวัตกรรม FinTech
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            ทำงานประสานกันระหว่าง “สมองคาดการณ์” (Intelligence) และ “มือปฏิบัติการ” (Auto-Save Engine)
          </p>
        </div>

        {/* 2 Big Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Pillar 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#00A950] flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#00A950] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  PILLAR 01 : THE BRAIN
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Financial Runway Intelligence <br />
                <span className="text-base text-slate-500 font-normal">(สมองคาดการณ์กระแสเงินสด)</span>
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                โมเดล Machine Learning ที่เรียนรู้และจำแนกพฤติกรรมกระแสเงินสดระดับรายบุคคล พยากรณ์ความเสี่ยงเงินช็อตล่วงหน้า พร้อมคำนวณ Burn Rate และกรอบความปลอดภัย
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-[#00A950] shrink-0" />
                    <span>Time-Series Machine Learning & NLP</span>
                  </h4>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    วิเคราะห์ยอดคงเหลือสิ้นวัน (EOD Balance) 180 วันล่าสุด แยกค่าใช้จ่ายจำเป็น (Fixed) และค่าใช้จ่ายตามอารมณ์ (Discretionary) อัตโนมัติ
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-[#00A950] shrink-0" />
                    <span>Probabilistic Confidence Intervals</span>
                  </h4>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    จำลองกระแสเงินสด 10,000 สถานการณ์ ประเมินกรอบ Worst Case, Expected Case, และ Best Case เพื่อความแม่นยำแม้รายรับผันผวน
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-[#00A950] shrink-0" />
                    <span>Least-Disruptive Intervention (LDI)</span>
                  </h4>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    แนะนำหมวดค่าใช้จ่ายที่ลดลงแล้วช่วยกู้ Safe Zone ได้มากที่สุด โดยกระทบความสุขในการใช้ชีวิตน้อยที่สุด
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-xs text-slate-500">
              <span>• Monte Carlo Simulation</span>
              <span>• Dynamic Burn Rate</span>
              <span>• Thai Context Natural Advice</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Coins className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  PILLAR 02 : THE ACTUATOR
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Intelligent Auto-Save Engine <br />
                <span className="text-base text-slate-500 font-normal">(มือปฏิบัติการกวาดเงินเย็น)</span>
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                กลไก Micro-Saving อัจฉริยะที่ทำหน้าที่แปลงคำแนะนำเป็นเงินเก็บจริง ตรวจจับ Safe-to-Sweep กวาดเงินส่วนเกินเข้าบัญชีดอกเบี้ยสูง พร้อมคุ้มกันสภาพคล่อง 100%
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Safe-to-Sweep Algorithmic Buffer</span>
                  </h4>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    คำนวณเงินสดส่วนเกินที่ปราศจากความเสี่ยงอย่างแท้จริง หลังหักภาระหนี้ ค่าเช่า และบิลประจำล่วงหน้าทั้งรอบบิล
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Multi-Tier High-Yield Routing</span>
                  </h4>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    โอนเงินไปยังบัญชี K-eSavings (ดอกเบี้ย 1.50% ต่อปี) หรือกระจายเข้า Cloud Pocket เป้าหมายต่างๆ โดยอัตโนมัติ
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Liquidity Shield & Instant Reverse Sweep</span>
                  </h4>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    มี Hard Floor คุ้มกันยอดติดบัญชี ฿1,000 เสมอ และหากมีเหตุฉุกเฉิน ระบบจะดึงเงินกลับอัตโนมัติ พร้อมปุ่ม Undo 24 ชม.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-xs text-slate-500">
              <span>• Zero Overdraft Guarantee</span>
              <span>• Hard Floor Buffer</span>
              <span>• 24h Reverse Sweep</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

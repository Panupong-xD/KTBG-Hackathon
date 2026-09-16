'use client';

import React from 'react';
import { EyeOff, Activity, Wallet, HelpCircle, Check, X } from 'lucide-react';

export default function ProblemGrid() {
  const problems = [
    {
      id: '01',
      title: 'Static Balance Trap',
      thaiTitle: 'กับดักยอดเงินคงเหลือ',
      icon: EyeOff,
      description: 'เปิดแอปเห็นเงินเหลือ 15,000 บาทแล้วคิดว่ารอด แต่ความจริงมีค่าตัดบัตร ค่าหอพัก และบิลคงค้างรอตัดอีก 12,000 บาทในอีก 18 วันข้างหน้า',
      traditionalApp: 'แสดงแค่ยอดเงินปัจจุบัน ไม่บอกว่าเงินนี้จะอยู่รอดได้อีกกี่วัน',
      aiSolution: 'คำนวณ Financial Runway เป็นหน่วย “จำนวนวัน” และ Safe Zone % ทันที'
    },
    {
      id: '02',
      title: 'Income & Expense Volatility',
      thaiTitle: 'รายรับ-รายจ่ายผันผวน',
      icon: Activity,
      description: 'รายได้เสริมและค่าใช้จ่ายไม่คงที่ โดยเฉพาะค่ากินเที่ยวช่วงวันหยุด การทำงบประมาณแบบเดิม (Fixed Budgeting) จึงล้มเหลวแทบทุกครั้ง',
      traditionalApp: 'บังคับแบ่งงบตายตัว พอมีเหตุฉุกเฉินงบก็แตกทันที',
      aiSolution: 'ใช้อัลกอริทึมวิเคราะห์ Time-Series ปรับ Burn Rate ยืดหยุ่นตามพฤติกรรมจริง'
    },
    {
      id: '03',
      title: 'Present Bias & Failed Savings',
      thaiTitle: 'ตั้งใจเก็บเงิน แต่ไม่เคยมีเหลือ',
      icon: Wallet,
      description: 'รอเงินเหลือสิ้นเดือนมักไม่เคยเหลือ หรือเก็บก่อนใช้แบบหักดิบก็เสี่ยงเงินช็อตจนต้องดึงเงินออมกลับมาใช้อยู่ดี',
      traditionalApp: 'หักเงินออมแบบคงที่ เสี่ยงโดนค่าปรับเงินในบัญชีไม่พอ',
      aiSolution: 'Safe-to-Sweep กวาดเฉพาะเงินเย็นที่ปลอดภัยจริง ฿50-฿150 แบบ Micro-saving'
    },
    {
      id: '04',
      title: 'Blind Recommendation',
      thaiTitle: 'คำแนะนำแบบหว่านแห',
      icon: HelpCircle,
      description: 'แอปทั่วไปชอบเตือนแค่ “คุณควรประหยัดเงิน” แต่ไม่เคยบอกว่าต้องตัดหมวดไหน วันละเท่าไหร่ ที่กระทบชีวิตน้อยที่สุด',
      traditionalApp: 'เตือนกว้างๆ ไร้คำแนะนำที่ปฏิบัติได้จริง',
      aiSolution: 'Least-Disruptive Intervention แนะนำเช่น “ลด Food Delivery ฿80/วัน ดัน Safe Zone +7%”'
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full mb-3">
            PAIN POINTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            ทำไมคนส่วนใหญ่ถึงเงินช็อตสิ้นเดือน?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            4 ปัญหาเชิงพฤติกรรมที่แอปธนาคารแบบเดิมยังตอบโจทย์ได้ไม่ครบถ้วน
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-slate-300">
                      {item.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {item.title}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.thaiTitle}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Comparison Box */}
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-start gap-2 text-slate-500 bg-slate-50 p-2.5 rounded-lg">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-700">แอปเดิม:</strong> {item.traditionalApp}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-emerald-900 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-100">
                    <Check className="w-4 h-4 text-[#00A950] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#008744]">K-Runway:</strong> {item.aiSolution}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

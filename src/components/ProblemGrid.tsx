'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export default function ProblemGrid() {
  const problems = [
    {
      id: '01',
      title: 'Static Balance Trap',
      thaiTitle: 'กับดักยอดเงินคงเหลือ',
      description: 'First Jobber เพิ่งได้เงินเดือนก้อนแรก เห็นเงินในบัญชีเหลือ 15,000 บาทแล้วคิดว่ารอด แต่ความจริงมีค่าเช่าหอพัก ค่าตัดบัตร และบิลคงค้างรอตัดอีก 12,000 บาทในอีก 18 วันข้างหน้า',
      traditionalApp: 'แสดงแค่ยอดเงินปัจจุบัน ไม่บอกว่าเงินนี้จะอยู่รอดได้อีกกี่วัน',
      aiSolution: 'คำนวณ Financial Runway เป็นหน่วย “จำนวนวัน” และ Safe Zone % ทันที'
    },
    {
      id: '02',
      title: 'Income & Lifestyle Volatility',
      thaiTitle: 'ค่าใช้จ่ายเข้าสังคมและไลฟ์สไตล์ผันผวน',
      description: 'ช่วงเริ่มทำงานมีค่าสังสรรค์เลี้ยงฉลองงานใหม่ และค่ากินเที่ยววันหยุดไม่แน่นอน การจัดงบประมาณแบบตายตัว (Fixed Budget 50/30/20) จึงล้มเหลวเสมอ',
      traditionalApp: 'บังคับแบ่งงบตายตัว พอมีเหตุฉุกเฉินงบก็แตกทันที',
      aiSolution: 'แปลงเป็นยอดใช้ได้ต่อวัน พร้อมระบบเกลี่ยชดเชยอย่างนุ่มนวลเมื่อใช้เกิน ไม่ทำให้ตกใจ'
    },
    {
      id: '03',
      title: 'Present Bias & Failed Savings',
      thaiTitle: 'ตั้งใจเก็บเงินก้อนแรก แต่ไม่เคยมีเหลือ',
      description: 'ตั้งใจสร้างเงินสำรองฉุกเฉินก้อนแรก แต่รอเงินเหลือสิ้นเดือนมักไม่เคยเหลือ หรือถ้าเก็บก่อนใช้แบบหักดิบก็ช็อตกลางเดือนจนต้องดึงเงินออมกลับมาใช้อยู่ดี',
      traditionalApp: 'แอบหักเงินอัตโนมัติ ทำให้ผู้ใช้รู้สึกสูญเสียการควบคุมเงินตัวเอง',
      aiSolution: 'ตรวจพบเงินเหลือสิ้นวัน แล้วยื่นปุ่มถามให้กดยืนยันออมเองใน 1 คลิก ไม่หักเงินสุ่มสี่สุ่มห้า'
    },
    {
      id: '04',
      title: 'Blind Recommendation',
      thaiTitle: 'คำแนะนำแบบกว้างๆ ไม่รู้จะเริ่มตรงไหน',
      description: 'แอปทั่วไปชอบเตือนแค่ “คุณควรประหยัดเงิน” แต่ First Jobbers ไม่รู้ว่าต้องเริ่มตัดค่าใช้จ่ายหมวดไหน วันละกี่บาท ที่กระทบคุณภาพชีวิตน้อยที่สุด',
      traditionalApp: 'เตือนกว้างๆ ไร้คำแนะนำที่ปฏิบัติได้จริง',
      aiSolution: 'Least-Disruptive Intervention แนะนำเช่น “ลด Food Delivery ฿80/วัน ดัน Safe Zone +7%”'
    }
  ];

  return (
    <section id="problem" className="py-20 bg-emerald-50/30 border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-[#00A950] bg-[#00A950]/10 px-3.5 py-1 rounded-full mb-3 border border-[#00A950]/20">
            FIRST JOBBER PAIN POINTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            ทำไม First Jobbers ถึง <span className="text-[#00A950]">“เงินช็อตสิ้นเดือน”</span> ?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            4 ปัญหาเชิงพฤติกรรมและการตัดสินใจทางการเงินของคนเริ่มทำงาน ที่แอปธนาคารแบบเดิมยังตอบโจทย์ได้ไม่ตรงจุด
          </p>
        </div>

        {/* 4 Cards Grid with Bold KBank Green Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-emerald-100 hover:border-[#00A950] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Green Number */}
                <div className="mb-4">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-[#00A950] group-hover:scale-105 transition-transform inline-block">
                    {item.id}
                  </span>
                </div>

                  <div className="text-xs font-bold text-[#00A950] uppercase tracking-wider mb-1">
                    {item.title}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {item.thaiTitle}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Comparison Box */}
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-start gap-2 text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-700">แอปเดิม:</strong> {item.traditionalApp}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-emerald-950 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    <Check className="w-4 h-4 text-[#00A950] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#008744]">K-Runway Solution:</strong> {item.aiSolution}
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

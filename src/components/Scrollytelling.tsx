'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SCROLLY_STEPS } from '../data/scrollySteps';
import StepCard from './StepCard';
import KBankPhoneMockup from './KBankPhoneMockup';

export default function Scrollytelling() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-step-index'));
          if (!isNaN(index)) {
            setActiveStep(index);
          }
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-25% 0px -35% 0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectStep = (index: number) => {
    setActiveStep(index);
    const targetElement = stepRefs.current[index];
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-[#00A950] bg-[#00A950]/10 px-3 py-1 rounded-full mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            ขั้นตอนการทำงาน 5 ขั้นตอน
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            เลื่อนหน้าจอเพื่อสำรวจการทำงานของระบบจำลองบนแอป K PLUS ด้านขวา
          </p>

          {/* Step Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {SCROLLY_STEPS.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => handleSelectStep(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeStep === idx
                    ? 'bg-[#00A950] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                Step {step.stepNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Split Screen Layout (Desktop: 2 Columns, Sticky Phone on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Scrollable Step Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {SCROLLY_STEPS.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                data-step-index={index}
                className="scroll-mt-32"
              >
                <StepCard
                  step={step}
                  isActive={activeStep === index}
                  onActivate={() => handleSelectStep(index)}
                />
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Phone Mockup (5 cols) */}
          <div className="lg:col-span-5 hidden lg:block sticky top-24">
            <div className="flex justify-center">
              <KBankPhoneMockup
                activeStep={activeStep}
                onSelectStep={handleSelectStep}
              />
            </div>
          </div>

          {/* Mobile Display: Clean Phone Mockup below */}
          <div className="block lg:hidden mt-8">
            <div className="text-center mb-3">
              <span className="text-xs font-semibold text-slate-500">
                หน้าจอ K PLUS จำลองสำหรับ Step {activeStep + 1}
              </span>
            </div>
            <KBankPhoneMockup
              activeStep={activeStep}
              onSelectStep={handleSelectStep}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

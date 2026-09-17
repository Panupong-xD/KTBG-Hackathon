# K-Runway & Predictive Auto-Saving
> **K PLUS Innovation Concept for First Jobbers**  
> *Data Science & Predictive Cash-Flow Intelligence Showcase — KBTG Hackathon*

[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 📌 Executive Summary

**K-Runway & Predictive Auto-Saving** is a flagship innovation concept designed for the **K PLUS** mobile banking ecosystem, specifically engineered to solve the chronic financial friction faced by **First Jobbers**. 

Instead of treating a mobile banking app as a passive *"rearview mirror"* of past transactions, this system transforms K PLUS into an active, intelligent **"30-Day Forward-Looking Financial Co-pilot"**.

By synthesizing **Time-Series Machine Learning, Monte Carlo Probabilistic Simulation**, and **Least-Disruptive Intervention (LDI)** algorithms, the platform predicts cash-flow trajectory weeks in advance, protects users from month-end liquidity crashes, and automatically sweeps safe micro-surpluses into high-yield savings under strict **Bounded Consent** rules.

---

## 🎯 The First Jobber Dilemma (Core Pain Points)

1. **Static Balance Trap**: A user sees ฿15,000 in their checking account and assumes they are financially safe. In reality, fixed obligations (rent, utilities, credit cards) totaling ฿12,000 are scheduled over the next 18 days.
2. **Income & Lifestyle Volatility**: Rigid budgeting models (e.g., Fixed 50/30/20) fail because early-career professionals experience volatile social expenses and unpredictable discretionary spikes.
3. **Present Bias & Failed Savings**: Waiting to save whatever is left at month-end yields ฿0. Conversely, aggressive fixed auto-debits risk overdrafting the account, forcing users to liquidate savings prematurely.
4. **Blind, Non-Actionable Advice**: Traditional banking notifications issue generic warnings like *"You should save more"*, without quantifying where, when, and how much to adjust without degrading quality of life.

---

## ⚡ 2 Core AI Pillars (Architecture Overview)

```
                       [ K PLUS DATA SCIENCE ENGINE ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
 [ PILLAR 01 : THE BRAIN ]                               [ PILLAR 02 : THE ACTUATOR ]
      Dynamic Runway                                      Micro-Surplus Sweeping
 (Predictive Altitude Radar)                             (Checking to Locked Vault)
         |                                                       |
  • Monte Carlo 10,000 Sim                                • Daily Budget (฿380/day)
  • Dynamic Daily Burn Rate                               • Micro-Surplus (+฿150)
  • Early Warning Crash Protection                        • Hard Floor Shield (฿1,000)
  • Safe Zone Touchdown (Day 30)                          • Reverse Sweep (Auto-Refund)
```

### Pillar 01: Dynamic Runway (The Brain)
- **Monte Carlo & Bayesian Time-Series**: Simulates 10,000 forward-looking financial scenarios, integrating pending bills and discretionary volatility into a single probabilistic trajectory.
- **Safe-to-Spend Calibration**: Continuously calculates an adaptive daily operating budget (e.g., ฿380/day).
- **Early Warning Horizon**: Detects cash-flow exhaustion risks 7–14 days in advance, preventing the typical Day 21 month-end financial crash.

### Pillar 02: Micro-Surplus Sweeping & Shield (The Actuator)
- **Safe-to-Sweep Detection**: Identifies idle daily micro-surpluses (e.g., ฿150) that can be safely siphoned without triggering liquidity stress.
- **High-Yield Vault Accumulation**: Sweeps idle funds into an interest-bearing account (e.g., K-eSavings at 1.50% p.a.).
- **Hard Floor ฿1,000 Protection**: Establishes an untouchable liquidity buffer at the bottom of the checking account.
- **Reverse Sweep Circuit**: If unexpected emergency debits arrive, funds are instantly swept back into checking, guaranteeing a **100% Zero-Overdraft Protection**.

---

## 📱 5-Step System Flow (Scrollytelling Walkthrough)

| Step | Phase | Core Data Science Technology | User Benefit |
| :---: | :--- | :--- | :--- |
| **01** | **Data Ingestion & Parsing** | Time-Series Classification & NLP Parsing | Automatically segments transactions into Fixed Obligations vs. Discretionary Spikes with 98.4% accuracy. |
| **02** | **Cash-Flow Runway** | Monte Carlo Simulation & Bayesian Forecasting | Quantifies survival probability into a clean % (Safe Zone 85%) and counts down days until next payday. |
| **03** | **Safe-to-Sweep & LDI** | Least-Disruptive Intervention (LDI) Engine | Isolates safe surplus (e.g., ฿150) and recommends minimal-impact spending adjustments. |
| **04** | **Co-pilot Consent** | Bounded Consent & PDPA Governance | 100% Human-in-the-loop. Users set caps, review proposals, and retain full policy control. |
| **05** | **Liquidity Shield** | Bi-directional Automated Sweeping Circuit | Automated accumulation at 1.50% p.a. with instantaneous Reverse Sweep defense for unexpected charges. |

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (Turbopack, App Router)](https://nextjs.org/)
- **Frontend Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS + KBank Design Palette
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion & Micro-interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Google Fonts Prompt with Cross-Platform DirectWrite/CoreText Word-Break Prevention
- **Deployment**: [Vercel Edge Network](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18.18.0 or later
- npm v9 or later

### 1. Clone the Repository
```bash
git clone https://github.com/Panupong-xD/KTBG-Hackathon.git
cd KTBG-Hackathon
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Repository Structure

```
├── public/                     # Static brand assets (Favicons, KBank icons, logos)
├── scripts/
│   └── build-css.mjs           # Custom Tailwind CSS v4 candidate extraction & build engine
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root Layout & Typography configuration
│   │   ├── page.tsx            # Main Landing Page composition
│   │   └── globals.css         # Generated Tailwind CSS & KBank brand styles
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky Header Navigation
│   │   ├── Hero.tsx            # Hero Headline & Value Proposition
│   │   ├── ProblemGrid.tsx     # 4 Core Problems of First Jobbers
│   │   ├── Scrollytelling.tsx  # 5-Step Interactive Walkthrough
│   │   ├── KBankPhoneMockup.tsx# High-fidelity iPhone Mockup with interactive UI states
│   │   ├── FeatureDeepDive.tsx # 2 AI Superpowers Infographics (Frameless SVG)
│   │   ├── TrustSecurityBanner.tsx # Bank-Grade Security & PDPA Governance
│   │   ├── InnovationConcept.tsx # Summary & Early Prototype Showcase
│   │   ├── Footer.tsx          # Project Footer & Technology Credits
│   │   └── phone-screens/      # 5 Realistic Interactive Mobile Screens
│   │       ├── Screen1Data.tsx
│   │       ├── Screen2Runway.tsx
│   │       ├── Screen3SafeSweep.tsx
│   │       ├── Screen4Consent.tsx
│   │       └── Screen5Shield.tsx
│   └── data/
│       └── scrollySteps.ts     # Data Science step definitions & quantitative metrics
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔒 Security, Compliance & Governance

- **PDPA & Consent-First Protocol**: Zero automated transactions occur without explicit, bounded user authorization.
- **Bounded Automation**: The user defines hard spending floors, maximum sweep amounts, and pause conditions at any time.
- **Zero-Overdraft Guarantee**: The ฿1,000 Hard Floor buffer is shielded 24/7 by instantaneous Reverse Sweeping.
- **Privacy by Design**: Transaction analysis operates using tokenized local identifiers, ensuring zero plain-text customer PII exposure.

---

## 👥 Hackathon Credits

- **Project**: K-Runway & Predictive Auto-Saving
- **Competition**: KBTG Hackathon
- **Track**: Data Science & Predictive Analytics Track
- **Repository**: [Panupong-xD/KTBG-Hackathon](https://github.com/Panupong-xD/KTBG-Hackathon)

---

*Designed with ❤️ for First Jobbers & K PLUS Innovation*

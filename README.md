# K-Runway & Predictive Auto-Saving

> **K PLUS Innovation Architecture for First Jobbers**  
> Data Science & Predictive Cash-Flow Intelligence Showcase — KBTG Hackathon

[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## Overview & Innovation Thesis

**K-Runway & Predictive Auto-Saving** is an enterprise-grade financial architecture proposed for the **K PLUS** mobile banking platform. It addresses the systemic liquidity vulnerabilities experienced by **First Jobbers** during their transition into early-career financial autonomy.

Traditional retail banking applications operate almost exclusively in a retrospective manner, presenting static current balances and historical transaction ledgers. This system shifts the operational paradigm from backward-looking record-keeping to **forward-looking predictive cash-flow co-piloting**.

By integrating **Time-Series Classification**, **Monte Carlo Probabilistic Trajectory Forecasting**, and **Least-Disruptive Intervention (LDI)** algorithms, the platform predicts 30-day liquidity runways, eliminates month-end overdraft hazards, and automatically siphons verified micro-surpluses into high-yield savings under strict **Bounded Consent** protocols.

---

## Problem Statement: First Jobber Financial Fragility

Early-career professionals encounter four recurring behavioral and structural financial bottlenecks:

1. **Static Balance Trap**: Checking accounts display an aggregated balance (e.g., ฿15,000) that gives a false sense of solvency, failing to deduct impending fixed obligations (dormitory rent, utility bills, card settlements) totaling ฿12,000 due over the following 18 days.
2. **Income & Discretionary Volatility**: Strict heuristic budgeting models (such as fixed 50/30/20 distributions) collapse because early-career social commitments and unexpected onboarding expenses do not follow uniform distributions.
3. **Present Bias & Ineffective Accumulation**: Deferring savings until month-end consistently results in zero capital accumulation. Conversely, rigid calendar-based auto-debits introduce overdraft risks, prompting early liquidation of reserve funds.
4. **Non-Actionable Advisory Systems**: Traditional banking advisory notifications offer generic recommendations without quantifying specific spending adjustments or assessing their impact on day-to-day welfare.

---

## Dual-Pillar AI Architecture

```
                       [ K PLUS DATA SCIENCE ENGINE ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
 [ PILLAR 01 : THE BRAIN ]                               [ PILLAR 02 : THE ACTUATOR ]
      Dynamic Runway                                      Micro-Surplus Sweeping
 (Predictive Telemetry Engine)                           (Checking to Locked Vault)
         |                                                       |
  • Monte Carlo 10,000 Sim                                • Daily Budget Calibration (฿380)
  • Dynamic Daily Burn Rate                               • Micro-Surplus Detection (+฿150)
  • Early Warning Horizon (Day 21)                        • Hard Floor Reserve (฿1,000)
  • Safe Zone Touchdown (Day 30)                          • Reverse Sweep Circuit (Auto-Refund)
```

### Pillar 01: Dynamic Runway (Predictive Telemetry Engine)
- **Monte Carlo & Bayesian Forecasting**: Executes 10,000 forward simulations across every billing cycle, factoring in scheduled commitments, probabilistic recurring expenses, and historical variance.
- **Adaptive Daily Burn Rate**: Dynamically calculates a safe-to-spend daily operating budget (e.g., ฿380/day) that flexes according to remaining days and upcoming obligations.
- **Early Warning Horizon**: Flags impending cash-flow inflection points 7 to 14 days in advance, mitigating the typical Day 21 month-end liquidity drop before the danger zone (sub-฿1,000) is breached.

### Pillar 02: Micro-Surplus Sweeping & Shield (Automated Execution Circuit)
- **Safe-to-Sweep Siphoning**: Isolates unencumbered surplus capital (e.g., ฿150/day) that can be removed from daily checking without altering routine lifestyle patterns.
- **High-Yield Target Account**: Directs accumulated capital into an interest-bearing account (K-eSavings at 1.50% p.a.).
- **Hard Floor Liquidity Anchor**: Establishes a strict ฿1,000 baseline reserve in the primary checking account that is permanently preserved.
- **Reverse Sweep Circuit**: If sudden mandatory debits or unexpected expenditures occur, funds in the savings vault are automatically swept back to checking, enforcing a **Zero-Overdraft Guarantee**.

---

## 5-Phase End-to-End System Pipeline

| Phase | Designation | Core Algorithmic Framework | Operational Output |
| :---: | :--- | :--- | :--- |
| **01** | **Data Ingestion & Parsing** | Time-Series Classification & NLP Parser | Categorizes transactions into Fixed Obligations vs. Discretionary Spikes with 98.4% model accuracy. |
| **02** | **Cash-Flow Runway** | Monte Carlo Simulation & Bayesian Forecasting | Projects survival probability into a quantified Safe Zone percentage (85%) alongside a real-time payday countdown. |
| **03** | **Safe-to-Sweep & LDI** | Least-Disruptive Intervention (LDI) Engine | Detects idle micro-surpluses and computes targeted spending adjustments that produce maximum liquidity with minimal lifestyle disruption. |
| **04** | **Co-pilot Consent** | Bounded Consent & PDPA Governance | Requires explicit user authorization for transaction parameters, maintaining human-in-the-loop oversight. |
| **05** | **Liquidity Shield** | Bi-directional Automated Sweeping Circuit | Executes daily micro-accumulation at 1.50% p.a. yield with automated Reverse Sweep recovery when required. |

---

## Technology Stack & Architecture

- **Web Framework**: Next.js 16.3.5 (Turbopack, React Server Components, App Router)
- **Application Core**: React 19.3.0 with TypeScript 7.0
- **Styling Architecture**: Tailwind CSS v4.3.3 with PostCSS and custom KBank brand tokenization
- **Vector Graphics**: Frameless SVG Infographics with optimized DirectWrite / CoreText typography alignment
- **Motion & Transitions**: Framer Motion 13.4.0
- **Iconography**: Lucide React 1.46.0
- **Deployment**: Vercel Edge Global Infrastructure

---

## Local Development & Build Verification

### Prerequisites
- Node.js v18.18.0 or higher
- npm v9.0.0 or higher

### 1. Clone Repository
```bash
git clone https://github.com/Panupong-xD/KTBG-Hackathon.git
cd KTBG-Hackathon
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

### 4. Production Build & Execution
```bash
npm run build
npm run start
```

---

## Directory Structure

```
├── public/                     # Static brand assets and favicons
├── scripts/
│   └── build-css.mjs           # Tailwind CSS v4 compiler and candidate generator
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout and font configurations
│   │   ├── page.tsx            # Main application landing page
│   │   └── globals.css         # Compiled design system and styling tokens
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation header
│   │   ├── Hero.tsx            # Primary value proposition and headline
│   │   ├── ProblemGrid.tsx     # First Jobber structural challenge overview
│   │   ├── Scrollytelling.tsx  # 5-phase interactive phone simulation
│   │   ├── KBankPhoneMockup.tsx# High-fidelity mobile interface viewport
│   │   ├── FeatureDeepDive.tsx # Dual AI pillar technical infographics
│   │   ├── TrustSecurityBanner.tsx # Compliance, privacy, and encryption specifications
│   │   ├── InnovationConcept.tsx # Institutional innovation summary
│   │   ├── Footer.tsx          # Platform metadata and acknowledgments
│   │   └── phone-screens/      # Individual interactive screen implementations
│   │       ├── Screen1Data.tsx
│   │       ├── Screen2Runway.tsx
│   │       ├── Screen3SafeSweep.tsx
│   │       ├── Screen4Consent.tsx
│   │       └── Screen5Shield.tsx
│   └── data/
│       └── scrollySteps.ts     # Data Science pipeline definitions and baseline metrics
├── package.json
├── tsconfig.json
└── README.md
```

---

## Security, PDPA & Bounded Governance

- **Consent-First Architecture**: Automated sweeping operations require upfront user authorization with explicit policy boundaries.
- **User-Defined Constraints**: Users retain absolute authority to adjust daily budget minimums, set maximum sweep limits, or suspend automation at any moment.
- **Zero-Overdraft Enforcement**: Primary checking accounts maintain an unbreachable ฿1,000 hard floor backed by continuous bi-directional liquidity monitoring.
- **Privacy by Design**: Analytical pipelines operate on tokenized, localized transaction identifiers to safeguard personal identifiable information (PII) in compliance with PDPA guidelines.

---

## Project Metadata

- **Initiative**: KBTG Hackathon Innovation Showcase
- **Track**: Data Science & Predictive Analytics
- **Repository**: [Panupong-xD/KTBG-Hackathon](https://github.com/Panupong-xD/KTBG-Hackathon)

export interface ScrollyStep {
  id: number;
  stepNumber: string;
  techBadge: string;
  category: string;
  title: string;
  highlightPhrase: string;
  description: string;
  details: string[];
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
}

export const SCROLLY_STEPS: ScrollyStep[] = [
  {
    id: 1,
    stepNumber: "01",
    techBadge: "Time-Series Classification & Cold Start Onboarding",
    category: "Data Ingestion & Instant Cold Start",
    title: "วิเคราะห์ Transaction History และรองรับ Onboarding บัญชีใหม่",
    highlightPhrase: "แยกแยะค่าใช้จ่ายจำเป็น พร้อมระบบเริ่มใช้งานได้ตั้งแต่วันแรก",
    description: "ระบบดึงประวัติการใช้จ่ายเพื่อจำแนกค่าใช้จ่ายจำเป็น (Fixed Obligations เช่น ค่าเช่า, บิล) ออกจากค่าใช้จ่ายผันแปร (Discretionary) พร้อมระบบ Quick Onboarding ตอบ 4 คำถามสั้นแบบเลือกช่วงเพื่อเริ่มคำนวณงบทันทีสำหรับบัญชีเปิดใหม่",
    details: [
      "เป้าหมายการจำแนกหมวดหมู่ด้วย Machine Learning (Target Benchmark 98.4%*)",
      "Instant Cold Start: บัญชีใหม่ตอบ 4 คำถามสั้น (วันเงินเดือนออก, ช่วงรายได้, ภาระผ่อน/หนี้ประจำ, ความสม่ำเสมอของรายได้) ระบบเริ่มทำงานได้ทันทีโดยไม่ต้องรอประวัติ",
      "ตรวจจับพฤติกรรม High-Spend Weekend และรอบการจ่ายประจำเดือน"
    ],
    metrics: [
      { label: "หมวดหมู่ Fixed", value: "฿7,160", sublabel: "ค่าเช่าหอ ฿5,500 + บิลประจำ ฿1,660" },
      { label: "หมวดหมู่ Discretionary", value: "฿6,840", sublabel: "งบกินใช้ 18 วัน (฿380/วัน)" },
      { label: "ระบบ Cold Start", value: "พร้อมทันที", sublabel: "เลือกเพียง 4 ข้อมูลหลัก (30 วินาที)" }
    ]
  },
  {
    id: 2,
    stepNumber: "02",
    techBadge: "Monte Carlo Simulation & Smooth Budget Re-balancing",
    category: "Financial Runway & Daily Budget",
    title: "แปลงกระแสเงินสดเป็น 'ยอดใช้ได้ต่อวัน' พร้อมเกลี่ยชดเชยนุ่มนวล",
    highlightPhrase: "รู้ยอดที่ใช้ได้ทุกเช้า หากวันไหนใช้เกินจะค่อยๆ เกลี่ยชดเชย ไม่ทำให้ตกใจ",
    description: "คำนวณให้เห็นชัดเจนล่วงหน้าว่าเงินจะพอถึงวันเงินเดือนออกไหม แล้วแปลงเป็น 'ยอดใช้ได้ต่อวัน' ให้เห็นง่ายๆ ทุกเช้า เช่น วันนี้ใช้ได้ ฿380 หากวันไหนใช้เกิน ระบบจะไม่ฟันธงว่าเงินจะหมดให้ตกใจ แต่จะค่อยๆ ลดยอดของวันถัดๆ ไปทีละนิด เพื่อชดเชยแบบนุ่มนวล ไม่กระทบวันเดียวหนักๆ",
    details: [
      "แปลงเป็น Daily Safe-to-Spend เห็นยอดใช้ได้ชัดเจนทุกเช้า (฿380/วัน)",
      "Smooth Re-balancing: เกลี่ยชดเชยวันถัดไปอย่างนุ่มนวลเมื่อใช้เกินงบ",
      "จำลองสถานการณ์ล่วงหน้า 10,000 ครั้ง (Simulation Benchmark) มั่นใจเงินพอถึงสิ้นเดือน 85%"
    ],
    metrics: [
      { label: "ยอดใช้ได้วันนี้", value: "฿380 / วัน", sublabel: "ยอดแนะนำเพื่อคุมเงินให้พอถึงสิ้นเดือน" },
      { label: "Runway Safe Zone", value: "85%", sublabel: "โอกาสรอดถึงวันเงินเดือนออก" },
      { label: "นับถอยหลัง", value: "18 วัน", sublabel: "ก่อนเงินเดือนรอบถัดไปเข้า" }
    ]
  },
  {
    id: 3,
    stepNumber: "03",
    techBadge: "Least-Disruptive Intervention (LDI) Engine",
    category: "Leftover Surplus Detection & Action",
    title: "ตรวจจับเงินเหลือจริงสิ้นวัน (Safe-to-Sweep) และแนะแนว Action",
    highlightPhrase: "หากวันไหนใช้ต่ำกว่างบ ระบบจะคำนวณเงินส่วนเกินที่ปลอดภัยสำหรับออม",
    description: "หากวันไหนผู้ใช้ใช้เงินน้อยกว่ายอดแนะนำ ระบบจะตรวจพบเงินเหลือจริงสิ้นวัน (Safe-to-Sweep) โดยหักสำรองหนี้สินและบิลล่วงหน้าอย่างรัดกุม แล้วยื่นข้อเสนอแนะเช่น 'วันนี้มีเงินเหลือ ฿150 สนใจย้ายไปกระเป๋าเป้าหมายไหม' พร้อมแนะนำการปรับพฤติกรรมที่กระทบชีวิตน้อยที่สุด (LDI)",
    details: [
      "ตรวจจับเงินเหลือจริงเมื่อใช้จ่ายต่ำกว่า Daily Budget ที่แนะนำ",
      "คำนวณ Safe-to-Sweep โดยหักสำรองหนี้สินและบิลที่จ่อตัดล่วงหน้าอย่างครบถ้วน",
      "แนะนำการปรับพฤติกรรมที่กระทบชีวิตน้อยที่สุด (LDI) ชี้แนะจุดปรับเล็กๆ ที่ช่วยเพิ่มความปลอดภัย เช่น ลด Delivery ฿80/วัน (ตัวอย่างผลลัพธ์จากระบบ)"
    ],
    metrics: [
      { label: "ตรวจพบเงินเหลือจริง", value: "฿150", sublabel: "Safe-to-Sweep ปลอดภัยสำหรับวันนี้" },
      { label: "LDI Target (ตัวอย่าง)", value: "-฿80/วัน", sublabel: "ลด Food Delivery" },
      { label: "ผลลัพธ์ Safe Zone", value: "↗ 92%", sublabel: "ความปลอดภัยเพิ่มขึ้นทันที" }
    ]
  },
  {
    id: 4,
    stepNumber: "04",
    techBadge: "100% User-Controlled Consent & Co-pilot Model",
    category: "Human-in-the-Loop Approval",
    title: "ไม่หักเงินเองเด็ดขาด! ผู้ใช้เป็นผู้กดยืนยันการออมเองทุกครั้ง",
    highlightPhrase: "ระบบจะไม่ตัดเงินไปเก็บเองโดยพลการ คุณเป็นผู้มีอำนาจตัดสินใจ 100%",
    description: "ออกแบบจากข้อมูลจริงว่าผู้ใช้ไม่ชอบให้แอปแอบตัดเงินไปเก็บเองโดยไม่บอกล่วงหน้าเพราะรู้สึกคุมเงินไม่ได้ K-Runway จึงทำหน้าที่เป็น Co-pilot คอยคำนวณและแนะนำให้ดูเท่านั้น หากต้องการออมเงินส่วนที่เหลือ ผู้ใช้ต้องเป็นคนกดยืนยัน (1-Tap / Slide to Save) ด้วยตัวเองทุกครั้ง",
    details: [
      "Zero Forced Auto-Debit: ระบบไม่หักเงินไปออมเองเด็ดขาดทุกกรณี",
      "1-Tap Manual Confirmation: กดยืนยันออมเงินเหลือได้ง่ายๆ ใน 1 วินาที",
      "Bounded Rules: ตั้งเงื่อนไขช่วยคัดกรอง เช่น ถามออมเฉพาะวันที่ Runway > 80%"
    ],
    metrics: [
      { label: "สิทธิการตัดสินใจ", value: "100%", sublabel: "ผู้ใช้ควบคุมได้ทุกขั้นตอน" },
      { label: "ความโปร่งใส", value: "Zero Surprise", sublabel: "ไม่ตัดเงินโดยพลการเด็ดขาด" },
      { label: "Max Sweep Cap", value: "≤ ฿150 / ครั้ง", sublabel: "เพดานเงินออมที่แนะนำต่อวัน" }
    ]
  },
  {
    id: 5,
    stepNumber: "05",
    techBadge: "Multi-tier Routing & Liquidity Shield",
    category: "Multi-tier Routing & Shield",
    title: "คุ้มกันสภาพคล่องด้วย Liquidity Shield และ Reverse Sweep",
    highlightPhrase: "ออกแบบมาเพื่อป้องกันบัญชีติดลบ พร้อมปุ่มดึงเงินกลับใน 24 ชั่วโมง",
    description: "เมื่อผู้ใช้กดยืนยันออม เงินส่วนเกินจะย้ายไปรับดอกเบี้ยสูงใน K-eSavings (1.25% ต่อปี* สำหรับยอดไม่เกิน 500,000 บาท) พร้อมเปิดบัญชีดิจิทัลให้อัตโนมัติเมื่อยืนยันครั้งแรก โดยระบบมี Hard Floor คุ้มกันเงินติดบัญชีหลัก ฿1,000 เสมอ และหากมีเหตุฉุกเฉิน ระบบมี Reverse Sweep และปุ่ม Undo คอยดึงเงินกลับเข้าบัญชีหลักได้ทันที ไร้ค่าธรรมเนียม",
    details: [
      "Hard Floor Protection: บัญชีหลักจะมีเงินกันชนขั้นต่ำ 1,000 บาทเสมอ",
      "Reverse Sweep Engine: ดึงเงินจากกระเป๋าออมกลับมาให้อัตโนมัติเมื่อตรวจพบการรูดฉุกเฉิน",
      "Overdraft Protection: ออกแบบมาเพื่อป้องกันเงินเกินบัญชี พร้อมปุ่ม Undo 24 ชม."
    ],
    metrics: [
      { label: "Hard Floor Buffer", value: "฿1,000", sublabel: "คุ้มกันติดบัญชีหลักเสมอ" },
      { label: "ผลตอบแทนดอกเบี้ย", value: "1.25% p.a.*", sublabel: "เปิดบัญชี K-eSavings อัตโนมัติในคลิกแรก" },
      { label: "Reverse Sweep & Undo", value: "24 ชั่วโมง", sublabel: "ดึงเงินกลับได้ใน 1 คลิก" }
    ]
  }
];

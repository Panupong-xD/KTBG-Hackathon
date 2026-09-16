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
    techBadge: "Time-Series Classification & NLP Parser",
    category: "Data Ingestion & Classification",
    title: "ดึง Transaction History และวิเคราะห์พฤติกรรมอัตโนมัติ",
    highlightPhrase: "แยกแยะค่าใช้จ่ายจำเป็นออกจากอารมณ์ชั่ววูบ",
    description: "ระบบดึงประวัติการใช้จ่ายย้อนหลังผ่าน Secure Open Banking API จำแนกค่าใช้จ่ายจำเป็น (Fixed Obligations เช่น ค่าเช่าห้อง, บิลค่าไฟ, ค่าเดินทาง) ออกจากค่าใช้จ่ายตามอารมณ์ (Discretionary เช่น ช้อปปิ้ง, คาเฟ่) พร้อมตรวจจับช่วงวันใช้จ่ายหนัก (High-spend weekend spike)",
    details: [
      "แท็กอัตโนมัติ 48 หมวดหมู่ด้วย Machine Learning ความแม่นยำ 98.4%",
      "ตรวจจับพฤติกรรม High-Spend Weekend และรอบการจ่ายประจำเดือน",
      "แยกกระแสเงินสดรายได้ประจำและรายได้เสริมอย่างแม่นยำ"
    ],
    metrics: [
      { label: "หมวดหมู่ Fixed", value: "฿12,419", sublabel: "ค่าเช่าห้อง + บิลประจำ" },
      { label: "หมวดหมู่ Discretionary", value: "฿6,830", sublabel: "คาเฟ่ & ช้อปปิ้งออนไลน์" },
      { label: "ความแม่นยำ NLP", value: "98.4%", sublabel: "ความแม่นยำการจำแนก" }
    ]
  },
  {
    id: 2,
    stepNumber: "02",
    techBadge: "Monte Carlo Simulation & Bayesian Forecasting",
    category: "Probabilistic Cash-Flow Runway",
    title: "ประเมินความเสี่ยงเงินช็อตล่วงหน้าด้วย Probabilistic ML",
    highlightPhrase: "ไม่ใช่แค่ดูอดีต แต่รู้ล่วงหน้าว่าเงินจะพอถึงสิ้นเดือนกี่ %",
    description: "แทนที่จะบอกว่าเงินจะหมดวันไหนเป็นตัวเลขทื่อๆ ระบบจำลองแนวโน้มแบบความน่าจะเป็น (Probabilistic Distribution) กว่า 10,000 สถานการณ์ ว่าคุณมีโอกาส 85% ที่จะเงินพอใช้ถึงวันเงินเดือนออก โดยคำนวณ Burn Rate เฉลี่ย ฿420/วัน พร้อมนับถอยหลัง 18 วันเงินเดือนออก",
    details: [
      "แสดงกรอบความเชื่อมั่น Confidence Interval 3 ระดับ (Worst / Expected / Best)",
      "คำนวณ Dynamic Daily Burn Rate แบบปรับตัวตามวันที่เหลือ",
      "ระบบแจ้งเตือนล่วงหน้า (Early Warning) 7-14 วันก่อนเกิดวิกฤตเงินตึงมือ"
    ],
    metrics: [
      { label: "Runway Safe Zone", value: "85%", sublabel: "โอกาสรอดถึงวันเงินเดือนออก" },
      { label: "Burn Rate เฉลี่ย", value: "฿420 / วัน", sublabel: "อัตราการใช้เงินที่ปลอดภัย" },
      { label: "นับถอยหลัง", value: "18 วัน", sublabel: "ก่อนเงินเดือนรอบถัดไปเข้า" }
    ]
  },
  {
    id: 3,
    stepNumber: "03",
    techBadge: "Least-Disruptive Intervention (LDI) Engine",
    category: "Safe-to-Sweep & Recommendation",
    title: "คำนวณเงินสดปลอดภัย (Safe-to-Sweep) และแนะแนว Action",
    highlightPhrase: "ตรวจพบเงินเย็นที่ไม่เสี่ยง พร้อมทางเลือกที่เจ็บปวดน้อยที่สุด",
    description: "ระบบสแกนหากระแสเงินสดส่วนเกินที่ไม่มีความเสี่ยงต้องใช้ (Safe-to-Sweep) และเสนอ Action ที่กระทบวิถีชีวิตน้อยที่สุด เช่น 'ลด Food Delivery ลงวันละ 80 บาท จะดันความปลอดภัยขึ้นเป็น 92%' พร้อมเสนอออมเงินเย็น 150 บาทเข้ากระเป๋าเป้าหมาย",
    details: [
      "คำนวณ Safe-to-Sweep โดยหักสำรองหนี้สินและบิลที่จ่อตัดล่วงหน้า 100%",
      "อัลกอริทึม LDI เลือกตัดค่าใช้จ่ายในหมวดที่สร้างความสุขน้อยแต่เสียเงินเยอะ",
      "แนะแนวการเร่งเป้าหมาย เช่น ย้ายเงินเข้า 'Pocket เที่ยวญี่ปุ่น' เร็วขึ้น 3 วัน"
    ],
    metrics: [
      { label: "ตรวจพบ Safe-to-Sweep", value: "฿150", sublabel: "เงินเย็นปลอดภัยสำหรับวันนี้" },
      { label: "LDI Target", value: "-฿80/วัน", sublabel: "ลด Food Delivery" },
      { label: "ผลลัพธ์ Safe Zone", value: "↗ 92%", sublabel: "ความปลอดภัยเพิ่มขึ้นทันที" }
    ]
  },
  {
    id: 4,
    stepNumber: "04",
    techBadge: "Bounded Consent Framework & PDPA Tokenization",
    category: "Co-pilot User Approval",
    title: "ยืนยันการออมด้วยความยินยอมของผู้ใช้ (Co-pilot Approval)",
    highlightPhrase: "เงินของคุณ อยู่ภายใต้การตัดสินใจของคุณเสมอ ไม่ตัดเงินสุ่มสี่สุ่มห้า",
    description: "ปฏิวัติการออมแบบมัดมือชก! K-Runway ออกแบบตามหลัก Bounded Consent ผู้ใช้สามารถกดอนุมัติแบบ 1-Tap (Slide to Sweep) หรือตั้งเพดานความยินยอมล่วงหน้า เช่น 'อนุญาตให้ออมเฉพาะวันที่ความปลอดภัย > 80% และยอดไม่เกิน 150 บ./ครั้ง'",
    details: [
      "ระบบ Co-pilot: AI มีหน้าที่วิเคราะห์และเสนอแนะ มนุษย์เป็นผู้อนุมัติ",
      "ตั้งเกณฑ์ Bounded Consent: กำหนดเพดานวงเงิน, เงื่อนไขความปลอดภัย, และความถี่",
      "ได้รับความยินยอมตามมาตรฐาน PDPA พร้อมเข้ารหัส Consent Token บน Secure Enclave"
    ],
    metrics: [
      { label: "สิทธิการอนุมัติ", value: "100%", sublabel: "ผู้ใช้ควบคุมได้ทุกขั้นตอน" },
      { label: "Bounded Floor", value: "Runway > 80%", sublabel: "หยุดออมทันทีถ้าความปลอดภัยต่ำ" },
      { label: "Max Sweep Cap", value: "≤ ฿150 / ครั้ง", sublabel: "เพดานการกวาดเงินต่อครั้ง" }
    ]
  },
  {
    id: 5,
    stepNumber: "05",
    techBadge: "Multi-tier Routing & Liquidity Shield",
    category: "Multi-tier Routing & Shield",
    title: "ป้องกันสภาพคล่องด้วย Liquidity Shield และ Reverse Sweep",
    highlightPhrase: "การันตีไม่มีวันเงินติดลบ พร้อมปุ่มดึงเงินกลับใน 24 ชั่วโมง",
    description: "เงินส่วนเกินจะถูกส่งต่อไปยังบัญชีดอกเบี้ยสูง K-eSavings (1.5%) หรือ Cloud Pocket ที่ตั้งไว้ โดยมี Hard Floor คุ้มกันเงินติดบัญชีขั้นต่ำ ฿1,000 เสมอ และหากมีเหตุฉุกเฉิน ระบบมี Reverse Sweep ดึงเงินกลับเข้าบัญชีหลักอัตโนมัติทันที พร้อมปุ่ม Undo ภายใน 24 ชม.",
    details: [
      "Hard Floor Protection: บัญชีหลักจะมีเงินกันชนขั้นต่ำ 1,000 บาทเสมอ",
      "Reverse Sweep Engine: ดึงเงินจากกระเป๋าออมกลับมาให้อัตโนมัติเมื่อตรวจพบการรูดฉุกเฉิน",
      "Zero Overdraft Guarantee: ไร้กังวลเรื่องค่าธรรมเนียมเงินเกินบัญชี พร้อมปุ่ม Undo 24 ชม."
    ],
    metrics: [
      { label: "Hard Floor Buffer", value: "฿1,000", sublabel: "คุ้มกันติดบัญชีหลักเสมอ" },
      { label: "ผลตอบแทนดอกเบี้ย", value: "1.50% p.a.", sublabel: "โอนเข้า K-eSavings อัตโนมัติ" },
      { label: "Reverse Sweep & Undo", value: "24 ชั่วโมง", sublabel: "ดึงเงินกลับได้ใน 1 คลิก" }
    ]
  }
];

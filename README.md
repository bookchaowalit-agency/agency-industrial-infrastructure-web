# Industrial & Infrastructure — อุตสาหกรรมและโครงสร้างพื้นฐาน

แยกเป็น showcase site สำหรับ Industrial & Infrastructure ของ Solo Empire ใช้เพื่อแสดง positioning และทดสอบ message เท่านั้น

- Visual world: Field manual for physical systems
- Suggested Vercel project: `solo-agency-industrial-infrastructure`
- Route: \/
- สถานะ commercial: `target` / P3
- ไม่มี database, authentication, API, payment, lead form หรือข้อมูลลูกค้า

## Local

```bash
npm install
npm run check
npm run dev
```

Build ใช้ Next.js static export และสร้าง artifact ที่ `out/` สำหรับ deploy แบบ static บน Vercel

ข้อมูล public-safe มาจาก agency brief/control-plane; งาน freelance/client เดิมไม่ถูกนับเป็น agency customer หรือ case study ในเว็บนี้

## pSEO service page

เว็บนี้มีหน้า service แบบ static ที่ /services/asset-project-discovery/ สำหรับ intent ของ Industrial & Infrastructure โดยแยก workflow, deliverables, evidence boundary และ readiness gate ไว้ชัดเจน หน้าเริ่มต้นเป็น noindex และไม่มีการรับ inquiry หรือข้อมูลลูกค้า

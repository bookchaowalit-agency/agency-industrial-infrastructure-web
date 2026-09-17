export type PseoService = Readonly<{
  kind: 'service';
  slug: string;
  name: string;
  title: string;
  description: string;
  intent: string;
  buyer: string;
  context: string;
  workflow: readonly string[];
  deliverables: readonly string[];
  evidence: readonly string[];
  readiness: string;
  agencySlug: string;
  agencyName: string;
  agencyThaiName: string;
  agencyStatus: 'incubating' | 'target' | 'locked';
  agencyStage: string;
}>;

export const pseoService: PseoService = {
  "kind": "service",
  "slug": "asset-project-discovery",
  "name": "Asset and project discovery",
  "title": "Asset & Project Discovery สำหรับงานอุตสาหกรรมและโครงสร้างพื้นฐาน",
  "description": "ทำ integration, risk และ acceptance map ก่อนตัดสินใจลงทุนหรือเริ่มติดตั้ง",
  "intent": "ต้องการเห็น dependency, project risk และเกณฑ์ตรวจรับของ asset หรือโครงการกายภาพก่อนลงมือ",
  "buyer": "COO, asset owner และ project sponsor",
  "context": "เริ่มจาก discovery และ information workflow ที่มี field owner ชัดเจน ไม่อ้างการปฏิบัติงานภาคสนามแทนผู้มีอำนาจ",
  "workflow": [
    "กำหนด asset, site และ project boundary",
    "ทำ map ของ interface, dependency, risk และ acceptance",
    "แยกข้อมูลที่ต้องตรวจหน้างานจากข้อมูลเพื่อการตัดสินใจ",
    "ส่ง project discovery pack ให้ sponsor และ field partner"
  ],
  "deliverables": [
    "asset/project map",
    "integration และ dependency register",
    "risk/acceptance checklist",
    "field handoff และ decision record"
  ],
  "evidence": [
    "ไม่อ้าง uptime, safety outcome หรือ site authorization ที่ยังไม่มี",
    "ไม่ใช้ข้อมูลโรงงานหรือโครงสร้างพื้นฐานจริงใน public repo",
    "งาน engineering และ field delivery ต้องมีผู้เชี่ยวชาญและผู้รับผิดชอบหน้างาน"
  ],
  "readiness": "ต้องมี industrial lead, authorized site access, field reviewer และ delivery partner ก่อนเปิด inquiry",
  "agencySlug": "industrial-infrastructure",
  "agencyName": "Industrial & Infrastructure",
  "agencyThaiName": "อุตสาหกรรมและโครงสร้างพื้นฐาน",
  "agencyStatus": "target",
  "agencyStage": "P3"
};

// pSEO footers keep only utility links; the home page opts into hub and portfolio links.
export const contactHref = 'mailto:bookchaowalit.work@gmail.com';
export const portfolioHref = 'https://agency.bookchaowalit.com/agencies';
export const hubHref = 'https://bookchaowalit.com';

export default function SiteLinks({ includeHubAndPortfolio = false }: Readonly<{ includeHubAndPortfolio?: boolean }>) {
  return (
    <nav className="site-links" aria-label="ลิงก์เว็บไซต์">
      {includeHubAndPortfolio ? <>
        <a href={hubHref}>bookchaowalit.com</a>
        <a href={portfolioHref}>ดูทั้ง 14 กลุ่มงาน</a>
      </> : null}
      <a href="https://bookchaowalit.com/privacy">Privacy</a>
      <a href="https://monitor.bookchaowalit.com/">Status</a>
      <a href={contactHref}>Contact</a>
    </nav>
  );
}

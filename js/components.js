// 1. STYLE CSS (Zaktualizowane: Header Always on Top)
const sharedStyles = `
<style>
    :root {
      --navy: #0f172a; --blue: #2563eb; --accent: #38bdf8; --success: #10b981;
      --text-main: #1e293b; --text-muted: #64748b; --bg-light: #f8fafc;
      --white: #ffffff; --radius: 16px; --shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
    }

    /* Zmiana na position: fixed dla 100% pewności pozostania na górze */
    header { 
        padding: 15px 0; 
        position: fixed; /* Zmienione ze sticky na fixed */
        top: 0; 
        left: 0;
        right: 0;
        background: rgba(255,255,255,0.95); 
        backdrop-filter: blur(10px); 
        z-index: 1000; 
        border-bottom: 1px solid #f1f5f9; 
        width: 100%;
    }

    /* Dodajemy margines dla body, aby treść nie chowała się pod przypiętym nagłówkiem */
    body {
        padding-top: 72px; /* Wysokość nagłówka ok. 70-75px */
    }
    
    .nav-inner { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    /* ... reszta stylów bez zmian ... */


    .logo img { height: 40px; display: block; }
    .nav-actions { display: flex; gap: 12px; align-items: center; }
    
    .btn { padding: 12px 24px; border-radius: var(--radius); font-weight: 600; cursor: pointer; transition: 0.3s; text-decoration: none; font-size: 14px; display: inline-block; }
    .btn-primary { background: var(--blue); color: white; border: none; }
    .btn-outline { border: 1px solid #e2e8f0; color: var(--navy); }
    
    .menu-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
    .menu-toggle span { display: block; width: 25px; height: 3px; background: var(--navy); border-radius: 2px; }

    /* Footer spójny z post-5 */
    footer { padding: 60px 0; border-top: 1px solid #f1f5f9; font-size: 14px; color: var(--text-muted); background: #fff; margin-top: 80px; width: 100%; }
    .footer-links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .footer-links h4 { color: var(--navy); margin-bottom: 20px; font-size: 16px; }
    .footer-links a { color: var(--text-muted); text-decoration: none; display: block; margin-bottom: 10px; transition: 0.2s; }
    .footer-links a:hover { color: var(--blue); }
    
    .aml-notice { font-size: 12px; line-height: 1.6; border-top: 1px solid #f1f5f9; margin-top: 30px; padding-top: 20px; max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }

    @media (max-width: 992px) {
      .menu-toggle { display: flex; }
      .nav-actions { 
          display: none; 
          position: absolute; 
          top: 100%; 
          left: 0; 
          right: 0; 
          background: white; 
          flex-direction: column; 
          padding: 20px; 
          box-shadow: var(--shadow); 
          border-bottom: 1px solid #f1f5f9;
      }
      .nav-actions.active { display: flex; }
    }
</style>
`;





// 2. HTML STRUKTURA (Zaktualizowana do logicznego układu przycisków)
const sharedHeader = `
<header>
  <div class="nav-inner"> 
    <div class="logo">
        <a href="/index.html">
            <img src="/_RebellPay_logotype.png" alt="Rebell Pay">
        </a>
    </div>
    <button class="menu-toggle" id="mobile-menu-btn"><span></span><span></span><span></span></button>
    <div class="nav-actions" id="nav-actions">
      <a href="/blog/indexblog.html" class="btn">Blog</a>
      <a href="https://calendly.com/pawel-karczewski-rebellpay/30min" class="btn btn-primary">Bezpłatna Konsultacja</a>
      <a href="/index.html#app" class="btn btn-outline">Pobierz App</a>
    </div>
  </div>
</header>
`;

const sharedFooter = `
<footer>
  <div class="footer-links-grid">
        <div>
            <div class="logo"><img src="/_RebellPay_logotype.png" alt="Rebell Pay" style="height: 30px; margin-bottom: 20px;"></div>
            <p>Profesjonalne rozwiązania On-Ramp i Off-Ramp dla wymagających klientów.</p>
        </div>
        <div class="footer-links">
            <h4>Firma</h4>
            <a href="/index.html">O nas</a>
            <a href="/index.html#services">Usługi</a>
        </div>
        <div class="footer-links">
            <h4>Prawne</h4>
            <a href="https://www.rebellpay.com/en/business-terms/">Regulamin</a>
            <a href="https://www.rebellpay.com/en/business-privacy/">Polityka prywatności</a>
        </div>
        <div class="footer-links">
            <h4>Kontakt</h4>
            <p>support@rebellpay.com</p>
            <p>Warszawa, Polska</p>
        </div>
  </div>
  <div class="aml-notice">
        <strong>Informacja AML:</strong> Usługi świadczone przez Elixir Group SA jako podmiot wpisany do rejestru działalności w zakresie walut wirtualnych (VASP), są realizowane zgodnie z przepisami <strong>ustawy z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu</strong>. Jako instytucja obowiązana, stosujemy wymagane środki bezpieczeństwa finansowego, w tym identyfikację i weryfikację klientów (KYC/KYB) oraz analizę źródła pochodzenia środków w celu zapewnienia pełnej legalności i bezpieczeństwa obrotu.
  </div>
</footer>
`;







// 1. STYLE CSS (Wspólne dla całej strony - wstrzykiwane automatycznie)
const sharedStyles = `
<style>
    /* Reset i podstawy dla komponentów */
    header { padding: 15px 0; position: fixed; background: rgba(255,255,255,0.75); backdrop-filter: blur(12px); border-bottom: none; width: 100%; top: 0; z-index: 1000; padding-top: 10px }
    .nav-inner { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .logo img { height: 40px; display: block; }
    .nav-actions { display: flex; gap: 12px; align-items: center; }
    
    .btn { padding: 12px 24px; border-radius: 16px; font-weight: 600; cursor: pointer; transition: 0.3s; text-decoration: none; font-size: 14px; display: inline-block; }
    .btn-primary { background: #2563eb; color: white; border: none; }
    .btn-outline { border: 1px solid #e2e8f0; color: #0f172a; }
    
    .menu-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
    .menu-toggle span { display: block; width: 25px; height: 3px; background: #0f172a; border-radius: 2px; }

    footer { padding: 60px 0; border-top: 1px solid #f1f5f9; font-size: 14px; color: #64748b; background: #fff; margin-top: 80px; width: 100%; }
    .footer-links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .footer-links h4 { color: #0f172a; margin-bottom: 20px; font-size: 16px; }
    .footer-links a { color: #64748b; text-decoration: none; display: block; margin-bottom: 10px; transition: 0.2s; }
    .footer-links a:hover { color: #2563eb; }
    
    .aml-notice { font-size: 12px; line-height: 1.6; border-top: 1px solid #f1f5f9; margin-top: 30px; padding-top: 20px; max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: 24px; padding-right: 24px; }

    /* Pływające kółko wideo - Mobilne */
    .floating-call-btn {
        display: none;
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 60px;
        height: 60px;
        background: #2563eb;
        color: white;
        border-radius: 50%;
        box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
        z-index: 1100;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease;
        text-decoration: none;
    }
    .floating-call-btn:active { transform: scale(0.9); }
    .floating-call-btn svg { width: 28px; height: 28px; fill: white; }

    @media (max-width: 992px) {
      .menu-toggle { display: flex; }
      .nav-actions { display: none; position: absolute; top: 100%; left: 0; right: 0; background: white; flex-direction: column; padding: 20px; box-shadow: 0 10px 15px rgba(0,0,0,0.05); }
      .nav-actions.active { display: flex; }
      .floating-call-btn { display: flex; } /* Wyświetlaj tylko na mobilnych */
    }
</style>
`;

// 2. HTML STRUKTURA (Z użyciem {BASE} dla ścieżek)
const sharedHeader = `
<header>
  <div class="nav-inner">
    <div class="logo">
        <a href="{BASE}index.html">
            <img src="{BASE}RebellPay_logotype.png" alt="Rebell Pay">
        </a>
    </div>
    <button class="menu-toggle" id="mobile-menu-btn"><span></span><span></span><span></span></button>
    <div class="nav-actions" id="nav-actions">
      <a href="{BASE}blog/indexblog.html" class="btn">Blog</a>
      <a href="https://calendly.com/pawel-karczewski-rebellpay/30min" class="btn btn-primary">Bezpłatna Konsultacja</a>
      <a href="{BASE}index.html#app" class="btn btn-outline">Pobierz App</a>
    </div>
  </div>
</header>
`;

const sharedFooter = `
<footer>
  <div style="text-align: center; margin-bottom: 50px; padding: 0 24px;">
    <a href="https://calendly.com/pawel-karczewski-rebellpay/30min" class="btn btn-primary" style="padding: 16px 40px; font-size: 16px;">Bezpłatna Konsultacja</a>
  </div>

  <div class="footer-links-grid">
        <div>
            <div class="logo"><img src="{BASE}RebellPay_logotype.png" alt="Rebell Pay" style="height: 30px; margin-bottom: 20px;"></div>
            <p>Profesjonalne rozwiązania On-Ramp i Off-Ramp dla wymagających klientów.</p>
        </div>
        <div class="footer-links">
            <h4>Firma</h4>
            <a href="{BASE}index.html#trust">O nas</a>
            <a href="{BASE}index.html#services">Usługi</a>
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
        <strong>Informacja AML:</strong> Usługi świadczone przez Elixir Group SA jako podmiot wpisany do rejestru działalności w zakresie walut wirtualnych (VASP), są realizowane zgodnie z przepisami <strong>ustawy z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu</strong>. Jako instytucja obowiązana, stosujemy wymagane środki bezpieczeństwa finansowego, w tym identyfikację i weryfikację klientów (KYC/KYB) oraz analizę źródła pochodzenia środków w celu zapewnienia pełnej legalności i bezpieczeństwa obrotu
  </div>

  <a href="https://calendly.com/pawel-karczewski-rebellpay/30min" class="floating-call-btn" title="Umów wideo rozmowę">
    <svg viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
  </a>
</footer>
`;

// 3. LOGIKA INJEKCJI
function injectComponents() {
    // Bezpieczniejsza wersja
	const pathArray = window.location.pathname.split('/');
	const isBlogFolder = pathArray.includes('blog');
    const basePath = isBlogFolder ? '../' : '';

    document.head.insertAdjacentHTML('beforeend', sharedStyles);

    const hPlaceholder = document.getElementById('shared-header-placeholder');
    if (hPlaceholder) {
        hPlaceholder.innerHTML = sharedHeader.replace(/{BASE}/g, basePath);
        
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const navActions = document.getElementById('nav-actions');
        if (mobileBtn) {
            mobileBtn.addEventListener('click', () => navActions.classList.toggle('active'));
        }
    }

    const fPlaceholder = document.getElementById('shared-footer-placeholder');
    if (fPlaceholder) {
        fPlaceholder.innerHTML = sharedFooter.replace(/{BASE}/g, basePath);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
} else {
    injectComponents();

}

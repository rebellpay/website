const blogPostsData = [
  {
    "title": "LEOcoin whitepaper po ludzku: co obiecuje i na co uważać?",
    "categories": ["Edukacja", "Fintech"],
    "date": "2026-04-30",
    "excerpt": "LEOcoin whitepaper (2017) po ludzku: model, obietnice i ryzyka. Sprawdź checklistę i podejmij świadomą decyzję - przeczytaj teraz.",
    "link": "blog/2026-04-30-leocoin-whitepaper-po-ludzku.html",
    "image": "blog/img/Photo52.jpeg"
  },
  {
    "title": "BitcoinCash.org: co to jest i czy to bezpieczne źródło?",
    "categories": ["Edukacja", "Płatności"],
    "date": "2026-04-27",
    "excerpt": "Poznaj BitcoinCash.org po ludzku: do czego służy, jak rozpoznać oficjalne linki i bezpiecznie zacząć z Bitcoin Cash. Sprawdź teraz.",
    "link": "blog/2026-04-27-bitcoincash-org-co-to-jest.html",
    "image": "blog/img/Photo51.jpeg"
  },
  {
    "title": "Krypto w tym tygodniu: Bitcoin pod makro, ETH ETF-y na fali, a giełdy wchodzą w AI na serio",
    "categories": ["Podsumowanie rynku"],
    "date": "2026-04-23",
    "excerpt": "Tygodniowe podsumowanie rynku krypto: Bitcoin i makro, napływy do ETF ETH, regulacje w Rosji, DeFi po exploitach i wyścig AI na giełdach. Sprawdź kluczowe fakty i źródła.",
    "link": "blog/2026-04-23-krypto-tydzien-btc-etf-ai-regulacje.html",
    "image": "blog/img/2026-04-23_news.jpeg"
  },
  {
    "title": "MiCA i USDC (Circle) po ludzku: co to zmienia w praktyce?",
    "categories": ["Stablecoiny", "Compliance"],
    "date": "2026-04-20",
    "excerpt": "MiCA i USDC po ludzku: co oznacza zgodność Circle z UE, jakie są ryzyka i jak używać stablecoinów świadomie. Sprawdź teraz.",
    "link": "blog/2026-04-20-mica-usdc-co-to-znaczy-dla-uzytkownika.html",
    "image": "blog/img/Photo49.jpeg"
  },
  {
    "title": "Gold Paper (WLF) po ludzku: co to jest i jak działa tokenizowane złoto?",
    "categories": ["Tokenizacja aktywów"],
    "date": "2026-04-16",
    "excerpt": "Poznaj Gold Paper: tokenizowane złoto krok po kroku, korzyści i ryzyka. Przeczytaj i sprawdź checklistę zanim zaufasz „złotu w sieci”.",
    "link": "blog/2026-04-16-gold-paper-co-to-jest-tokenizowane-zloto.html",
    "image": "blog/img/Photo48.jpeg"
  },
  {
    "title": "Gold Paper po ludzku: tokenizowane złoto, które działa jak pieniądz",
    "categories": ["Tokenizacja aktywów"],
    "date": "2026-04-13",
    "excerpt": "Czym jest tokenizowane złoto z Gold Paper i jak działa? Zrozum korzyści, ryzyka i checklistę. Przeczytaj i działaj świadomie.",
    "link": "blog/2026-04-13-gold-paper-tokenizowane-zloto-po-ludzku.html",
    "image": "blog/img/Photo48.jpeg"
  },
  {
    "title": "MakerDAO (DAI) whitepaper po ludzku: jak działa „cyfrowy dolar” bez banku?",
    "categories": ["Stablecoiny", "DeFi"],
    "date": "2026-04-09",
    "excerpt": "Wyjaśniamy MakerDAO i stablecoin DAI prosto: jak działa, skąd bierze stabilność i jakie są ryzyka. Przeczytaj i działaj świadomie.",
    "link": "blog/2026-04-09-makerdao-dai-whitepaper-po-ludzku.html",
    "image": "blog/img/Photo47.jpeg"
  },
  {
    "title": "Rynek krypto w tym tygodniu: BTC na krawędzi, ETH w klinczu, a AI agenci pukają do drzwi giełd",
    "categories": ["Podsumowanie rynku"],
    "date": "2026-04-06",
    "excerpt": "Podsumowanie rynku krypto: Bitcoin, Ethereum, altcoiny i makro. Sprawdź poziomy ryzyka i najważniejsze newsy - przeczytaj teraz.",
    "link": "blog/2026-04-06-rynek-krypto-btc-eth-ai-agenci-makro.html",
    "image": "blog/img/2026-04-06_news.jpeg"
  },
  {
    "title": "Tether (USDT) whitepaper po ludzku: co to jest i jak działa",
    "categories": ["Stablecoiny", "Fintech"],
    "date": "2026-04-02",
    "excerpt": "Zrozum Tether (USDT) w 7 minut. Jak działa stablecoin, na czym polega „1 USDT = 1 USD”, ryzyka i checklista. Sprawdź teraz.",
    "link": "blog/2026-04-02-tether-whitepaper-usdt-po-ludzku.html",
    "image": "blog/img/Photo45.jpeg"
  },
  {
    "title": "Jak zintegrować płatności fiat i krypto w firmie? Przewodnik po infrastrukturze on-ramp",
    "categories": ["Fintech"],
    "date": "2026-03-30",
    "excerpt": "Zintegruj płatności fiat i krypto: on-ramp, KYC/AML, stablecoiny, rozliczenia i ryzyka. Sprawdź checklistę i zaplanuj wdrożenie.",
    "link": "blog/2026-03-30-integracja-platnosci-fiat-krypto-onramp.html",
    "image": "blog/img/Photo44.jpeg"
  },
  {
    "title": "Ripple Protocol Consensus Algorithm (RPCA) po ludzku: jak XRPL ustala prawdę bez kopania?",
    "categories": ["Edukacja", "Blockchain", "Płatności"],
    "date": "2026-03-23",
    "excerpt": "Wyjaśniamy RPCA i konsensus w XRP Ledger prosto. Zrozum szybkość, finalność i ryzyka. Przeczytaj i sprawdź, co to znaczy dla płatności.",
    "link": "blog/2026-03-23-ripple-protocol-consensus-algorithm-xrpl-po-ludzku.html",
    "image": "blog/img/Photo43.jpeg"
  },
  {
    "title": "Najlepsze rozwiązania off-ramp dla funduszy i klientów korporacyjnych (2026)",
    "categories": ["Fintech", "Compliance"],
    "date": "2026-03-19",
    "excerpt": "Off-ramp dla funduszy i firm: jak bezpiecznie zamienić krypto na fiat bez blokad. Checklisty AML/KYC, proces i CTA do wdrożenia.",
    "link": "blog/2026-03-19-off-ramp-dla-funduszy-i-korporacji.html",
    "image": "blog/img/Photo42.jpeg"
  },
  {
    "title": "Handel OTC vs. giełda krypto: jak sprzedać duże ilości Bitcoina bez wpływu na kurs?",
    "categories": ["Fintech", "OTC", "Bitcoin"],
    "date": "2026-03-16",
    "excerpt": "Sprzedajesz dużo BTC? Zobacz różnice OTC vs giełda, jak ograniczyć poślizg ceny (slippage) i przejść AML/KYC. Sprawdź i skontaktuj się.",
    "link": "blog/2026-03-16-handel-otc-vs-gielda-jak-sprzedac-duzo-bitcoin.html",
    "image": "blog/img/Photo41.jpeg"
  },
  {
    "title": "Krypto w pigułce: stablecoiny wchodzą do banków, a rynek testuje odporność",
    "categories": ["Podsumowanie rynku"],
    "date": "2026-03-12",
    "excerpt": "Tydzień w krypto: ETF-y, stablecoiny banków, bezpieczeństwo portfeli i kluczowe poziomy BTC i ETH. Sprawdź szybkie podsumowanie.",
    "link": "blog/2026-03-12-rynki-krypto-stablecoiny-etf-bezpieczenstwo.html",
    "image": "blog/img/2026-03-12_news.jpeg"
  },
  {
    "title": "Chainlink Whitepaper po ludzku: po co są oracles i czemu to ważne?",
    "categories": ["Edukacja", "Fintech", "Blockchain"],
    "date": "2026-03-09",
    "excerpt": "Chainlink Whitepaper w prostych słowach: czym jest oracle, jak łączy blockchain z realnym światem i co to zmienia w finansach. Sprawdź!",
    "link": "blog/2026-03-09-chainlink-whitepaper-wyjasnienie-oracle.html",
    "image": "blog/img/Photo39.jpeg"
  },
  {
    "title": "TRON Developers Docs: co to jest i jak zacząć (bez żargonu)",
    "categories": ["Edukacja", "Blockchain", "Płatności"],
    "date": "2026-03-05",
    "excerpt": "Poznaj TRON Developers Docs: czym jest TRON, TRC-20 i stablecoiny (USDT). Zobacz jak zacząć integrację płatności. Sprawdź i działaj.",
    "link": "blog/2026-03-05-tron-developers-docs-co-to-jest-i-jak-zaczac.html",
    "image": "blog/img/Photo38.jpeg"
  },
  {
    "title": "Dyskrecja i prywatność w bankowości krypto: jak chronić dane przy dużych transferach?",
    "categories": ["Prywatność i bezpieczeństwo"],
    "date": "2026-03-02",
    "excerpt": "Duży przelew z krypto? Chroń dane i unikaj ryzyk AML. Poznaj zasady dyskrecji, SoF/SoW i praktyczną checklistę. Skontaktuj się z Rebell Pay.",
    "link": "blog/2026-03-02-dyskrecja-prywatnosc-bankowosc-krypto-duze-transfery.html",
    "image": "blog/img/Photo37.jpeg"
  },
  {
    "title": "Rynek krypto: Bitcoin odbija pod 70 tys. USD, ale „podłoga” wciąż trzeszczy",
    "categories": ["Podsumowanie rynku", "Bitcoin", "ETF", "Stablecoiny", "Makro"],
    "date": "2026-02-26",
    "excerpt": "Bitcoin wraca pod 70 tys. USD, ETF-y znów łapią inflow, ale opcje i on-chain mówią: ostrożnie. Sprawdź podsumowanie i bądź na bieżąco.",
    "link": "blog/2026-02-26-rynek-krypto-bitcoin-70k-stabilizacja-stablecoiny.html",
    "image": "blog/img/2026-02-26_news.jpeg"
  },
  {
    "title": "Bitcoin Whitepaper po ludzku: o co chodzi w bitcoinie?",
    "categories": ["Edukacja", "Blockchain", "Wiedza"],
    "date": "2026-02-23",
    "excerpt": "Bitcoin whitepaper po ludzku: jak działa sieć, blockchain i proof-of-work. Zrozum w 7 minut i sprawdź, co to znaczy dla Twoich pieniędzy.",
    "link": "blog/2026-02-23-bitcoin-whitepaper-co-to-jest.html",
    "image": "blog/img/Photo35.jpeg"
  },
  {
    "title": "Rynek krypto dziś: Bitcoin w napięciu, Cardano szuka odbicia, a AI wchodzi do portfeli",
    "categories": ["Podsumowanie rynku", "Bitcoin", "Makro", "Altcoiny", "AI"],
    "date": "2026-02-19",
    "excerpt": "Bitcoin w konsolidacji, Cardano walczy o $0.30, a portfele testują AI-agentów. Zobacz najważniejsze wątki i poziomy na tydzień.",
    "link": "blog/2026-02-19-krypto-rynek-bitcoin-makro-cardano-ai-wallet.html",
    "image": "blog/img/2026-02-19_news.jpeg"
  },
  {
    "title": "Off-ramp krypto: co to jest i jak wypłacić do banku (2026)",
    "categories": ["Fintech"],
    "date": "2026-02-19",
    "excerpt": "Dowiedz się, czym jest off-ramp krypto i jak bezpiecznie wypłacić środki do banku bez blokady. Sprawdź checklistę i skontaktuj się z Rebell Pay.",
    "link": "blog/2026-02-19-co-to-jest-off-ramp-krypto-i-jak-wyplacic-do-banku.html",
    "image": "blog/img/Photo30.jpeg"
  },
    {
    "title": "Usługi concierge przy wyjściu z krypto do walut tradycyjnych (dla firm i inwestorów)",
    "categories": ["Fintech", "Compliance"],
    "date": "2026-02-18",
    "excerpt": "Concierge off-ramp: bezpieczna konwersja krypto na fiat dla firm i inwestorów. Sprawdź proces, dokumenty i uniknij blokad. Skontaktuj się.",
    "link": "blog/2026-02-18-uslugi-concierge-off-ramp-krypto-fiat-dla-firm.html",
    "image": "blog/img/Photo28.jpeg"
  },
    {
    "title": "Cardano whitepaper: co warto wiedzieć (po ludzku)",
    "categories": ["Edukacja", "Blockchain", "Płatności"],
    "date": "2026-02-18",
    "excerpt": "Cardano whitepaper po ludzku: Ouroboros, warstwy, bezpieczeństwo i ryzyka. Sprawdź, czy ADA pasuje do płatności i biznesu.",
    "link": "blog/2026-02-18-cardano-whitepaper-co-warto-wiedziec.html",
    "image": "blog/img/Photo27.jpeg"
  },
    {
    "title": "Krypto w tym tygodniu: makro naciska na BTC, firmy dokupują ETH, a prywatność wraca do gry",
    "categories": ["Podsumowanie rynku", "Bitcoin", "Ethereum", "Prywatność"],
    "date": "2026-02-17",
    "excerpt": "Tydzień w krypto: presja makro na Bitcoin, zakupy ETH przez firmy, nowe narzędzia prywatności i ostrzeżenia o phishingu. Sprawdź skrót rynku.",
    "link": "blog/2026-02-17-krypto-rynki-makro-treasury-prywatnosc.html",
    "image": "blog/img/2026-02-17_news.jpeg"
  },
 
  {
    "title": "Stabilne off-ramp dla międzynarodowych platform cyfrowych: jak wypłacać bez blokad",
    "categories": ["Płatności", "Fintech", "Compliance"],
    "date": "2026-02-12",
    "excerpt": "Stabilny off-ramp dla platform cyfrowych: banki, VASP, AML/KYC, SoF/SoW i procesy. Zobacz checklistę i wdrożenie. Skontaktuj się!",
    "link": "blog/2026-02-12-stabilne-off-ramp-dla-platform-miedzynarodowych.html",
    "image": "blog/img/Photo21.jpeg"
  },
  {
    "title": "Wymiana dużych wolumenów krypto na fiat dla firm",
    "categories": ["Biznes", "Finanse", "Compliance"],
    "date": "2026-02-10",
    "excerpt": "Wymiana dużych wolumenów krypto na fiat dla firm: jak zaplanować off-ramp, wymagania AML/KYC, SoF/SoW, limity, procesy w bankach i VASP oraz najlepsze praktyki, by uniknąć blokad i opóźnień.",
    "link": "blog/2026-02-10-wymiana-duzych-wolumenow-krypto-na-fiat-dla-firm.html",
    "image": "blog/img/Photo17.jpeg"
  },
  {
    "title": "Ethereum Whitepaper: co warto wiedzieć",
    "categories": ["Edukacja", "Blockchain", "Wiedza"],
    "date": "2026-02-08",
    "excerpt": "Ethereum whitepaper w praktyce: jak działa sieć, EVM i smart kontrakty, rola ETH, kluczowe założenia, ograniczenia oraz ryzyka, na które powinien zwrócić uwagę użytkownik i firma budująca w Web3.",
    "link": "blog/2026-02-08-ethereum-whitepaper-co-warto-wiedziec.html",
    "image": "blog/img/Photo14.jpeg"
  },
  {
    "title": "Konto bankowe dla software house Web3",
    "categories": ["Bankowość", "Biznes", "Web3"],
    "date": "2026-02-07",
    "excerpt": "Jak otworzyć i utrzymać konto bankowe dla software house Web3: wymagania AML/KYC, ryzyka bankowe, dokumenty SoF/SoW, proces onboardingu oraz praktyczne wskazówki, by uniknąć blokad i odmów.",
    "link": "blog/2026-02-07-konto-bankowe-dla-software-house-web3.html",
    "image": "blog/img/Photo13.jpeg"
  },

  {
    "title": "Bezpieczny off-ramp dla HNWI i inwestorów indywidualnych",
    "categories": ["Inwestycje", "Finanse", "Bezpieczeństwo"],
    "date": "2026-02-05",
    "excerpt": "Bezpieczny off-ramp dla HNWI i inwestorów indywidualnych: jak wypłacać duże kwoty z krypto, jakie dokumenty SoF/SoW przygotować, jak ograniczyć ryzyko blokad AML/KYC i opóźnień.",
    "link": "blog/2026-02-05-bezpieczny-off-ramp-hnwi-inwestorzy-indywidualni-seo.html",
    "image": "blog/img/Bezpiecznyoff-r.jpeg"
  },
  {
    "title": "Potwierdzenie legalności środków z kryptowalut dla doradcy kredytowego",
    "categories": ["Prawo", "Bankowość", "Kredyty"],
    "date": "2026-02-05",
    "excerpt": "Dowiedz się, jak przygotować dokumentację SoF/SoW z krypto dla banku. Praktyczny poradnik Rebell Pay o potwierdzaniu legalności środków. Sprawdź checklistę!",
    "link": "blog/2026-02-05-potwierdzenie-legalnosci-srodkow-krypto-dla-doradcy-kredytowego-seo.html",
    "image": "blog/img/Potwierdzeniele.jpeg"
  },
  {
    "title": "Czy bank może zablokować przelew z regulowanej instytucji VASP?",
    "categories": ["Bankowość", "Bezpieczeństwo", "VASP"],
    "date": "2026-02-04",
    "excerpt": "Wyjaśniamy, kiedy bank może wstrzymać przelew z regulowanej instytucji VASP, jakie są najczęstsze powody (AML/KYC) i jak przygotować dokumenty, by uniknąć blokady.",
    "link": "blog/2026-02-04-czy-bank-moze-zablokowac-przelew-z-regulowanej-instytucji-vasp.html",
    "image": "blog/img/Czybankmozezablok.jpeg"
  }
];
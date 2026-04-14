const translations = {

    en: {

        "page.title": "Imprint",
        "nav.title": "Imprint",

        "header.title": "Imprint",
        "header.subtitle": "Legal disclosure according to German law.",

        "sec1.title": "Information according to §5 DDG",
        "sec1.addressTitle": "Address",
        "sec1.country": "Germany",
        "sec1.noPackages": "Please do not send packages to this address.",
        "sec1.contactTitle": "Contact",
        "sec1.emailLabel": "E-Mail",
        "sec1.phoneLabel": "Phone",

        "sec2.title": "Responsible for content according to §18 MStV",
        "sec2.text": "Yannick Schroth, address as above.",

        "sec3.title": "Liability for Content",
        "sec3.text": "The contents of this website have been created with the greatest possible care. However, no guarantee can be given for the accuracy, completeness, and timeliness of the content. As a service provider, I am responsible for my own content on these pages according to general laws. However, I am not obligated to monitor transmitted or stored external information.",

        "sec4.title": "Liability for Links",
        "sec4.text": "This website may contain links to external websites of third parties over whose content I have no influence. Therefore, I cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.",

        "sec5.title": "Regulatory Authority",
        "sec5.authority": "Landesanstalt für Kommunikation Baden-Württemberg",
        "sec5.seat": "Seat: Germany",
        "sec5.scope": "This imprint applies to all obligations under §5 DDG, §55 para. 2 RStV & MStV §18 as well as all social media presences.",

        "footer.status": "Status: April 2026",
        "footer.privacy": "Privacy Policy",
        "footer.legal": "Legal Notice",
        "footer.monetheus": "Monetheus"

    },

    de: {

        "page.title": "Impressum",
        "nav.title": "Impressum",

        "header.title": "Impressum",
        "header.subtitle": "Angaben gemäß §5 DDG.",

        "sec1.title": "Angaben gemäß §5 DDG",
        "sec1.addressTitle": "Anschrift",
        "sec1.country": "Deutschland",
        "sec1.noPackages": "Bitte versenden Sie keine Pakete an diese Adresse.",
        "sec1.contactTitle": "Kontakt",
        "sec1.emailLabel": "E-Mail",
        "sec1.phoneLabel": "Telefon",

        "sec2.title": "Verantwortlich für den Inhalt nach §18 Abs. 2 MStV",
        "sec2.text": "Yannick Schroth, Anschrift wie oben.",

        "sec3.title": "Haftung für Inhalte",
        "sec3.text": "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich.",

        "sec4.title": "Haftung für Links",
        "sec4.text": "Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",

        "sec5.title": "Zuständige Regulierungs- und Aufsichtsbehörde",
        "sec5.authority": "Landesanstalt für Kommunikation Baden-Württemberg",
        "sec5.seat": "Sitz: Deutschland",
        "sec5.scope": "Das hier angegebene Impressum gilt für alle Belange der Impressumspflicht nach §5 DDG, § 55 Abs.2 RStV & MStV §18 sowie für alle Social Media Auftritte.",

        "footer.status": "Stand: April 2026",
        "footer.privacy": "Datenschutz",
        "footer.legal": "Impressum",
        "footer.monetheus": "Monetheus"

    }

};

let currentLang = 'EN';

function updateLanguage(lang) {

    const data = translations[lang.toLowerCase()];

    document.querySelectorAll('[data-i18n]').forEach(el => {

        const key = el.getAttribute('data-i18n');

        if (data[key]) {
            el.textContent = data[key];
        }

    });

    document.documentElement.lang = lang.toLowerCase();

}

document.addEventListener('DOMContentLoaded', () => {

    updateLanguage('EN');

    const btn = document.getElementById('langToggle');

    if (btn) {

        btn.innerText = 'DE';

        btn.addEventListener('click', () => {

            if (currentLang === 'EN') {

                currentLang = 'DE';
                updateLanguage('DE');
                btn.innerText = 'EN';

            } else {

                currentLang = 'EN';
                updateLanguage('EN');
                btn.innerText = 'DE';

            }

        });

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }

        });

    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});
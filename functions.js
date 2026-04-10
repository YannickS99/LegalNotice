const translations = {

    en: {

        "page.title": "Imprint",
        "nav.title": "Imprint",

        "header.title": "Imprint",
        "header.subtitle": "Legal disclosure according to German law.",

        "sec1.title": "Information according to §5 TMG",
        "sec1.secContact": "Second contact method",

        "sec2.title": "Responsible for content according to §18 MStV",
        "sec2.text": "Yannick Schroth, address as above.",

        "sec3.title": "Liability for Content",
        "sec3.text": "The contents of this website have been created with the greatest possible care. However, no guarantee can be given for the accuracy, completeness, and timeliness of the content. As a service provider, I am responsible for my own content on these pages according to general laws. However, I am not obligated to monitor transmitted or stored external information.",

        "sec4.title": "Liability for Links",
        "sec4.text": "This website may contain links to external websites of third parties over whose content I have no influence. Therefore, I cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.",

        "footer.status": "Status: March 2026"

    },

    de: {

        "page.title": "Impressum",
        "nav.title": "Impressum",

        "header.title": "Impressum",
        "header.subtitle": "Angaben gemäß §5 TMG.",

        "sec1.title": "Angaben gemäß §5 TMG",
        "sec1.secContact": "Zweiter Kontaktweg",

        "sec2.title": "Verantwortlich für den Inhalt nach §18 Abs. 2 MStV",
        "sec2.text": "Yannick Schroth, Anschrift wie oben.",

        "sec3.title": "Haftung für Inhalte",
        "sec3.text": "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich.",

        "sec4.title": "Haftung für Links",
        "sec4.text": "Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",

        "footer.status": "Stand: März 2026"

    }

};

let currentLang = 'EN';

function updateLanguage(lang) {

    const data = translations[lang.toLowerCase()];

    document.querySelectorAll('[data-i18n]').forEach(el => {

        const key = el.getAttribute('data-i18n');

        if (data[key]) {
            el.innerText = data[key];
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
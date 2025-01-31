// translation.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Translation script loaded');
    
    const translations = {
        en: {
            introTitle: "From concept to reality<br>Imagine it, and I’ll bring it to life.",
            introText: "Whether it's a logo, CGI, or a product photo...",
        },
        es: {
            introTitle: "Del concepto a la realidad<br>Imagínalo, y lo haré realidad.",
            introText: "Ya sea un logotipo, CGI o una foto de producto...",
        },
        da: {
            introTitle: "Fra koncept til virkelighed<br>Forestil dig det, og jeg vil gøre det til virkelighed.",
            introText: "Uanset om det er en logo, CGI eller et produktfoto...",
        }
    };

    function applyTranslation(lang) {
        console.log('Applying language:', lang);
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            console.log('Translating element:', element, 'with key:', key);
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    document.querySelectorAll('.flag').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Language button clicked:', this.dataset.lang);
            applyTranslation(this.dataset.lang);
        });
    });

    // Initial load
    applyTranslation('en');
});
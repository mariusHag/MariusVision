document.addEventListener('DOMContentLoaded', function() {
    // Load translations from JSON file
    async function loadTranslations() {
        const response = await fetch('translations.json');
        return response.json();
    }

    // Update content with selected language
    function updateContent(translations, lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Change language function
    async function changeLanguage(lang) {
        const translations = await loadTranslations();
        updateContent(translations, lang);
    }

    // Language Selector
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Set default language or use browser language
    const defaultLang = localStorage.getItem('language') || navigator.language.split('-')[0] || 'en';
    changeLanguage(defaultLang);
    
    // Preserve language selection across form submissions
    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('submit', function () {
            const storedLanguage = localStorage.getItem('language') || 'en';
            localStorage.setItem('selectedLanguage', storedLanguage);
        });
    }
});

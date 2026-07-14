(function () {
    const cleanRoutes = {
        'index.html': '/',
        'portfolio-details.html': '/portfolio/',
        'contact-details.html': '/contact/',
        'portrait-of-us.html': '/portrait-of-us/',
        'portfolio-item-2.html': '/first-semester-project/',
        'portfolio-item-3.html': '/second-semester-project/',
        'portfolio-item-4.html': '/where-is-alhambra/',
        'portfolio-item-5.html': '/kurama-dera-rhythm/',
        'mission.html': '/mission/',
        'testimonial-details.html': '/testimonials/'
    };

    const languages = [
        { code: 'en', label: 'EN', name: 'English' },
        { code: 'es', label: 'ES', name: 'Spanish' },
        { code: 'da', label: 'DA', name: 'Danish' },
        { code: 'ja', label: '日本語', name: 'Japanese' }
    ];

    function cleanLegacyUrl() {
        const fileName = window.location.pathname.split('/').pop();
        const cleanPath = cleanRoutes[fileName];

        if (cleanPath) {
            window.history.replaceState(null, '', `${cleanPath}${window.location.hash}`);
        }
    }

    function cleanAnchorHref(rawHref) {
        if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:')) {
            return rawHref;
        }

        try {
            const url = new URL(rawHref, window.location.origin);

            if (url.origin !== window.location.origin) {
                return rawHref;
            }

            const fileName = url.pathname.split('/').pop();
            const cleanPath = cleanRoutes[fileName];

            if (!cleanPath) {
                return rawHref;
            }

            return `${cleanPath}${url.hash}`;
        } catch (error) {
            return rawHref;
        }
    }

    function cleanLinks() {
        document.querySelectorAll('a[href]').forEach((link) => {
            const cleanHref = cleanAnchorHref(link.getAttribute('href'));
            link.setAttribute('href', cleanHref);
        });
    }

    function setCookie(name, value) {
        const expiry = new Date();
        expiry.setFullYear(expiry.getFullYear() + 1);
        const baseCookie = `${name}=${value}; expires=${expiry.toUTCString()}; path=/; SameSite=Lax`;

        document.cookie = baseCookie;

        if (window.location.hostname.includes('.')) {
            document.cookie = `${baseCookie}; domain=.${window.location.hostname}`;
        }
    }

    function getActiveLanguage() {
        const match = document.cookie.match(/(?:^|; )googtrans=\/en\/([^;]+)/);
        return match ? decodeURIComponent(match[1]) : 'en';
    }

    function markActiveLanguage() {
        const activeLanguage = getActiveLanguage();

        document.querySelectorAll('.language-button').forEach((button) => {
            const isActive = button.dataset.language === activeLanguage;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    function changeLanguage(languageCode) {
        setCookie('googtrans', `/en/${languageCode}`);
        markActiveLanguage();

        const selector = document.querySelector('.goog-te-combo');

        if (selector && languageCode !== 'en') {
            selector.value = languageCode;
            selector.dispatchEvent(new Event('change'));
            return;
        }

        window.location.reload();
    }

    function injectLanguageButtons() {
        const nav = document.querySelector('nav');

        if (!nav) {
            return;
        }

        document.querySelectorAll('.language-buttons').forEach((existing) => existing.remove());

        const container = document.createElement('div');
        container.className = 'language-buttons notranslate';
        container.setAttribute('aria-label', 'Language');

        languages.forEach((language) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'language-button';
            button.dataset.language = language.code;
            button.textContent = language.label;
            button.setAttribute('aria-label', `Translate to ${language.name}`);
            button.addEventListener('click', () => changeLanguage(language.code));
            container.appendChild(button);
        });

        const navMenu = nav.querySelector('.nav-menu');
        const navGroup = navMenu ? navMenu.parentElement : nav;
        navGroup.appendChild(container);
        markActiveLanguage();
    }

    function loadTranslationWidget() {
        if (!document.getElementById('google_translate_element')) {
            const widgetMount = document.createElement('div');
            widgetMount.id = 'google_translate_element';
            widgetMount.className = 'notranslate';
            document.body.appendChild(widgetMount);
        }

        window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    includedLanguages: 'es,da,ja',
                    autoDisplay: false
                },
                'google_translate_element'
            );
            markActiveLanguage();
        };

        if (!document.querySelector('script[src*="translate_a/element.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        }
    }

    function wireContactForm() {
        const form = document.querySelector('.contact-form');

        if (!form) {
            return;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const service = document.getElementById('service')?.selectedOptions[0]?.textContent.trim() || '';
            const message = document.getElementById('message')?.value.trim() || '';
            const subject = encodeURIComponent(`Marius Vision inquiry${name ? ` from ${name}` : ''}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${service}\n\n${message}`);

            window.location.href = `mailto:mariushagelskjaer@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    function init() {
        cleanLegacyUrl();
        cleanLinks();
        injectLanguageButtons();
        loadTranslationWidget();
        wireContactForm();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

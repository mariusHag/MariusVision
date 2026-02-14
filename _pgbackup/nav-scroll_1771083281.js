// Shrink header on scroll
// Triggers after scrolling past 60px — adjust threshold to taste
(function () {
    // Only run on desktop — same breakpoint as the CSS media query
    if (!window.matchMedia('(min-aspect-ratio: 7/10)').matches) return;

    const header = document.querySelector('header');
    const SHRINK_AT = 80;
    const GROW_AT   = 40;

    function onScroll() {
        const y = window.scrollY;
        if (!header.classList.contains('scrolled') && y > SHRINK_AT) {
            header.classList.add('scrolled');
        } else if (header.classList.contains('scrolled') && y < GROW_AT) {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
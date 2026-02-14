// Shrink header on scroll
// Triggers after scrolling past 60px — adjust threshold to taste
(function () {
    const header = document.querySelector('header');
    const SHRINK_AT = 80;   // scrollY must exceed this to shrink
    const GROW_AT   = 40;   // scrollY must drop below this to un-shrink
    // The gap between the two (40px) is the dead zone that stops the flicker loop.

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
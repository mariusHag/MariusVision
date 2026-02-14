// Shrink header on scroll
// Triggers after scrolling past 60px — adjust threshold to taste
(function () {
    const header = document.querySelector('header');
    const THRESHOLD = 60;

    function onScroll() {
        if (window.scrollY > THRESHOLD) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Run once on load in case page is already scrolled (e.g. browser restore)
    onScroll();
})();
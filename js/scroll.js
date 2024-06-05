const links = document.querySelectorAll('.navigation__link');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');

        if (href.startsWith('#') && document.querySelector(href)) {
            const target = document.querySelector(href);

            const targetOffset = target.offsetTop;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    });
});

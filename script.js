/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar");

    function updateNavbar() {
        if (!navbar) return;

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );
    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });


    /* =========================================================
       CLOSE MOBILE NAVBAR AFTER CLICK
    ========================================================= */

    const navLinks = document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

    const navbarCollapse = document.getElementById(
        "navbarNav"
    );

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                window.innerWidth < 992 &&
                navbarCollapse &&
                window.bootstrap &&
                bootstrap.Collapse
            ) {
                const bsCollapse =
                    bootstrap.Collapse.getOrCreateInstance(
                        navbarCollapse
                    );

                bsCollapse.hide();
            }
        });
    });


    /* =========================================================
       SIMPLE REVEAL ANIMATION
    ========================================================= */

    const revealElements = document.querySelectorAll(
        ".service-card, .about-card, .plan-card, " +
        ".why-card, .result-card"
    );

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

        return;
    }

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        observer.observe(element);
    });
});
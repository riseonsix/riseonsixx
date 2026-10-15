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

    const founderSection = document.querySelector(".founder-section");

    if (founderSection) {
        founderSection.addEventListener("pointermove", function (event) {
            if (event.pointerType === "touch") return;

            const bounds = founderSection.getBoundingClientRect();
            const x = ((event.clientX - bounds.left) / bounds.width) * 100;
            const y = ((event.clientY - bounds.top) / bounds.height) * 100;

            founderSection.style.setProperty("--cursor-x", x + "%");
            founderSection.style.setProperty("--cursor-y", y + "%");
            founderSection.classList.add("cursor-active");
        });

        founderSection.addEventListener("pointerleave", function () {
            founderSection.classList.remove("cursor-active");
        });
    }

});
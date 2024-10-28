// Código de navegación y toggle de secciones
document.addEventListener("DOMContentLoaded", function () {
    // Toggle de navegación en móvil
    document.getElementById("nav-toggle").addEventListener("click", function () {
        document.getElementById("main-nav").classList.toggle("open");
    });

    // Scroll hacia las secciones
    document.querySelectorAll(".scroll-link").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionID = link.getAttribute("data-id");
            const section = document.getElementById(sectionID);
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        });
    });
});

// Código de `main.js` Simplificado
document.addEventListener("DOMContentLoaded", function () {
    // Efecto parallax
    const parallax = document.querySelector('.parallax-content');
    window.addEventListener('scroll', function () {
        const offset = window.pageYOffset;
        parallax.style.backgroundPositionY = `${offset * 0.5}px`;
    });

    // Activar el formulario emergente en la sección de contacto
    document.querySelector(".pop-button").addEventListener("click", function () {
        document.querySelector(".pop").style.display = "block";
    });

    document.querySelector(".pop > span").addEventListener("click", function () {
        document.querySelector(".pop").style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Toggle de navegación en móvil
    const navToggle = document.getElementById("nav-toggle");
    const mainNav = document.getElementById("main-nav");

    navToggle.addEventListener("click", function () {
        mainNav.classList.toggle("open"); // Mostrar o ocultar el menú
    });

    // Cerrar el menú cuando se hace clic en un enlace
    document.querySelectorAll("#main-nav .scroll-link").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("open");
        });
    });
});

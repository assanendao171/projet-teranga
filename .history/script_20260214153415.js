    const toggle = document.getElementById("menu-toggle");
    const nav = document.getEl("nav-menu");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementsByClassName("nav-menu");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

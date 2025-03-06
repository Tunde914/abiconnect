const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
});

navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth <= 768) { 
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
    }
});


const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "ease",
};

ScrollReveal().reveal(".intro-img img", {
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".intro-text h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".btn-2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".text", {
    ...scrollRevealOption,
    delay: 1000,
}); 

ScrollReveal().reveal(".text-2", {
    ...scrollRevealOption,
    delay: 1000,
}); 
ScrollReveal().reveal(".service-card", {
    ...scrollRevealOption,
    interval: 500,
});

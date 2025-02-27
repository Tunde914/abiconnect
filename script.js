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

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let userEmail = document.getElementById("userEmail").value;
    
    if (userEmail) {
        // Open email client with pre-filled email
        window.location.href = `mailto:abiconnectdigitaledu@gmail.com?subject=New Contact Request&body=User Email: ${userEmail}`;
    } else {
        alert("Please enter your email address before proceeding.");
    }
});

/*function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const business = document.getElementById('business').value;
    const service = document.getElementById('service').value;

    if (!name || !email || !phone || !business || service === "Service Needed") {
        alert("Please fill out all fields!");
        return;
    }
    // Sending data to the backend
    fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, business, service }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        alert("Error sending email. Please try again.");
        console.error(error);
    });
}*/

// Welcome Message
document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to My Website!");
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute("href").substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
// Form Submission Handling
const form = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        formResponse.textContent = `Thank you, ${name}! We have received your message.`;
        formResponse.style.display = "block";
        form.reset();
    } else {
        formResponse.textContent = "Please fill out all fields.";
        formResponse.style.display = "block";
        formResponse.style.color = "red";
    }
});
// Back-to-Top Button Functionality
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

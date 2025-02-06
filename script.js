document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar-link");

    links.forEach(link => {
        link.addEventListener("click", function () {
            document.getElementById("mobileNav").classList.remove("active");
            document.body.style.overflow = "auto"; // Restore scrolling
        });
    });
});

document.getElementById("hamburger").addEventListener("click", function () {
    const nav = document.getElementById("mobileNav");
    nav.classList.toggle("active");
    document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "auto";
});

// Close menu when a link is clicked
document.querySelectorAll("#mobileNav a").forEach(link => {
    link.addEventListener("click", function () {
        const nav = document.getElementById("mobileNav");
        nav.classList.remove("active");
        document.body.style.overflow = "auto"; // Restore scrolling
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar-link");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
        link.addEventListener("click", function () {
            document.getElementById("mobileNav").classList.remove("active");
            document.body.style.overflow = "auto"; // Restore scrolling
        });
    });

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Add the visible class
                    observer.unobserve(entry.target); // Stop observing after animation runs
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    sections.forEach(section => observer.observe(section));
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

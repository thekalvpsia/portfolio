document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar-link");
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const link = document.querySelector(`.sidebar-link[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                links.forEach((link) => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});

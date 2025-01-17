document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar-link");
    const sections = document.querySelectorAll("section");
    const projectsContainer = document.querySelector(".projects-container");

    let observer;

    const getObserverOptions = () => {
        const computedStyle = window.getComputedStyle(projectsContainer);
        const columnCount = computedStyle.gridTemplateColumns.split(" ").length; // Count the columns
        const isProjectsInColumn = columnCount === 1; // If there's only one column
        return {
            root: null,
            rootMargin: "0px",
            threshold: isProjectsInColumn ? 0.2 : 0.6, // Adjust threshold based on column count
        };
    };

    const setupObserver = () => {
        if (observer) observer.disconnect(); // Disconnect the old observer if it exists

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const link = document.querySelector(`.sidebar-link[href="#${entry.target.id}"]`);
                if (entry.isIntersecting) {
                    links.forEach((link) => link.classList.remove("active"));
                    link.classList.add("active");
                }
            });
        }, getObserverOptions());

        sections.forEach((section) => observer.observe(section));
    };

    setupObserver(); // Initial setup

    // Recheck layout and reset observer on window resize
    window.addEventListener("resize", setupObserver);
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

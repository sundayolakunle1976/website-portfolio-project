document.addEventListener("DOMContentLoaded", () => {
    // Select the menu toggle button and navigation element
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    // Handle mobile navigation menu toggle
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");

            // Update accessibility state
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    // Automatically display the current year
    document.querySelectorAll(".year").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
});
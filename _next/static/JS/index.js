document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Apply animation
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of element is visible

    document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
});
function navbarCollapsible(){
    document.querySelector(".hamburger-menu").addEventListener("click", function() {
        this.classList.toggle("active");
        document.querySelector(".main-menu").classList.toggle("show-menu")
    });
}
navbarCollapsible()
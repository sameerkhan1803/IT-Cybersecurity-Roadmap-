// Scroll Animation
window.addEventListener("scroll", () => {
document.querySelectorAll(".reveal").forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 100) {
el.classList.add("active");
}
});
});

// Dark/Light Toggle
function toggleMode() {
document.body.classList.toggle("light");
}

// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
elements.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight) {
el.classList.add('show');
}
});
});

// DARK LIGHT TOGGLE
function toggleTheme() {
document.body.classList.toggle('light');
}

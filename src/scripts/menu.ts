const hamburger = document.querySelector('.hamburger') as HTMLElement;
const navLinks = document.querySelector('.nav-links') as HTMLElement;

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('expanded');
    });
}
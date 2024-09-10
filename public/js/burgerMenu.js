const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuVisible = false;

menuBtn.addEventListener('click', () => {
    isMenuVisible = !isMenuVisible;

    if (isMenuVisible) {
        mobileMenu.classList.remove('hidden');
        document.body.style.paddingBottom = `${mobileMenu.offsetHeight}px`;
    } else {
        mobileMenu.classList.add('hidden');
        document.body.style.paddingBottom = '0';
    }
});
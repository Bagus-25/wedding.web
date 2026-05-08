// ===== SCROLL TO SLIDE 2 =====
function scrollToSlide2() {
    document.getElementById('slide2').scrollIntoView({ behavior: 'smooth' });
}

// ===== LOADING SCREEN =====
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 600);
});

// ===== SLIDE 2 ANIMATION TRIGGER =====
const container = document.getElementById('mainContainer');
const slide2 = document.getElementById('slide2');
const slide2Content = document.querySelector('.slide2-content');

container.addEventListener('scroll', () => {
    const rect = slide2.getBoundingClientRect();
    // When slide 2 is in view, trigger animation
    if (rect.top < window.innerHeight * 0.5) {
        slide2Content.classList.add('visible');
    } else {
        slide2Content.classList.remove('visible');
    }
});

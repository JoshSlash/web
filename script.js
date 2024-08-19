const dynamicText = document.getElementById('dynamic-text');
const texts = ["Programador Web y de Software", "Especialista en Python", "Desarrollador de Software"];
let index = 0;

setInterval(() => {
    dynamicText.textContent = texts[index];
    index = (index + 1) % texts.length;
}, 2000);
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

function showNextItem() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    carouselItems[currentIndex].classList.add('active');
}

setInterval(showNextItem, 5000);

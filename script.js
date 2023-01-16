const showingClass = 'showing';
const firstSlide = document.querySelector('.slider_item:first-child');
firstSlide.classList.add(showingClass);

function slide() {
    const currentSlide = document.querySelector(`.${showingClass}`);
    if(currentSlide) {
        currentSlide.classList.remove(showingClass);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide) {
            nextSlide.classList.add(showingClass);
        } else {
            firstSlide.classList.add(showingClass);
        }
    } else {
        firstSlide.classList.add(showingClass);
    }
}

setInterval(slide, 2000);
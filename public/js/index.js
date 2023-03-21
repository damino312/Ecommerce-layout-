class Slider {

    sliderIndex = 1;

    obj;

    constructor(obj) {

        this.obj = obj;
    }

    showSlide(sliderIndex) { 

        if (sliderIndex > this.obj.length) {
            this.sliderIndex = 1;
        }
        if (sliderIndex < 1) {
            this.sliderIndex = this.obj.length;
        }
        for (let slide of this.obj) {
            slide.style.display = "none";
        }
        this.obj[this.sliderIndex - 1].style.display = "block";
    }

    nextSlide = () => {
        this.sliderIndex += 1;
    this.showSlide(this.sliderIndex);

    }

    prevSlide = () => {
        this.sliderIndex -= 1;
        this.showSlide(this.sliderIndex);
    }  
}

const slides = document.querySelectorAll('#slide');
const slideNext = document.querySelector('#slideNext');
const slidePrev = document.querySelector('#slidePrev');


const sliderIndex = new Slider(slides);
sliderIndex.showSlide(1);
slideNext.addEventListener('click', sliderIndex.nextSlide);
slidePrev.addEventListener('click', sliderIndex.prevSlide);

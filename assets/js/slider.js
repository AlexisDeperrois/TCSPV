let index= 0;
const sliderImages = [
    'gymnase.jpg',
    'filet.jpg',
    'image-accueil.jpg',
    ];


const sliders= {


    init: function(){

        

        const addImg = document.createElement("img");
        addImg.src="assets/images/gymnase.jpg";
        addImg.classList.add("slider__img","slider__img--current");      
        
        const slider = document.querySelector(".slider");
        slider.appendChild(addImg);
        
        
        const btnSlider = document.querySelectorAll(".slider__btn");
        buttonPrécédent = btnSlider[0];
        buttonSuivant = btnSlider[1];


        buttonPrécédent.addEventListener("click", sliders.slidePrecedent);
        buttonSuivant.addEventListener("click", sliders.slideSuivant);
    },

    slideSuivant: function(){
        index++;
        if(index > sliderImages.length-1){
        index = 0
        };
        let image = document.querySelector(".slider__img");
        image.src = "assets/images/"+ sliderImages[index];
    },

    slidePrecedent: function(){
        index--;
        if(index<0){
        index = sliderImages.length - 1
        };
        let image = document.querySelector(".slider__img");
        image.src = "assets/images/"+ sliderImages[index];
    },



};

document.addEventListener('DOMContentLoaded', sliders.init);










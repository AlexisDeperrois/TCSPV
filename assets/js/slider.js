let index= 0;
const sliderImages = document.querySelectorAll('.slide')


const sliders= {


    init: function(){

        sliderImages[0].classList.add('slide_active'); 

        document.querySelector(".slider_btn_left").addEventListener("click", sliders.slidePrecedent);
        document.querySelector(".slider_btn_right").addEventListener("click", sliders.slideSuivant);
    },

    slideSuivant: function(){
        document.querySelector('.slide_active').classList.remove('slide_active');
        index++;
        if(index > sliderImages.length-1){
        index = 0
        };
        sliderImages[index].classList.add('slide_active');
    },

    slidePrecedent: function(){
        document.querySelector('.slide_active').classList.remove('slide_active');
        index--;
        if(index<0){
        index = sliderImages.length - 1
        };
        sliderImages[index].classList.add('slide_active');
        
    },

};

document.addEventListener('DOMContentLoaded', sliders.init);










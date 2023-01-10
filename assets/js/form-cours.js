const formCours= {


    init: function(){

        const form = document.querySelector("form");
        form.addEventListener("submit", formCours.findMe)       
       
    },

    findMe: function(event){
        event.preventDefault();

        let name = document.querySelector('input').value
        console.log(name)
        let adhérents = document.querySelectorAll('li')
        console.log(adhérents);

        for(let adhérent of adhérents){

            adhérent.classList.remove('nameFound')

            if (adhérent.textContent === name){
                adhérent.classList.add('nameFound')
            }

        }
        
    },

   
};

document.addEventListener('DOMContentLoaded', formCours.init);










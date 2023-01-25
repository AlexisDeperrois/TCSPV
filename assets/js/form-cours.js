const formCours= {


    init: function(){

        const form = document.querySelector("form");
        form.addEventListener("submit", formCours.findMe)       
       
    },

    findMe: function(event){
        event.preventDefault();

        let name = document.querySelector('input').value.toLowerCase();
        let adhérents = document.querySelectorAll('li');

        for(let adhérent of adhérents){

            adhérent.classList.remove('nameFound');

            let adhérentName = adhérent.textContent.toLowerCase()

            if (adhérentName.includes(name)){
                adhérent.classList.add('nameFound')
            }

        }
        
    },

   
};

document.addEventListener('DOMContentLoaded', formCours.init);










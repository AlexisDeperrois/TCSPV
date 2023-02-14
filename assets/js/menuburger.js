const menuburger ={

    init : function (){
        let btn = document.querySelector(".burger_btn");
               
        btn.addEventListener("click", menuburger.showOrHideMenu);
    },

    showOrHideMenu : function (){
        console.log("ça clic")
        let nav = document.querySelector('nav');
        nav.classList.toggle("show");

    },

    
}

document.addEventListener('DOMContentLoaded', menuburger.init);

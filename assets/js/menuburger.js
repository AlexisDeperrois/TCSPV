const menuburger ={

    init : function (){
        console.log("init ok");

        let btn = document.querySelector(".burger_btn");

        console.log(btn);
        
        btn.addEventListener("click", menuburger.showOrHideMenu);
    },

    showOrHideMenu : function (){
        console.log("ça clic")
        let nav = document.querySelector('nav');
        nav.classList.toggle("show");

    },

    
}

document.addEventListener('DOMContentLoaded', menuburger.init);

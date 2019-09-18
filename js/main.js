"use strict";
(function(){
    
    let openModalBtn = document.querySelector(".map_btn");
    let modalWindow = document.querySelector(".modal");
    let closeModalBtn = modalWindow.querySelector(".close-modal");   
    
    
    const openModal = function(button, modal, closeBtn){
        if(modal){
            button.addEventListener("click", function(e){
                e.preventDefault();
                modal.classList.add("modal-show");
            });
            
            closeBtn.addEventListener("click", function(e){
                e.preventDefault();
                modal.classList.remove("modal-show");
            });
            
            window.addEventListener("keydown", function(e){
                e.keyCode === 27 && modal.classList.contains("modal-show") && modal.classList.remove("modal-show");
            });
            
        }
    };
      
    openModal(openModalBtn,modalWindow,closeModalBtn);
  
})();
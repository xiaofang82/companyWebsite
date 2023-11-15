'use strict'

const model = document.getElementById('model');
const btnShow = document.getElementById('sign-in');
const modalContainer = document.querySelector('.modal-container');

btnShow.addEventListener('click', function(){
    modalContainer.classList.add('model_show');
    model.classList.add('modal-transform');
});

window.addEventListener('click', function(event){
    if(event.target == modalContainer){
        modalContainer.classList.remove('model_show');
        model.classList.remove('modal-transform');
    }
});

window.addEventListener('keyup', function(event){
    if(event.key == 'Escape'){
        modalContainer.classList.remove('model_show');
        model.classList.remove('modal-transform');
    }
})
'use strict'

const bigPic = document.querySelector('.bigPic');
let currentIndexID = '#small1';
const smallPics = document.querySelectorAll('.smallPic');

smallPics.forEach((item) => {
    item.addEventListener('mouseover', () => {
        const style = window.getComputedStyle(item);
        let imUrl = style.backgroundImage.slice(4,-1).replace(/"/g,"");
        bigPic.style.backgroundImage = `url(${imUrl})`;
    });
    item.addEventListener('mouseout', () => {
        const currentSmallPic = document.querySelector(currentIndexID);
        setBigPic(currentSmallPic);
    });
    item.addEventListener('click', () => {
        currentIndexID = '#' + item.id;
        clearShadow();
        changeShadow();
        setBigPic(item);
    });
});

clearShadow();
changeShadow();

function clearShadow(){
    const sls = document.querySelectorAll('.sl');
    sls.forEach((item) => {
        item.style.height = '0px';
    });
}

function changeShadow(){
    let slID = '#sl' + currentIndexID.charAt(6);
    const sl = document.querySelector(slID);
    sl.style.height = '4px';
}

function setBigPic(item){
    const style = window.getComputedStyle(item);
    let imUrl = style.backgroundImage.slice(4,-1).replace(/"/g,"");
    bigPic.style.backgroundImage = `url(${imUrl})`;
}


const colorBoxes = document.querySelectorAll('.colorBox');
let currentColorID ='blackD';
colorBoxes.forEach((item) => {
    const colorName = document.querySelector('.colorName');
    item.addEventListener('mouseover', () => {
        if(item.id === 'blackD'){
            colorName.innerText = 'Black';
        } else {
            colorName.innerText = 'White';
        }
    });
    item.addEventListener('mouseout', () => {
        if(currentColorID === 'blackD'){
            colorName.innerText = 'Black';
        } else {
            colorName.innerText = 'White';
        }
    });
    item.addEventListener('click', () => {
        if(currentColorID != item.id){
            currentColorID = item.id;
            if(currentColorID === 'blackD'){
                colorName.innerText = 'Black';
            } else {
                colorName.innerText = 'White';
            }
            setColorBorder();
            changeImg();
        }        
    });
})

setColorBorder();
function setColorBorder(){
    const blackD = document.querySelector('#blackD');
    const redD = document.querySelector('#redD');
    if(currentColorID === 'blackD'){
        blackD.style.borderColor = '#2e2f32';
        blackD.style.borderWidth = '2px';
        redD.style.borderColor = '#e3e4e5';
        redD.style.borderWidth = '1px';
    } else {
        redD.style.borderColor = '#2e2f32';
        redD.style.borderWidth = '2px';
        blackD.style.borderColor = '#e3e4e5';
        blackD.style.borderWidth = '1px';       
    }
}

function changeImg(){
    currentIndexID = '#small1';
    clearShadow();
    changeShadow();
    const small1 = document.querySelector('#small1');
    const small2 = document.querySelector('#small2');
    const small3 = document.querySelector('#small3');
    const small4 = document.querySelector('#small4');  
    if(currentColorID === 'blackD'){
        small1.style.backgroundImage = 'url("./assets/img/chair101/white1.avif")';
        small2.style.backgroundImage = 'url("./assets/img/chair101/white2.avif")';
        small3.style.backgroundImage = 'url("./assets/img/chair101/white3.avif")';
        small4.style.backgroundImage = 'url("./assets/img/chair101/white4.avif")';
    } else {
        small1.style.backgroundImage = 'url("./assets/img/chair101/black1.avif")';
        small2.style.backgroundImage = 'url("./assets/img/chair101/black2.avif")';
        small3.style.backgroundImage = 'url("./assets/img/chair101/black3.avif")';
        small4.style.backgroundImage = 'url("./assets/img/chair101/black4.avif")';


    }
    setBigPic(small1);
}


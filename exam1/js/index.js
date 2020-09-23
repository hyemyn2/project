function init(){

var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');

var viewTag = document.querySelector('.txt a');
var pop = document.querySelector('.pop');
var popBtn = document.querySelector('.pop .btn')


// burger
// if(menu.className=='active'){

// }
burger.addEventListener('click',showMenu);

function showMenu(){
    if(burger.classList!='active'){
        burger.classList.add('active');
        menu.classList.add('active');
    } else if(burger.classList=='active'){
        burger.classList.remove('active');
        menu.classList.remove('active');
    }


}
// menu.classList.add('active');

// function showNav(){
//     menu.classList.remove('active');
//     burger.addEventListener('click',off);
// }

// function off(){
//     menu.style = 'opacity:0';
// }


// pop
viewTag.addEventListener('click', popUp);
popBtn.addEventListener('click',popOff);
function popUp(){
    pop.classList.add('active');
}
function popOff(){
    pop.classList.remove('active');
}
s


// ---------------------------------------------------------------- jquery
/*

$('.burger').on('click',showNav);

function showNav(){
    $('.menu').toggleClass('active');
    $('.burger').toggleClass('active');
}

$('.txt a').on('click',popUp);

function popUp(){
    $('.pop').addClass('active');
    $('.pop .btn').on('click',popOff);
}

function popOff(){
    $('.pop').removeClass('active');
}

*/


}

window.addEventListener('DOMContentLoaded',init);
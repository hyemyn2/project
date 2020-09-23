function init(){

$('.burger').on('click',showNav);

function showNav(){
    $('.menu').toggleClass('active');
    $('.burger').toggleClass('active');
}

$('.txt a').on('click',popUp);

function popUp(e){
    e.preventDefault();
    $('.pop').addClass('active');
    $('.pop .btn').on('click',popOff);
}

function popOff(){
    $('.pop').removeClass('active');
}

}

window.addEventListener('DOMContentLoaded',init);
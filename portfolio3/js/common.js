function init(){

    var navLi = document.querySelectorAll('header .head nav ul li')

    navLi.forEach(function(i,k){
        navLi[k].addEventListener('click',function(){
            findCon(k);
        });
    });

    function findCon(k){
        console.log(k)
        
    }

}

window.addEventListener('DOMContentLoaded',init);
$(function(){

    var bigCon = document.querySelector('main .big');
    var smallCon = document.querySelectorAll('main .small section');

    bigCon.addEventListener('click',function(){
        window.location.pathname = "project/portfolio2/career/apply/career_apply_jobs.html";
    });

    smallCon.forEach(function(i,k){
        smallCon[k].addEventListener('click',function(){
            console.log(k)
            if(k==0){
                window.location.pathname = "project/portfolio2/career/apply/career_apply_delivery.html";
            }else if(k==1){
                window.location.pathname = "project/portfolio2/career/career_family.html";
            }else if(k==2){
                window.location.pathname = "project/portfolio2/index.html";
            }

        });
    });





    // header

    var bg = document.querySelector('.head .burger');
    var bgNav = document.querySelector('.head nav');

    
    if(location.href=="http://127.0.0.1:5500/portfolio2/career/career_main.html"){
        window.addEventListener('mousewheel',function(e){
            console.log(e)
        });
    }



});
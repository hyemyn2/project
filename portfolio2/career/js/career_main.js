$(function(){

    var bigCon = document.querySelector('main .big');
    var smallCon = document.querySelectorAll('main .small section');

    bigCon.addEventListener('click',function(){
        window.location.pathname = "../apply/career_apply_jobs.html";
    });

    smallCon.forEach(function(i,k){
        smallCon[k].addEventListener('click',function(){
            console.log(k)
            if(k==0){
                window.location.pathname = "../apply/career_apply_delivery.html";
            }else if(k==1){
                window.location.pathname = "../career_family.html";
            }else if(k==2){
                window.location.pathname = "../../index.html";
            }

        });
    });


});
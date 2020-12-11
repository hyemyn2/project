$(function(){

    var tab = document.querySelectorAll('.menu a');
    var con = document.querySelectorAll('.change .content');
    tab.forEach(function(i,k){
        i.addEventListener('click',function(e){
            e.preventDefault();
            changeTab(i);
            changeCon(k);
            changeGal();
        });
    });

    function changeTab(i){
        tab.forEach(function(i){
            i.classList.remove('active');
        });
        i.classList.add('active');
    }

    function changeCon(k){
        con.forEach(function(i){
            i.classList.remove('active');
        });
        con[k].classList.add('active');
    }


    // pics button

    function changeGal(){
        var gal = document.querySelector('.content.active .wrap .pic ul');
        var pic = document.querySelectorAll('.content.active .wrap .pic ul li');
        var btn = document.querySelectorAll('.content.active .wrap .btn button');
        var idx = 0;
        btn.forEach(function(i,k){
            i.addEventListener('click',function(){
                movePic(k);
            });
        });
        function movePic(k){
            console.log(btn);
            if(btn[k].classList.contains('arrow_prev')){
                if(idx!=0) idx--;
            }else{
                if(idx!=pic.length-1) idx++;
            }
    
            gal.style = "transform:translateX("+-100/3*idx+"%);";
        }
    }
    changeGal();


});
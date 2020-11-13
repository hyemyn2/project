
$(function(){

    $('header').load('inc_head_foot.html header .tie',head);


    var idx=0, aa;

    function head(){

        if(location.href == "http://127.0.0.1:5500/portfolios/index.html"){
            setTimeout(function(){
                document.addEventListener('mousewheel',function(e){
                    upDown = e.wheelDelta;
            
                    clearTimeout(aa);
                    aa = setTimeout(function(){
                        move(upDown);
                    },500);
                });
            },2500);
        }

        if(location.href == "http://127.0.0.1:5500/portfolios/work.html"){
            $('.head_1').removeClass('active');
            $('.head_2').removeClass('active');
            $('.head_3').addClass('active');
        } else{
            $('.head_3').removeClass('active');
        }

        // var head3_right = document.querySelector('.head_3 .right');
        // head3_right.addEventListener()


            
    }



    function move(upDown){

        if(upDown<0){
            if(idx!=5) idx++
        }else{
            if(idx!=0) idx--;
        }


        if(idx==0){
        console.log(idx);
            $('.head_1').addClass('active');
            $('.head_2').removeClass('active');
        } else{
            $('.head_2').addClass('active');
            $('.head_1').removeClass('active');
            $('.head_2 .right').removeClass('active');

            if(idx==5){
                $('.head_2 .right').addClass('active');
            }
        }
    }



    
});
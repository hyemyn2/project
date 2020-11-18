// import * as all from './index.js';



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

            var pageNum = localStorage.pagenum;
            // showPage(localStorage.pagenum);
            idx = pageNum;
            showPage(0);
        
            function reset(){
                if(pageNum!=''){
                    // console.log(pageNum);
                    showPage(pageNum);
                }
                localStorage.pagenum='';
            }
        
            setTimeout(function(){
                reset();
        
            },100);




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

        
        // $('nav .navi li').on('click',function(){
        //     idx = $(this).index()+1;
        //     showPage(idx);
        // });

        $('.mid').on('mouseover',function(){
            $('nav .navi').addClass('active');
            $('.mid').on('mouseout',function(){
                $('nav .navi').removeClass('active');
            });

        });

        var btnHome = document.querySelector('header .head_2 .left');
        btnHome.addEventListener('click',function(){
            console.log('a')
            showPage(0);
        });

        var navi = document.querySelectorAll('header .mid .navi li');
        var changeIdx = 0;
        navi.forEach(function(i, k) {
            navi[k].addEventListener('click', function() {
                changeIdx = k + 1;
                showPage(changeIdx);
            });
        });
            
    }



    function move(upDown){
        if(upDown<0){
            if(idx!=5) idx++
        }else{
            if(idx!=0) idx--;
        }
        showPage(idx);
    }

    function showPage(a){
        idx = a;
        if(idx==0){
            // console.log(idx);
                $('.head_1').addClass('active');
                $('.head_2').removeClass('active');
                // $('nav').removeClass('active');
            } else{
                $('nav').addClass('active');
                // $('nav .navi li').removeClass('active');
                // $('nav .navi li').eq(idx-1).addClass('active');
                $('.head_2').addClass('active');
                $('.head_1').removeClass('active');
                $('.head_2 .right').removeClass('active');
    
                if(idx==5){
                    $('.head_2 .right').addClass('active');
                }
            }
    }



    
});
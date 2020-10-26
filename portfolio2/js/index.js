$(function(){




    // -------------------------------------------------------animaiton box 1
    // -------------------------------------------------------animaiton box 2

    var box = document.querySelector('.box_2 .ani');
    var txts = document.querySelector('.box_2 .ani ul');
    var txtFade = document.querySelector('.box_2 .txt_fade')
    var idx = 0, moveTxt;

    function loop_2(){
        idx=0;
        txts.style = "left:0px;";
        setTimeout(function(){
            moveTxt = setInterval(function(){
                idx++;
                txts.style = "left:-"+idx+"px;";
                if(idx===txts.offsetWidth){
                    ending();
                    // console.log(idx);
                }
            },1);
        },1200);

    }

    function stop(){
        clearInterval(moveTxt);
    }
    
    function ending(){
        txtFade.style = "opacity:1";
        setTimeout(function(){
            txtFade.style = "opacity:0";
        },3000);
    }

    loop_2();

    setInterval(function(){
        stop();
        idx=0;
        loop_2();
    },35000);

    // -------------------------------------------------------animaiton box 3

    var ppl = document.querySelector('.box_3 .ani .people');
    var person = document.querySelectorAll('.box_3 .ani .people p');
    var arrow = document.querySelector('.box_3 .ani .arrow');
    var light = document.querySelector('.box_3 .ani .light');

    function loop_3(){
        person[3].classList.remove('active');
        ppl.classList.remove('active');
        arrow.classList.remove('active');
        light.classList.remove('active');

        person.forEach(function(i,k){
            if(k!=3){
                setTimeout(function(){
                        i.classList.add('active');
                    },700*(k+1));
                } else if(k==3){
                    setTimeout(function(){
                        person.forEach(function(i,k){
                            if(k!=3){
                                i.classList.remove('active');
                                // i.style = "left:40%; top:40%;";
                            }
                        });
                        i.classList.add('active');
                    },700*(k+1));
                }
            });
            
            
            setTimeout(function(){
                ppl.classList.add('active');
            },3500);
            
            setTimeout(function(){
                arrow.classList.add('active');
            },4200);
            
            setTimeout(function(){
                light.classList.add('active');
            },4900);
            
        }

        loop_3();

        setInterval(function(){
            loop_3();
        }, 5600);





        $('.box_1 .txt').on('click',function(){
            location.href = 'introduce/introduce.html';
        });
        $('.box_2 .txt').on('click',function(){
            location.href = 'location/location_list.html';
        });
        $('.box_3 .txt').on('click',function(e){
            e.preventDefault();
            window.open("career/apply/career_apply_delivery.html","_blank");
            // _parent.location.href = 'career/apply/career_apply_delivery.html';
            
        });


            

//     <article class="box box_3">
//     <div class="txt">
//         <h2>열정적인 사람들이 모여<br>
//             문제를 해결합니다.</h2>
//         <a href="#">쿠팡패밀리</a>
//     </div>
//     <div class="ani">
//         <div class="people">
//             <p><img src="img/index/people_orange.png" alt=""></p>
//             <p><img src="img/index/people_gray.png" alt=""></p>
//             <p><img src="img/index/people_gray.png" alt=""></p>
//             <p><img src="img/index/people_big.png" alt=""></p>
//         </div>
//         <div class="arrow">
//             <p><img src="img/index/arrow_kakao.png" alt=""></p>
//         </div>
//         <div class="light">
//             <p><img src="img/index/light_b.png" alt="">
//                 <span><img src="img/index/thunder_yellow.png" alt=""></span>
//             </p>
            
//         </div>
//     </div>
// </article>




});
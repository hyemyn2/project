function init() {

    setIndex();

    function setIndex(){
        // console.log(pageNum)

        var hd, aa, aaRecent, aaSkillTxt, idx = 0;
        var changeIdx;
        var sectOne = document.querySelector('main .page1 .sect1');
        var recentImg = document.querySelector('main .page1 .sect1 .recent .pic_recent');
        var sectTwo = document.querySelector('main .page1 .sect2');
        var main = document.querySelector('main');
        var btnHome, navi, btnWork, mid;
        var pageNum = localStorage.pagenum;

        // console.log(pageNum)

        goPage(0);

        function reset(){
            if(pageNum!=''){
                // console.log(pageNum);
                showPage(pageNum);
                navAct(pageNum);
            }
            localStorage.pagenum='';
        }

        setTimeout(function(){
            reset();
        },100);

    
        // console.log(localStorage.pagenum);
    
        main.classList.remove('active-convert');
    
        // --------------------------------- mousewheel 함수

        // if(pageNum==0){

        setTimeout(function() {
            document.addEventListener('mousewheel', function(e) {
                upDown = e.wheelDelta;
                clearTimeout(aa);
                aa = setTimeout(function() {
                    move(upDown);
                    // console.log(idx)
                }, 500);
            });
        }, 2500);

        // }

    
        function move(upDown) {
            if (upDown < 0) {
                if (idx != 4) idx++
            } else {
                if (idx != 0) idx--;
            }
            goPage(idx);
            navAct(idx);
        }
    
        // --------------------------------- 페이지이동 함수
        function goPage(a) {
            idx = a;
            switch (idx) {
    
                case 0:
                    // home
                    sectOne.classList.remove('active1');
                    break;
                case 1:
                    // intro
                    sectOne.classList.add('active1');
                    sectOne.classList.remove('active2');
                    hd = document.querySelector('header');
                    mid = document.querySelector('header .mid');
                    navi = document.querySelectorAll('header .mid .navi li');
                    btnHome = document.querySelector('header .head_2 .left');
                    btnWork = document.querySelector('header .head_2 .right');
                    navFunc(navi, btnHome, btnWork, hd, mid);
                    navAct(0);
                    // console.log(navi)
                    break;
                case 2:
                    // skill
                    sectOne.classList.add('active2');
                    sectOne.classList.remove('active3');
                    break;
                case 3:
                    // project
                    sectOne.classList.add('active3');
                    sectOne.classList.remove('active-move');
                    sectTwo.classList.remove('active-move');
                    break;
                case 4:
                    // at work
                    sectOne.classList.add('active-move');
                    sectTwo.classList.add('active-move');
                    // sectTwo.classList.remove('active-change');
                    // main.classList.remove('active-change');
    
                    break;
                // case 5:
                //     //as person
                //     sectTwo.classList.add('active-change');
                //     main.classList.add('active-change');
                //     break;
            }
    

            if(idx==3){
                    aaRecent = setInterval(function(){
                        setTimeout(function(){
                            var recentImg = document.querySelector('main .page1 .sect1 .recent .pic_recent');
                            recentImg.append(recentImg.children[0]);
                        },150);
                    },150*recentImg.children.length);
                // console.log(recentImg)
            } else{
                clearInterval(aaRecent);
            }


                    
                    // setTimeout(function(){
                        // skillPic.forEach(function(i,k){
                        //     console.log('a')
                        //     setTimeout(function(){
                        //         i.classList.add('active');
                        //     },3000);
                        // });

                        // skillTxt.forEach(function(i,k){
                        //     i.classList.add('active');
                        // });
                    // },2000);

                //     skillTxt.forEach(function(i,k){
                //         setTimeout(function(){
                //         // console.log(k)
                //             skillTxt.forEach(function(i,k){
                //                 i.classList.remove('active');
                //             });
                //             i.classList.add('active');
                //             // console.log(k)
                //         },2000*k);
                //     });

                //     aaSkillTxt = setInterval(function(){

                //     // console.log(2000*skillTxt.length)
                //     skillTxt.forEach(function(i,k){
                //         setTimeout(function(){
                //             skillTxt.forEach(function(i,k){
                //                 i.classList.remove('active');
                //             });
                //             i.classList.add('active');
                //             console.log(k)
                //         },2000*k);
                //     });
                // },6000);



            // } else{
            //     skillPic.forEach(function(i,k){
            //         i.classList.remove('active');
            //     });

                // skillTxt.forEach(function(i,k){
                //     i.classList.remove('active');
                // });

                // clearInterval(aaSkillTxt);
                // skillTxt.forEach(function(i,k){
                //     i.classList.remove('active');
                // });
                // skillTxt[0].classList.add('active');
            // }


        //     if(idx==4){
        //         var aniUl = document.querySelector('.ani');
        //         var aniLi = document.querySelector('.ani .ppl');
        //         var getLi = aniUl.innerHTML;
        //         console.log(aniLi);

        //         aaPpl = setInterval(function(){
        //             aniUl.innerHTML = '';
        //             for(var i=0; i<3; i++){
        //                 setTimeout(function(){
        //                 aniUl.innerHTML+=getLi;
        //                 console.log(aniUl)
        //                 },1000*i);
        //             }
        //         },1000*3);
        // } else{
        //     var aniUl = document.querySelector('.ani');
        //     clearInterval(aaPpl);
        // }
        }
    
    
    
        // --------------------------------- 네비게이션 함수
        function navAct(idx) {
            $('nav .navi li').removeClass('active');
            $('nav .navi li').eq(idx - 1).addClass('active');
        }
    
    
        // header 내 버튼 기능 추가 함수
        function navFunc(navi, btnHome, btnWork, hd, mid) {
            navi.forEach(function(i, k) {
                navi[k].addEventListener('click', function() {
    
                    // clearTimeout(aaNav);
                    // aaNav = setTimeout(function(){
                    changeIdx = k + 1;
                    // navAct(changeIdx);
                    showPage(changeIdx);
                    navAct(changeIdx);
                    // },500);
                });
            });
    
            btnHome.addEventListener('click', function() {
                showPage(0);
                navAct(0);
            });
    
            btnWork.addEventListener('click', function() {
                seeWorks();
                console.log(hd);
                hd.style = "opacity:0;";
                setTimeout(function() {
                    hd.style = "opacity:1;"
                }, 3000);
            });
    
            mid.addEventListener('mouseover',function(){
                main.classList.add('active-bg');
                mid.addEventListener('mouseout',function(){
                    main.classList.remove('active-bg');
                });
            });
        }
    
        function showPage(changeIdx) {
            if (idx > changeIdx) {
                //prev
                for (var idxNow = idx; idxNow >= changeIdx; idxNow--) {
                    console.log('a')
                    goPage(idxNow);
                    // console.log(idxNow)
                    // console.log(idx)
                }
            } else if (idx < changeIdx) {
                //next
                for (var idxNow = idx; idxNow <= changeIdx; idxNow++) {
                    goPage(idxNow);
                    // console.log(idxNow)
                    // console.log(changeIdx)
                }
            }
        }
    
        // showPage(pageNum);


    
        function seeWorks() {
            localStorage.pagenum = idx;
            console.log(localStorage.pagenum)
            main.classList.add('active-convert');
            setTimeout(function() {
                location.href = 'work.html';
            }, 1000);
        }

        // 인재영업 페이지 이동
        // var menuCareer = document.querySelector('.go_career');
        // menuCareer.addEventListener('click',function(e){
        //     e.preventDefault();
        //     window.open("/project/portfolio2/career/career_main.html","_blank");
        // });


        var btnVdo = document.querySelector('main .page1 .sect1 .recent_otherbox .btn_video');
        btnVdo.addEventListener('click',function(e){
            e.preventDefault();
            window.open("https://www.youtube.com/watch?v=Q5pwfQxU598","_blank");
        });



// ------------------------------------ 프로필 모자이크

{/* <img id="profile_pic" src="img_extract.jpeg" alt="profile" width="740" height="900">
<canvas id="myCanvas" width="740" height="900" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas> */}


        document.getElementById("profile_pic").onload = function() {
            var c = document.getElementById("profile");
            var ctx = c.getContext("2d");

            var img = document.getElementById("profile_pic"); // 이미지 데이터 호출
            ctx.drawImage(img, 0, 0); //  캔버스의 위치설정 후 그림

            // 캔버스 그림 그린 후 데이터 get
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            // invert colors
            // for (var i = 0; i < imgData.data.length; i += 8) {

            //     var num = i;
            //     for (var k = 0; k < 8; k++) {
            //         // imgData.data[i + k] = 255 - imgData.data[i];
            //         imgData.data[i + k] = imgData.data[i];
            //     }
            // }

            // console.log(2664000 / 7400)

            for (var i = 0; i < 360; i++) {
                controlSpeed(i);
            }

            function controlSpeed(i) {
                setTimeout(function() {
                    for (var k = 7400 * i; k < 7400 * (i + 1); k += 40) {
                        for (var p = 0; p < 40; p++) {
                            imgData.data[k + p] = imgData.data[k];
                        }
                    }
                    ctx.putImageData(imgData, 0, 0);
                }, i * 3);
            }

        }


    }
    


}


window.addEventListener('DOMContentLoaded', init);
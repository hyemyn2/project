function init(){
    // var img = document.querySelectorAll('.con_shop li')
    // console.log(img[1].offsetWidth);
    // console.log(img[1].offsetHeight);
    // 1084 & 530



    // --------------- scroll : mainPositon, headerDesign

    var idx = 0, aaScroll;
    var main = document.querySelector('main');
    var arc = document.querySelectorAll('main article');
    var hd = document.querySelector('header');

    var cateList = document.querySelector('.con_eat_drink .cate ul');
    var cate = document.querySelectorAll('.con_eat_drink .cate ul li');

    var conFood = document.querySelector('.con_eat_drink');
    var foodList = document.querySelectorAll('.con_eat_drink .list ul');
    var idxFood = 0;

    var conSeeDo = document.querySelector('.con_see_do');
    var seeTabs = document.querySelector('.con_see_do .tabs');
    var seeTab = document.querySelectorAll('.con_see_do ul li');


    document.addEventListener('mousewheel',function(e){

        clearTimeout(aaScroll);
        aaScroll = setTimeout(function(){
                if(e.wheelDelta<0){
                    //goDown
                    if(idx!=6) idx++;
                } else{
                    //goUp
                    if(idx!=0) idx--;
                }
                movePage(idx);
                changeHd(idx);

                // conReact
                showCon(idx);

            },200);






    });

    function movePage(idx){ main.style = "top:"+-100*idx+"vh;"; }
    function changeHd(idx){
        if(idx==0) hd.classList.remove('active');
        if(idx!=0) hd.classList.add('active');
    }

    function showCon(idx){

        // eat
        if (idx==2) {
            setTimeout(function(){
                cate[idxFood].classList.add('active');
                foodList[idxFood].classList.add('active');
            },100);
        } else {
            cate[idxFood].classList.remove('active');
            foodList[idxFood].classList.remove('active');
        }

        // see
        if (idx==3) {
            setTimeout(function(){
                conSeeDo.classList.add('active');
                    seeTabs.classList.add('active-start');
                    seeTab[0].classList.add('active');
            },100);
        } else {
            conSeeDo.classList.remove('active');
            seeTabs.classList.remove('active-start');

            seeTab.forEach(function(i,k){
                i.classList.remove('active');
            });
        }

        // event

        if (idx==4) {
            setTimeout(function(){
                see_indi[0].classList.add('active');
                seeAct();
                // aaSee = setInterval(actSee,2500*5);
            },100);
        } else {
            see_indi.forEach(function(i,k){
                i.classList.remove('active');
            });
            clearInterval(aaSee);
        }






    }



    // --------------- con_stay


    var btns = document.querySelectorAll('.con_stay .img .btn a');
    var ul = document.querySelector('.con_stay .img ul');
    var idxStay = 0;

    btns.forEach(function(i, k) {
        i.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.classList.contains('arrow_left')) {
                idxStay--;
            } else {
                idxStay++;
            }
            ul.style = "left:" + idxStay * -91 + "%;";


        });
    });




    // --------------- con_eat_drink



    // 카테고리 클릭 이벤트
    cate.forEach(function(i, k) {
        i.addEventListener('click', function() {
            activeCate(i, k);
        });
    });

    function activeCate(i, k) {
        cate.forEach(function(i) {
            i.classList.remove('active');
        });
        i.classList.add('active');

        changeConFood(k);
    }

    function changeConFood(k) {
        foodList.forEach(function(i) {
            i.classList.remove('active');
        });
        foodList[k].classList.add('active');
        idxFood = k;
    }

    // 페이지 스크롤 이벤트

    cate[0].classList.add('active');
    foodList[0].classList.add('active');



    // --------------- con_see_do

    seeTabs.addEventListener('click',startLi);
    function startLi(){
        seeTabs.classList.add('active-start');
    }

    seeTab.forEach(function(i,k){
        i.addEventListener('click',function(){

            seeTab.forEach(function(i,k){
                i.classList.remove('active');
            });
            this.classList.add('active');
        });
    });


    // --------------- con_event_activities

    var see_indi = document.querySelectorAll('.con_event_activities .title .indi span');
    var see_ul = document.querySelector('.con_event_activities .border .boxes_event');
    var see_li = document.querySelectorAll('.con_event_activities .border .boxes_event .box');

    function seeAct(){
        var seeIdx = 0;
        aaSee = setInterval(function(){
            if(seeIdx!=4) seeIdx++;
            if(seeIdx==4) seeIdx=0;
            seeIndi(seeIdx);
        },3500);
    }

    function seeIndi(seeIdx){
        see_indi.forEach(function(i,k){
            i.classList.remove('active');
        });
        see_indi[seeIdx].classList.add('active');

        seeCon();

    }

    function seeCon(){
        var see_ul = document.querySelector('.con_event_activities .border .boxes_event');
        var see_li = document.querySelectorAll('.con_event_activities .border .boxes_event .box');
        see_ul.append(see_li[0]);
    }







}

window.addEventListener('DOMContentLoaded',init); 
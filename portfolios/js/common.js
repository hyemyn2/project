// import * as all from './index.js';
$(function(){

var mq = window.matchMedia("screen and (max-width:768px)");
mq.addListener(res);

function eventFun(e) {
    if (resMsg == 'pc') {
        //pc 명령문

    } else {
        //mobile 명령문
        document.addEventListener('touchstart', tStart);
        document.addEventListener('touchmove', tMove);
        document.addEventListener('touchEnd', tEnd);
    }

}

function res(e) {
    (e.matches) ? resMsg = 'mobile' : resMsg = 'pc';
    eventFun();
}
res(mq);

var touch = {y:0,y2:0};
function tStart(e) {
    console.log(e)
    touch.y = e.changedTouches[0].clientY;
}

function tMove(e) {
    touch.y2 = e.changedTouches[0].clientY;
    console.log(  Math.abs(touch.y - touch.y2)  );
}

function tEnd(e) {
    touch.y2 = e.changedTouches[0].clientY;
    emailData.addEventListener('touchend', copyMail);

}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////




$('header').load('inc_head_foot.html header .tie', head);
var idx = 0, aa;

function head() {
    

    if (!location.href.match('work')) {
        setTimeout(function () {
            document.addEventListener('mousewheel', function (e) {
                upDown = e.wheelDelta;

                clearTimeout(aa);
                aa = setTimeout(function () {
                    move(upDown);
                }, 500);
            });
        }, 2500);

        var pageNum = localStorage.pagenum;
        // showPage(localStorage.pagenum);
        idx = pageNum;
        showPage(0);

        function reset() {
            if (pageNum != '') {
                // console.log(pageNum);
                showPage(pageNum);
            }
            localStorage.pagenum = '';
        }

        setTimeout(function () {
            reset();

        }, 100);




    }

    if (location.href.match('work')) {
        $('.head_1').removeClass('active');
        $('.head_2').removeClass('active');
        $('.head_3').addClass('active');
    } else {
        $('.head_3').removeClass('active');
    }

    // var head3_right = document.querySelector('.head_3 .right');
    // head3_right.addEventListener()


    // $('nav .navi li').on('click',function(){
    //     idx = $(this).index()+1;
    //     showPage(idx);
    // });

    $('.mid').on('mouseover', function () {
        $('nav .navi').addClass('active');
        $('.mid').on('mouseout', function () {
            $('nav .navi').removeClass('active');
        });

    });

    var navHome = document.querySelector('header .head_2 .mid nav .navi_home');
    navHome.addEventListener('click',function(){
        showPage(0);
    });

    var btnHome = document.querySelector('header .head_2 .left');
    btnHome.addEventListener('click', function () {
        showPage(0);
    });

    var navi = document.querySelectorAll('header .mid .navi li');
    var changeIdx = 0;
    navi.forEach(function (i, k) {
        navi[k].addEventListener('click', function () {
            changeIdx = k + 1;
            showPage(changeIdx);
        });
    });


    // ----------------------------------- copy mail
    
    
    var emailBtn = document.querySelector('header .head_1 p');
    var emailData = document.querySelector('header .head_1 p span');
    var copyTxt = emailData.innerHTML;
    emailData.addEventListener('click', copyMail);

    function copyMail() {
        var range = document.createRange();
        range.selectNode(emailData.childNodes[0]); //텍스트 정보를 Range 객체에 저장
        //range.setStart(obj.childNodes[0], 0); //추가
        //range.setEnd(obj.childNodes[0], 5); //추가
        var sel = window.getSelection();
        sel.removeAllRanges(); //기존 선택정보 삭제
        sel.addRange(range); //텍스트 정보 선택
        document.execCommand("copy"); //복사
        sel.removeRange(range); //선택 정보 삭제

        copiedTxt();
    }

    function copiedTxt() {
        console.log('a')

        emailData.innerHTML = "hyemyn2@gmail.com<br>Copied";
        emailBtn.style = "background: rgba(223,54,46,0.7);";
        emailData.style = "color: #000;";

        setTimeout(function () {
            emailData.innerHTML = copyTxt;
            emailBtn.style = "background: rgba(0,0,0,1);";
            emailData.style = "color: #e9e9e9;";
        }, 1000);

    }
}

// ----------------------------------- head change


function move(upDown) {
    if (upDown < 0) {
        if (idx != 4) idx++
    } else {
        if (idx != 0) idx--;
    }
    showPage(idx);
}

function showPage(a) {
    idx = a;
    if (idx == 0) {
        // console.log(idx);
        $('.head_1').addClass('active');
        $('.head_2').removeClass('active');
        // $('nav').removeClass('active');
    } else {
        $('nav').addClass('active');
        // $('nav .navi li').removeClass('active');
        // $('nav .navi li').eq(idx-1).addClass('active');
        $('.head_2').addClass('active');
        $('.head_1').removeClass('active');
        $('.head_2 .right').removeClass('active');

        if (idx == 4) {
            $('.head_2 .right').addClass('active');
        }
    }
}




function copyMail() {
    var obj = document.getElementById("header .head_1 span");
    console.log(obj);

    var range = document.createRange();
    range.selectNode(obj.childNodes[0]); //텍스트 정보를 Range 객체에 저장
    //range.setStart(obj.childNodes[0], 0); //추가
    //range.setEnd(obj.childNodes[0], 5); //추가
    var sel = window.getSelection();
    sel.removeAllRanges(); //기존 선택정보 삭제
    sel.addRange(range); //텍스트 정보 선택
    document.execCommand("copy"); //복사
    sel.removeRange(range); //선택 정보 삭제
}

});
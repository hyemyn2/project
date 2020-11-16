function init() {

    var hd, aa, idx = 0;
    var changeIdx;
    var sectOne = document.querySelector('main .page1 .sect1');
    var sectTwo = document.querySelector('main .page1 .sect2');
    var main = document.querySelector('main');
    var btnHome, navi, btnWork;


    main.classList.remove('active-convert');

    // --------------------------------- mousewheel 함수
    setTimeout(function() {
        document.addEventListener('mousewheel', function(e) {
            upDown = e.wheelDelta;
            clearTimeout(aa);
            aa = setTimeout(function() {
                move(upDown);
            }, 500);
        });
    }, 2500);

    function move(upDown) {
        if (upDown < 0) {
            if (idx != 5) idx++
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
                navi = document.querySelectorAll('header .mid .navi li');
                btnHome = document.querySelector('header .head_2 .left');
                btnWork = document.querySelector('header .head_2 .right');
                navFunc(navi, btnHome, btnWork, hd);
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
                sectTwo.classList.remove('active-change');
                main.classList.remove('active-change');

                break;
            case 5:
                //as person
                sectTwo.classList.add('active-change');
                main.classList.add('active-change');
                break;
        }

        // console.log(idx)
    }



    // --------------------------------- 네비게이션 함수
    function navAct(idx) {
        $('nav .navi li').removeClass('active');
        $('nav .navi li').eq(idx - 1).addClass('active');
    }


    // header 내 버튼 기능 추가 함수
    function navFunc(navi, btnHome, btnWork, hd) {
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
        });

        btnWork.addEventListener('click', function() {
            seeWorks();
            console.log(hd);
            hd.style = "opacity:0;";
            setTimeout(function() {
                hd.style = "opacity:1;"
            }, 3000);
        });
    }

    function showPage(changeIdx) {
        if (idx > changeIdx) {
            //prev
            for (var idxNow = idx; idxNow >= changeIdx; idxNow--) {
                console.log('a')
                goPage(idxNow);
                console.log(idxNow)
                console.log(idx)
            }
        } else if (idx < changeIdx) {
            //next
            for (var idxNow = idx; idxNow <= changeIdx; idxNow++) {
                goPage(idxNow);
                console.log(idxNow)
                console.log(changeIdx)
            }
        }
    }


    function seeWorks() {
        main.classList.add('active-convert');
        setTimeout(function() {
            location.href = 'work.html';
        }, 1000);
    }



}


window.addEventListener('DOMContentLoaded', init);
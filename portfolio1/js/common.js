$(function() {

    // index&sub page의 경로가 다를 경우, 절대 경로 잡기 : / 놓기

    ///project/portfolio1/
    $('header').load('/project/portfolio1/inc_head_foot.html header .tie', head);
    $('footer').load('/project/portfolio1/inc_head_foot.html footer .foot');

    function head() {





        // sub-menu

        var tie = document.querySelector('.tie');
        var hoverHd = document.querySelector('.tie .head');
        var subClick = document.querySelectorAll('nav div ul li');


        hoverHd.addEventListener('mouseover', showSub);

        function showSub() {
            tie.classList.add('active');
            tie.addEventListener('mouseout', function() {
                tie.classList.remove('active');
            });
        }

        subClick.forEach(function(i) {
            i.addEventListener('click', function() {
                subClick.forEach(function(i) {
                    i.classList.remove('active');
                });
                i.classList.add('active');
            });
        });

        // --------------------------------------------login

        var icon_login = document.querySelector('.head .others .icon .icon_login');
        var loginPop = document.querySelector('.login');
        var login_off = document.querySelector('.login .off');

        icon_login.addEventListener('click', goLogin);

        function goLogin() {
            loginPop.classList.add('active');
        }

        login_off.addEventListener('click', clickLogoff);

        function clickLogoff() {
            loginPop.classList.remove('active');
        }

        // if(loginPop.classList.contains('active')){
        //     console.log('act');
        // }



        // -------------------------------------------login 유효성 검사
        var loginForm = document.querySelector('.login_info');
        var idCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        var pwCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/; // 알파벳, 숫자, 기호 꼭 있어야하고 글자수는 8~16로 제한

        var inputID = document.querySelector('.txt .email input[name=id]');
        var inputPW = document.querySelector('.txt .email input[name=pw]');
        var btn_login = document.querySelector('.txt .email .login_btn');
        var btn_logOff = document.querySelector('.login .detail .off');
        btn_login.addEventListener('click', checkValue);

        function checkValue() {
            console.log(inputID.value);
            if (!idCheck.test(inputID.value)) {
                feedback('아이디를 다시 입력해주세요.', 'id');
                return;
            } else if (!pwCheck.test(inputPW.value)) {
                feedback('비밀번호를 다시 입력해주세요.', 'pw');
                return;
            } else {
                clickLogoff();
            }
        }

        function feedback(msg, el) {
            alert(msg);
            $('input[name=' + el + ']').val('');
            $('input[name=' + el + ']').focus();
        };

        // loginForm.action = "http://naver.com";
        // loginForm.submit();

        // --------------------------------------------search
        var icons = document.querySelector('.head .others .icon');
        var icon_search = document.querySelector('.head .others .icon .icon_search');
        var icon_off = document.querySelector('.head .others .icon .icon_off');

        icon_search.addEventListener('click', showSearch);
        icon_off.addEventListener('click', offSearch);

        function showSearch() {
            icons.classList.add('active');
        }

        function offSearch() {
            icons.classList.remove('active');
        }


        var burgBtn = document.querySelector('.burg .burger');
        var burgMenu = document.querySelector('.burg .menu');

        burgBtn.addEventListener('click', function() {
            burgBtn.classList.toggle('active');
            burgMenu.classList.toggle('active');
        });


        var prdNav = document.querySelectorAll('.menu .m_products ul li');
        prdNav.forEach(function(i, k) {
            i.addEventListener('click', goPage);
        });

        function goPage(e) {
            var clickName = i.children[0].innerHTML;
            location.href = this.children[0].href;
            localStorage.itemCate = $(clickName).toUpperCase();
        }

    }






    // -------------------------------------------main





    // $('html').css({overflow:"hidden"});
    // $('html').on('mousewheel',function(e){
    //     goDown(e);

    // });

    // $('html').on('touch',function(e){
    //     goDown(e);
    // });


    // var idx=0;
    // var main = document.querySelector('main');
    // function goDown(e){
    //     var delta = e.originalEvent.wheelDeltaY;
    //     console.log(e)
    //     if(delta<0){
    //         if(idx*120<main.offsetHeight - window.innerHeight) idx++;
    //     } else if(delta>0){
    //         if(idx*120>0) idx--;
    //     }

    //     $('main').css({transform:"translateY(-"+120*idx+"px)"});

    // }


    var hd = document.querySelector('header');
    var viewSize = window.innerHeight - hd.offsetHeight;
    // console.log(viewSize)
    var upDown = 0,
        moveDel = 0;
    var main = document.querySelector('main');
    var bd = document.querySelector('body');
    var mainH = main.offsetHeight - viewSize;


    // console.log(hd)
    // var limitSect2 = sect2.offsetHeight-window.innerHeight;
    // var scrollArrow = document.querySelector('main .sect2 .con_prev .scroll_down');
    // var topArrow = document.querySelector('main .sect2 .go_top');

    // html.addEventListener('mousewheel',function(e){
    //         // pageMove(e);
    // });

    $('body').css({ overflow: "hidden" });

    document.addEventListener('mousewheel', function(e) {
        pageMove(e);
    });
    // $('html').on('mousewheel',function(e){
    //     pageMove(e);
    // });

    function pageMove(e) {
        var main = document.querySelector('main');
        var mainH = main.offsetHeight - viewSize;
        moveDel = e.wheelDelta;
        if (moveDel < 0) {
            //goUp
            for (var i = 0; i < 200; i++) {
                if (upDown < mainH) upDown += 1;
                if (upDown == mainH) upDown = mainH;
            }
        } else if (moveDel > 0) {

            //goDown
            for (var i = 0; i < 200; i++) {
                if (upDown > 0) upDown -= 1;
                if (upDown == 0) upDown = 0;
            }

        }
        main.style = "transform: translateY(-" + upDown + "px);";

    }





});



/*

주의1! inc파일 저장위치
만들어야하는 파일이 많지 않은 경우는 index.html과 같은 위치에 inc_head_foot.html을 만들고
많은 경우에는 inc폴더 > header.html, footer.html과 같이 별도 파일을 만들어 저장

주의2! 절대경로 사용하기 : 경로 앞에 '/' 붙이기 (여기서 /는 오픈하고 있는 폴더를 가리킴)
index.html & sub폴더 > 소개.html (../header.html)와 같이 파일들 위치가 다를 때

cf!
console.log(location.host); (ex. http://127.0.0.1:50995)
console.log(location.pathname); (ex. /jquery/load/index.html)


*/
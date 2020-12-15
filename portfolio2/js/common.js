$(function() {

    $('header').load('/project/portfolio2/inc_head_foot.html header .tie', head);
    $('footer').load('/project/portfolio2//inc_head_foot.html footer .foot');



    // =========================main

    // var delta, scrollNum=0;
    // $('html').css({overflow:'hidden'});
    // $('html').on('mousewheel',function(e){
    //     goDown(e);
    // });
    // console.log(e.originalEvent.wheelDelta);


    // function goDown(e){
    //     delta = e.originalEvent.wheelDeltaY;
    //     // console.log(delta);

    //     if(delta<0){
    //         scrollNum++;
    //     }else if(delta>0){
    //         scrollNum--;
    //     }

    //     console.log(scrollNum);

    //     $('main').css({transform:"translateY(-"+120*scrollNum+"px)"});

    // }


    $('html').scrollTop(0);
    // $('html').css({ overflow: "hidden" });
    // $('html').on('mousewheel', function(e) {
    //     goDown(e);
    // });

    // var idx = 0,
    //     plus = 200;
    // var main = document.querySelector('main');

    // function goDown(e) {
    //     var delta = e.originalEvent.wheelDeltaY;
    //     var eleHeight = document.body.offsetHeight - window.innerHeight;
    //     (delta < 0) ? idx += plus: idx -= plus;

    //     if (eleHeight <= idx) {
    //         idx = eleHeight;
    //     } else if (idx < 0) {
    //         idx = 0;
    //     }
    //     $('main,footer').css({ transform: "translateY(-" + idx + "px)" });

    // }

    // --------------------- header

    function head() {

        var loca = document.querySelector('.location ul');
        var tagName = "";
        var menu = document.querySelectorAll('nav ul li a');
        console.log(menu)
        menu.forEach(function(i, k) {


            i.addEventListener('click', function(e) {
                e.preventDefault();
                // tagName = "<li>"+i.childNodes[1].innerText+"</li>";
                // loca.innerHTML += tagName;

                localStorage.page = this.textContent;
                location.href = this.href;
            });
        });

        var page = localStorage.page;


        tagName = "<li>></li><li>" + page + "</li>";
        loca.innerHTML += tagName;

        // console.log(page)

        // 인재영업 페이지 이동
        var menuCareer = document.querySelector('.go_career');
        menuCareer.addEventListener('click', function(e) {
            e.preventDefault();
            window.open("/project/portfolio2/career/career_main.html", "_blank");
        });

        var hd = document.querySelector('.head');
        var bg = document.querySelector('.head .burger');
        var bgNav = document.querySelector('.head nav')
        bg.addEventListener('click', function() {
            bg.classList.toggle('active');
            bgNav.classList.toggle('active');
            hd.classList.toggle('active-black');
        });
    }





});

// switch(page){
//     case '쿠팡 소개': ; break;
//     case '걸어온 길': ; break;
//     case '회사 위치': ; break;
// }
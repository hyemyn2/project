$(function() {

    $('header').load('/project/portfolio2/inc_head_foot.html header .tie_2', head);
    $('footer').load('/project/portfolio2/inc_head_foot.html footer .foot_2');

    function head() {

        var bg = document.querySelector('.head .burger');
        var bgNav = document.querySelector('.head nav');
        var hd = document.querySelector('.head');

        bg.addEventListener('click', function() {
            bg.classList.toggle('active');
            bgNav.classList.toggle('active');
            hd.classList.toggle('active-black');
        });

        var bgNavLi = document.querySelectorAll('header .head nav .burger_menu li');
        bgNavLi[2].children[0].addEventListener('click', function(e) {
            e.preventDefault();
            bgNavLi[2].classList.toggle('active-open');
        });


    }

})
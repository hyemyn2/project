function init() {

    // $('html').on('mousewheel',function(e){
    //     e.stopPropagation();
    //     $('main').css({transform:"translateY(0px)"});
    // })

    var menu = document.querySelectorAll('ul li');
    var all = document.querySelector('.cate .all a');

    menu.forEach(function(i, k) {
        i.addEventListener('click', goPage);
    });

    function goPage(e) {
        e.preventDefault();
        localStorage.itemCate = $(this).find('p').text().toUpperCase();
        location.href = this.children[0].href;
    };



    all.addEventListener('click', goAll);

    function goAll(e) {
        e.preventDefault();
        localStorage.itemCate = 'ALL';
        // console.log(this.children[0].href);
        location.href = this.href;
    }


    // if(window.innerWidth > 480){}
    // var m = matchMedia("screen and (min-width: 1024px)");

    // m.addListener(function(){
    //     if(m.matches){

    //     }else{

    //     }
    // })
};


window.addEventListener('DOMContentLoaded', init);
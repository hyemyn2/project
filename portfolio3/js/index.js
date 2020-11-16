function init() {
    // var img = document.querySelectorAll('.con_shop li')
    // console.log(img[1].offsetWidth);
    // console.log(img[1].offsetHeight);
    // 1084 & 530


    // --------------- header 

    var hd = document.querySelector('header');
    var bigBan = document.querySelector('.big_ban .txt h1');

    window.addEventListener('scroll', function(e) {
        var hdActPos = bigBan.offsetHeight - hd.offsetHeight;
        if (hdActPos <= this.scrollY) {
            hd.classList.add('active');
        } else {
            hd.classList.remove('active');
        }
    });


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

    var cateList = document.querySelector('.con_eat_drink .cate ul');
    var cate = document.querySelectorAll('.con_eat_drink .cate ul li');

    var conFood = document.querySelector('.con_eat_drink');
    var conSeeDo = document.querySelector('.con_see_do');
    var foodList = document.querySelectorAll('.con_eat_drink .list ul');
    var idxFood = 0;

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
    foodActPos = conFood.offsetTop;
    window.addEventListener('scroll', function(e) {
        if (foodActPos <= this.scrollY && this.scrollY < (foodActPos + 1500)) {
            console.log('a');
            cate[idxFood].classList.add('active');
            foodList[idxFood].classList.add('active');
        } else {
            cate[idxFood].classList.remove('active');
            foodList[idxFood].classList.remove('active');
        }
    });







}

window.addEventListener('DOMContentLoaded', init);
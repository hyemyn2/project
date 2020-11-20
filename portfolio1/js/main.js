$(function(){
    $.ajax({
        url:"/json/main.json",
        type:"GET",
        success:function(data){

            var tagName = '', imgSrc, txt, num;

            $(data.main).each(function(i,k){
                imgSrc = k.imgSrc;
                txt = k.txt;
                num = k.num;
                tagName= "<figure class='s_bn'>";
                tagName+= "<div class='mg'>";
                tagName+= "<img src='"+imgSrc+"' alt=''>";
                tagName+= "<figcaption>";
                tagName+= "<h2>"+txt+"</h2>";
                tagName+= "<a href='#'>view more</a>";
                tagName+= "</figcaption>";
                tagName+= "</div>";
                tagName+= "</figure>";

            $('.con').append(tagName);
            });



            /*
                배너에 우리가 모르는 div가 감싸져있다.
                간격 틀어졌을 경우 한번 .slide div{font-size:0;} 해주자. font있는건 따로 설정
                각 배너들에는 class이름을 넣어주자.
                beforeChangce, afterChange function 매개변수 4개
            */

            $(".s_v1").slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                centerMode: true,
                centerPadding: '18%'
            });

            // before한테 숨어라, after한테는 나와라의 명령주기

            $('.s_v1 .mg').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                console.log('before', nextSlide);
                $('.page').removeClass('active');
            });

            $('.s_v1 .mg').on('afterChange', function (event, slick, currentSlide) {
                console.log('after', slick);
                //   li 복사본이 앞뒤로 생기기 때문에 +1하여 카운트.
                $('.page').addClass('active');
                // $('.s_bn').eq(currentSlide + 1).find('p').addClass('active');
            });

            //     centerMode: true,
            //   centerPadding: '60px',

            // 5초 뒤 자동 이동
            // mouseover시 정지
            // 클릭시 이동

        }


    });


});






/*
var page = document.querySelector('.content .page p');
var a=0;

var con = document.querySelector('.content .con');
var btn = document.querySelectorAll('.content .arrow p');
var idx = 0;
var img = [];
var prev = document.createElement('figure');
var pPrev = document.createElement('figure');
var next = document.createElement('figure');
var nNext = document.createElement('figure');

var back = document.querySelector('.content');

con.appendChild(prev);
con.appendChild(pPrev);
con.appendChild(next);
con.appendChild(nNext);


var fig = document.querySelectorAll('.content .con figure');
fig.forEach(function(i){
    img.push(i.innerHTML);
});

fig[0].innerHTML=img[0];
fig[1].innerHTML=img[1];
fig[2].innerHTML=img[2];
fig[3].innerHTML=img[0];
fig[4].innerHTML=img[1];
fig[5].innerHTML=img[2];
fig[6].innerHTML=img[0];

fig[3].classList.add('active');


console.log(fig[0].offsetWidth);


btn.forEach(function (i, k) {
    i.addEventListener('click', move);
});

var s=0;

function move() {
    if(s==0){
        s=1;
        if (this == btn[0]) {
            idx--;
        
        } else if (this == btn[1]) {
            idx++;
        
        }
        con.style = "transform:translateX(" + (-1060 * idx) + "px);";
        setTimeout(change,500);

    }
};



function acti(){
    fig.forEach(function(i){
        i.classList.remove('active');
    });
    fig[idx+3].classList.add('active');

    
    fig.forEach(function(i,k){

        if(i.className=='active'){
        a = i.children[0].src.substr(95,1);
        console.log(a);

        page.textContent= a+"/3";

        backPic(a);

        }

        });

    
};

function change(){

    if(idx==-2){
        idx=1;
        con.style = "transition:.0s; transform:translateX(" + (-1060) + "px);";
    }else if(idx==2){
        idx=-1;
        con.style = "transition:.0s; transform:translateX(" + (1060) + "px);";
    }
    acti();

    s=0;


};

function backPic(a){
    back.style="background: url('../img/main/main_con"+a+".jpg') no-repeat; background-size: 120%;";
};

var loop;
function inter(){
loop = setInterval(goAuto,3000);
}
inter();

function goAuto(){
    idx++;
    con.style = "transform:translateX(" + (-1060 * idx) + "px);";

    setTimeout(change,500);
};
*/


$(function() {
    $.ajax({
<<<<<<< HEAD
        url: '../json/gallery_news.json',
        type: 'GET',
        success: function(data) {
=======
        url:'../json/gallery_news.json',
        type:'GET',
        success:function(data){
>>>>>>> 0e829456a7dd51970a576ecad2250d92d421a108

            var type, title, intro, ref, imgSrc, txt, tagName = '';

            data.news.forEach(function(i, k) {
                type = i.type;
                title = i.title;
                intro = i.intro;
                ref = i.ref;
                imgSrc = i.imgSrc;
                txt = i.txt;

                tagName = "<li>";
                tagName += "<div class='ttl'>";
                tagName += "<div class='tag'>";
                tagName += "<p>" + ref + "</p>";
                tagName += "</div>";
                tagName += "<div class='about'>";
                tagName += "<div class='name'>";
                tagName += "<p>" + type + "</p>";
                tagName += "<h2>" + title + "</h2>";
                tagName += "</div>";
                tagName += "<p>" + intro + "</p>";
                tagName += "</div>";
                tagName += "</div>";
                tagName += "<div class='detail'>";
                tagName += "<p>";
                tagName += "<img src='" + imgSrc + "' alt=''>";
                tagName += "</p>";
                tagName += "<p>" + txt + "</p>";
                tagName += "</div>";
                // tagName+= "<div class='fold'>";
                // tagName+= "<p><img src='../img/gallery/below2.png' alt=''></p>";
                // tagName+= "</div>";
                tagName += "</li>";


                $('.content .list ul').append(tagName);
            });

            $('.content .list ul li').on('click', showDetail);

            function showDetail() {
                $(this).toggleClass('active');
            }



            $('.ttl .box .button a').on('click', goRead);

            function goRead(e) {
                e.preventDefault();
                $('.content .list ul li').each(function(i, k) {
                    if ($(this).find('h2').text() === $('.ttl .box .button a').parent().parent().find('h2').text()) {
                        $(this).addClass('active');

                        var latest = $(this);
                        goScroll(latest);
                    }
                });
            }

            function goScroll(latest) {
                window.scrollTo({
                    left: 0,
                    top: $(latest).offset().top - 150,
                    behavior: 'smooth'
                });

            }



            // $('html').css({overflow:"hidden"});
            // console.log($(document).height());

            // window.scrollY = $(document).height();










        }
    });




    /*
    var btn = document.querySelectorAll('.ban .btn a');
    var con = document.querySelectorAll('.content .con');
    var ban = document.querySelectorAll('.ban .b_img');

    btn.forEach(function (i, k) {
        i.addEventListener('click', changeBtn);
    });

    function changeBtn() {
        btn.forEach(function (i, k) {
            i.classList.remove('active');
        });
        this.classList.add('active');

        var a = this;
        changeCon(a);

    };

    function changeCon(a) {
        btn.forEach(function(i,k){
            if(a==i){
                con[k].classList.add('active');
                ban[k].classList.add('active');
            }else{
                con[k].classList.remove('active');
                ban[k].classList.remove('active');
            }
        });
    };
    */


});
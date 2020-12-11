$(function() {



    $.ajax({
        url: '../json/products_list.json',
        type: 'GET',
        beforeSend: function() {},
        complete: function() {},
        success: function(data) {





            // ------------------------responsive
            var resMsg;
            var mqT = window.matchMedia("screen and (max-width:768px)");
            var mqM = window.matchMedia("screen and (max-width:480px)");
            mqT.addListener(res);
            mqM.addListener(res);


            function res(e) {
                // console.log(e.matches);
                if (e.matches) {
                    //모바일
                    resMsg = 'mobile';
                } else {
                    //PC
                    resMsg = 'pc';
                }
            }
            res(mqT);
            res(mqM);



            // main : transform

            // $('html').on('mousewheel',function(e){
            //     e.stopPropagation();
            //     $('main').css({transform:"translateY(0px)"});
            // })


            // ------------------------responsive
            var resMsg;
            var mqT = window.matchMedia("screen and (max-width:768px)");
            var mqM = window.matchMedia("screen and (max-width:480px)");
            mqT.addListener(res);
            mqM.addListener(res);


            function res(e) {
                console.log(e.matches);
                if (e.matches) {
                    //모바일
                    resMsg = 'mobile';
                } else {
                    //PC
                    resMsg = 'pc';
                }
            }
            res(mqT);
            res(mqM);



            // main : transform

            // $('html').on('mousewheel',function(e){
            //     e.stopPropagation();
            //     $('main').css({transform:"translateY(0px)"});
            // })

            // 아이템 리스트 불러오기

            var tagList = '',
                type, imgSrc, name, cond, detail, page = 0,
                clickType, itemNum = 0;
            var ul = document.querySelector('.products ul');

            function loadItem(clickType) {
                ul.style = "left:0; transition:.5s;";
                itemNum = 0;
                page = 0;
                tagList = '';
                data.products.forEach(function(value, key) {

                    type = value.type;
                    imgSrc = value.imgSrc;
                    name = value.name;
                    cond = value.cond;
                    detail = value.detail;

                    if (type == clickType || clickType == "p000") {

                        tagList += "<li>"
                        tagList += "<p>"
                        tagList += "<img src='" + imgSrc + "' alt=''>"
                        tagList += "</p>"
                        tagList += "<div>"
                        tagList += "<h2>" + name + "</h2>"
                        tagList += "<p>" + cond + "</p>"
                        tagList += "</div>"
                        tagList += "</li>"

                        ul.innerHTML = tagList;

                        itemNum++;
                    }

                });


                popEvent();
            }

            loadItem("p000");

            // 화살표로 리스트 넘기기

            function arrowList() {

                var arrow_l = document.querySelectorAll('.click a');
                // var ul = document.querySelector('.products ul')
                arrow_l.forEach(function(i, k) {

                    i.addEventListener('click', function(e) {
                        e.preventDefault();
                        var p = this;
                        changePage(p, itemNum);
                    });
                });
            }
            arrowList();

            function changePage(p, itemNum) {
                if (p.classList.contains('arrow_prev')) {
                    if (page != 0) {
                        page--;
                    } else {
                        return;
                    }
                } else {
                    if (page != Math.ceil(itemNum / 4) - 1) {
                        page++;
                    } else {
                        return;
                    }
                }
                console.log(page);

                ul.style = "left:" + -100 * page + "%; transition:.5s;";
            }

            function popEvent() {


                // 팝업창 이벤트 (popup, next/prev, off)
                var item = document.querySelectorAll('.products ul li');
                var pop = document.querySelector('.popup');
                var idx = 0;

                // 이벤트 1: popup 열기
                item.forEach(function(i, k) {
                    i.addEventListener('click', function() { popup(k); });
                });

                function popup(x) {
                    idx = x;
                    imgSrc = data.products[idx].imgSrc;
                    name = data.products[idx].name;
                    cond = data.products[idx].cond;
                    detail = data.products[idx].detail;

                    var popData = '';
                    popData = '';
                    popData += "<div class='img'>";
                    popData += "<p>";
                    popData += "<img src='" + imgSrc + "' alt=''>";
                    popData += "</p>";
                    popData += "</div>";
                    popData += "<div class='txt'>";
                    popData += "<div class='box'>";
                    popData += "<h2>" + name + "</h2>";
                    popData += "<p>" + cond + "</p>";
                    popData += "<p>" + detail + "</p>";
                    popData += "<a href='/login/login.html'>Add to Cart</a>";
                    popData += "</div>";
                    popData += "</div>";

                    var detail = document.querySelector('.popup .item_detail');
                    detail.innerHTML = popData;
                    pop.classList.add('active');

                    popOff();

                };

                // 이벤트 2: arrow 사용하여 넘기기
                function arrowPop() {
                    var arrow_p = document.querySelectorAll('.arrow p');
                    arrow_p.forEach(function(i, k) {
                        i.addEventListener('click', function() {
                            if (this.classList.contains('arrow_prev')) {
                                idx--;
                            } else {
                                idx++;
                            }
                            popup(idx);
                        });
                    });
                };

                arrowPop();


                // 이벤트 3: popup 닫기
                function popOff() {
                    var offBtn = document.querySelector('.item_off');
                    offBtn.addEventListener('click', function() {
                        pop.classList.remove('active');
                    });
                };
            }



            // filter 클릭

            var filter = document.querySelector('.all');
            var ft_list = document.querySelector('.all ul');
            var ft_type = document.querySelectorAll('.all ul li');
            var aTag = document.querySelectorAll('.all ul li a');
            var h2 = document.querySelector('.all h2');

            filter.addEventListener('click', function() {
                ft_list.classList.toggle('active');
            });

            aTag.forEach(function(i) {
                i.addEventListener('click', function(e) { e.preventDefault(); });
            });

            ft_type.forEach(function(i) {
                i.addEventListener('click', function() {
                    ft_type.forEach(function(i) {
                        i.classList.remove('active');
                    });
                    this.classList.add('active');
                    h2.innerHTML = this.children[0].innerHTML;
                });
            });

            // category

            var cate = document.querySelectorAll('.category .cate li a');
            var itemCate = localStorage.itemCate;

            console.log(itemCate)

            cate.forEach(function(i, k) {
                i.addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.itemCate = $(this).text().toUpperCase();
                    cate.forEach(function(i) {
                        i.classList.remove('active');
                    });
                    i.classList.add('active');

                    clickType = $(i).attr('data-type');
                    loadItem(clickType);
                });


                if (i.textContent.toUpperCase() == itemCate) {
                    i.click();
                }
            });



















        }
    });







});
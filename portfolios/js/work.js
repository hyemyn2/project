function work(){

    setTimeout(function(){

    $.ajax({
        url:"json/work.json",
        type:"GET",
        success:function(data){

            // ------------------------------------------------- get data
            var itemName, tit, tags, imgSrc, tagName1='', tagName2='';
            var workPic = document.querySelector('main .work_pic .imgs');
            var hd = document.querySelector('header .head_3');
            var sect1 = document.querySelector('main .sect1');
            var sect2 = document.querySelector('main .sect2');
            var listType = document.querySelectorAll('.list_type ul li');
            var main = document.querySelector('main');
            var workTxtBox = document.querySelector('main .work_txt .txt_box');
            var idxWork = 0, idxLast = 0;

            data.work.forEach(function(i,k){
                itemName = i.item;
                tit = i.tit;
                tags = i.tags;
                imgSrc = i.imgSrc;

                tagName1 += "<li class="+itemName+"><img src='"+imgSrc+"' alt=''></li>";
            });

            workPic.innerHTML = tagName1;
            main.classList.add('active-convert')


            // ------------------------------------------------- work_txt

            // put data

            function showTxt(idxWork){
                var k = Math.abs(idxWork%3);
                // console.log(k)
                itemName = data.work[k].item;
                tit = data.work[k].tit;
                tags = data.work[k].tags.split(",");
                // console.log(tags[0]);


                tagName2 = "<h1 class='tit' value='"+itemName+"'>"+tit+"</h1>";
                tagName2 += "<ul class='tags'>";
                tags.forEach(function(i,k){
                    tagName2 += "<li>"+i+"</li>";
                });
                tagName2 += "</ul>";

                workTxtBox.innerHTML = tagName2;

            }

            showTxt(0);


                // ------------------------------------------------- work_txt


                
                // -------------work_pic : click_event

                var main = document.querySelector('main');
                var workImg = document.querySelectorAll('main .work_pic .imgs li');
                // var workTit = workTxtBox.querySelector('h1');


                workImg.forEach(function(i,k){
                    i.addEventListener('click',function(){
                        main.classList.add('active-detail');
                        hd.classList.add('active-detail');
                        var getName = i.className;
                        detailEvent(getName);
                    });
                });

                workTxtBox.addEventListener('click',function(){
                    var workTxtBox = document.querySelector('main .work_txt .txt_box');
                    var workTit = workTxtBox.querySelector('h1');

                    main.classList.add('active-detail');
                    hd.classList.add('active-detail');
                    var getName = workTit.getAttribute('value');
                    detailEvent(getName);
                    
                    // console.log(workTit.getAttribute('value'))


                });

            // ------------------------------------------------- btn
                               
            // btn event
        
            var btnThumb = document.querySelectorAll('main .work_txt .btn_work_list ul li');


            var bln = true;
            btnThumb.forEach(function(i,k){

                btnThumb[k].addEventListener('click',function(){

                    if((bln==true)){
                        action(k);
                    }
                });


            });
            
                function action(k){
                    bln=false;
                    var thumb = workPic.querySelectorAll('li');
                    thumb.forEach((el)=>{
                        el.classList.remove('action-prev');
                        el.classList.remove('action-next');
                    });

                        if(k==0){

                            if(idxWork!=0){
                                idxWork--;
                            } else if(idxWork==0){
                                idxWork=2
                            }
                            // action-prev

                            thumb[2].classList.add('action-prev');
                            
                            setTimeout(function(){
                                workPic.prepend(thumb[2]);
                            bln=true;

                            },0)

                        } else if(k==1){
                            if(idxWork!=2){
                                idxWork++;
                            } else if(idxWork==2){
                                idxWork=0
                            }
                            // action-next
                            thumb[0].classList.add('action-next');
                            
                            setTimeout(function(){
                                workPic.append(thumb[0]);    
                                bln=true;

                            },0)
                        }
                        showTxt(idxWork);
                        idxLast = idxWork;



                        // mirrorEffect();



                }


                // function mirrorEffect(){

                    
                //     var picLi = document.querySelectorAll('main .sect1 .work_pic .imgs li');
                //     var picFirst = picLi[0];
                //     var reflectPic = document.createElement('span');
                //     reflectPic.classList.add('reflection');

                //     picFirst.append(reflectPic);

                //     var imgTag = picFirst.getElementsByTagName('img');
                //     console.log(imgTag[0].getAttribute('src'));
                //     var imgTagSrc = imgTag[0].getAttribute('src');

                //     reflectPic.classList.add('active');
                //     reflectPic.style="background: url('"+imgTagSrc+"') no-repeat; background-size: 100% auto;";
                // }


            // ------------------------------------------------- view all
                var aaAll, idxAll=0;

                listType[1].addEventListener('click',function(){
                    workPic.style ="transform: rotateX(50deg) translate(0%,50px);";

                    listType.forEach(function(i,k){
                        i.classList.remove('active');
                    });
                    listType[1].classList.add('active');
                    var workImg = document.querySelectorAll('main .work_pic .imgs li');
                    idxAll=0;

                    workImg.forEach(function(i,k){
                        workImg[k].children[0].style = "opacity:0.4";
                    });
                    workImg[idxAll].children[0].style = "opacity:1";
                    sect1.classList.remove('active-list1');
                    sect1.classList.add('active-list2');

                    window.addEventListener('mousewheel',function(e){
                        clearTimeout(aaAll);
                        aaAll = setTimeout(function(){
                            var upDown = e.wheelDelta;
                            moveList(upDown, workImg);
                        },50);
                    });

                    window.addEventListener('DOMMouseScroll',function(e){
                        clearTimeout(aaAll);
                        aaAll = setTimeout(function(){
                            var upDown = -e.detail;
                            moveList(upDown, workImg);
                        },50);
                    });
                    
                });

                listType[0].addEventListener('click',function(){
                    listType.forEach(function(i,k){
                        i.classList.remove('active');
                    });
                    listType[0].classList.add('active');
                    sect1.classList.remove('active-list2');
                    sect1.classList.add('active-list1');
                    workPic.style ="transform: rotateX(3deg) rotateY(30deg);";

                    workImg.forEach(function(i,k){
                        workImg[k].children[0].style = "opacity:1";
                    });



                });

                




                var moveOnce = workPic.offsetHeight;
                 

                function moveList(upDown){
                    var workImg = document.querySelectorAll('main .work_pic .imgs li');
                    //li 위치값 배열에 넣기
                    if(sect1.classList.contains('active-list2')){
                        if(upDown<0){
                            //ul이 위로 올라가기
                            if(idxAll!=workImg.length-1) idxAll++;
                        } else if(upDown>0){
                            //ul이 아래로 내려가기
                            if(idxAll!=0 ) idxAll--;
                        }

                        workPic.style ="transform: rotateX(50deg) translate(0%,-"+workImg[idxAll].offsetTop+"px);";
                        workImg.forEach(function(i,k){
                            workImg[k].children[0].style = "opacity:0.4";
                        });
                        workImg[idxAll].children[0].style = "opacity:1";
                        // console.log(moveOnce*idxAll)
                    }

                }

            


                // workPic.addEventListener('click',function(){
                //     main.classList.add('active-detail');
                //     hd.classList.add('active-detail');
                //     localStorage.item;
                // });





            // // indi event : mouseover_spread

            // workPic.addEventListener('mouseover',function(){
            //     console.log('a')
            //     workPic.classList.add('active');
            //     workPic.addEventListener('mouseout',function(){
            //         workPic.classList.remove('active');
            //     });
            // });

            // workIndi.addEventListener('mouseover',function(){
            //     workPic.classList.add('active');
            //     workTxt.classList.add('active');
            //     workIndi.addEventListener('mouseout',function(){
            //         workPic.classList.remove('active');
            //         workTxt.classList.remove('active');
            //     });
            // });

            // // indi event : mouseover_move
            // var workImg = workPic.querySelectorAll('li');
            // // workImg[0].classList.add('active');
            
            // indiEl.forEach(function(i,k){
            //     // console.log(k)

            //     indiEl[k].addEventListener('mouseover',function(){
            //         moveList(k);
            //     })
            // });

            // function moveList(k){
            //     console.log(workImg[k].offsetTop);
            // }

            // work_detail_pageMove 


            // go about
            var btnAbout = document.querySelector('header .head_3 .work_list .left');

            btnAbout.addEventListener('click',function(e){
                seeAbout(e);
                // console.log(localStorage.pagenum)
            }
            );

            function seeAbout(e){
                e.preventDefault();
                main.classList.remove('active-convert');
                setTimeout(function(){
                    location.href = 'index.html';
                },1000);
            }




            
    // -=----------------------------------------------------- detail
            function detailEvent(getName){
                $.ajax({
                    url:'xml/work.xml',
                    type:'GET',
                    success:function(data){

                        var data = data.querySelectorAll('items item');
                        // var sect2 = document.querySelector('main .sect2');

                        data.forEach(function(i,k){
                            var checkName = data[k].className;
                            if(getName==checkName){
                            var getData = data[k].innerHTML;
                            sect2.innerHTML = getData;

                            }
                        });
                        

                        var upDown=0, moveDel=0;
                        var scrollArrow = document.querySelector('main .sect2 .con_prev .scroll_down');
                        var topArrow = document.querySelector('main .sect2 .go_top');
                        var main = document.querySelector('main');

                        window.addEventListener('mousewheel',function(e){
                            if(main.classList.contains('active-detail')){
                                pageMove(e);
                            }
                        });
                        window.addEventListener('DOMMouseScroll',function(e){
                            if(main.classList.contains('active-detail')){
                                pageMoveFirefox(e);
                            }
                        });

                        // detail off
                        // var main = document.querySelector('main');
                        var detailOff = document.querySelector('.head_3 .work_detail .left');
                        detailOff.addEventListener('click',function(e){
                            e.preventDefault();
                            upDown=0;
                            pageMove(upDown);
                            main.classList.remove('active-detail');
                            hd.classList.remove('active-detail');
                        });

                            function pageMove(e){
                                var limitSect2 = sect2.offsetHeight-window.innerHeight;
                                
                                moveDel = e.wheelDelta;

                                if(moveDel<0){
                                    //sect2 goUp
                                    for(var i=0; i<200; i++){
                                        if(upDown<limitSect2) upDown+=1;
                                        if(upDown==limitSect2) upDown=limitSect2;
                                    }
                                } else if(moveDel>0){
                                    //sect2 goDown
                                    for(var i=0; i<200; i++){
                                        if(upDown>0) upDown-=1;
                                        if(upDown==0) upDown=0;
                                    }

                                }
                                sect2.style="top:-"+upDown+"px;";

                                pictoTop(e,upDown);
                                pictoScroll(upDown);
                            }

                            function pageMoveFirefox(e){
                                var limitSect2 = sect2.offsetHeight-window.innerHeight;
                                
                                moveDel = -e.detail;

                                if(moveDel<0){
                                    //sect2 goUp
                                    for(var i=0; i<200; i++){
                                        if(upDown<limitSect2) upDown+=1;
                                        if(upDown==limitSect2) upDown=limitSect2;
                                    }
                                } else if(moveDel>0){
                                    //sect2 goDown
                                    for(var i=0; i<200; i++){
                                        if(upDown>0) upDown-=1;
                                        if(upDown==0) upDown=0;
                                    }

                                }
                                sect2.style="top:-"+upDown+"px;";

                                pictoTop(e,upDown);
                                pictoScroll(upDown);
                            }

                        function pictoScroll(upDown){
                            if(upDown!=0){
                                scrollArrow.classList.add('active');
                            } else{
                                scrollArrow.classList.remove('active');
                            }
                        }

                        function pictoTop(e,upDown){
                            // console.log(moveDel)
                            if(upDown!=0 && moveDel>0){
                                topArrow.classList.add('active-up');
                            } else {
                                topArrow.classList.remove('active-up');
                            }
                        }

                        topArrow.addEventListener('click',function(){
                            upDown=0;
                            pageMove(upDown);
                        });


                        var btnGo = document.querySelector('main .page1 .sect2 .detail_side .go_project');

                        btnGo.addEventListener('click',function(e){
                            e.preventDefault();
                            // console.log(btnGo)

                            if(getName=='aesop'){
                                window.open("../portfolio1/index.html","_blank");
                            } else if(getName=='coupang'){
                                window.open("../portfolio2/index.html","_blank");
                            } else if(getName=='marina_bay_sands'){
                                window.open("../portfolio3/index.html","_blank");
                            }
                        });

                    }
                });

            }




        }



    });




    },200);

    // console.log('work')


}

export default work;
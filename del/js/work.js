$(function(){

    $.ajax({
        url:"json/work.json",
        type:"GET",
        success:function(data){

            // ------------------------------------------------- get data
            var tit, tags, imgSrc, tagName1='', tagName2='';
            var workPic = document.querySelector('main .work_pic .imgs');
            var main = document.querySelector('main');
            var workTxtBox = document.querySelector('main .work_txt .txt_box');
            var idxWork = 0, idxLast = 0;

            data.work.forEach(function(i,k){
                tit = i.tit;
                tags = i.tags;
                imgSrc = i.imgSrc;

                tagName1 += "<li><img src='"+imgSrc+"' alt=''></li>";
            });

            workPic.innerHTML = tagName1;

            main.classList.add('active-convert')


            // ------------------------------------------------- work_txt

            // put data

            function showTxt(idxWork){
                k = Math.abs(idxWork%3);
                // console.log(k)

                tit = data.work[k].tit;
                tags = data.work[k].tags.split(",");
                // console.log(tags[0]);


                tagName2 = "<h1 class='tit'>"+tit+"</h1>";
                tagName2 += "<ul class='tags'>";
                tags.forEach(function(i,k){
                    tagName2 += "<li>"+i+"</li>";
                });
                tagName2 += "</ul>";

                workTxtBox.innerHTML = tagName2;

            }

            showTxt(0);

            // ------------------------------------------------- btn
                               
            // btn event
        
            btnThumb = document.querySelectorAll('main .work_txt .btn_work_list ul li');


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

                        },900)

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

                        },900)
                    }
                    showTxt(idxWork);
                    idxLast = idxWork;
                }





                // ------------------------------------------------- work_txt
                // work_pic : click_event

                var main = document.querySelector('main');

                workPic.addEventListener('click',function(){
                    main.classList.add('active-detail');
                });






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
            var btnAbout = document.querySelector('header .head_3 .left');
            btnAbout.addEventListener('click',seeAbout);

            function seeAbout(){
            console.log(btnAbout)

                main.classList.remove('active-convert');
                setTimeout(function(){
                    location.href = 'index.html';
                },1000);
            }

        }



    });

    // -=----------------------------------------------------- detail

    $.ajax({
        url:'xml/work.xml',
        type:'GET',
        success:function(data){
            var data = data.querySelectorAll('items item');
            var sect2 = document.querySelector('main .sect2');
            var getData = data[0].innerHTML;

            sect2.innerHTML = getData;


            var upDown=0, moveDel=0;
            var limitSect2 = sect2.offsetHeight-window.innerHeight;
            var scrollArrow = document.querySelector('main .sect2 .con_prev .scroll_down');
            var topArrow = document.querySelector('main .sect2 .go_top');
            var main = document.querySelector('main');

            window.addEventListener('mousewheel',function(e){
                if(main.classList.contains('active-detail')){
                    pageMove(e);
                }
            });

            function pageMove(e){
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

            function pictoScroll(upDown){
                if(upDown!=0){
                    scrollArrow.classList.add('active');
                } else{
                    scrollArrow.classList.remove('active');
                }
            }

            function pictoTop(e,upDown){
                console.log(moveDel)
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


            // detail off
            var main = document.querySelector('main');
            var detailOff = document.querySelector('main .sect2 .off');
            detailOff.addEventListener('click',function(){
                console.log('a')
                main.classList.remove('active-detail');
            });

        }
    });








});
$(function(){

    $.ajax({
        url:'../json/career_apply_jobs.json',
        type:'GET',
        success:function(data){
            // console.log(data.jobs);
            var tagName = '', pageNum = '', cate, title, time, city, ctry, cond, tags, pNum, idx, tabName='',tabNum=0;
            var list = document.querySelector('article .list');
            var paging = document.querySelector('.paging .num');

            var tab = document.querySelectorAll('.menu .navi ul li');
            var type = document.querySelectorAll('.menu .navi ul li .title p');



// ======================== Tab ===========================

            // Tab : data counting
            console.log(tab[0].childNodes[1].childNodes);


            function loadTab(){
                tab.forEach(function(i,k){
                    tabNum=0;
                    tabName = i.childNodes[1].childNodes[1].innerText;

                    data.jobs.forEach(function(i,k){
                        cate = i.category;
                        if(cate==tabName){
                            tabNum++;
                        }
                    });

                    console.log(tabNum);
                    i.childNodes[1].childNodes[3].innerText = tabNum;
                });
            }
            loadTab();

            // Tab : click

            var clickTab;

            tab.forEach(function(i,k){
                i.addEventListener('click',function(){
                    clickTab = $(i).find('p').text();
                    loadData(clickTab);     

                    tab.forEach(function(i){
                        i.classList.remove('active');
                    });
                    i.classList.add('active');           
                });
            });



// ======================== List ===========================


            // load data

            function loadData(clickTab){
                idx=0;
                tagName='',
                country = '한국',
                condition = '전체 직원유형';
                
                data.jobs.forEach(function(i,k){
                    cate = i.category;
                    title = i.title;
                    time = i.time;
                    city = i.city;
                    ctry = i.country;
                    cond = i.condition;
                    tags = i.tags;

                    if(clickTab==cate && country == ctry && (condition == cond || condition=='전체 직원유형')){
                        idx++;

                    if(idx%5==1){
                        if(idx==1){
                            tagName+="<ul class='active'>";
                        } else{
                            tagName+="<ul>";
                        }
                    }
                    
                    
    
                    tagName += "<li>";
                    tagName += "<div class='job'>";
                    tagName += "<h2>"+title+"</h2>";
                    tagName += "<div class='info'>";
                    tagName += "<span>"+time+"</span>";
                    tagName += "<span>"+city+"</span>";
                    tagName += "</div>";
                    tagName += "<div class='tag'>";
                    tags.forEach(function(i,k){
                    tagName += "<span>#"+i+"</span>";
                    });
                    tagName += "</div>";
                    tagName += "</div>";
                    tagName += "<div class='etc'>";
                    tagName += "<span>"+ctry+"</span>";
                    tagName += "<span>"+cond+"</span>";
                    tagName += "</div>";
                    tagName += "</li>";
                    if(idx%5==0){tagName+="</ul>";}
                    }
    
                });

                if(idx%5!=0){tagName+="</ul>";}

    
                list.innerHTML = tagName;
                pagingReset();
            }
            
            loadData('경영지원');

            // page setting

            function pagingReset(){

                var ul = document.querySelectorAll('article .list ul');
                pageNum='';
                pNum = ul.length;
                ul.forEach(function(i,k){
                    if(k==0){
                        pageNum += "<a href='#' class='active'>"+(k+1)+"</a>";
                    } else{
                        pageNum += "<a href='#'>"+(k+1)+"</a>";
                    }
                });
                paging.innerHTML = pageNum;

                pageClick();
                pageArrow(pNum);
            }
            


                // page click

                function pageClick(){
                    var clickNum = document.querySelectorAll('.paging .num a');
                    clickNum.forEach(function(i,k){
                        clickNum[k].addEventListener('click',function(){
                            clickNum.forEach(function(i){
                                i.classList.remove('active');
                            });
                            clickNum[k].classList.add('active');

                            ul.forEach(function(i,k){
                                i.classList.remove('active');
                            });
                            ul[k].classList.add('active');
                        });
                    });
                }



            // page arrow
            function pageArrow(pNum){
            var p_arrow = document.querySelectorAll('.paging span');

                p_arrow.forEach(function(i,k){

                    i.addEventListener('click',function(){

                        if(k==0){

                        } else if(k==1){
    
                        } else if(k==2){
    
                        } else if (k==3){
 
                        }

                    });

                });

            }


            var filter = document.querySelectorAll('.classify .box');
            var aTag = document.querySelectorAll('.classify .box ul li a')

            filter.forEach(function(i){
                i.addEventListener('click',function(){
                    i.childNodes[3].classList.toggle('active');
                    clickType(i);
                });
            });


            function clickType(i){
                var clkType = i.childNodes[3].childNodes[1].childNodes[0].innerText;
                console.log(i.childNodes[3].childNodes)
                                
            }



        //     <div class="classify">

        //     <div class="filter">
        //         <div class="box">
        //             <a href="#">한국</a>
        //             <ul>
        //                 <li><a>한국</a></li>
        //                 <li><a>미국</a></li>
        //                 <li><a>중국</a></li>
        //             </ul>
        //         </div>

        //         <div class="box">
        //             <a href="#">전체 직원유형</a>
        //             <ul>
        //                 <li><a>전체 직원유형</a></li>
        //                 <li><a>정규직</a></li>
        //                 <li><a>계약직</a></li>
        //                 <li><a>인턴</a></li>
        //                 <li><a>어시스턴트</a></li>
        //             </ul>
        //         </div>
        //     </div>

        //     <div class="search">
        //         <div class="data">
        //             <label for="jobs">검색어를 입력하세요.</label>
        //             <input type="text" id="jobs">
        //             <button><img src="../img/career/career_apply/jobs/search.png" alt="search"></button>
        //         </div>
        //     </div>
        // </div>

        }
    });


});
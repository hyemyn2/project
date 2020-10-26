$(function(){

    $.ajax({        
        url:'../json/location_list.json',
        type:'GET',
        success:function(data){

            var list = document.querySelector('.city');
            var tagName='', title, intTxt, intImg;


            data.location.forEach(function(i){
                title = i.country;
                intTxt = i.introText;
                intImg = i.introImg;

                tagName+= "<li>";
                tagName+= "<div class='txt'>";
                tagName+= "<p>"+title+"</p>";
                tagName+= "<span>"+intTxt+"</span>";
                tagName+= "</div>";
                tagName+= "<div class='pic'>";
                tagName+= "<img src='"+i.introImg+"' alt=''>";
                tagName+= "</div>";
                tagName+= "</li>";
            });
            $('.city ul').append(tagName);


            // list click 이벤트
            var city = document.querySelectorAll('.city li');
            city.forEach(function(i){
                i.addEventListener('click',function(){
                    // console.log(window.location.pathname);
                    window.location.pathname = "project/portfolio2/location/location_detail.html";
                    console.log(window.location.pathname)
                    var str = i.childNodes[1].childNodes[0].src;

                    var strStart = str.lastIndexOf('/')+1;
                    var strEnd = str.lastIndexOf('.');
                    var cityName = str.slice(strStart, strEnd);

                    console.log(cityName)
                    localStorage.city = cityName;

                });
            });




        }
    })







});
$(function(){

    $.ajax({        
        url:'../xml/location_detail.xml',
        
        success:function(data){

            console.log($(data).find('item'))
            var cityName = localStorage.city;
            var mainTag = document.querySelector('main');
            $(data).find('item').each(function(k,i){
                if(i.classList.contains(cityName)){

                    var con = i.innerHTML;
                    mainTag.innerHTML=con;

                    $('.explain .btn').on('click',function(e){
                        console.log('e')
                        e.preventDefault();
                            // location.pathname = 'career/apply/career_apply_jobs.html';
                            window.open("../career/apply/career_apply_jobs.html","_blank");
                    });


                }
            });

        }
    })







});
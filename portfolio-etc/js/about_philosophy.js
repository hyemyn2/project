$(function () {


    var btn = document.querySelectorAll('.ban .btn a');
    var con = document.querySelectorAll('.content .con');
    var banImg = document.querySelectorAll('.b_img')
    btn.forEach(function(i,k){
        i.addEventListener('click',function(){
            changeCon(i,k);
            // console.log(i);

        });
    });

    function changeCon(i,k){
        btn.forEach(function(i){
            i.classList.remove('active');
        });
        btn[k].classList.add('active');

        con.forEach(function(el,num){
            if(num==k){
                con[num].classList.add('active');
            }else{
                con[num].classList.remove('active');
            }
        });

        banImg.forEach(function(el,num){
            if(num==k){
                banImg[num].classList.add('active');
            }else{
                banImg[num].classList.remove('active');
            }
        });
    }

});

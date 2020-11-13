function init (){

    // window.scroll(function(){

    //     clearTimeout(bbb);
    //     bbb = setTimeout(aaaa,100);
        
    //     })
        
        
    //     function aaaa(){
    //     (upDown)idx++:idx--;
    //     switch
           
    //     }

    var aa, idx=0;
    // var pageOne = document.querySelector('main .page1');
    var sectOne = document.querySelector('main .page1 .sect1');
    var sectTwo = document.querySelector('main .page1 .sect2');
    var main = document.querySelector('main');

    setTimeout(function(){
        document.addEventListener('mousewheel',function(e){
            // console.log(e.wheelDelta);
            upDown = e.wheelDelta;
    
            clearTimeout(aa);
            aa = setTimeout(function(){
                move(upDown);
            },500);
        });
    },2500);

    function move(upDown){

        if(upDown<0){
            if(idx!=5) idx++
        }else{
            if(idx!=0) idx--;
        }

        console.log(idx);

        switch(idx){

            case 0:
                // home
                sectOne.classList.remove('active1');
                break;
            case 1:
                // intro
                sectOne.classList.add('active1');
                sectOne.classList.remove('active2');
                break;
            case 2:
                // skill
                sectOne.classList.add('active2');
                sectOne.classList.remove('active3');
                break;
            case 3:
                // project
                sectOne.classList.add('active3');
                sectOne.classList.remove('active-move');
                sectTwo.classList.remove('active-move');
                break;
            case 4 :
                // at work
                sectOne.classList.add('active-move');
                sectTwo.classList.add('active-move');
                sectTwo.classList.remove('active-change');
                main.classList.remove('active-change');

                break;
            case 5 :
                //as person
                sectTwo.classList.add('active-change');
                main.classList.add('active-change');
                break;
            
        }






    }



}


window.addEventListener('DOMContentLoaded',init);
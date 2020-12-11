$(function(){

    var inputID = document.querySelector('.data input[name=id]');
    var inputPW = document.querySelector('.data input[name=pw]');
    var btn_log = document.querySelector('.log button');
    var loginForm = document.querySelector('.log form')

    // 유효성 검사

    var idCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    var pwCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/; 
    btn_log.addEventListener('click',dataTest);

    function dataTest(){

        if(!idCheck.test(inputID.value)){
            alert('아이디를 다시 입력해주세요.');
        } else if(!pwCheck.test(inputPW.value)){
            alert('비밀번호를 다시 입력해주세요.');
        } else{
            loginForm.action = "http://naver.com";
            loginForm.submit();
        }

    }
    // idCheck.test(inputID.value);




});
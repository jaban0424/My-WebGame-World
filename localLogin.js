'use strict';

const loginBtn = document.getElementById('loginBtn');


function login(){
    let idValue = document.querySelector('#id').value;
    let pwValue=document.querySelector('#pw').value;
    
    if(idValue == ''){
        alert("아이디를 입력해 주십시오!")
    }
    else if(pwValue == ''){
        alert("비밀번호를 입력해 주십시오!")
    }
    else{
        let ID = localStorage.getItem('id');
        let PW = localStorage.getItem('pw');
        if(idValue === ID && pwValue === PW) {
            alert('login 성공');
            location.href='main.html';
        }
        else alert('일치하는 정보가 없습니다.');
    }
}
loginBtn.addEventListener('click',login);

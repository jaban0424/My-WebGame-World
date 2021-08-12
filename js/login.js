'use strict';

const add = document.getElementById('sign');

function create_id(){
    let id=document.querySelector('#id');
    let pw=document.querySelector('#pw');
    let r_pw=document.querySelector('#r_pw');

    if(id.value==""||pw.value==""||r_pw.value==""){
        alert("모든 정보를 기입해 주십시오!")
    }
    else{
        if(pw.value!==r_pw.value){
            alert("비밀번호를 확인해주세요.")
        }
        else{
            alert("회원가입을 완료했습니다.")
            localStorage.setItem('id',id.value);
            localStorage.setItem('pw',pw.value);
            location.href ='index.html';
        }
    }
}

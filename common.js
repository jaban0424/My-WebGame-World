function login(){
    var id=document.querySelector('#id');
    var pw=document.querySelector('#pw');

    if(id.value==""){
        alert("아이디를 입력해 주십시오!")
    }
    else if(pw.value==""){
        alert("비밀번호를 입력해 주십시오!")
    }
    else{
        location.href='main.html';
    }
}

function create_id(){
    var id=document.querySelector('#id');
    var pw=document.querySelector('#pw');
    var r_pw=document.querySelector('#r_pw');

    if(id.value==""||pw.value==""||r_pw.value==""){
        alert("모든 정보를 기입해 주십시오!")
    }
    else{
        if(pw.value!==r_pw.value){
            alert("비밀번호를 확인해주세요.")
        }
        else{
            alert("회원가입을 완료했습니다.")
            location.href='login.html';
        }
    }
}

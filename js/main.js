var rest=500000000;
var bet=0;

function betting(){
    alert("1단계 작동성공");
    var ran;
    bet=document.getElementById("bet_m").value;
    alert(bet);
    rest-=bet;
    ran=Math.floor(Math.random()*1000)%4;
    alert("2단계 작동성공"+rest);
    document.getElementById("dice").innerText="주사위 결과 : "+ran+"!!";
    alert("2.5단계 작동성공"+rest);
    switch(ran){
        case 0:
            bet=0;
            rest+=bet;
            document.getElementById("res").innerText="모두 잃었습니다...";
            break;

        case 1:
            bet/=2;
            rest+=bet;
            document.getElementById("res").innerText="절반을 잃었습니다...";
            break;
        
        case 2:
            bet*=3;
            bet/=2;
            rest+=bet;
            document.getElementById("res").innerText="1.5배를 얻었습니다!!";
            break;
        
        case 3:
            bet*=2;
            rest+=bet;
            document.getElementById("res").innerText="2배를 얻었습니다!!!!!!";
        }
        alert("3단계 작동성공"+rest);
    document.getElementById("money").innerText="현재 자산 : "+rest+"원";
}

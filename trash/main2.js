var rest=500000000;
var bet=0;

function betting(){
    var ran,tempm;//주사위, 기존 자산 임시 저장
    var tempb=0;//베팅한 값 일시 저장
    bet=prompt("베팅할 금액 <b>(현재 자산 : "+rest+"원)</b>")//한도초과 나중에 개발하기!
    tempb=rest;
    rest-=bet;
    ran=Math.floor(Math.random()*1000)%4;
    alert("음.."+ran);
    switch(ran){
        case 0:
            bet=0;
            rest+=bet;
            alert("모두 잃었습니다...\n현재 자산 : "+rest+"원");
            break;

        case 1:
            bet/=2;
            rest+=bet;
            alert("절반을 잃었습니다...\n현재 자산 : "+rest+"원");
            break;
        
        case 2:
            bet*=3;
            bet/=2;
            rest+=bet;
            alert("1.5배를 얻었습니다!!\n현재 자산 : "+rest+"원");
            break;
        
        case 3:
            bet*=2;
            rest+=bet;
            alert("2배를 얻었습니다!!!!!!\n현재 자산 : "+rest+"원");
    }
    
}

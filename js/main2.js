var rest=500000000;
var bet=0;

function betting(){
    bet=prompt("베팅할 금액 (<b>현재 자산 : "+rest+"원)")
    rest-=bet;
    alert("<b>현재 자산 : "+rest+"원");
    
}

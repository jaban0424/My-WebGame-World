var rest=500000000;
var bet=0;

function betting(){
    bet=document.getElementById("bet").value;
    rest-=bet;
    document.write("<b>현재 자산 : "+rest+"원");
}

//document.getElementById("jsver").innerText="0.0.1v";
//alert("11와료");



var money=500000000;

//임시로
var dogep=397;
var bitp=43902824;

var number=0;

class Coin {
    constructor({name,price,number,own,nid,change,oripr}) { //nid는 html에서 number input에서 받은 그 코인의 매수 개수 아이디
        this.name = name;
        this.price = price;
        this.number = number;
        this.own = own;
        this.nid = nid;
        this.change= change;
        this.oripr=oripr;
    }
}
//alert("22dhkfy");
var bit=new Coin({name : bit , price : bitp , number : 0 , own : 0 , nid:"idbit",change:0,oripr:bitp})
var doge=new Coin({name : doge , price : dogep , number : 0 , own : 0 , nid:"iddoge",change:0,oripr:dogep})

/*function setting(){
    document.getElementById("idbit"+"pr").innerText=bit.price;
    document.getElementById("iddoge"+"pr").innerText=doge.price;
    updown();
}*/
//alert("333dhkfy");


document.getElementById(bit.nid+"pn").value="0";
document.getElementById(doge.nid+"pn").value="0";
document.getElementById(bit.nid+"sn").value="0";
document.getElementById(doge.nid+"sn").value="0";


function purchase(coin){
    number=document.getElementById(coin.nid+"pn").value;
    money-=number*coin.price;
    document.getElementById("money").innerText=money+"원";
    coin.own+=parseInt(number); //도대체 여기서 왜 number를 정수로 만들어줘야하는 거임??
    document.getElementById(coin.nid+"o").innerText=coin.own;
    document.getElementById(coin.nid+"pn").value="0";//공백만들기
}
//alert("44dhkfy");
function sell(coin){
    number=document.getElementById(coin.nid+"sn").value;
    money+=number*coin.price;
    document.getElementById("money").innerText=money+"원";
    coin.own-=parseInt(number);
    document.getElementById(coin.nid+"o").innerText=coin.own;
    document.getElementById(coin.nid+"sn").value="0";//공백만들기
}
//alert("55dhkfy");
function change(coin){
    var ran=Math.floor(Math.random() * 4) + 2;
    switch (ran) {
        case 2:
            coin.price-=(coin.price*3)/10;
            coin.change=parseInt((coin.price/coin.oripr)*100-100);
            break;
        case 3:
            coin.price-=(coin.price)/10;
            coin.change=parseInt((coin.price/coin.oripr)*100-100);
            break;
        case 4:
            coin.price+=(coin.price)/10;
            coin.change=parseInt((coin.price/coin.oripr)*100-100);
            break;
        case 5:
            coin.price+=(coin.price*2)/10;
            coin.change=parseInt((coin.price/coin.oripr)*100-100);
    }
}
//alert("6완료");
function updown(){
    change(bit);
    change(doge);
    //alert(bit.price+"  "+doge.price);
    bit.price=parseInt(bit.price);
    doge.price=parseInt(doge.price);
    document.getElementById("idbit"+"pr").innerText=bit.price;
    document.getElementById("idbit"+"c").innerText=bit.change+"%";
    document.getElementById("iddoge"+"pr").innerText=doge.price;
    document.getElementById("iddoge"+"c").innerText=doge.change+"%";
    setTimeout(updown,3000);
}
//alert("7완료");

updown();

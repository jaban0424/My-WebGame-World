//document.getElementById("jsver").innerText="0.0.1v";

var money=500000000;

//임시로
var dogep=397;
var bitp=43902824;

var number=0;

class Coin {
    constructor({name,price,number,own,nid}) { //nid는 html에서 number input에서 받은 그 코인의 매수 개수 아이디
        this.name = name;
        this.price = price;
        this.number = number;
        this.own = own;
        this.nid = nid;
    }
}

var bit=new Coin({name : bit , price : bitp , number : 0 , own : 0 , nid:"idbit"})
var doge=new Coin({name : doge , price : dogep , number : 0 , own : 0 , nid:"iddoge"})

function purchase(coin){
    number=document.getElementById(coin.nid+"pn").value;
    money-=number*coin.price;
    document.getElementById("money").innerText=money;
    coin.own+=parseInt(number); //도대체 여기서 왜 number를 정수로 만들어줘야하는 거임??
    document.getElementById(coin.nid+"o").innerText=coin.own;
    document.getElementById(coin.nid+"pn").value="0";//공백만들기
}

function sell(coin){
    number=document.getElementById(coin.nid+"sn").value;
    money+=number*coin.price;
    document.getElementById("money").innerText=money;
    coin.own-=parseInt(number);
    document.getElementById(coin.nid+"o").innerText=coin.own;
    document.getElementById(coin.nid+"sn").value="0";//공백만들기
}

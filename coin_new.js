//document.getElementById("jsver").innerText="0.0.1v";

var money=500000000;

//임시로
var dogep=397;
var bitp=43902824;

var number=0;

alert('1완료');

class Coin {
    constructor({name,price,number,own,nid}) { //nid는 html에서 number input에서 받은 그 코인의 매수 개수 아이디
        this.name = name;
        this.price = price;
        this.number = number;
        this.own = own;
        this.nid = nid;
    }
}

alert('2완료');

var bit=new Coin({name : bit , price : bitp , number : 0 , own : 0 , nid:"bit_n"})
var doge=new Coin({name : doge , price : dogep , number : 0 , own : 0 , nid:"doge_n"})

alert('3완료');

function purchase(coin){
    alert("4완료");
    number=document.getElementById(coin.nid).value;
    alert('5완료 '+number);
    money-=number*coin.price;
    alert('6완료'+coin.price+money);
    document.getElementById("money").innerText=money;
    alert('7완료');
}

var name1 = document.querySelector("#name1")
var accept1 = document.querySelector(".accept")
var close1 = document.querySelector(".close")
var request1 = document.querySelector(".request")
var accept2 = document.querySelector(".accept2")
var close2 = document.querySelector(".close2")
var request2 = document.querySelector(".request2")
var contact1 = document.querySelector(".contacts4")
var contact2 = document.querySelector(".contacts5")
var plus = document.querySelector(".plus")
var two = document.querySelector(".two")
var count1 = 0;
var count2 = 0;

function changeName(){
    name1.innerText = "SN";
}
function off1(){
    count1++;
    count2++;
    plus.innerText = 100 + count1 + "+";
    two.innerText = 2 - count2;
    accept1.remove();
    close1.remove();
    request1.remove();
    contact2.remove();
}
function off2(){
    count2++;
    two.innerText = 2 - count2;
    accept1.remove();
    close1.remove();
    request1.remove();
    contact2.remove();
}
function off3(){
    count1++;
    count2++;
    plus.innerText = 100 + count1 + "+";
    two.innerText = 2 - count2;
    accept2.remove();
    close2.remove();
    request2.remove();
    contact1.remove();
}

function off4(){
    count2++;
    two.innerText = 2 - count2;
    accept2.remove();
    close2.remove();
    request2.remove();
    contact1.remove();
}
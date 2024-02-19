const Decreasebtn=document.getElementById("Decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const Increasebtn=document.getElementById("Increasebtn");
const CounterLabel=document.getElementById("CounterLabel");

let count=0;

Increasebtn.onclick=function(){
    count++;
    CounterLabel.textContent = count;
}


Decreasebtn.onclick=function(){
    count--;
    CounterLabel.textContent = count;
}


resetbtn.onclick=function(){
    count=0;
    CounterLabel.textContent = count;
}
let receber = localStorage.getItem("name");
let receber02 = localStorage.getItem("pontos");

let msg = document.getElementById('title01');
let pontos= document.getElementById('pts');

function recomeçar(){
    window.location.href = "/scr/pages/quiz.html";
}
if(receber02 <= 25){
    msg.innerHTML = `Que pena ${receber}, sua pontuação foi um pouco baixa!`
    pts.style.color = 'red';
} 
if(receber02 >= 50 && receber02 <= 75){
    msg.innerHTML = `Boa!! ${receber}, foi quase! `
    pts.style.color = 'blue';
} 
if(receber02 == 100){
    msg.innerHTML = `Uau! ${receber}, sua pontuação foi exelente cara, parabêns!!`
    pts.style.color = 'green';
}
pts.innerHTML = `${receber02}% de acertos`



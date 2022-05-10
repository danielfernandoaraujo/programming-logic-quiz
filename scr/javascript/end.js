let receber = localStorage.getItem("name");
let receber02 = localStorage.getItem("pontos");

let msg = document.getElementById('texto');
let pontos= document.getElementById('pts');
let enviar = document.getElementById('enviar');

enviar.addEventListener('click',recomeçar) //evento

function recomeçar(){
    window.location.href = "/scr/pages/pages/quiz.html";
}
if(receber02 <= 25){
    msg.innerHTML = `Que pena ${receber}, <br>sua pontuação foi um pouco baixa!`
    pts.style.color = 'red';
} 
if(receber02 >= 50 && receber02 <= 75){
    msg.innerHTML = `Boa ${receber}!<br> Chegou perto! `
    pts.style.color = 'blue';
} 
if(receber02 == 100){
    msg.innerHTML = `Uau! ${receber},<br> sua pontuação foi excelente, Parabéns!`
    pts.style.color = 'green';
}
pts.innerHTML = `${receber02}% de acertos`



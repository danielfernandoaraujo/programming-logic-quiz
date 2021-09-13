let page = 0

let score = 0

let receber = localStorage.getItem("name");

let pontos = document.getElementById('resposta')

let bt01 = document.getElementById('bt01');
let bt02 = document.getElementById('bt02');
let bt03 = document.getElementById('bt03');
let pergunta = document.getElementById('pergunta01');

    //Repeti if's demais tenho que achar uma forma mais pratica de fazer no futuro!

function botão01(){
    page++
    if(page == 1){
        pergunta.innerHTML = 'O que é algoritimo?'
        bt01.innerHTML = 'A forma que nós comunicamos com o computador.'
        bt02.innerHTML = 'Tecnologia usada pelo YouTube para saber o que você gosta.'
        bt03.innerHTML = 'Sequencia de instruções para solucionar um problema.'
        score = score + 25
    }
    if(page == 2){ 
        pergunta.innerHTML = 'O desenvolvedor front-end é aquele que:'
        bt01.innerHTML = 'É responsavel pelos servidores, estrutura e segurança.'
        bt02.innerHTML = 'É responsavel pela parte visual e design.'
        bt03.innerHTML = 'Cria sistemas funcionais para aplicação.'   
    }
    if(page == 3){
        pergunta.innerHTML = 'O desenvolvedor back-end é aquele que:'
        bt01.innerHTML = 'É responsavel pela parte visual e design.'
        bt02.innerHTML = 'É responsavel pelos servidores, estrutura e segurança.'
        bt03.innerHTML = 'Desevolve interfaces para interação do usuario.' 
    }
    if(page == 4){
       window.location.href = "/scr/pages/end.html";
       localStorage.setItem('pontos', score)
    }   
}
function botão02(){
    page++
    if(page == 1){
        pergunta.innerHTML = 'O que é algoritimo?'
        bt01.innerHTML = 'A forma que nós comunicamos com o computador'
        bt02.innerHTML = 'Tecnologia usada pelo YouTube para saber o que você gosta.'
        bt03.innerHTML = 'Sequencia de instruções para solucionar um problema.'
    }
    if(page == 2){
        pergunta.innerHTML = 'O desenvolvedor front-end é aquele que:'
        bt01.innerHTML = 'É responsavel pelos servidores, estrutura e segurança.'
        bt02.innerHTML = 'É responsavel pela parte visual e design.'
        bt03.innerHTML = 'Cria sistemas funcionais para aplicação.'
    }
    if(page == 3){
        score = score + 25
        pergunta.innerHTML = 'O desenvolvedor back-end é aquele que:'
        bt01.innerHTML = 'É responsavel pela parte visual e design.'
        bt02.innerHTML = 'É responsavel pelos servidores, estrutura e segurança.'
        bt03.innerHTML = 'Desevolve interfaces para interação do usuario.' 
    }
    if(page == 4){
        score = score + 25
        window.location.href = "/scr/pages/end.html";
        localStorage.setItem('pontos', score)
    }
    
}
function botão03(){
    page++
    if(page == 1){       
        pergunta.innerHTML = 'O que é algoritimo?'
        bt01.innerHTML = 'A forma que nós comunicamos com o computador'
        bt02.innerHTML = 'Tecnologia usada pelo YouTube para saber o que você gosta.'
        bt03.innerHTML = 'Sequencia de instruções para solucionar um problema.'
    }
    if(page == 2){
        pergunta.innerHTML = 'O desenvolvedor front-end é aquele que:'
        bt01.innerHTML = 'É responsavel pelos servidores, estrutura e segurança.'
        bt02.innerHTML = 'É responsavel pela parte visual e design.'
        bt03.innerHTML = 'Cria sistemas funcionais para aplicação.'   
        score = score + 25
    }
    if(page == 3){
        pergunta.innerHTML = 'O desenvolvedor back-end é aquele que:'
        bt01.innerHTML = 'É responsavel pela parte visual e design.'
        bt02.innerHTML = 'É responsavel pelos servidores, estrutura e segurança.'
        bt03.innerHTML = 'Desevolve interfaces para interação do usuario.' 
    }
    if(page == 4){
        window.location.href = "/scr/pages/end.html";
        localStorage.setItem('pontos', score)
    }
    
}



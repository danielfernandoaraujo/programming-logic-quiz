let page = 0
let score = 0
            //localStorege.getItem = a pegar uma variavel que foi salva no navegador anteriormente
let receber = localStorage.getItem("name");

let pontos = document.getElementById('resposta')
let bt01 = document.getElementById('bt01');
let bt02 = document.getElementById('bt02');
let bt03 = document.getElementById('bt03');
let pergunta = document.getElementById('pergunta01');

bt01.addEventListener('click',botão01); //evento
bt02.addEventListener('click',botão02); //evento
bt03.addEventListener('click',botão03); //evento

function page01(){
    pergunta.innerHTML = 'O que é algoritimo?'
    bt01.innerHTML = 'A forma que nós comunicamos com o computador.'
    bt02.innerHTML = 'Tecnologia usada pelo YouTube para saber o que você gosta.'
    bt03.innerHTML = 'Sequencia de instruções para solucionar um problema.'
}
function page02(){
    pergunta.innerHTML = 'O desenvolvedor front-end é aquele que:'
    bt01.innerHTML = 'É responsavel pelos servidores, estrutura e segurança.'
    bt02.innerHTML = 'É responsavel pela parte visual e design.'
    bt03.innerHTML = 'Cria sistemas funcionais para aplicação.'  
}
function page03(){
    pergunta.innerHTML = 'O desenvolvedor back-end é aquele que:'
    bt01.innerHTML = 'É responsavel pela parte visual e design.'
    bt02.innerHTML = 'É responsavel pelos servidores, estrutura e segurança.'
    bt03.innerHTML = 'Desevolve interfaces para interação do usuario.' 
}

function botão01(){
    page++
    if(page == 1){
        page01() 
        score = score + 25
    }
    if(page == 2){ 
        page02() 
    }
    if(page == 3){
        page03() 
    }
    if(page == 4){
       window.location.href = "/scr/pages/end.html";
       localStorage.setItem('pontos', score)
    }   
}
function botão02(){
    page++
    if(page == 1){
        page01()
    }
    if(page == 2){
        page02()
    }
    if(page == 3){
        page03() 
        score = score + 25
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
        page01()
    }
    if(page == 2){
        page02() 
        score = score + 25
    }
    if(page == 3){
        page03()
    }
    if(page == 4){
        window.location.href = "/scr/pages/end.html";
        localStorage.setItem('pontos', score)
    }
    
}



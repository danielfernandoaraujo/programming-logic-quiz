

/*Primeiro pega a informação colocada no input, depois um if caso a pessoa coloque em branco e depois 
o redirecionamento com o localStorage que serve para guardar uma key no navegador, tranformando em uma
variavel universal */
function enviar() {
    let send = document.getElementById('name').value;
    if(send == ""){
        window.alert('[ERRO] Por favor insira seu nome!!')
        
    } else{
        window.location.href = "/scr/pages/quiz.html";
        localStorage.setItem('name', send)
        return send
    }
};








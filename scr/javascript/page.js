
/*Primeiro pega a informação colocada no input, depois um if caso a pessoa coloque em branco e depois 
o redirecionamento com o localStorage que serve para guardar uma key no navegador, tranformando em uma
variavel universal */
function enviar() {
    let send = document.getElementById('name').value;
    let text = document.getElementById('alert')
    if(send == ""){
        text.innerHTML= 'Por favor insira um nome'
        
    } else{
        window.location.href = "/scr/pages/quiz.html";
        //localStorage.getItem = Guardar uma variavel no navegador para usar em qualquer outra pagina
        localStorage.setItem('name', send)
        return send
    }
};








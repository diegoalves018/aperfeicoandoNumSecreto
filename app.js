let numSecreto = numAleatorio();
let tentativas;

reiniciarJogo();



function numMax(){
   let numeroMax;
  return numeroMax = 10;
    
}

function mensagemTelaInicial() {
    exibirTextoHTML('h1', 'Descubra o número secreto');
    exibirTextoHTML('p', `Escolha o número de 1 a ${numMax()}`);
    
}

function exibirTextoHTML(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}


function verificarChute(){

    let chute = document.querySelector('input').value;

    if(chute < 1 || chute > numMax()){
        exibirTextoHTML('p', `Número que você escolheu está fora da seleção de 1 a ${numMax()}. Tente novamente!`);
        limparCampo();

    }else {

    if(chute == numSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voçê acertou o número secreto com ${tentativas} ${palavraTentativa}!`;

       exibirTextoHTML('h1', 'Parabéns, voçê acertou!');
       exibirTextoHTML('p', mensagemTentativa); 
       ativarBotaoReiniciar();

    }else {
        if(chute > numSecreto){
            exibirTextoHTML('p', `O número secreto é menor que ${chute}`)

        }else{
            exibirTextoHTML('p', `O número secreto é maior que ${chute}`)

        }
        tentativas++;
        limparCampo();
    }
    }

}

function numAleatorio() {
    return parseInt(Math.random() * numMax() + 1);    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function ativarBotaoReiniciar() {
    document.getElementById('reiniciar').removeAttribute('disabled');
        
}

function reiniciarJogo() {    
    tentativas=1
    numSecreto = numAleatorio();
    limparCampo();    
    mensagemTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numSecreto);

}

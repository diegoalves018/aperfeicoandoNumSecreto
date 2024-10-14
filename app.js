let numSecreto = numAleatorio();
let tentativas;
let chances;
let palavraTentativa;
let palavraChance;

reiniciarJogo();

function numMax() {
    return 100;
}

function mensagemTelaInicial() {
    exibirTextoHTML('h1', 'Descubra o número secreto');
    exibirTextoHTML('p', `Escolha o número de 1 a ${numMax()}. Você possui ${chances} ${palavraChance}!`);
}

function exibirTextoHTML(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);

    // Verifica se o chute está fora dos limites
    if (isNaN(chute) || chute < 1 || chute > numMax()) {
        exibirTextoHTML('p', `Valor inválido! Escolha um número entre 1 a ${numMax()}. Tente novamente!`);
        limparCampo();
        return; // Termina a função para evitar contagem de tentativas
    }

    // Verifica se o chute é o número secreto
    if (chute == numSecreto) {         
        exibirTextoHTML('h1', 'Parabéns, você acertou!');
        exibirTextoHTML('p', `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`);
        ativarBotaoReiniciar();
        return; // Termina a função já que o jogo foi ganho

    } else {
        // Aumenta a contagem de tentativas e diminui as chances
        tentativas++;
        chances--;

        // Dicas com base na comparação
        if (chute > numSecreto) {
            exibirTextoHTML('p', `O número secreto é menor que ${chute}. Você ainda possui ${chances} ${palavraChance}!`);
        } else {
            exibirTextoHTML('p', `O número secreto é maior que ${chute}. Você ainda possui ${chances} ${palavraChance}!`);
        }

        limparCampo();

        // Verifica se o jogador esgotou as chances
        if (chances == 0) {
            exibirTextoHTML('p', `Você acabou com as chances. O número secreto era ${numSecreto}. Tente novamente!`);
            ativarBotaoReiniciar();
        }
    }
}

function numAleatorio() {
    return parseInt(Math.random() * numMax() + 1);    
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function ativarBotaoReiniciar() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJogo() {    
    chances = 5;
    tentativas = 1;
    palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    palavraChance = chances > 1 ? 'chances' : 'chance';      
    numSecreto = numAleatorio();
    limparCampo();    
    mensagemTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numSecreto);
}

// Adicionando o botão ENTER como alternativa ao clique CHUTE
document.querySelector('input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão
        let chute = parseInt(document.querySelector('input').value);
        if (!isNaN(chute) && chute >= 1 && chute <= numMax()) {
            verificarChute(); // Chama a função para verificar o chute apenas se for válido
        }
    }
});
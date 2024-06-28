let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' ,{rate:1.2});
}

function exibirMsgInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Digite um número entre 1 e 100');
}

exibirMsgInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTent = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgtentativas = `Parabéns! Você acertou o número secreto com ${tentativas} ${palavraTent}!`;
        exibirTextoNaTela('p', msgtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('h1', 'Errou');
            exibirTextoNaTela('p', 'O número secreto é maior, tente novamente!');
        } else {
            exibirTextoNaTela('h1', 'Errou');
            exibirTextoNaTela('p', 'O número secreto é menor, tente novamente!');
        }
        tentativas++;
    }
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados =[];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
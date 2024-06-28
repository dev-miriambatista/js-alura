let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('O botão foi clicado');
}

function verificarConsole(){
    console.log('O botão foi clicado');
}

function verificarAlerta(){
    alert('Eu amo JS')
}

function verificarCidade(){
    let cidade = prompt('Me diga o nome de uma cidade');
    alert (`Estive em ${cidade} e lembrei de você!`)
}

function verificarSoma(){
    let valor1 =  parseFloat (prompt('Digite um numero'));
    let valor2 =  parseFloat ( prompt('Digite outro número'));
    resultado =(valor1 + valor2);
    alert(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
    
}

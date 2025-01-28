let mudarh1 = document.querySelector("h1");
mudarh1.innerHTML = "Hora do Desafio";

function botaoConsole() {
    console.log("O botão foi clicado");
}

function alertajs() {
    alert("Eu amo JS");
}

function cidade() {
    let nomeCidade = prompt("Fale o nome de uma cidade Brasileira? ");
    alert(`Eu estive na ${nomeCidade} e lembrei de você.`);
}

function soma() {
    let num1 = parseInt(prompt("Digite um número: "));
    let num2 = parseInt(prompt("Digite outro número: "));
    let resultado = num1 + num2;

    alert(`O resultado de ${num1} + ${num2} é ${resultado}.`);
}
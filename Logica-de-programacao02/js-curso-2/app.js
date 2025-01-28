let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', { rate: 2.0 })
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

exibirTextoNaTela("h1", "jogo do numero secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
    let chute = parseInt(document.querySelector("input").value);

    if (chute === numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número Secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativa);

        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("h1", "Você Errou!");
            exibirTextoNaTela("p", "O número secreto é menor! Tente Novamente.");
        } else {
            exibirTextoNaTela("h1", "Você Errou!");
            exibirTextoNaTela("p", "O número secreto é maior! Tente Novamente.");
        }
        tentativas++;
    }

    document.querySelector("input").value = "";
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        return numeroEscolhido;
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;

    exibirTextoNaTela("h1", "jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10.");
    document.querySelector(".container__input").disabled = false;
    document.querySelector(".container__input").value = "";
    document.querySelector("#reiniciar").disabled = true;
}


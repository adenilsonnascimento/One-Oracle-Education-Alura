alert("Bem Vindo ao Jogo número Secreto");

let numeroMaximo = 5000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;

let tentativas = 1;

//while = enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // if e else, se(if) o chute for igual ao chuteSecreto, vai vencer
    if (numeroSecreto == chute) {
        break
    }
    //senão(else) vai estar errado
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentivas" : "tentativa";
alert(`Você encontrou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


/*
if (tentativas > 1) {

    alert(`Você encontrou o número secreto: ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Você encontrou o número secreto: ${numeroSecreto} com ${tentativas} tentativa.`);
}*/
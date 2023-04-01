let button = document.getElementById('botao');
let inputSal = document.getElementById('salarioLiq');
let inputDes = document.getElementById('primeiroValor');

function respostaFinal() {
    
    let entrada = parseFloat(inputSal.value);
    let saida = parseFloat(inputDes.value);

    let total = entrada - saida;
    let porcentagemFixa = Math.round((saida * 100) / entrada);

    if (entrada > saida && porcentagemFixa <= '50') {
        
        document.getElementById('respostaUm').innerHTML = `<p>Parabéns, seu saldo está positivo, totalizando ${total} reais. <br>Você teve um consumo fixo que corresponde a ${porcentagemFixa}% do seu salário e um consumo variável de xxx,xx</p>`;
        
    } else {
        
        document.getElementById('respostaDois').innerHTML = `<p>Infelizmente seu saldo é negativo. <br>Precisa de ajuda financeira?</p>`;
        
    }
}

button.onclick = respostaFinal;



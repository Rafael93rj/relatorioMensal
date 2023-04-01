let button = document.getElementById('botao');
let inputSal = document.getElementById('salarioLiq');
let inputDes = document.getElementById('primeiroValor');

let respostaNeg = document.getElementById('respostaDois');


function respostaFinal() {
    
    let salarioLiq = parseFloat(inputSal.value);
    let primeiroValor = parseFloat(inputDes.value);

    let total = salarioLiq - primeiroValor;
    let porcentagemFixa = Math.round((primeiroValor * 100) / salarioLiq);

    if (salarioLiq > primeiroValor && porcentagemFixa <= '50') {
        
        document.getElementById('respostaUm').innerHTML = `<p>Parabéns, seu saldo está positivo, totalizando ${total} reais. <br>Você teve um consumo fixo que corresponde a ${porcentagemFixa}% do seu salário e um consumo variável de xxx,xx</p>`;
        
        
    } else {
        
        respostaNeg.innerHTML = `Infelizmente seu saldo é negativo. Precisa de ajuda financeira?`;
        
        button.parentNode.insertBefore(div, inputSal.nextElementSibling);
    }
}

button.onclick = respostaFinal;



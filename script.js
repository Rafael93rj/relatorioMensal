let botaoCalcular = document.getElementById('botao');
let botaoCheck = document.getElementById('check');
let botaoOut = document.getElementById('out');
let inputSal = document.getElementById('salarioLiq');
let inputDes = document.getElementById('primeiroValor');

botaoCheck.style.display = 'none';
botaoOut.style.display = 'none';

function respostaFinal() {

    let entrada = parseFloat(inputSal.value);
    let saida = parseFloat(inputDes.value);
    
    let total = entrada - saida;
    let porcentagemFixa = Math.round((saida * 100) / entrada);

    if (entrada > saida && porcentagemFixa <= 50) {

        botaoCheck.style.display = 'block';
        botaoOut.style.display = 'block';

        document.getElementById('respostaDois').innerHTML = ''; 
        document.getElementById('respostaUm').innerHTML = `<h3>Parabéns, seu saldo está positivo!</h3>  <p>• Seu saldo total é de ${total} reais.</p> <p> • Seu consumo fixo correspondeu a ${porcentagemFixa}% do seu salário.</p> <p> • Seu consumo variável foi de xxx,xx</p><p>Quer usar o seu dinheiro de maneira mais inteligente?</p>`;
        
            botaoCheck.onclick = function() {
                
                let divisaoSemana = total / 4;
                let poupanca = entrada * 0.15;

                document.getElementById('opcaoInvestimento').innerHTML = `<p>• Lembre-se de guardar pelo menos ${poupanca} reais.</p><p>• O seu saldo de ${total} reais, te da a possibilidade de usar ${divisaoSemana} reais por semana. Isso te ajudaria a fazer mais compras à vista gerando uma economia no cartão de crédito.<p>`;
            }
            botaoOut.onclick = function() {
                location.reload();
            }
        
    } else {
        botaoCheck.style.display = 'none';
        botaoOut.style.display = 'none';
        document.getElementById('opcaoInvestimento').innerHTML = '';
        document.getElementById('respostaUm').innerHTML = '';

        document.getElementById('respostaDois').innerHTML = `<h3>Infelizmente seu saldo está negativo.</h3>`;     
    }
}

botaoCalcular.onclick = respostaFinal;


let botaoCalcular = document.getElementById('botao');
let botaoCheck = document.getElementById('check');
let botaoOut = document.getElementById('out');
let inputSal = document.getElementById('salarioLiq');

let input1 = document.getElementById('inputUm');
let input2 = document.getElementById('inputDois');
let input3 = document.getElementById('inputTres');
let input4 = document.getElementById('inputQuatro');
let input5 = document.getElementById('inputCinco');
let input6 = document.getElementById('inputSeis');
let input7 = document.getElementById('inputSete');
let input8 = document.getElementById('inputOito');

let inputs = document.getElementsByTagName('input');

botaoCheck.style.display = 'none';
botaoOut.style.display = 'none';

function respostaFinal() {

    let entrada = parseFloat(inputSal.value);
    let saidaUm = parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value) + parseFloat(input4.value);
    let saidaDois = parseFloat(input5.value) + parseFloat(input6.value) + parseFloat(input7.value) + parseFloat(input8.value);
    let saidaTotal = saidaUm + saidaDois;

    let total = entrada - saidaTotal;
    let porcentagemFixa = Math.round((saidaUm * 100) / entrada);
    let porcentagemVariavel = Math.round((saidaDois * 100) / entrada);

    if (entrada > saidaTotal && porcentagemFixa <= 50 && porcentagemVariavel <= 35) {

        botaoCheck.style.display = 'block';
        botaoOut.style.display = 'block';

        document.getElementById('respostaDois').innerHTML = ''; 
        document.getElementById('respostaUm').innerHTML = `<h3>Parabéns, seu saldo está positivo!</h3>  <p>• Seu saldo total é de ${total} reais.</p> <p> • Seu consumo fixo correspondeu a ${porcentagemFixa}% do seu salário.</p> <p> • Seu consumo variável foi de ${porcentagemVariavel}%.</p><p>Quer usar o seu dinheiro de maneira mais inteligente?</p>`;
        
            botaoCheck.onclick = function() {
                
                let divisaoSemana = (total / 4).toFixed(2);
                let poupanca = (entrada * 0.15).toFixed(2);

                document.getElementById('opcaoInvestimento').innerHTML = `<p>• Lembre-se de guardar pelo menos ${poupanca} reais.</p><p>• O seu saldo de ${total} reais, te da a possibilidade de usar ${divisaoSemana} reais por semana. Isso te ajudaria a fazer mais compras à vista gerando uma economia no cartão de crédito.<p>`;
            }
            botaoOut.onclick = function() {
                location.reload();
            } 
            } else if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input5.value == "" || input6.value == "" || input7.value == "" || input8.value == "") {
                alert('Você esqueceu algum(s) campo(s) vazio(s), por favor, insira um valor válido. Caso não tenha, insira o valor de zero "0"!');

            } else {
            botaoCheck.style.display = 'none';
            botaoOut.style.display = 'none';
            document.getElementById('opcaoInvestimento').innerHTML = '';
            document.getElementById('respostaUm').innerHTML = '';
            document.getElementById('respostaDois').innerHTML = `<h3>Infelizmente seu saldo está negativo.</h3>`;     
        }
}

botaoCalcular.onclick = respostaFinal;


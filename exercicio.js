// Desafio 1: Crie um programa que some dois números e exiba o resultado no console.
let num1 = 5;
let num2 = 6;
let soma = num1 + num2; // A variável soma armazena a soma de num1 e num2

console.log(soma); // A função console.log exibe o valor da variável soma no console.
//FIM DO DESAFIO 1.


// Desafio 2: Crie um vetor com 10 números e faça a média de todos os valores do vetor.

let numeros = [5, 6, 30, 40, 50, 60, 70, 80, 90, 100];
let somaNumeros = 0; // Variável para armazenar a soma dos números 
for (let i = 0; i < numeros.length; i++) {
    somaNumeros += numeros[i]; // Adiciona cada número do vetor à soma
}
let mediaNumeros = somaNumeros / numeros.length; // Calcula a média dividindo a soma pelo número de elementos

console.log(mediaNumeros); // Exibe a média no console
//FIM DO DESAFIO 2.

// Desafio 3: Pegue os mesmos 10 números do exercício anterior e mostre no console apenas os números primos.   
function isPrimo(num) {
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    for (let i = 2; i <= Math.sqrt(num); i++) { // Verifica se o número é divisível por algum número até a raiz quadrada dele
        if (num % i === 0) return false; // Se for divisível, não é primo
    }
    return true; // Se não for divisível por nenhum, é primo
}
for (let i = 0; i < numeros.length; i++) {
    if (isPrimo(numeros[i])) { // Verifica se o número é primo
        console.log(numeros[i]); // Exibe o número primo no console
    }
}
//FIM DO DESAFIO 3.
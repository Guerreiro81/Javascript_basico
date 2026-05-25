let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // Soma
console.log(num1 - num2); // Subtração
console.log(num1 * num2); // Multiplicação
console.log(num1 / num2); // Divisão
//resto da divisão
let numero = 9;
if(numero % 2 === 0){
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}
//potencia
numero = 4;
quadrado = numero ** 2;
console.log(quadrado);
numero = 3;
cubo = numero ** 3;
console.log(cubo);
//temperatura
let celsius = 30;   
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);
//media aritmética
let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log(media);
//calculo de troco
let preco = 35.90;
let valorPago = 50.00; 
let troco = valorPago - preco;
console.log(troco);
//igual ou diferente
//== → compara apenas o valor
//=== → compara o valor e também o tipo da variável.
let valor1 = 10;
let valor2 = "10";
console.log(valor1 == valor2);
console.log(valor1 === valor2);
//maior ou menor
 num1 = 15;
 num2 = 20;
console.log(num1 > num2);
console.log(num2 < num1);
console.log("os numeros são iguais? " + (num1 === num2));   
//aprovado ou reprovado
let nota = 8;
console.log(nota >= 7 ? "Aprovado" : "Reprovado");
//verificar a idade 
let idade = 20;
console.log(idade >= 18 ? "Maior de idade" : "Menor de idade");
//comparacao de strings
let palavra1 = "JavaScript";
let palavra2 = "JavaScript";
let palavra3 = "javascript";
let palavra4 = "Python";
console.log(palavra1 === palavra2);
console.log(palavra1 === palavra3);
console.log(palavra1 == palavra4);
//faixa de preço
preco = 55.00;
console.log(preco >= 10 && preco <= 100);









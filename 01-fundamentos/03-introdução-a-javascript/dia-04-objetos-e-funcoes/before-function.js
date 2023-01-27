//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 10;
// const b = 20;

// function adicao(a,b) {
//     return a + b;
// }
// function subtracao(a,b) {
//     return a - b;
// }
// function multiplicacao(a,b){
//     return a * b;
// }
// function divisao(a,b){
//     return a / b;
// }
// function modulo(a,b){
//     return a % b;
// }



//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// const a = 10;
// const b = 20;

// function maiorNumero(a,b){
//     if (a > b) {
//         return a + ' é maior que ' + b;
//     }else if (b > a){
//         return b + ' é maior que ' + a;
//     }
// }

// console.log(maiorNumero(a,b))



//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// const a = 10;
// const b = 20;
// const c = 30

// function maiorNumero(a, b, c){
//     if (a > b && a > c) {
//         return a + ' é maior que ' + b + ' e ' + c;
//     }else if (b > a && b > c){
//         return b + ' é maior que ' + a + ' e ' + c;
//     } else {
//         return c + ' é maior que ' + a + ' e ' + b;
//     }
// }

// console.log(maiorNumero(a,b,c))



//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function positivoOuNegativo(a) {
//     if(a > 0) {
//         return "positive";
//     } else if (a < 0) {
//         return "negative";
//     }else {
//         return "zero"
//     }
// }


// console.log(positivoOuNegativo(-6));



//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// function verificaTriangulo(a,b,c) {
// if (a < 0 || b < 0 || c < 0) {
//     return "erro";
// } 
// if (a + b + c === 180){
//         return true;
// }else if (a + b + c !== 0) {
//         return "false"
// }
// }
// console.log(verificaTriangulo(59,60,61));
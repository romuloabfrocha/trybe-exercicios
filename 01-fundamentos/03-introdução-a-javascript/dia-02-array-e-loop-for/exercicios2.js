//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }



//Some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }
// console.log(resultado);



//Calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }
//  let mediaAritmetica = resultado / numbers.length;
// console.log(mediaAritmetica);



//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }
//  let mediaAritmetica = resultado / numbers.length;
// console.log(mediaAritmetica);

// if (mediaAritmetica > 20) {
//     console.log('Valor maior que 20.');
// } else {
//     console.log('Valor menor ou igual a 20.');
// }



//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0]

for (index = 0; index < numbers.length; index += 1){
if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
}
}
console.log(maiorNumero);
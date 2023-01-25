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

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = numbers[0]

// for (index = 0; index < numbers.length; index += 1){
// if (numbers[index] > maiorNumero) {
//     maiorNumero = numbers[index];
// }
// }
// console.log(maiorNumero);



//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numeroImpar = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     if (numbers[index]  % 2 !== 0) {
//         numeroImpar += 1;
//     }
// } 
// if (numeroImpar === 0) {
//     console.log("Nenhum valor ímpar encontrado");
// } else {
//     console.log(numeroImpar);
// }



//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < menorValor)
//     menorValor = numbers[index]
// }

//     console.log(menorValor);




    //Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

    // let arr = [0];
    // for (let index = 1; index <= 25; index +=1) {
    //     arr.push(index);
    // }
    // console.log(arr);



    // //Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

    // for (let index = 1; index < arr.length; index +=1) {
    //     console.log(arr[index] / 2);
    // } 



    // Exercícios - Bônus - Ordenação Bubble Sort


    //Ordene o array numbers em ordem crescente e imprima seus valores;

    // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
    // numbers.sort((a,b) => a - b);
      
    // console.log(numbers);


    //Ordene o array numbers em ordem decrescente e imprima seus valores;


    // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
    // numbers.sort((a,b) => b - a);
      
    // console.log(numbers);


    //Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:


    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);

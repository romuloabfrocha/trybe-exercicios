//Crie um algoritmo que imprima na tela o fatorial de 10

// let fatorial = n => 
// {
//     if (n > 1) {
//         return n * fatorial(n - 1)
//     }
//     return n
// }

// console.log(fatorial(10))



//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let drow = []

// for (let index = 0; index < word.length; index += 1) {
//   drow += word[word.length - 1 - index];
// }

// console.log(drow);



//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 0; index < array.length; index += 1) {
//  if (array[index].length > maiorPalavra.length) {
//   maiorPalavra = array[index]; 
//  } else {
//   menorPalavra = array[index];
//  }
// }console.log(maiorPalavra);
// console.log(menorPalavra);



//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

// let maiorNumero = 0;

// for (let index = 2; index <= 50; index += 1) {
//   let numeroPrimo = true;
//   for (let divisor = 2; divisor < index; divisor += 1) {
//     if (index % divisor === 0) {
//       numeroPrimo = false;
//     }
//   }
//   if (numeroPrimo) {
//     biggestPrimeNumber = index;
//   }
// }

// console.log(biggestPrimeNumber);


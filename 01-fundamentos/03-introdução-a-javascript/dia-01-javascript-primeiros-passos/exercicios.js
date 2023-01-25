
// const a = 28;
// const b = 6;

// console.log("Adição: " + (a + b));

// console.log("Subtração: " + (a - b));

// console.log("Multiplicação: " + (a * b));

// console.log("Divisão: " + Math.round((a / b)));

// console.log("Módulo: "+ (a % b));

//

// const a = 28;
// const b = 6;

// if (a > b) {
//   console.log("a é maior que b");
// } else {
//   console.log("b é maior que a");
// }

//

// const a = 58;
// const b = 26;
// const c = 79;

// if (a > b && a > c) {
//   console.log("a é maior que b e c");
// } else if (b > a && b > c) {
//   console.log("b é maior que a e c");
// } else {
//   console.log ("c é maior que a e b");
// }

//

// const parametro = -28;

// if (parametro > 0) {
//   console.log("positive");
// } else if (parametro < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// };

//

// const anguloA = 60;
// const anguloB = 59;
// const anguloC = 61;

// if(anguloA + anguloB + anguloC === 180 && anguloA > 0 && anguloB > 0 && anguloC > 0) {
//   console.log("true");
// } else if (anguloA + anguloB + anguloC != 180) {
//   console.log("erro");
// } else {
//   console.log("false");
// }

//

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
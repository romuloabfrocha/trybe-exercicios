// const myName = "Rômulo";
// const birthCity = "Gama";
// let birthYear = 1997;
// birthYear = 2030;
// //  birthCity = 'Santa Maria';

// console.log(birthCity);

//

// const base = 5;
// const heigth = 8;
// const area = base * heigth;
// console.log(area);
// const perimeter = base + base + heigth + heigth;

// console.log(perimeter);

//

// const notaPessoaCandidata = 22;

// if (notaPessoaCandidata >= 80) {
//     console.log("Parabéns, você faz parte do grupo das pessoas aprovadas")
// } else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
//     console.log("Você está na nossa lista de espera.")
// } else (notaPessoaCandidata < 60) 
//     console.log("Infelizmente, você reprovou.")

//

// const currentHour = 23;
// let message;

// if (currentHour >= 22) {
//   message = "Não deveriamos comer nada, é hora de dormir";
// } else if (currentHour >= 18 && currentHour < 22) {
//   message = "Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && currentHour < 18) {
//   message = "Vamos fazer um bolo pro café d tarde?";
// } else if (currentHour >= 11 && currentHour < 14) {
//   message = "Hora do almoço";
// } else if (currentHour >= 4 && currentHour < 11) {
//   message = "Hmm, cheiro de café recém-passado";
// }

// console.log(message);

//

let statusPessoa = "Melancia";

switch (statusPessoa) {
  case "Aprovada":
    console.log("Voĉe foi aprovado");
    break;
    case "Lista": 
    console.log("Você está na nossa lista de espera");
    break;
    case "Reprovada": 
    console.log("Você foi reprovado");
    break;
    default:
      console.log("Informação incorreta");
}
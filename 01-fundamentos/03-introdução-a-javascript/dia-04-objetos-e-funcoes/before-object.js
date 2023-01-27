// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
// };

// diasDaSemana[1]; // SyntaxError: Unexpected number
// console.log(diasDaSemana['1']); // domingo



// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// }

// Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// }
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');



// Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// }
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]



// Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// }
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes, ' + player.bestInTheWorld + '.');



// Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// }
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');



//for/in e for/of

//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let key in names) {
//     console.log('Olá ', names[key],);
//   }



//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let key in car) {
//     console.log(key + ': ' + car[key])
//   }
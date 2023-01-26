// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

let num = 0 ;
for (let index = 1; index <= 50; index +=1) {
    num = num +index;
}
console.log(num)


//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let numeros = 0;
for (let index = 2; index <= 150; index +=1) {
    if (index % 3 ===0) {
    numeros +=1
}
}
if (numeros === 50) {
    console.log('Mensagem secreta')
}

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


let escolhas = ["Pedra", "Papel", "Tesoura"];
let player1 = escolhas[Math.floor(Math.random() * escolhas.length)];
let player2 = escolhas[Math.floor(Math.random() * escolhas.length)];
if((player1 === "Pedra" && player2 === "Papel") || (player1 === "Papel" && player2 === "Tesoura") || (player1 === "Tesoura" && player2 === "Pedra")){
    console.log("Player 2 won");
}
else if (player1 === player2) {
    console.log("A Ties")
} else {
    console.log("Player 1 won")
}
console.log(player1)
console.log(player2)

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// let idade;
// if(idade < 18){
//     console.log('A pessoa é menor de idade')
// }
// else{
//     console.log('A pessoa é maior de idade')
// }

//4 (Bônus) -
let idade = Math.floor(Math.random() *30);
console.log(idade)
console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade')


// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 28
let Flavio = 31
let Noel = 95
if(Carolzita < Flavio && Carolzita < Noel){
    console.log('Carolzita é a mais nova')
}
else if(Noel < Carolzita && Noel < Flavio){
    console.log('Noel é a mais novo')
}
else{
    console.log('Flavio é o mais novo')
}
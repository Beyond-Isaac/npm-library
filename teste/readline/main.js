const readline = require("readline-sync")

let nome = readline.question("Qual o seu nome? ")
let age = readline.question("E quantos anos voce tem? ")
let local = readline.question("Onde voce mora? ")

console.log(`O seu nome é ${nome}.`, `Sua idade é ${age}.`, `O seu local é ${local}`);

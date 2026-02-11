import readline from "readline-sync"
import chalk from "chalk"

let projectName = readline.question("Digite o nome do projeto: ")
let tranformeBlue = chalk.blue(projectName)

console.log(`teste: ${tranformeBlue}`);
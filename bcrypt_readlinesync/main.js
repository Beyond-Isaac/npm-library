import bcrypt from "bcrypt";
import readlineSync from "readline-sync";

const name = readlineSync.question("Digite sua senha: ")
const pasoword = name
const hash = await bcrypt.hash(pasoword, 10);

console.log("hash", hash);

console.log("confere 0000:", await bcrypt.compare("0000", hash))
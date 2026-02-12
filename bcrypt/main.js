import bcrypt from "bcrypt";

const pasoword = "minecraft"
const hash = await bcrypt.hash(pasoword, 10);

console.log("hash", hash);

console.log("confere 00000000:", await bcrypt.compare("00000000", hash))


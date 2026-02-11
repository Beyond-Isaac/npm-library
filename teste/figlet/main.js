import figlet from "figlet";
import chalk from "chalk";

async function doStuff() {
    const text = await figlet.text("EPSTEIN ISLAND xddddddd");
    console.log(chalk.green (`${text}`));
  }
  
  doStuff();
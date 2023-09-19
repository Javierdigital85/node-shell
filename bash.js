const commands = require("./commands");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const cmdArray = cmd.split(" ");
  const comando = cmdArray[0];
  const argumentos = cmdArray.slice(1);
 // const catContenido = cat.split(" ")
 // const argumentosCat = catContenido

  if (cmd === "pwd") {
    commands.pwd();
  } else if (cmd === "date") {
    commands.date();
  } else if (cmd === "ls") {
    commands.ls();
  } else if (comando === "echo") {
    commands.echo(argumentos);
  }
  else if(comando === "cat"){
    commands.cat(argumentos)
  }
  else if(comando === "head"){
    commands.head(argumentos)
  }

  else if(comando === "tail"){
    commands.tail(argumentos)
  }
  process.stdout.write("prompt > ");
});

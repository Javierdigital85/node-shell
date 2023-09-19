const fs = require("fs");
const readline = require('readline');

module.exports = {
  pwd: function () {
    // Código pwd
    console.log(process.argv[0]);
  },

  date: function () {
    console.log(new Date().toLocaleString());
  },

  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },

  echo: function (argumentos) {
    if (argumentos.length === 0) {
      console.log("Escriba un texto");
    } else {
      const mensaje = argumentos.join(" ");
      console.log(mensaje);
    }
  },

  //Entra los camandos  y luego entran las funciones pwd,date,ls,echo
  //pimero argumento y el segundo argumento
  cat: function (argumento) {
    fs.readFile(`${__dirname}/${argumento}`, "utf8", (error, datos) => {
      if (error) throw error;
      console.log(datos);
    });
  },

  head: function (argumento) {
    const archivoStream = fs.createReadStream(`${__dirname}/${argumento}`);
    const rl = readline.createInterface({
      input: archivoStream,
      output: process.stdout,
    });
    let contador = 0;
    rl.on("line", (linea) => {
      contador++;

      if (contador === 5) {
        rl.close();
      }
    });
  },

  tail: function (argumento) {
    const archivoStream = fs.createReadStream(`${__dirname}/${argumento}`);
    const rl = readline.createInterface({
      input: archivoStream,
    });

    const lineas = [];

    rl.on("line", (linea) => {
      lineas.push(linea);
      if (lineas.length > 5) {
        lineas.shift();
      }
    });

    rl.on("close", () => {
      lineas.forEach((linea) => {
        console.log(linea);
      });
    });
  },







}
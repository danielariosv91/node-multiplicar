const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`====== Tabla del ${base} =========`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }

        let cont = '';

        for (let i = 1; i <= limite; i++) {
            cont += (`${base} * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, cont, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

const fabricantes = ["Mercedes", "BMW", "Audi"]

function imprimir(fabricante, indice) {
    console.log(`${indice + 1}.${fabricante}`);
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante)
)


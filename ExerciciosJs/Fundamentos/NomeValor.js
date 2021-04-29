//par nome / valor

const saudacao ='Opa'; // contexto léxico 1

function exec(){
    const saudacao = 'Faaalaa' ;// contexto lexico 2
    return saudacao;
}

// objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso:90,
    endereco: {
        rua: 'muito legal',
        num: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);
const Pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao);
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //  conflito entre funcional e Orientado a objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // usando o bind ele faz com que o this seja resolvido, para isso devemos apontar aonde se encontra esse this, no caso o this de pessoa.falar esta no obj pessoa
// isso nao altera o resultado, se puxar novamente uma const falar = pessoa.falar o resultado sera undefined
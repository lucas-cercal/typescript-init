interface Humano {
  nome: string
  idade?: number //Opcional
  [prop: string]: any
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana"
}

const pessoa = {
  nome: "Lucas",
  idade: 22
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({nome: "Lucas", idade: 22, altura: 1.75})


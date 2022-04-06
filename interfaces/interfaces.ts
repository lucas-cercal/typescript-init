interface Humano {
  nome: string
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


function saudarComOla(pessoa: {nome: string}) {
  console.log("Olá, " + pessoa.nome)
}

function mudarNome(pessoa: {nome: string}) {
  pessoa.nome = "Joana"
}

const pessoa = {
  nome: "Lucas",
  idade: 22
}

saudarComOla(pessoa)
mudarNome(pessoa)

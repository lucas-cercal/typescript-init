interface Humano {
  nome: string
  idade?: number //Opcional
  [prop: string]: any
  saudar?(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana"
}

const pessoa = {
  nome: "Lucas",
  idade: 22,
  saudar(sobrenome: string){
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: "Lucas", idade: 22, altura: 1.75})
pessoa.saudar("Skywaler")


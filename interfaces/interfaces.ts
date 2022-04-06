interface Humano {
  nome: string
  idade?: number //Opcional
  [prop: string]: any
  saudar(sobrenome: string): void
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

// Usando classes...
class Cliente implements Humano {
  nome: string = ""
  ultimaCompra: Date = new Date
  saudar(sobrenome: string){
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = "Lucas"
saudarComOla(meuCliente)
meuCliente.saudar('Solo')

console.log(meuCliente.ultimaCompra)

// Interface Função
interface FuncaoCalculo {
  // O nome dos parâmetros não importa muito e sim a ordem, quantidade e tipo
  (a: number, b: number): number 
}

let potencia: FuncaoCalculo

potencia = function(base: number, expoente: number): number {
  return Array(expoente).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)


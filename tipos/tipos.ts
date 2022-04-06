// String
let nome: string = "Lucas"
console.log(nome)
// nome = 22

// Numbers
let idade: number = 22
// idade = "Lucas"
idade = 22.5
console.log(idade)

// Boolean
let possuiPC: boolean = true
// possuiPC = 0
console.log(possuiPC)

// Tipos Explícitos
let minhaIdade: any
minhaIdade = 22
console.log(typeof minhaIdade)
// minhaIdade = "22"

// Array
let hobbies: any[] = ["Cozinhar", "Musculação"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// Tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua importante", 101, "Bloco C"]
console.log(endereco)
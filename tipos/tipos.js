"use strict";
// String
let nome = "Lucas";
console.log(nome);
// nome = 22
// Numbers
let idade = 22;
// idade = "Lucas"
idade = 22.5;
console.log(idade);
// Boolean
let possuiPC = true;
// possuiPC = 0
console.log(possuiPC);
// Tipos Explícitos
let minhaIdade;
minhaIdade = 22;
console.log(typeof minhaIdade);
// minhaIdade = "22"
// Array
let hobbies = ["Cozinhar", "Musculação"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// Tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua importante", 101, "Bloco C"];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho"; // 100
})(Cor || (Cor = {}));
let minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Verde, Cor.Azul);
console.log(Cor.Verde, Cor.Vermelho); // É possível atribuir valores duplicados

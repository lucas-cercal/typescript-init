"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "Lucas",
    idade: 22
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: "Lucas", idade: 22, altura: 1.75 });

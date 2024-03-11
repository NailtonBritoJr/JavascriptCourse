// Nailton Brito tem 20 anos, pesa 96kg tem 1.76 de altura e seu IMC é de NUM


const nome = 'Nailton';
const sobrenome = 'Brito';
const idade = 21;
const peso = 96;
const alturaEmCm = 1.76;

let anoDeNascimento = 2024 - idade;
let imc = peso / (alturaEmCm * alturaEmCm);

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "tem", alturaEmCm, "de altura e seu indice de massa corporal é de", imc);
console.log(nome, sobrenome, "Nasceu em", anoDeNascimento);

// Utilizando Crase (`) as const e let, devem ser chamadas com ${} TemplateStrings 
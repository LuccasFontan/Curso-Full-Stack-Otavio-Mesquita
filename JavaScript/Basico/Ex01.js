/*
    Luiz otavio miranda tem 30 anos, pesa 84 kg 
    tem 1.0 de altura e seu IMC é de 25.925
    Luiz otavio nasceu em 2003
*/

const nome = "Lucas";
const sobrenome = "Fontan"
const idade = 22;
const peso = 75;
const altura = 1.71;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altira e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)



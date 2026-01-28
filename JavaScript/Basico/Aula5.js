const nome = 'luiz'; // String
const nome1 = "luiz"; // String
const nome2 = `luiz`; // String
const num1 = 10; // number
const num2 = 10.42 // number 
let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = false; // Boolean = true, false

const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b)
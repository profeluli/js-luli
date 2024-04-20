/*
//Dados primitivos 

alert(1);
//comentários são //

//string
let nomeUsuario = "Luli"
console.log(nomeUsuario);
console.log('Bom dia, "professores!"');
console.log(`Seja bem vindo(a), ${nomeUsuario}!`);
nomeUsuario = prompt("Digite o seu nome: ");
console.log(`Seu nome é ${(nomeUsuario)}`);

//números
let idade = 30;
idade = prompt("Digite sua idade: ");
console.log(`Seu nome é ${nomeUsuario} e sua idade é ${idade}`);

//número float
let peso = 58.5;
peso = prompt("Digite o seu peso: ");
console.log(`Seu nome é ${nomeUsuario}, sua idade é ${idade} e seu peso é ${peso} kg`);

//boolean
let condicao = true;
let condicaoFalsa = false;
console.log(condicao, condicaoFalsa);
*/

//Operadores aritméticos

let soma;
let diferenca;
let produto;
let divisao;
let resto;
soma = 10 + 3;
diferenca = 10 - 3;
produto = 10 * 3;
divisao = 10 / 3;
resto = 10 % 3;
console.log(`O resultado da soma é ${soma}`);
console.log(`O resultado da diferença é ${diferenca}`);
console.log(`O resultado do produto é ${produto}`);
console.log(`O resultado da divisão é ${divisao}`);
console.log(`O resultado do resto é ${resto}`);

//Estruturas condicionais

let numero;
numero = prompt("Digite um número: ")
if ((numero % 2) == 0){
    console.log("O número é par!")
}else{
    console.log("O número é ímpar!")
}

//Operadores de comparação
let idade;
idade = prompt("Digite sua idade: ");
if (idade >= 18){
console.log("O usuário é maior de idade")
}else{
console.log("Você não pode acessar esse site!")
}

//Operadores lógicos
if (idade < 12){
    console.log("criança");
}else if(idade >= 12 && idade <= 40){
console.log("Você é jovem!");
}else if (idade > 40){ 
console.log("Adulto");
}
let numero2 = 34;
if (numero2 > 20 || numero2 <30){
    console.log(numero2);
}

let valor = true;
console.log(!valor);

//Números e Array
let variavel = "50";
console.log(Number(variavel));

let array = [1, 10, 12];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
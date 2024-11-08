// Crie um programa que dado um numero, imprima sua tabuada;

const numero = 2;
let tabuada = [1,2,3,4,5,6,7,8,9,10];
let multiplo = 0;
let multiplosArray = [];

for(let i = 0; i < tabuada.length;i++){
  multiplo = numero * tabuada[i];
  multiplosArray[i] = multiplo;
  console.log(`${numero} x ${tabuada[i]} = ${multiplo}`)
}
console.log(`Tabuada de ${numero} = ${multiplosArray}`);
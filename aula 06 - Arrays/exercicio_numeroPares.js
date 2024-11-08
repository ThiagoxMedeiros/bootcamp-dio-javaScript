//2) Crie um programa que seja capaz de percorrer uma lista e imprima cada numero par encontrado!

const numeros =[0,1,2,3,4,5,6,7,8,9,10];
const numerosPares = [];
const numerosImpar = [];
for(let i =0; i<numeros.length;i++){
  if(numeros[i]% 2 === 0){
    par = numeros[i]
    numerosPares.push(par);
  }else{
    impar = numeros[i]
    numerosImpar.push(impar);
  }
}
console.log(`numeros pares: ${numerosPares}`);
console.log(`numeros impares: ${numerosImpar}`);

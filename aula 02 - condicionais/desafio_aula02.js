/*Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis:
1- Preço do etanol;
2- Preço da gasolina;
3- O tipo de combustivel que está no seu carro;
4- Gasto médio do combustivel do seu carro por km;
5- Distancia em KM da viage;
*/
const precoGasolina = 6.07;
const precoEtanol = 4.04;
const precoGnv = 4.70;
let tipoCombustivel = "Aditivada"
let kmPorLitros = 10;
let distanciaViagemEmKm = 100;

litrosConsumidos = (distanciaViagemEmKm/kmPorLitros);
//Criando a estrutura de decisão com IF Else:
/*if(tipoCombustivel === "Gasolina"){
  valorTotal = precoGasolina* litrosConsumidos;
  console.log(`O valor total da viagem é : R$${valorTotal.toFixed(2)}`);
}else if( tipoCombustivel === "Etanol"){
  valorTotal = precoEtanol* litrosConsumidos;
  console.log(`O valor total da viagem é : R$${valorTotal.toFixed(2)}`);
}else{
  valorTotal = precoGnv* litrosConsumidos;
  console.log(`O valor total da viagem é : R$${valorTotal.toFixed(2)}`);
}*/

// Criando estrutura de decisão com switch

switch(tipoCombustivel){
  case "Gasolina":
    valorTotal = precoGasolina* litrosConsumidos;
    console.log(`O valor total da viagem é : R$${valorTotal.toFixed(2)}`);
    break;
  case "Etanol":
    valorTotal = precoEtanol* litrosConsumidos;
    console.log(`O valor total da viagem é : R$${valorTotal.toFixed(2)}`);
    break;
  case "Gnv":
    valorTotal = precoGnv* litrosConsumidos;
    console.log(`O valor total da viagem é : R$${valorTotal.toFixed(2)}`);
    break;
  default:
    console.log("Por favor insira o tipo do seu combustivel(Gasolina, Etanol ou Gnv)")
}
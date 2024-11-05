/*Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis:
1- Preço do etanol;
2- Gasto médio de combustivel do carro por KM;
3- Distancia em KM da viagem;
*/
const precoCombustivel = 5.79;
let kmPorLitros = 10;
let distanciaViagemEmKm = 100;

litrosConsumidos = (distanciaViagemEmKm/kmPorLitros);
valorTotal = precoCombustivel* litrosConsumidos;

console.log(`O valor total da viagem é : R$${valorTotal.toFixed(2)}`);

/* 
3) Elabore um programa que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

código condigção de pagamento:
1-À vista débito, recebe 10% de desconto;
2-À vista no dinheiro ou pix, recebe 15% de desconto;
3-Em duas vezes, preço normal de etiqueta sem juros;
4-Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preçoEtiqueta = 100.00;
let taxaDesconto = 0;
let formaDePagamento = 5;
let valorDesconto = preçoEtiqueta*taxaDesconto;

if(formaDePagamento === 1){
  taxaDesconto = 0.1;
  valorDesconto = preçoEtiqueta*taxaDesconto;
  valorFinal = preçoEtiqueta - valorDesconto;
  console.log(`Devido a forma de pagamento, vc terá um desconto no valor de R$ ${valorDesconto.toFixed(2)}. O produto sairá no valor de R$ ${valorFinal.toFixed(2)}!`);
}else if(formaDePagamento === 2){
  taxaDesconto = 0.15;
  valorDesconto = preçoEtiqueta*taxaDesconto;
  valorFinal = preçoEtiqueta - valorDesconto;
  console.log(`Devido a forma de pagamento, vc terá um desconto no valor de R$ ${valorDesconto.toFixed(2)}. O produto sairá no valor de R$ ${valorFinal.toFixed(2)}!`);
}else if(formaDePagamento ===3){
  taxaDesconto = 0;
  valorDesconto = preçoEtiqueta*taxaDesconto;
  valorFinal = preçoEtiqueta - valorDesconto;
  console.log(`Devido a forma de pagamento, vc não terá desconto. O produto sairá no valor de R$ ${valorFinal.toFixed(2)}!`);
}else{
  taxaDesconto = 0.1;
  valorDesconto = preçoEtiqueta*taxaDesconto;
  valorFinal = preçoEtiqueta + valorDesconto;
  console.log(`Devido a forma de pagamento, vc terá um acréscimo no valor de R$ ${valorDesconto.toFixed(2)}. O produto sairá no valor de R$ ${valorFinal.toFixed(2)}!`);
}


function aplicarDesconto(valor, desconto){
 valorFinal = valor + ((desconto/100)*valor);
 valorDesconto = (desconto/100)*valor
 return valorFinal;

}
function aplicarJuros(valor, juros){
  valorFinal = valor + ((juros/100)*valor);
  valorJuros = (juros/100)*valor;
  return valorFinal

  
}

const precoEtiqueta = 100.00;
let formaDePagamento = 1;



if(formaDePagamento === 1){
  aplicarDesconto(100,10)
  console.log(`Devido a forma de pagamento, vc terá um desconto no valor de R$ ${valorDesconto.toFixed(2)}. O produto sairá no valor de R$ ${valorFinal.toFixed(2)}!`);
}else if(formaDePagamento === 2){
  aplicarDesconto(precoEtiqueta,15)
  console.log(`Devido a forma de pagamento, vc terá um desconto no valor de R$ ${valorDesconto.toFixed(2)}. O produto sairá no valor de R$ ${valorFinal.toFixed(2)}!`);
}else if(formaDePagamento ===3){
  aplicarDesconto(precoEtiqueta,0)
  console.log(`Devido a forma de pagamento, vc não terá desconto. O produto sairá no valor de R$ ${valorFinal.toFixed(2)}!`);
}else{
  aplicarJuros(precoEtiqueta,10)
  console.log(`Devido a forma de pagamento, vc terá um acréscimo no valor de R$ ${valorJuros}. O produto sairá no valor de R$ ${valorFinal.toFixed(2)}!`);
}
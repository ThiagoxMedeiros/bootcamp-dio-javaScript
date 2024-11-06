//aqui eu passo um parametro que pode ser alterado na chamada da função, substituindo o valor entre os parenteses
function incrementarJuros(valor, percentualJuros){
  const valorDeAcrescimo = (percentualJuros/100)*valor;
  return valor + valorDeAcrescimo;
}                            //aqui eu passo um parametro que pode ser alterado na chamada da função, substituindo o valor entre os parenteses
function incrementarDesconto(valor, percentualJuros){ 
  const valorDeDecrescimo = (percentualJuros/100)*valor;
  return valor - valorDeDecrescimo; //Aqui é o retorno da função
}

//Aqui eu chamo a função ja substituindo os parametros por valores que eu desejo chamar
console.log(incrementarJuros(100, 10));
console.log(`valor do produto com desconto R$ ${incrementarDesconto(100,10).toFixed(2)}`);

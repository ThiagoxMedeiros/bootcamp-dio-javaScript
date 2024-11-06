function escrevaMeuNome(nome){
  console.log(`Seu nome é: ${nome}!`);
}
escrevaMeuNome('Thiago');
escrevaMeuNome('Rafaelle');

function verificarIdade(idade){
  if (idade <18){
    console.log(`Sua idade é: ${idade}. Vc é menor de idade!`)
  }else{
    console.log(`Sua idade é: ${idade}. Vc é maior de idade!`)
  }
}

verificarIdade(18);
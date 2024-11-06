const pessoa = {
  nome: 'Thiago M Nascimento',
  idade: 29,
}

console.log(pessoa);
console.log(pessoa.nome);

pessoa['nome'] = 'teste';
console.log(pessoa.nome);

pessoa.nome = 'Thiago';
console.log(pessoa.nome);
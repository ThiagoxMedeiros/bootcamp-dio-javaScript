class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2024 - idade;
  }
}

function compararPessoas(p1, p2){
  if(p1.idade > p2.idade){
    console.log(`${p1.nome} é mais velho que ${p2.nome} `)
  }else if(p1.idade < p2.idade){
    console.log(`${p2.nome} é mais velho que ${p1.nome} `)
  }else{
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade `)
  }
}
const thiago = new Pessoa('Thiago', 29);
const rafaelle = new Pessoa('Rafaelle', 31);

compararPessoas(thiago, rafaelle);

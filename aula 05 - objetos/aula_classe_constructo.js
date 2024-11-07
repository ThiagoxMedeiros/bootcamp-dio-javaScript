class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2024 - idade;
  }

 descrever(){
    console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);   
  }
}
const thiago = new Pessoa('Thiago', 29);

console.log(thiago);
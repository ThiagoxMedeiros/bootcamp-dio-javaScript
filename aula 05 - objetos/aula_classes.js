class Pessoa {
  nome;
  idade;

 descrever(){
    console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);   
  }
}

const Thiago = new Pessoa();
Thiago.nome = 'Thiago';
Thiago.idade = '29';

const rafaelle = new Pessoa();
rafaelle.nome = 'Rafaelle';
rafaelle.idade = '31';

console.log(Pessoa);
Thiago.descrever()
rafaelle.descrever()
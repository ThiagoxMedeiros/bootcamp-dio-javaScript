// 4) Crie uma classe para representar carro.
// os carros possuem uma marca, uma cor e um gasto médio de combustivel por km rodado.
//Crie um método que dado a quantidade de km e o preço do combustivel, nos dê o valor gasto em reais para realizar este percurso:
//--------------------------------------------------------------------------------------//
//Criando a classe do objeto//
class carro{
  nome;
  marca;
  cor;
  litroPorKm;
  //----------------------------------------------------------------------//
  //Criando o construtor e dizendo os atributos obrigatórios do meu Objeto//
  constructor(nome, marca, cor, litroPorKm){
    this.nome = nome;
    this.marca = marca;
    this.cor = cor;
    this.litroPorKm = litroPorKm;  
  }
    //---------------------------//
    //Criando o metodo do objeto//
  calcularGastoPercurso(distanciaEmKm, precoCombustivel){
    return (distanciaEmKm*this.litroPorKm)*precoCombustivel;
  }

  
}



const civic = new carro('civic', 'honda', 'preto', 1/10);
console.log(civic);
            //-----------------------------------------//
            // chamando o metodo passando os parametros//
console.log(`O valor total do percurso com o ${civic.nome} é R$ ${civic.calcularGastoPercurso(100, 5).toFixed(2)}`)

const opala = new carro('opala', 'chevrolet','preto', 1/2);
console.log(`O valor total do percurso com o ${opala.nome} é R$ ${opala.calcularGastoPercurso(70, 5).toFixed(2)}`)


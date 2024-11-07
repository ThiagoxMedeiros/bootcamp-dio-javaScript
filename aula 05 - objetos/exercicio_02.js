// 2) Crie uma classe para representar pessoa. 
// Para cada pessoa teremos os atributos NamedNodeMap, peso e altura. 
// As pessoa devem ter a capacidade de dizer o valor do seu IMC ( IMC = peso/ (altura*altura));
// Instacie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça par aJosé dizer o valor do seu IMC
//----------------------------------------------------------------------------------------//
//Criando o Objeto Pessoa para classificar as pessoas com base em seus atributos em comum //
class Pessoa {
  nome;
  pesoEmKg;
  alturaEmMetros;
  //-------------------------------------------------------------------------------//
  //Construtor para obrigar a todas as instancias de Pessoa a terem esses atributos//
  constructor(nome,pesoEmKg,alturaEmMetros){
    this.nome =  nome
    this.pesoEmKg = pesoEmKg
    this.alturaEmMetros = alturaEmMetros
  }
  //--------------------------------------------------//  
  //metodo para calcular o IMC //
  calcularImc(pesoEmKg,alturaEmMetros){
    return  this.pesoEmKg/(this.alturaEmMetros*this.alturaEmMetros);
  }
  //--------------------------------------------------//
  //metodo para classificar IMC//
  classifcarImc(pesoEmKg,alturaEmMetros){
    const imc = this.calcularImc();

    switch(true){
      case(imc < 18.5 ):
      return `Seu IMC é ${imc.toFixed(2)}, vc está abaixo do peso!`;
      break;
      case (imc >= 18.5 && imc < 25):
        return `Seu IMC é ${imc.toFixed(2)}, vc está no peso!`;
        break;
      case (imc >= 25 && imc < 30):
        return `Seu IMC é ${imc.toFixed(2)}, vc está acima do peso!`;
        break;
      case (imc >= 30 && imc < 40):
        return `Seu IMC é ${imc.toFixed(2)}, vc está obeso!`;
        break;
      case (imc >= 40):
        return `Seu IMC é ${imc.toFixed(2)}, vc está com Obesidade Grave!`;
        break;
      default:
        return `Por favor, digite um valor válido par apeso e altura de acordo com as medidas!`;
        break
    }
  }
}
//--------------------------------------//
//instanciando um objeto da classe de pessoa//
const jose = new Pessoa('jose',70, 1.75)

console.log(jose)
console.log(jose.calcularImc())
console.log(jose.classifcarImc())


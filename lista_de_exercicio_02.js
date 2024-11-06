/*O IMC - Indice de massa corporal é um critério  da organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura*altura)

Elabore um programa que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adlutos condição:
-Abaixo de 18.5 = Abaixo do peso;
-Entre 18.5 e 25 = Peso normal;
Entre 25 e 30 = Acima do peso;
-Entre 30 e 40 = Obeso;
-Acima de 40 = Obesidade Grave;
*/
 const alturaEmMetros = 1.49;
 let pesoEmKg = 60;

 imc = pesoEmKg / (alturaEmMetros*alturaEmMetros);

 //Criando estrutura de decisão com If Else
/*if(imc < 18.5 ){
  console.log(`Seu IMC é ${imc.toFixed(2)}, vc está abaixo do peso!`);
}else if(imc >= 18.5 && imc < 25){
  console.log(`Seu IMC é ${imc.toFixed(2)}, vc está no peso!`); 
}else if(imc >= 25 && imc < 30){
  console.log(`Seu IMC é ${imc.toFixed(2)}, vc está acima do peso!`);
}else if(imc >= 30 && imc < 40){
  console.log(`Seu IMC é ${imc.toFixed(2)}, vc está obeso!`);
}else{
  console.log(`Seu IMC é ${imc.toFixed(2)}, vc está com Obesidade Grave!`);
}*/

//Fazendo a estrutura de decisão com Switch
switch(true){
  case(imc < 18.5 ):
  console.log(`Seu IMC é ${imc.toFixed(2)}, vc está abaixo do peso!`);
  break;
  case (imc >= 18.5 && imc < 25):
    console.log(`Seu IMC é ${imc.toFixed(2)}, vc está no peso!`); 
    break;
  case (imc >= 25 && imc < 30):
    console.log(`Seu IMC é ${imc.toFixed(2)}, vc está acima do peso!`);
    break;
  case (imc >= 30 && imc < 40):
    console.log(`Seu IMC é ${imc.toFixed(2)}, vc está obeso!`);
    break;
  case (imc >= 40):
    console.log(`Seu IMC é ${imc.toFixed(2)}, vc está com Obesidade Grave!`);
    break;
  default:
    console.log(`Por favor, digite um valor válido par apeso e altura de acordo com as medidas!`)
}
/*
1) Faça um algoritimo que dado as 3 notas tiradas por um aluni em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

- média = ( nota1 + nota 2 + nota 3) / 3;

Classificação:
-Média menor que 5, reprovação;
-Média mentre 5 e 7, recuperação;
-Média maior que 7, passou de semestre;
*/

nota1 = 5;
nota2 = 3;
nota3 = 10;
mediaNotas = (nota1+nota2+nota3) / 3;

//Criando estrutura de decisão com IF
/*if(mediaNotas >= 0 && mediaNotas <5){
  console.log(`O aluno está reprovado!`)
}else if(mediaNotas >= 5 && mediaNotas < 7){
  console.log(`O aluno irá fazer a PF!`)
}else{
  console.log(`O aluno está aprovado!`)
}
*/

//Criando estrutura de decisão com Switch

switch(true){
  case (mediaNotas >= 0 && mediaNotas <5):
    console.log(`A média do aluno foi ${mediaNotas.toFixed(2)}! O aluno está reprovado!`);
    break
  case (mediaNotas >= 5 && mediaNotas < 7):
    console.log(` A média do aluno foi ${mediaNotas.toFixed(2)}! O aluno irá fazer a PF!`);
    break
  default:
    console.log(`A média do aluno foi ${mediaNotas.toFixed(2)}! O aluno está aprovado!`)
    break
}
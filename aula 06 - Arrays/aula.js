// const alunos = ['Thalia','Thiago', 'Rafaelle']
// //Adiciona um elemento ao vetor na ultima posição ( criando uma nova ) ou escolhendo a posição e trocando os elementos //
// alunos.push('Beth');
// alunos[4] = 'Marcelo';
// console.log(alunos);

// //retira o ultimo elemento do Vetor//
// alunos.pop();
// console.log(alunos);
// //Retira o primeiro Elemento do Vetor//
// alunos.shift();
// console.log(alunos);

const notas = [];
notas.push(7);
notas.push(7);
soma = 0;


for (let i = 0; i < notas.length; i++){
  const nota = notas[i];
  soma = soma + nota;
}

console.log(soma);
let media = soma/notas.length;
console.log(media);
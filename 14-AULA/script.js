// /*//Criação do array
// var array = ["Largartixa",5,"dois",8.7,true];

// //Mostra todo o array
// console.log(array);

// //Mostra o valor de posição especifíca do array
// console.log(array[0]);

// //Substitui um valor
// array[2] = "Outro valor"
// console.log(array);


// //laço de repetição para interagir com o array
// var times = ["Kabum","Pain","SKT-T1","Red"]


// for (let index = 0; index < times.length; index++) {
//     console.log(times[index]);
    
// }

// console.log("----------------------------");


// for(var index in times){
//     console.log(times[index]);
    
// }

// //Manipulação de arrays
// console.log("----------------------------");

// var frutas = ["maçã","uva","pêra"];

// console.log(frutas);

// //push adiciona um item no array
// frutas.push("Laranja");
// console.log(frutas);


// //pop - retira o último valor e o retorna
// var fruta_tirada = frutas.pop();
// console.log(frutas);
// console.log("Fruta tirada:",fruta_tirada);

// // shift - retira o primeiro valor e o retorna
// var exPrimeiraFruta = frutas.shift();
// console.log("Ex:",exPrimeiraFruta);

// //unshift - adiciona no inicio do array
// frutas.unshift("Tomate")
// console.log(frutas);*/

// var alunos = [];
// var notasA = [];
// var notasB = [];

// function cadastro(){
//     for(var i = 0 ; i < 3; i++){
//        alunos[i]=prompt("digite um nome:")
//        notasA[i] = prompt("Digite a primeira nota: ")
//        notasB[i] = prompt("Digite a segunda nota: ")
//     }
// }




// //Função pra cálculo de média
// function calcularMedia(nota1, nota2){
//     let mediaFinal = ((nota1 * 0.4) + (nota2 * 0.6));
//     return mediaFinal;
// }
// // Verificar situação
// function situacao(media){
//     if(media >= 7){
//         return "Aprovado"
//     }
//     else if(media >= 5){
//         return "Em recuperação"
//     }
//     else{
//         return "Reprovado"
//     }

// }

// //Mostrar o resultado
// function mostrarResultados() {
//     for(var i in alunos){
//         let notaPrim = notasA[i];
//         let notaSeg = notasB[i];
//         let mediaAtual = calcularMedia(notasA[i],notasB[i]);       
//         // let mediaAtual = calcularMedia(notaPrim[i],notaSeg[i]);
//         let situacaoAtual = situacao(mediaAtual);

//         console.log(`O aluno ${alunos[i]} teve média de ${mediaAtual}.`)
//         console.log(`Sua situação então é: ${situacaoAtual}`);
//         console.log("------------------------------------------------");
        

//     }
// }

// cadastro();
// mostrarResultados();


// console.log(alunos);
// console.log(notasA);
// console.log(notasB);

//Atividade sim

console.log("-----Splice com 1 paramêtro------");

var meses = ["Janeiro","Fevereiro","Domingo","Segunda"];
var dias = meses.splice(2);

console.log(dias);
console.log(meses);

console.log("-----Splice com 2 paramêtros------");


var meses2 = ["Janeiro","Fevereiro","Domingo","Segunda"];
var dias2 = meses2.splice(2,3);

console.log(dias2);
console.log(meses2);











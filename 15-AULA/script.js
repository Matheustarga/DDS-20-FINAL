var alunos = ["Pedro","Tiago","Barquinho"];

var media = [7,8,4];

console.log("O aluno ", alunos[1],"teve média de",media[1]);

//criando um objeto
var aluno1 = {
    //chave:"valor",
    nome:"Pedro",
    media: 7
};

var aluno2 = {
    nome:"Tiago",
    media: 8
};

//Acessar todo o objeto
console.log(aluno1);
//Acessar uma propriedade daquele objeto
console.log(aluno1.nome);
console.log(aluno1.media);

var professor = {
    idade: 35,
    nome: "Edvaldo",
    disciplina:"Lógica",
    dia_da_aula:"Quarta-feira" 
};
console.log("A disciplina de", professor.disciplina,"tem aula na:",professor.dia_da_aula,"com o professor ",professor.nome);
//Acessando um valor específico de um objeto passando uma chave como referencia
console.log("Idade",professor["idade"]);

//Criando um objeto vazio
var garrafa = {};
//Adicionando um propriedade em um objeto já existente
garrafa.cor = "Azul";
garrafa.tamanho = "1 Litro";
garrafa.preco = 600;
garrafa["marca"] = "StaNey";

console.log(garrafa);
//Alterar uma propriedade já existente
garrafa.cor = "Roxo";
garrafa["marca"] = "Topoué";
console.log(garrafa);

//peça ao usuário, uma nova propriedade e um novo valor
// para ser adicionado na garrafa

// var tipo = prompt("Informe o tipo que deseja alterar:");
// var propriedade = prompt("Informe o novo valor:");
// garrafa[tipo] = propriedade ;
// console.log(garrafa);

//Criar método

var animal1 = {
    nome : "Tom",
    especie : "Gato",
    raca : "Nike",
    andar : function(){
        console.log("Estou andando, acredite!");
        
    },
    fala : function(){
        console.log("MIAAAAAAAUUUUUUUUUUUU");
        
    }
}
animal1.fala();

// console - terminal do navegador
console.log(console);

//Window - Janela do navegador
// window.alert("não");
// alert("sim");

//Documnet = DOM ou seu código html inteiro
console.log(document);
console.log(document.head);
console.log(document.body);

//Acessar elementos do body

//Pega elementos pela tag
var titulos = document.getElementsByTagName("h1");
console.log(titulos);
//Pego elementos pela class
var paragrafos = document.getElementsByClassName("para");
console.log(paragrafos);
//pega elemento pelo id
var especifico = document.getElementById("p3");
console.log(especifico);
//Modificando propriedades de algum elemento
//pego por id
especifico.style.backgroundColor = "blue"
especifico.style.color = "yellow";

//pego por class
paragrafos[0].style.backgroundColor = "pink";

//pego por tag
titulos[2].style.backgroundColor = "Orange";
titulos[0].style.fontSize ="100px";

function cliquei() {
    console.log("EU FALEI PRA VOCÊ NÃO CLICAR");
    alert("VOCÊ É GAY?? 🤨")
    
}
var x = 1;
function coisarTitulo() {    
    if(x == 1){
        for (let i = 0; i<titulos.length;i++) {
            titulos[i].style.color = "green";
            titulos[i].style.fontSize = "100px"
            x++
        }        
    }
    else if (x!=1){
        for (let i = 0; i<titulos.length;i++) {
            titulos[i].style.color = "black";
            titulos[i].style.fontSize = "20px"
            x--
        }  
    }
    
}
function quemFoi(elemento) {
    console.log(elemento);
    
}


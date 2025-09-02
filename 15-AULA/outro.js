function opcoes() {
    
    /*let tmhs = "";
    for(var i in this.tamanhos){
        tmhs += this.tamanhos[i] + ",";
    }
    console.log("As opções são:",tmhs);*/
    console.log("As opções são:",this.tamanhos.join(","));
    
    
}



var produto1 = {
    nome:"coca-cola",
    categoria: "Bebidas",
    quantidade: 30,
    tamanhos: ["200ml","Lata","600ml","2L"],
    //criação de um método interno
    descricao: function(){
        //uso o this como referencial
        console.log("O produto", this.nome,"é da categoria", this.categoria, "e tem", this.quantidade);
        this.opcoes()
    },
    //Criação de um método externo
    verTamanhos:opcoes
}



var produto2 = {
    nome:"Salgado",
    categoria: "Comida",
    quantidade: 10,
    tamanhos: ["Pequeno","Médio","Grande","Gigante-plus-size-premium"],
    descricao: function(){
        console.log("O produto", this.nome,"é da categoria", this.categoria);
        
    },
    //Criação de um método externo
    verTamanhos:opcoes
}
function addItens() {
    for(let i in tamanhos)
    this.tamanhos[i] = prompt("Informe o tamanho do item:")
}


var produto3 = {
    nome:prompt("Informe o nome do produto:"),
    categoria: prompt("Categoria do produto: "),
    quantidade: prompt("Quantidade do produto"),
    tamanhos: prompt("Informe os tamanhos:(separados por vírgulas)").split(","),
    descricao: function(){
        console.log("O produto", this.nome,"é da categoria", this.categoria);
        
    },
    //Criação de um método externo
    verTamanhos:opcoes 
}

produto3.descricao();
produto3.verTamanhos();

// produto1.descricao();
// produto1.verTamanhos();

// produto2.descricao();
// produto2.verTamanhos();
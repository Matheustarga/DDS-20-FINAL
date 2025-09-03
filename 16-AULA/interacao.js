function troca(elementoQueChamou) {
        // console.log(elementoQueChamou);
        let textoNovo = elementoQueChamou.value
        let textoAntigo = document.getElementById("textoTroca");

        textoAntigo.innerText = textoNovo;   
}

function trocaAgora(elementoQueChamou2) {
        let textoNovo = elementoQueChamou2.value
        let textoAntigo = document.getElementById("textoTrocaAgora");

        textoAntigo.innerHTML = textoNovo;   
}

function viraVerde(elemento) {
    elemento.style.color = "Green";
    elemento.style.fontSize = "50px";

}

function viraAzul(elemento) {
    elemento.style.color = "Blue";
    elemento.style.fontSize = "10px";   
     
}

function recurso(params) {
    document
}






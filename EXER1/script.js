function escreva(){
    var nome = document.getElementById("nome").value

    console.log(typeof nome)

    var printNome = document.getElementById("printNome")

    printNome.textContent = nome
    printNome.style.color = "white"

}

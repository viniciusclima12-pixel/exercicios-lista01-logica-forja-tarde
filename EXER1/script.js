function escreva(){
    var nome = document.getElementById("nome").value

    console.log(typeof nome)

    var a = document.getElementById("printNome")

    a.textContent = nome
    a.style.color = "white"
}
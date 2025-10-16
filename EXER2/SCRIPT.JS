function escreva() {
    var idade = (document.getElementById("idade").value)
    var resultado = document.getElementById("printIdade")

  
    if (idade <18) {
        resultado.textContent = "Você é menor de idade."
    } else {
        resultado.textContent = "Você é maior de idade."
    }
}

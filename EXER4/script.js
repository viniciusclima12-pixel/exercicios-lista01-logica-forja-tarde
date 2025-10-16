function calcular() {
  var lado = parseFloat(document.getElementById("l").value)
  var resultado = document.getElementById("resultado")

  

  var area = lado * lado
  resultado.textContent = "A área do quadrado é: " + area
 

}
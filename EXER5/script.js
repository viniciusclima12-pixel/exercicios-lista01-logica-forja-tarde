function escreva() {
  var nome = document.getElementById("nome").value
  var descricao = document.getElementById("descricao").value
  var idade = document.getElementById("idade").value
  var genero = document.getElementById("genero").value
  var hobby = document.getElementById("hobby").value

  var a = document.getElementById("printNome")
  var b = document.getElementById("printDescricao")
  var c = document.getElementById("printIdade")
  var d = document.getElementById("printGenero")
  var e = document.getElementById("printHobby")

  a.textContent = nome
  b.textContent = descricao
  c.textContent = idade
  d.textContent = genero
  e.textContent = hobby 


  console.log(nome, descricao, idade, genero, hobby)
}

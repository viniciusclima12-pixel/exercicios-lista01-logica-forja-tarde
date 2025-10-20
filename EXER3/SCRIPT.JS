function media() {
  var nota1 = (document.getElementById("m1").value)
  var nota2 = (document.getElementById("m2").value)
  var nota3 = (document.getElementById("m3").value)
  var nota4 = (document.getElementById("m4").value)
  var nota5 = (document.getElementById("m5").value)

  var media = document.getElementById("resposta")
  var totalMEDIA = (nota1, nota2, nota3, nota4, nota4) /5

  if(totalMEDIA >=7){
    media.textContent = totalMEDIA.toFixed(2) + " - " + "PASSOU DE ANO"
    media.style.color = "green"
    
 
  }else{
    media.textContent = totalMEDIA.toFixed(2) + " - " + "REPROVOU DE ANO"
    media.style.color = "red"
  }


}

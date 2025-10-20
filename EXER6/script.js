function calcular() {
    var n1 = parseFloat(document.getElementById("num1").value)
    var n2 = parseFloat(document.getElementById("num2").value)

    var soma = n1 + n2;
    var resultadoCalc = soma - 5

    var resultado= document.getElementById("resultado")
    resultado.textContent = "O resultado = " + resultadoCalc

    console.log(resultadoCalc);
}

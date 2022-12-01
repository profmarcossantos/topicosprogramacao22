// código em JS 
function media() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    var media = (n1 + n2) / 2
    document.getElementById("display").innerHTML = media

    if (media >= 7) {
        document.getElementById("situacao").innerHTML = "<b>Aprovado</b>"
    } else if (media >= 4) {
        document.getElementById("situacao").innerHTML = "Exame"
    } else {
        document.getElementById("situacao").innerHTML = "Reprovado"
    }

}
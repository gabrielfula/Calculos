var sinal = document.getElementById('sinal');

function somar() {
    let n1 = parseInt(document.getElementById("v1").value);
    let n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resultado Final: " + (n1 + n2);
    sinal.innerText = " + "
}


function divisao() {
    let n1 = parseInt(document.getElementById("v1").value)
    let n2 = parseInt(document.getElementById("v2").value)
    document.getElementById("res").innerHTML = "Resultado Final: " + (n1 / n2)
    sinal.innerText = " / "
}

function subtrair() {
    let n1 = parseInt(document.getElementById("v1").value)
    let n2 = parseInt(document.getElementById("v2").value)
    document.getElementById("res").innerHTML = "Resultado Final: " + (n1 - n2)
    sinal.innerText = " - "
}


function multiplicar() {
    let n1 = parseInt(document.getElementById("v1").value)
    let n2 = parseInt(document.getElementById("v2").value)
    document.getElementById("res").innerHTML = "Resultado Final: " + (n1 * n2)
    sinal.innerText = " * "
}

function LimparForm() {
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    sinal.innerText = ""
}
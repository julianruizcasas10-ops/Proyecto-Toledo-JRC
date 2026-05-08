function dolares() {
    let pesos = parseFloat(document.getElementById("pesos").value);
    let tipo = parseFloat(document.getElementById("tipo").value);
    const result = pesos / tipo;
    document.getElementById("result").textContent ="Dólares: " + result.toFixed(2);
};
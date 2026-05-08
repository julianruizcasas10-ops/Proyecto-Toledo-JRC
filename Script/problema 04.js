function estacionamiento() {
    let horas = Math.ceil(parseFloat(document.getElementById("horas").value));
    let tarifa = parseFloat(document.getElementById("tarifa").value);
    const result = horas * tarifa;
    document.getElementById("result").textContent = "Total: $" + result;
};
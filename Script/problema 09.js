function llamada() {
    let min = parseFloat(document.getElementById("min").value);
    let costo = parseFloat(document.getElementById("costo").value);
    const result = min * costo;
    document.getElementById("result").textContent = "Total: $" + result;
};
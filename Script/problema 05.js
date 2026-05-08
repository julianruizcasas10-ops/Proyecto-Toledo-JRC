function pintura() {
    let m2 = parseFloat(document.getElementById("m2").value);
    let costo = parseFloat(document.getElementById("costo").value);
    const result = m2 * costo;
    document.getElementById("result").textContent = "Total: $" + result;
};
function Agua() {
    let metros = parseFloat(document.getElementById("metros").value);
    let costo = parseFloat(document.getElementById("costo").value);
    const result = metros * costo;
    document.getElementById("result").textContent = "Total: $" + result;
};
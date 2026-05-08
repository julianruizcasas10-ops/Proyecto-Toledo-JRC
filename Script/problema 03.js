function edad() {
    let nacimiento = parseInt(document.getElementById("anio").value);
    let actual = new Date().getFullYear();
    const result = actual - nacimiento;
    document.getElementById("result").textContent = "Edad: " + result;
}
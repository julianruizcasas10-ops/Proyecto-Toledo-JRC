function triangulo() {
    let b = parseFloat(document.getElementById("b").value);
    let h = parseFloat(document.getElementById("h").value);
    const result = b * h / 2;
    document.getElementById("result").textContent = "Área: " + result;
};
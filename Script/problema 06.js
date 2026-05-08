function hipotenusa() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    const result = Math.sqrt(a*a + b*b);
    document.getElementById("result").textContent = "Hipotenusa: " + result;
};
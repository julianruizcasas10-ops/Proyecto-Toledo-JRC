function bicicleta() {
    let distancia = parseFloat(document.getElementById("dist").value);
    let velocidad = parseFloat(document.getElementById("vel").value);
    const result = distancia / velocidad;
    document.getElementById("result").textContent = "Tiempo: " + result + " hrs";
};
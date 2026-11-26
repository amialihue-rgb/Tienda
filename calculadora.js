
// Aplicar estilos a la calculadora
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "linear-gradient(135deg, #7c739e, #162186)";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.color = "white";

// Título
let titulo = document.querySelector("h1");
titulo.style.color = "#1a0a36";
titulo.style.marginBottom = "25px";

// Inputs
let inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.style.padding = "12px";
    input.style.width = "220px";
    input.style.border = "2px solid #825ca1";
    input.style.borderRadius = "8px";
    input.style.fontSize = "16px";
    input.style.outline = "none";
});

// Párrafos
document.querySelectorAll("p").forEach(p => {
    p.style.fontSize = "16px";
    p.style.margin = "10px";
});

// Botones
let botones = document.querySelectorAll("button");

botones.forEach(boton => {
    boton.style.padding = "12px 25px";
    boton.style.margin = "15px 5px";
    boton.style.backgroundColor = "#53308d";
    boton.style.color = "white";
    boton.style.border = "none";
    boton.style.borderRadius = "8px";
    boton.style.fontSize = "16px";
    boton.style.fontWeight = "bold";
    boton.style.cursor = "pointer";
});

// Resultado
let resultado = document.getElementById("resultado");
resultado.style.fontSize = "22px";
resultado.style.color = "#070836";
resultado.style.fontWeight = "bold";
resultado.style.marginTop = "20px";

// Función sumar
function sumar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    resultado.innerHTML = "Resultado: " + (numero1 + numero2);
}

// Función restar
function restar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    resultado.innerHTML = "Resultado: " + (numero1 - numero2);
}

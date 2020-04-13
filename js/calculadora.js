const pantalla = document.getElementById("resultado");
const operaciones = [
    ["suma", "+"],
    ["resta", "-"],
    ["porcentaje", "%"],
    ["producto", "x"],
    ["raiz", "√"],
    ["divicion", "/"]
];

for (let i = 0; i < 10; i++) {
    document.getElementById("numero" + i).addEventListener("click", function() {
        pantalla.innerHTML += i;
    });
}

for (let i = 0; i < operaciones.length; i++) {
    document.getElementById(operaciones[i][0]).addEventListener("click", function() {
        pantalla.innerHTML += operaciones[i][1];
    });
}
document.getElementById("res").addEventListener("click", igual);
document.getElementById("eliminar").addEventListener("click", eliminar);
document.getElementById("punto").addEventListener("click", punto);

function punto() {
    let operacionActual = document.getElementById("resultado").innerHTML;
    let operacionAgregada = document.getElementById("punto").innerHTML;
    document.getElementById("resultado").innerHTML = operacionActual + operacionAgregada;
}

//Realizar las operaciones
function igual() {
    let actual = pantalla.innerHTML;
    let suma = actual.indexOf("+");
    let resta = actual.indexOf("-");
    let porcentaje = actual.indexOf("%");
    let producto = actual.indexOf("x");
    let raiz = actual.indexOf("√");
    let divicion = actual.indexOf("/");
    let punto = actual.indexOf(".");
    let resultado = 0;

    function operacionTablero(operacion) {
        return actual.split(operacion, actual.length);
    }

    if (suma != -1) {
        contActual = operacionTablero("+");
        resultado = parseFloat(contActual[0]) + parseFloat(contActual[1]);
    } else if (resta != -1) {
        contActual = operacionTablero("-");
        resultado = parseFloat(contActual[0]) - parseFloat(contActual[1]);
    } else if (porcentaje != -1) {
        contActual = operacionTablero("%");
        resultado = Math.trunc((parseFloat(contActual[0]) % parseFloat(contActual[1])));
    } else if (producto != -1) {
        contActual = operacionTablero("x");
        resultado = parseFloat(contActual[0]) * parseFloat(contActual[1]);
    } else if (raiz != -1) {
        contActual = operacionTablero("√");
        resultado = Math.sqrt(actual[1]);
    } else if (divicion != -1) {
        contActual = operacionTablero("/")
        resultado = parseFloat(contActual[0]) / parseFloat(contActual[1]);
    }
    pantalla.innerHTML = resultado;
}

//eliminar ultimo caractér ingresado
function eliminar() {
    let actual = document.getElementById("resultado").innerHTML;
    let resultado = actual.slice(0, -1);
    pantalla.innerHTML = resultado;
}
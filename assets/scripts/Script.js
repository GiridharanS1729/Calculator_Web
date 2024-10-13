let otp = document.getElementById("otp");

let btNumerics = document.querySelectorAll(".numero");
btNumerics.forEach(function (button) {
    button.addEventListener("click", function () {

        if (otp.value === "0") {
            otp.value = ""
        }
        otp.value += button.innerText.trim();
    });
});

let btpon = document.querySelectorAll(".ponto");
btpon.forEach(function (bttt) {
    bttt.addEventListener("click", function () {

        if (otp.value.includes(".") && otp.value.includes("+-*÷")) {
            return;
        }
        otp.value += bttt.innerText.trim();
    });
});

let btope = document.querySelectorAll(".operando");
btope.forEach(function (bttt) {
    bttt.addEventListener("click", function () {

        if (otp.value === "0") {
            otp.value = ""
        }

        let ultica = otp.value.slice(-1);
        let ulticaEOperador = "+-x÷".includes(ultica);

        if (!ulticaEOperador) {
            otp.value += bttt.innerText.trim();
        }
        else {
            otp.value = otp.value.substring(0, otp.value.length - 1);
            otp.value += bttt.innerText.trim();
        }
    });
});

let limparotp = document.getElementById("botaoClean");
limparotp.addEventListener("click", limpar);

function limpar() {
    otp.value = "0"
};

let apagarNumero = document.getElementById("backspa");
apagarNumero.addEventListener("click", apagar);

function apagar() {
    otp.value = otp.value.substring(0, otp.value.length - 1);

    if (otp.value === "") {
        otp.value = "0"
    }
};

let calcularNumero = document.getElementById("btzeroo");
calcularNumero.addEventListener("click", calcular);

function calcular() {
    let otp = document.getElementById("otp").value;

    let novaString1 = otp.replace(/x/g, "*");
    let novaString2 = novaString1.replace(/÷/g, "/");
    let novaStringFinal = novaString2;

    try {
        let calcular = new Function('return ' + novaStringFinal);
        let resultado = calcular();
        document.getElementById("otp").value = resultado;

        let resultadoString = resultado.toString();

        if (resultadoString.length > 10) {
            let resultadoEmNumero = resultado
            let resultadoFormatado = resultadoEmNumero.toFixed(2);
            let resultadoFinal = document.getElementById("otp");
            resultadoFinal.value = resultadoFormatado
        }
    } catch (error) {
        let otp = document.getElementById("otp");
        otp.value = otp.value.substring(0, otp.value.length - 1);
        
        if (otp.value === "") {
            otp.value = "0"
        }
    }
};
"use strict";
exports.__esModule = true;
function a() {
    console.log('a');
}
exports.a = a;
// export class Validador {
var Validador = /** @class */ (function () {
    function Validador() {
    }
    Validador.soloLetras = function (dato) {
        // return dato.match(/[a-zA-Z]*/);
        return /^[a-zA-Z ]*$/.test(dato);
    };
    Validador.soloNumeros = function (dato) {
        return dato.match(/\d*/);
    };
    Validador.longitudMayor = function (dato, long) {
        return dato.length > long;
    };
    return Validador;
}());
exports["default"] = Validador;

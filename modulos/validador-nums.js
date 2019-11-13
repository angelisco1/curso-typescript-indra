"use strict";
exports.__esModule = true;
var Validador;
(function (Validador) {
    function soloNumeros(dato) {
        return /\d*/.test(dato);
    }
    Validador.soloNumeros = soloNumeros;
})(Validador = exports.Validador || (exports.Validador = {}));

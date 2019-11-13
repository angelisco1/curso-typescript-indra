"use strict";
exports.__esModule = true;
var Validador;
(function (Validador) {
    function soloLetras(dato) {
        // return dato.match(/[a-zA-Z]*/);
        return /^[a-zA-Z ]*$/.test(dato);
    }
    Validador.soloLetras = soloLetras;
    function longitudMayor(dato, long) {
        return dato.length > long;
    }
    Validador.longitudMayor = longitudMayor;
})(Validador = exports.Validador || (exports.Validador = {}));

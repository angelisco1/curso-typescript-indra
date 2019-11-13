var Validador;
(function (Validador) {
    function soloNumeros(dato) {
        return /\d*/.test(dato);
    }
    Validador.soloNumeros = soloNumeros;
})(Validador || (Validador = {}));

var Validador;
(function (Validador) {
    function a() {
        console.log('a');
    }
    function soloLetras(dato) {
        // return dato.match(/[a-zA-Z]*/);
        return /^[a-zA-Z ]*$/.test(dato);
    }
    Validador.soloLetras = soloLetras;
    function soloNumeros(dato) {
        return dato.match(/\d*/);
    }
    function longitudMayor(dato, long) {
        return dato.length > long;
    }
    // export { longitudMayor };
})(Validador || (Validador = {}));
console.log(Validador.soloLetras('oi34234'));

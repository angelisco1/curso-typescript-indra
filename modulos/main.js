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
})(Validador || (Validador = {}));
var Validador;
(function (Validador) {
    function soloNumeros(dato) {
        return /\d*/.test(dato);
    }
    Validador.soloNumeros = soloNumeros;
})(Validador || (Validador = {}));
// import { Validador } from "./validador";
// console.log(Validador.longitudMayor('hola mundo', 3));
// console.log(Validador.soloLetras('hola mundo'));
// console.log(Validador.soloLetras('h0la mund0'));
// import { Validador as Val } from "./validador";
// console.log(Val.longitudMayor('hola mundo', 3));
// console.log(Val.soloLetras('hola mundo'));
// console.log(Val.soloLetras('h0la mund0'));
// import * as Validaciones from "./validador";
// console.log(Validaciones.Validador.longitudMayor('hola mundo', 3));
// console.log(Validaciones.Validador.soloLetras('hola mundo'));
// console.log(Validaciones.Validador.soloLetras('h0la mund0'));
// Validaciones.a();
// import Validar, { a } from './validador';
// console.log(Validar.longitudMayor('hola mundo', 3));
// console.log(Validar.soloLetras('hola mundo'));
// console.log(Validar.soloLetras('h0la mund0'));
// a();
/// <reference path="./validador-letras.ts" />
/// <reference path="./validador-nums.ts" />
console.log(Validador.soloLetras('hola mundo'));
console.log(Validador.longitudMayor('hola mundo', 3));
console.log(Validador.soloLetras('h0la mund0'));
// namespace Validador {
//   function a() {
//     console.log('a');
//   }
//   export function soloLetras(dato: string) {
//     // return dato.match(/[a-zA-Z]*/);
//     return /^[a-zA-Z ]*$/.test(dato);
//   }
//   function soloNumeros(dato: string) {
//     return dato.match(/\d*/);
//   }
//   function longitudMayor(dato: string, long: number) {
//     return dato.length > long;
//   }
// export { longitudMayor };
// }
// console.log(Validador.soloLetras('oi34234'));
// export function a() {
//   console.log('a');
// }
// function b() {
//   console.log('b');
// }
// function c() {
//   console.log('c');
// }
// function d() {
//   console.log('d');
// }
// // export class Validador {
// export default class Validador {
//   static soloLetras(dato: string) {
//     // return dato.match(/[a-zA-Z]*/);
//     return /^[a-zA-Z ]*$/.test(dato);
//   }
//   static soloNumeros(dato: string) {
//     return dato.match(/\d*/);
//   }
//   static longitudMayor(dato: string, long: number) {
//     return dato.length > long;
//   }
// }
// export { b, c, d };

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

import Validar, { a } from './validador';
console.log(Validar.longitudMayor('hola mundo', 3));
console.log(Validar.soloLetras('hola mundo'));
console.log(Validar.soloLetras('h0la mund0'));
a();
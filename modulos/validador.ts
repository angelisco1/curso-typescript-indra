export function a() {
  console.log('a');
}
function b() {
  console.log('b');
}
function c() {
  console.log('c');
}
function d() {
  console.log('d');
}

// export class Validador {
export default class Validador {
  static soloLetras(dato: string) {
    // return dato.match(/[a-zA-Z]*/);
    return /^[a-zA-Z ]*$/.test(dato);
  }

  static soloNumeros(dato: string) {
    return dato.match(/\d*/);
  }

  static longitudMayor(dato: string, long: number) {
    return dato.length > long;
  }
}

export { b, c, d };
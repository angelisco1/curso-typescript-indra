namespace Validador {
  export function soloLetras(dato: string): boolean {
    // return dato.match(/[a-zA-Z]*/);
    return /^[a-zA-Z ]*$/.test(dato);
  }

  export function longitudMayor(dato: string, long: number): boolean {
    return dato.length > long;
  }
}
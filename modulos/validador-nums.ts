namespace Validador {
  export function soloNumeros(dato: string): boolean {
    return /\d*/.test(dato);
  }
}
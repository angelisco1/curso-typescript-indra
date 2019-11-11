// Funcion con params opcionales
function suma(n1: number, n2?: number): number {
  return n1 + (n2 || 0);
}

console.log(suma(1));
console.log(suma(1, 2));

// Funcion con valores por defecto para los params
function resta(n1: number, n2: number = 0): number {
  return n1 - n2;
}

console.log(resta(1));
console.log(resta(1, 2));

// Variable con tipo de función
let fn: (p1: string) => void;
fn = (nombre: string) => {
  console.log(nombre);
};


// Sobrecarga de funciones

function sumarCosas(n1: number, n2: number): number;
function sumarCosas(n1: string, n2: string): string;
function sumarCosas(n1: Array<any>, n2: Array<any>): Array<any>;

function sumarCosas(n1: number | string | Array<any>, n2: number | string | Array<any>): number | string | Array<any> {
  if (typeof(n1) == 'string' && typeof(n2) == 'string') {
    return n1 + n2;
  } else if (typeof(n1) == 'number' && typeof(n2) == 'number') {
    return n1 + n2;
  } else if (typeof(n1) == 'object' && typeof(n2) == 'object') {
    // return [].concat(n1, n2);
    return [...n1, ...n2];
  }
}

console.log(sumarCosas(1, 2))
console.log(sumarCosas('hola ', 'mundo'))
console.log(sumarCosas([1, 2], [3, 4]))
const numeros: Array<any> = [4, 5, 2, 7, 9];
const textos: Array<string> = ['a', 'n', 'r', 'x'];
const booleanos: Array<boolean> = [true, false, true, true];


function getItem<T>(listaItems: Array<T>): T {
  const pos = Math.floor(Math.random() * listaItems.length)
  return listaItems[pos];
}

let numRandom = getItem<number | string>(numeros);
let txtRandom = getItem<string>(textos);
console.log(numRandom, txtRandom);

// function transform<T, K>(elem: T): K {
//   return '' + elem;
// }

// console.log(typeof(transform<number, string>(2)));

class Inventario<T> {
  private items: Array<T>;
  constructor() {
    this.items = [];
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(pos: number): T {
    return this.items[pos];
  }
}
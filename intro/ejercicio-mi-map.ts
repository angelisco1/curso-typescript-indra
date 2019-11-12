// interface Tipo<T, K> {
//   [key: T]: K
// }

class MiMap<T, K> {
  constructor(private map: any = {}) { }
  // constructor(private map: Tipo<T, K> = {}) { }

  addValue(key: T, value: K): void {
    this.map[key] = value;
  }

  getValue(key: T): K {
    return this.map[key];
  }

  hasKey(key: T): boolean {
    return this.map[key] !== undefined;
  }

  clear(): void {
    this.map = {};
  }

  show(): void {
    for (let k in this.map) {
      console.log(`${k}: ${this.map[k]}`);
    }
  }
}

const map1 = new MiMap<string, number>();
map1.addValue('a', 1)
map1.addValue('b', 3)
map1.addValue('c', 5)
console.log(map1.getValue('b'))
console.log(map1.hasKey('z'))
console.log(map1.hasKey('a'))
map1.show();
map1.clear();
map1.show();

let i: number = 0;
// i = 'Hola mundo';
console.log(i);

let texto = 'Hola mundo';

let nombre;
nombre = 'Angel';
nombre = 3;

let numeros: Array<number> = [1, 2, 3, 4];

let numTelefono: [string, number, string] = ['+34', 666777222, 'Charly'];

let serie: {titulo: string, temporadas: number, finalizada: boolean, temporadasVistas: number, temporadasPorVer: Function, temporadasPorVer2: Function} = {
  titulo: 'Mayans MC',
  temporadas: 2,
  finalizada: false,
  temporadasVistas: 1,
  temporadasPorVer: function () {
    return this.temporadas - this.temporadasVistas;
  },
  temporadasPorVer2: () => {
    // console.log(this);
    return this.temporadas - this.temporadasVistas;
  }
};

console.log(serie.temporadasPorVer());
console.log(serie.temporadasPorVer2());
// En node no funciona el bind, call o apply (probarlo en el navegador)
serie.temporadasPorVer2 = serie.temporadasPorVer2.bind(serie);
console.log(serie.temporadasPorVer2());

// Ejercicio 1
let serieSoa: {titulo: string, temporadas: number, finalizada: boolean, temporadasVistas: number, temporadasPorVer: Function} = {
  titulo: 'Sons of Anarchy',
  temporadas: 10,
  finalizada: true,
  temporadasVistas: 10,
  temporadasPorVer: function () {
    return this.temporadas - this.temporadasVistas;
  }
};
let serieGangland: {titulo: string, temporadas: number, finalizada: boolean, temporadasVistas: number, temporadasPorVer: Function} = {
  titulo: 'Gangland Undercover',
  temporadas: 2,
  finalizada: true,
  temporadasVistas: 2,
  temporadasPorVer: function () {
    return this.temporadas - this.temporadasVistas;
  }
};

const series = [serie, serieSoa, serieGangland];

function seriesNoFinalizadas(series) {
  return series.filter((serie) => !serie.finalizada)
}

console.log(seriesNoFinalizadas(series));

// Union de tipos
let num: number | string;
num = 3;
num = '2';

// Definir tipos
type numOString = number | string;
let numMax: numOString = 3;

// Template literals
const coche = {
  marca: 'Seat',
  modelo: 'Ibiza'
};

console.log('Me he comprado un \n' + coche.marca + ' ' + coche.modelo);
console.log(`Me he comprado un ${coche.marca} ${coche.modelo}`);
console.log(`${false ? 'Me' : 'No me'} he comprado un ${coche.marca} ${coche.modelo}`);

console.log(`${false ? 'Me' : 'No me'} he comprado un
${coche.marca} ${coche.modelo}`);

for (let prop in coche) {
  console.log(prop);
}

for (let s of series) {
  console.log(s.titulo)
}

// Desestructuracion
// let marca = coche.marca;
// let modelo = coche.modelo;

let { marca:m, modelo } = coche;
console.log(m, modelo);

let [n1, n2, n3, n4] = numeros;
console.log(n1, n2, n3, n4);
let [m1, m2, ...restoNums] = numeros;
console.log(m1, m2);
console.log('Resto: ' + restoNums);

// Spread Operator
function getNumLoteria(n, ...nums) {
  console.log(nums);
}

getNumLoteria(1, 2, 3, 4, 4, 5, 6)

function getNumTelf(prefijo, numero, nombre) {
  console.log(nombre, prefijo, numero);
}

getNumTelf(...numTelefono);

const tesla = {...coche};
tesla.marca = 'Tesla'
tesla.modelo = 'Roadster'

const ford = Object.assign({}, coche);
ford.marca = 'Ford';
ford.modelo = 'Fiesta';

console.log(tesla);
console.log(coche);
console.log(ford);

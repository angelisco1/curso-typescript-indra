type Pelicula = {
  titulo: string,
  anioEstreno: number,
  estrenada: boolean,
  genero: number
}

type TipoFiltro = number | string | boolean;

const peliculas: Array<Pelicula> = [
  {
    titulo: 'Los mercenarios',
    anioEstreno: 2010,
    estrenada: true,
    genero: 2
  },
  {
    titulo: 'Creed',
    anioEstreno: 2018,
    estrenada: true,
    genero: 2
  },
  {
    titulo: 'Star Wars 9',
    anioEstreno: 2019,
    estrenada: false,
    genero: 1
  },
  {
    titulo: 'It 2',
    anioEstreno: 2018,
    estrenada: true,
    genero: 4
  },
]


function filtrarPeliculas(peliculas: Array<Pelicula>, titulo: string): Array<Pelicula>;
function filtrarPeliculas(peliculas: Array<Pelicula>, anioEstreno: number): Array<Pelicula>;
function filtrarPeliculas(peliculas: Array<Pelicula>, genero: number): Array<Pelicula>;
function filtrarPeliculas(peliculas: Array<Pelicula>, estrenada: boolean): Array<Pelicula>;

function filtrarPeliculas(peliculas: Array<Pelicula>, filtro: TipoFiltro): Array<Pelicula> {
  switch(typeof(filtro)) {
    case 'string':
      return peliculas.filter((pelicula) => pelicula.titulo.includes(filtro));
    case 'boolean':
      return peliculas.filter((pelicula) => pelicula.estrenada === filtro);
    case 'number':
      if (filtro > 999) {
        return peliculas.filter((pelicula) => pelicula.anioEstreno === filtro);
      } else {
        return peliculas.filter((pelicula) => pelicula.genero === filtro);
      }
    default:
      return peliculas;
  }
}

// console.log(filtrarPeliculas(peliculas, 'merce'));
// console.log(filtrarPeliculas(peliculas, 't'));
// console.log(filtrarPeliculas(peliculas, true));
// console.log(filtrarPeliculas(peliculas, false));
// console.log(filtrarPeliculas(peliculas, 2000));
// console.log(filtrarPeliculas(peliculas, 2018));
// console.log(filtrarPeliculas(peliculas, 4));

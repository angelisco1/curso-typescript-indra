interface Actor {
  nombre: string,
  apellidos: string
}

interface CosasQueSeVen {
  titulo: string,
  actores: Array<Actor>
}

interface Pelicula extends CosasQueSeVen {
  anioEstreno: number
}

interface Serie extends CosasQueSeVen {
  temporadas: number,
  episodios: number,
  episodiosVistos: number,
  serieVista: () => boolean
}

interface Serie {
  finalizada: boolean
}

const twd: Serie = {
  titulo: 'The Walking Dead',
  actores: [
    {nombre: '', apellidos: ''},
    {nombre: '', apellidos: ''}
  ],
  temporadas: 10,
  episodios: 100,
  episodiosVistos: 98,
  serieVista: function() {
    return this.episodios === this.episodiosVistos;
  },
  finalizada: false
}

interface Fn {
  (p: string): void
}

let f: Fn;
f = (p1: string) => {
  console.log(p1)
}

interface Vehiculo {
  pitar?: () => void,
  pintar: (nuevoColor: string) => void,
}

class Coche implements Vehiculo {
  pitar() {
    console.log('piiii');
  }

  pintar(color) {
    console.log('Nuevo color: ' + color);
  }
}

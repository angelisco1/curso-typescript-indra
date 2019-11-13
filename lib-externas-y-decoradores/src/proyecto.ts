// import { isLoggedIn, addFn, defaultValue } from './decoradores/auth-decorator.ts';
import { isLoggedIn } from './decoradores/auth-decorator.ts';

// interface IProyecto {
//   miFuncion: Function
// }

// @addFn
export default class Proyecto {

  // @defaultValue(8) numProyecto: number;

  constructor(private nombre: string, private descripcion: string) { }

  @isLoggedIn
  getInfo() {
    // this.miFuncion();
    return JSON.stringify({nombre: this.nombre, descripcion: this.descripcion}, null, 4);
  }
}

export const proyectos: Array<Proyecto> = [
  new Proyecto('Proyecto 1', 'Proyecto super secreto...'),
  new Proyecto('Proyecto 2', 'Proyecto bastante más secreto que los demás...'),
]
// console.log(proyectos[0].numProyecto);
class Mascota {
  static get numOjos(): number {
    return 2
  }
  static numPatas: number = 4;

  // public nombre: string;
  // public tipo: string;
  constructor(private _nombre: string, readonly tipo: string) {
    // this.nombre = nombre;
    // this.tipo = tipo;
  }

  get nombre(): string {
    console.log('Has llamado al getter de nombre')
    return this._nombre;
  }

  set nombre(nuevoNombre: string) {
    console.log('Has llamado al setter de nombre');
    this._nombre = nuevoNombre;
  }

  // get tipo(): string {
  //   return this._tipo;
  // }

  // set tipo(nuevoTipo: string) {
  //   this._tipo = nuevoTipo;
  // }

  hazSonido() {
    console.log(this.tipo === 'perro' ? 'Guau guau' : 'Miau miau')
  }
}

const perro = new Mascota('Rocki', 'perro');
console.log(perro.nombre);
perro.nombre = 'Roko';
const gato = new Mascota('Gardfield', 'gato');
gato.hazSonido();
console.log(gato.tipo);
gato.tipo = 'canario';

console.log(`Tiene ${Mascota.numOjos} ojos y ${Mascota.numPatas} patas...`);

class Persona {
  constructor(public nombre: string, public apellidos: string, protected dni: string) { }

  toString() {
    console.log(`
      Nombre: ${this.nombre}
      Apellidos: ${this.apellidos}`)
  }
}

abstract class Trabajador extends Persona {
  constructor(nombre: string, apellidos: string, dni: string) {
    super(nombre, apellidos, dni);
  }

  toString() {
      super.toString();
      // console.log(`Trabajo: ${this.trabajo}`);
  }

  abstract cualEsElTrabajo(): void;
}

class Infiltrado extends Trabajador {
  constructor(nombre: string, apellidos: string, dni: string) {
    super(nombre, apellidos, dni);
  }

  cualEsElTrabajo() {
    console.log('Soy infiltrado...')
  }
}

class Formador extends Trabajador {
  constructor(nombre: string, apellidos: string, dni: string) {
    super(nombre, apellidos, dni);
  }

  cualEsElTrabajo() {
    console.log('Soy formador...')
  }
}

const falco = new Infiltrado('Charly', 'Falco', '0000000T');
falco.toString();

const angel = new Formador('Angel', 'Villalba', '8943847Y');
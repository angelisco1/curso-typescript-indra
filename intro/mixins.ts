class Disponible {
  disponible: boolean;
  toggleDisponible() {
    this.disponible = !this.disponible;
  }
}

class HabitacionHotel {
  public disponible: boolean;
  constructor(private numeroHabitacion: number) {
    this.disponible = false;
  }
  toggleDisponible() {}
}

class SalaDeReunion {
  public disponible: boolean;
  constructor(private nombre: string) {
    this.disponible = false;
  }
}

function applyMixins(mixins: Array<any>, clase: any) {
  mixins.forEach(mixin => {
    Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
      clase.prototype[name] = mixin.prototype[name];
    })
  });
}

applyMixins([Disponible], HabitacionHotel);
// applyMixins([Volar, Nadar], Pato)
// applyMixins([Nadar], Pinguino)

const hh = new HabitacionHotel(23)
console.log(hh.disponible);
hh.toggleDisponible();
console.log(hh.disponible);

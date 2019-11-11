const equiposPares: Array<string> = ['Real Madrid', 'Valencia', 'Barcelona', 'Sevilla']
// 'Sevilla' vs 'Valencia'
// 'Real Madrid' vs 'Barcelona'

const equiposImpares: Array<string> = ['Real Madrid', 'Valencia', 'Barcelona', 'Sevilla', 'At Bilbao']
// 'Sevilla' vs 'Valencia'
// 'Real Madrid' vs 'Barcelona'
// 'At Bilbao' pasa a la siguiente fase


function shuffle([...equipos]) {
  const newEquipos: Array<string> = [];

  for (let i: number = equipos.length-1; i >= 0; i--) {
    const pos: number = Math.floor(Math.random() * equipos.length);
    const [equipo]: Array<string> = equipos.splice(pos, 1);
    newEquipos.push(equipo);
  }
  // console.log(newEquipos);
  return newEquipos;
}

console.log(shuffle(equiposImpares))
console.log(shuffle(equiposPares))

function getTeams(equipos) {
  // console.log(equipos)
  if (equipos.length < 2) {
    if (equipos.length === 1) {
      console.log(`El ${equipos[0]} pasa a la siguiente fase`);
    }
    console.log('Ya no hay más equipos');
  } else {
    const [equipo1, equipo2, ...restoEquipos] = equipos;
    console.log(`${equipo1} vs ${equipo2}`);
    getTeams(restoEquipos);
  }
}

console.log(getTeams(shuffle(equiposImpares)))
console.log(getTeams(shuffle(equiposPares)))

// ocultar('Un texto muy largo', [texto], '*') =>  'Un ***** muy largo'
// ocultar('Un texto muy largo', [texto], '-') =>  'Un $$$$$ muy largo'

String.prototype.repeat = function(n) {
  return this.repeat(n)
}

function ocultar(texto: string, palabras: Array<string>, caracter: string = '*'): string {

  palabras.forEach((palabra) => {
    const regexp = new RegExp(palabra, 'gi');
    texto = texto.replace(regexp, caracter.repeat(palabra.length));
  })
  return texto;
}

console.log(ocultar('Un texto muy largo', ['texto']));
console.log(ocultar('Un texto muy largo', ['texto'], '-'));

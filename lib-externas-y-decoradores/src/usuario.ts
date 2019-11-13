export default class Usuario {
  constructor(public username: string, public pass: string) { }
}

export const usuarios: Array<Usuario> = [
  new Usuario('falco', '1234'),
  new Usuario('koz', '1234')
]
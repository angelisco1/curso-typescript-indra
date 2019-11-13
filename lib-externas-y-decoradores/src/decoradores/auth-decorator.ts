import { getToken } from '../token.ts';

export function isLoggedIn(target: Object, key: string, descriptor: any) {
  // console.log('Pasa por el decorador')
  // console.log('Target:', target)
  // console.log('Key:', key)
  // console.log('Descriptor:', descriptor)
  const oldDescriptorValue = descriptor.value;
  const newDescriptor = function(...args: any) {
    if (getToken()) {
      const resultado = oldDescriptorValue.apply(this, args);
      console.log(resultado)
      return resultado;
    } else {
      // throw(new Error('No estas logueado'));
      return 'No tienes permisos'
    }
  }
  return {...descriptor, value: newDescriptor};
}

// export function addFn(target: Function) {
//   // console.log('Target:', target.prototype);
//   target.prototype.miFuncion = function(...args) {
//     alert('Esta es mi función');
//   }
// }

// export function defaultValue(initValue: any) {
//   return (target: Object, key: string) => {
//     target[key] = initValue;
//   }
// }
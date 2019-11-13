import * as AuthToken from './token.ts';
import Usuario, { usuarios } from './usuario.ts';
import Proyecto, { proyectos } from './proyecto.ts';

enum Pages { Login, Welcome };


export function setView(page: number = Pages.Login) {
  const contenedor: HTMLDivElement = document.querySelector('#contenedor');
  if (page === Pages.Login) {
    contenedor.innerHTML = getLoginPage();
    initListenersLogin();
  } else {
    contenedor.innerHTML = getWelcomePage();
    initListenersWelcome();
  }
}

function initListenersWelcome() {
  const btnLogout: HTMLButtonElement = document.querySelector('button');
  btnLogout.addEventListener('click', (event) => {
    AuthToken.removeToken();
    setView(Pages.Login);
  })
}

function initListenersLogin() {
  const btnLogin: HTMLButtonElement = document.querySelector('button');
  const inputUser: HTMLInputElement = document.querySelector('input#username');
  const inputPass: HTMLInputElement = document.querySelector('input#password');

  btnLogin.addEventListener('click', (event) => {
    const usuario = new Usuario(inputUser.value, inputPass.value);

    const usuarioBuscado = usuarios.find(u => {
      return u.username === usuario.username && u.pass === usuario.pass;
    })
    if (usuarioBuscado) {
      AuthToken.createToken();
      setView(Pages.Welcome);
    } else {
      // setView(Pages.Login);
      setView(Pages.Welcome);
    }
  });
}

function getLoginPage() {
  return `
    <form>
      <div>
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
      </div>
      <button type="button">Login</button>
    </form>
  `
}

function getWelcomePage() {
  const proyectosDivs = proyectos.map(p => {
    return `<pre>${p.getInfo()}</pre>`;
  }).join('');
  return `
    <h1>Bienvenido</h1>
    <button type="button">Logout</button>
    <div>${proyectosDivs}</div>
  `
}
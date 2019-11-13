function createToken(): string {
  const token = Math.random().toString().slice(2);
  sessionStorage.setItem('authtoken', token);
  return token;
}

function getToken(): string {
  return sessionStorage.getItem('authtoken');
}

function removeToken(): void {
  sessionStorage.removeItem('authtoken');
}

export { getToken, removeToken, createToken };
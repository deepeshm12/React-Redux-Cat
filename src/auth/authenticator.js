class Auth {
  static loggedIn() {
    debugger;
    return !!sessionStorage.jwt;
  }

  static logOut() {
    sessionStorage.removeItem('jwt');
  }
}

export default Auth;
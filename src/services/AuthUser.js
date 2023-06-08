class AuthUser {
  constructor() {
    if (localStorage.getItem("listOfUser") == null) {
      localStorage.setItem(
        "listOfUser",
        JSON.stringify([{ name: "admin", password: "admin" }])
      );
    }
  }

  addUser(name, password) {
    let newUser = { name: name, password: password };
    let listOfUser = JSON.parse(localStorage.get("listOfUser"));
    listOfUser = [...listOfUser, newUser];
    localStorage.setItem("listOfUser", JSON.stringify(listOfUser));
  }

  isSignedIn() {
    const auth = localStorage.getItem("auth");
    if (auth != null) {
      const authObj = JSON.parse(auth);
      return authObj.isSignedIn;
    } else {
      return false;
    }
  }

  getUser() {
    const auth = localStorage.getItem("auth");
    const authObj = JSON.parse(auth);
    return authObj.userLogged;
  }

  login(username, password) {
    let promise = new Promise((resolve, reject) => {
      let listOfUserObj = [];
      const listOfUser = localStorage.getItem("listOfUser");
      if (listOfUser) listOfUserObj = JSON.parse(listOfUser);

      const user = listOfUserObj.find(
        x => x.name === username && x.password === password
      );
      if (user) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            userLogged: user,
            isSignedIn: true
          })
        );
        resolve(user);
      } else {
        reject("Username or password wrong!");
      }
    });

    return promise;
  }

  logout(cb) {
    localStorage.removeItem("auth");
    cb();
  }
}

export default new AuthUser();

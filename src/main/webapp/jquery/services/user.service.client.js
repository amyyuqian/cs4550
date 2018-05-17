function AdminUserServiceClient() {
  this.createUser = createUser;
  this.findAllUsers = findAllUsers;
  this.findUserById = findUserById;
  this.deleteUser = deleteUser;
  this.updateUser = updateUser;
  this.register = register;
  this.findUserByUsername = findUserByUsername;
  this.login = login;
  this.updateProfile = updateProfile;
  this.logout = logout;
  this.getProfile = getProfile;
  this.url = 'http://localhost:8080/api/user';
  this.registerUrl = 'http://localhost:8080/api/register';
  this.loginUrl = 'http://localhost:8080/api/login';
  this.profileUrl = 'http://localhost:8080/api/profile';
  this.logoutUrl = 'http://localhost:8080/api/logout';
  var self = this;

  function register(user) {
    return fetch(self.registerUrl, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'content-type': 'application/json'
      },
      credentials: "same-origin",
    }).then(function (response) {
      if (response.status == 409) {
        return {error: "Username is already taken"};
      } else {
        return response.json();
      }
  })};

  function login(user) {
    return fetch(self.loginUrl, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      },
      credentials: "same-origin",
    }).then(function (response) {
      return response.json();
    })
  }
  
  function createUser(user) {
    return fetch(self.url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'content-type': 'application/json'
      }
    });
  }
  function findAllUsers() {
    return fetch(self.url)
            .then(function (response) {
                return response.json();
            });
  }
  function findUserById(userId) {
    return fetch(
      self.url + '/' + userId);
  }

  function findUserByUsername(username) {
    return fetch(self.url + "?username=" + username)
      .then(function (response) {
        if (response.status == 409) {
          return {error: "Username is already taken"};
        } else {
          return response.json();
        }
  })};

  function getProfile() {
    return fetch(self.profileUrl)
      .then(function(response) {
        return response.json();
      })
  }

  function updateUser(userId, user) {
    return fetch(self.url + '/' + userId, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  function updateProfile(user) {
    return fetch(self.profileUrl, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  function logout() {
    return fetch(self.logoutUrl), {
      method: 'POST'
    }
  }

  function deleteUser(userId) {
    return fetch(
      self.url + '/' + userId, {
        method: 'DELETE'
      }
    );
  }
}

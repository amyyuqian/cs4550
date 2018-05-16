(function () {
  var $usernameFld, $passwordFld;
  var $loginBtn;
  var userService = new AdminUserServiceClient();
  $(main);

  function main() {
    $usernameFld = $('#username');
    $passwordFld = $('#password'); 
    $loginBtn = $('#login-btn');

    $loginBtn.click(login);
  }
  function login() { 
    $('#invalid-cred').hide();

    var user = {
      username: $usernameFld.val(),
      password: $passwordFld.val(),
    }

    userService.login(user).then(redirectUser);
  }

  function redirectUser(response) {
    if (response.error) {
      $('#invalid-cred').html("Invalid credentials");
      $('#invalid-cred').show();
      return;
    } else {

    }
  }
})();

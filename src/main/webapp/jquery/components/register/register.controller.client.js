(function () {
  var $usernameFld, $passwordFld, $verifyPasswordFld;
  var $registerBtn;
  var userService = new UserService();
  $(main);

  function main() {
    $usernameFld = $('usernameFld').val();
    $passwordFld = $('passwordFld').val();
    $verifyPasswordFld = $('verifyPasswordFld').val();

    $registerBtn.click(register);
  }
  function register() {
    if ($passwordFld != $verifyPasswordFld) {
      $('#invalid-password').show();
    }

    var user = {
      username: $passwordFld,
      password: $passwordFld
    }

    userService.register(user);
  }
})();

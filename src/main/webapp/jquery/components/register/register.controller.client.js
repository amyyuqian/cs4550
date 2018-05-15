(function () {
  var $usernameFld, $passwordFld, $verifyPasswordFld;
  var $registerBtn;
  var userService = new AdminUserServiceClient();
  $(main);

  function main() {
    $usernameFld = $('#usernameFld')
    $passwordFld = $('#passwordFld')
    $verifyPasswordFld = $('#verifyPasswordFld')
    $registerBtn = $('#registerBtn');

    $registerBtn.click(register);
  }
  function register() {
    $('.invalid-feedback').hide();
    if ($passwordFld.val() != $verifyPasswordFld.val()) {
      $('.invalid-feedback').show();
    }

    var user = {
      username: $passwordFld.val(),
      password: $passwordFld.val()
    }

    userService.register(user);
  }
})();

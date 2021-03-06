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
    var username = $usernameFld.val();
    var password = $passwordFld.val();
    var verifiedPassword = $verifyPasswordFld.val();

    $('#invalid-password').hide();
    $('#invalid-username').hide();
    $('#invalid-verify').hide();

    if (username == null || username == "") {
      $('#invalid-username').html("Please enter a username");
      $('#invalid-username').show();
    }

    if (password == null || password == "") {
      $('#invalid-password').html("Please enter a password");
      $('#invalid-password').show();
    }

    if (verifiedPassword == null || verifiedPassword == "") {
      $('#invalid-verify').show();
    }

    if (username == null || username == ""
      || password == null || password == ""
      || verifiedPassword == null || verifiedPassword == "") {
        return;
      }

    if (password != verifiedPassword) {
      $('#invalid-password').html("Passwords do not match");
      $('#invalid-password').show();
      return;
    }

    var user = {
      username: $usernameFld.val(),
      password: $passwordFld.val()
    }

    userService.register(user).then(redirectUser);
  }

  function redirectUser(response) {
    if (response.error) {
      $('#invalid-username').html("Username already taken");
      $('#invalid-username').show();
    } else {
      window.location.href = '../profile/profile.template.client.html'
    }
  }
})();

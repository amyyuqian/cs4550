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
    var user = {
      username: $usernameFld.val(),
      password: $passwordFld.val(),
    }

    userService.login(user);
   }
})();

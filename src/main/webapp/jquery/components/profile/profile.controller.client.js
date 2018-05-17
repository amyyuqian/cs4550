(function () {
  var $phone, $email, $dob, $role; 
  var $updateBtn, $logoutBtn;
  var userService = new AdminUserServiceClient();
  $(main);

  function main() {
    $username = $('#username');
    $email = $('#email');
    $dob = $('#dob');
    $role = $('#role');

    $updateBtn = $('#updateBtn');
    $logoutBtn = $('$logoutBtn');

    $updateBtn.click(updateProfile);
    $logoutBtn.click(logout)
  }
  function updateProfile() {
    var userId = window.location;
    
    var user = {
      username: $username.val(),
      email: $email.val(),
      dateOfBirth: $dob.val(),
      role: $role.val(),
    }

    userService.update(user).then(showSuccess);
  }

  function logout() {
    userService.logout();
  }

  function showSuccess(response) {
    if (response.error) {
      $('#danger-alert').show();
    } else {
      $('#success-alert').show();
    }
  }
})();

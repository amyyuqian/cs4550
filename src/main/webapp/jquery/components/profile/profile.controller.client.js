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
    $logoutBtn.click(logout);

    userService.getProfile().then(populatFields);
  }

  function populateFields(response) {
    $('#username').val(response.username);
    $('#email').val(response.email);
    $('#dob').val(response.dateOfBirth);
    $('#role').val(response.role);
  }

  function updateProfile() {
    var user = {
      username: $username.val(),
      email: $email.val(),
      dateOfBirth: $dob.val(),
      role: $role.val(),
    }

    userService.updateProfile(user).then(showSuccess);
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

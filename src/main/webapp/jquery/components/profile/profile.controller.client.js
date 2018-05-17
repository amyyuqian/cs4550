(function () {
  var $phone, $email, $dob, $role; 
  var $updateBtn, $logoutBtn;
  var userService = new AdminUserServiceClient();
  $(main);

  function main() {
    $username = $('#username');
    $email = $('#email');
    $dob = $('#datepicker');
    $role = $('#role');

    $updateBtn = $('#updateBtn');
    $logoutBtn = $('#logoutBtn');

    $dob.datepicker({
      uiLibrary: 'bootstrap4'
    });

    $updateBtn.click(updateProfile);
    $logoutBtn.click(logout);

    userService.getProfile().then(populateFields);
  }

  function populateFields(response) {
    $('#username').val(response.username);
    $('#email').val(response.email);
    $('#dob').val(response.dateOfBirth);
    $('#role').val(response.role);
  }

  function updateProfile() {
    $('#danger-alert').hide();
    $('#success-alert').hide();

    var user = {
      username: $username.val(),
      email: $email.val(),
      dateOfBirth: $dob.val(),
      role: $role.val(),
    }

    userService.updateProfile(user).then(showAlerts);
  }

  function logout() {
    userService.logout();
    window.location.href = '../login/login.template.client.html'
  }

  function showAlerts(response) {
    if (response.error) {
      $('#danger-alert').show();
    } else {
      $('#success-alert').show();
    }
  }
})();

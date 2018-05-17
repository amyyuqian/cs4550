(function () {
  var $username, $phone, $email, $dob, $role; 
  var $updateBtn, $logoutBtn;
  var userService = new AdminUserServiceClient();
  $(main);

  function main() {
    $username = $('#username');
    $phone = $('#phone');
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
    $username.val(response.username);
    $phone.val(response.phone);
    $email.val(response.email);

    var d = response.dateOfBirth.split('-');
    var formattedDate = d[1] + '/' + d[2] + '/' + d[0];

    $dob.val(formattedDate);
    $role.val(response.role);
  }

  function updateProfile() {
    $('#danger-alert').hide();
    $('#success-alert').hide();

    var d = $dob.val().split('/');
    var formattedDate = d[2] + '-' + d[0] + '-' + d[1];

    var user = {
      username: $username.val(),
      phone: $phone.val(),
      email: $email.val(),
      dateOfBirth: formattedDate,
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
      userService.getProfile().then(populateFields);
    }
  }
})();

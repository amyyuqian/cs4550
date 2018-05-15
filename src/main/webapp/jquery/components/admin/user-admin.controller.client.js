(function () {
  var $usernameFld, $passwordFld;
  var $createBtn;
  var $firstNameFld, $lastNameFld, $roleFld;
  var $userRowTemplate, $tbody;
  var userService = new AdminUserServiceClient();
  $(main);

  function main() {
    $usernameFld = $('#usernameFld');
    $passwordFld = $('#passwordFld');
    $firstNameFld = $('#firstNameFld');
    $lastNameFld = $('#lastNameFld');
    $roleFld = $('#roleFld');
    $tbody = $('.wbdv-tbody');
    $userRowTemplate = $('.wbdv-template.wbdv-user').clone().removeClass('wbdv-hidden');

    $createBtn = $('.wbdv-create');
    $createBtn.click(createUser);
    $('#submit-edit-user').click(updateUser);

    findAllUsers();
   }

  function createUser() {
    var user = {
      username: $usernameFld.val(),
      password: $passwordFld.val(),
      firstName: $firstNameFld.val(),
      lastName: $lastNameFld.val(),
      role: $roleFld.val(),
    }
    userService.createUser(user).then(findAllUsers);
  }

  function findAllUsers() {
    userService.findAllUsers().then(renderUsers);
  }

  function findUserById() {
    var id = $('');
  }
  function deleteUser() {
    var deleteBtn = $(event.currentTarget);
    var userId = deleteBtn
        .parent()
        .attr('id');

    userService
        .deleteUser(userId)
        .then(findAllUsers);
  }
  function selectUser() {

  }
  function updateUser() {
    var userId = $('#edit-user-modal').attr('user-id');

    var user = {
      username: $('#editUsernameFld').val(),
      firstName: $('#editFirstNameFld').val(),
      lastName: $('#editLastNameFld').val(),
      role: $('#editRoleFld').val(),
    }

    userService.updateUser(userId, user).then(findAllUsers);


  }
  function renderUser(user) {

  }

  function renderUsers(users) {
    $tbody.empty();
    for (var u in users) {
      var user = users[u];
      var $row = $userRowTemplate.clone();
      $row.find('.wbdv-username').html(user.username);
      $row.find('.wbdv-password').html(user.password);
      $row.find('.wbdv-first-name').html(user.firstName);
      $row.find('.wbdv-last-name').html(user.lastName);
      $row.find('.wbdv-role').html(user.role);
      $row.attr('id', user.id);

      $row.find('.wbdv-remove').click(deleteUser);
      $row.find('.wbdv-edit').click(addUserIdToModal);
      $tbody.append($row);
    }
  }

  function addUserIdToModal() {
    var btn = $(event.currentTarget);
    var userId = btn.parent().attr('id');

    $('#edit-user-modal').attr('user-id', userId);
  }
})();
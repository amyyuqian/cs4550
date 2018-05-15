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

    findAllUsers();
   }

  function createUser() {
    var user = {
      username: $usernameFld.val(),
      password: $passwordFld.val(),
      firstName: $firstNameFld.val(),
      lastName: $lastNameFld.val(),
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
    console.log('fo');
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

  }
  function renderUser(user) {

  }

  function renderUsers(users) {
    $tbody.empty();
    for (var u in users) {
      var user = users[u];
      var $row = $userRowTemplate.clone();
      $row.find('.wbdv-username').html(user.username);
      $row.attr('id', user.id);

      $row.find('.wbdv-remove').click(deleteUser);
      $row.find('.wbdv-edit').click(updateUser);
      $tbody.append($row);
    }
  }
})();
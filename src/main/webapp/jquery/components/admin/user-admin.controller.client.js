(function () {
  var $usernameFld, $passwordFld;
  var $removeBtn, $editBtn, $createBtn;
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
    $editBtn = $('#wbdv-edit');
    $editBtn.click(updateUser);
    $removeBtn = $('#wbdv-remove');
    $removeBtn.click(deleteUser);

    findAllUsers();
   }

  function createUser() {
    console.log('foo');
    var user = {
      username: $usernameFld.val(),
      password: $passwordFld.val(),
      firstName: $firstNameFld.val(),
      lastName: $lastNameFld.val(),
      role: $roleFld.val(),
    }
    userService.createUser(user);
    findAllUsers();
  }

  function findAllUsers() {
    userService.findAllUsers().then(renderUsers);
  }

  function findUserById() {
    var id = $('');
  }
  function deleteUser() {

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
      $row.find('.wbdv-id').html(user.id);
      $tbody.append($row);
    }
  }
})();
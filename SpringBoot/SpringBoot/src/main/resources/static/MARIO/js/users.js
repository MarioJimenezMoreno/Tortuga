document.addEventListener("DOMContentLoaded", function () {
  loadUsers();
  document.querySelector('#users').DataTable();
  updateEmail();
});

async function loadUsers() {

  const request = await fetch('api/users', {
    method: 'GET',
    headers: getHeaders()
  });

  const users = await request.json();

  let listHtml = '';

  for (let user of users) {
    let deleteBtn = '<a href="#" onclick="deleteUser(' + user.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let phone = user.phone == null ? "-" : user.phone
    let userHtml = '<tr><td>' + user.id + '</td><td>' + user.username + '</td><td>' + user.password + '</td><td>' + user.email + '</td><td>' + phone + '</td><td>' + deleteBtn + '</td></tr>';
    listHtml += userHtml;
  }

  document.querySelector("#users tbody").outerHTML = user;
}

async function deleteUser(id) {

  if (!confirm('Delete user?')) {
    return;
  }

  const request = await fetch('api/users/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });

  location.reload();

}

function updateEmail() {
  document.querySelector("#user-email").outerHTML = localStorage.username;
}

function getHeaders() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.token
  }
}


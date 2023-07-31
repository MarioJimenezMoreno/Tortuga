// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarusers();
  $('#users').DataTable();
  actualizarEmailDelUser();
});

function actualizarEmailDelUser() {
    document.getElementById('txt-email-User').outerHTML = localStorage.email;
}


async function cargarusers() {
  const request = await fetch('api/users', {
    method: 'GET',
    headers: getHeaders()
  });
  const users = await request.json();


  let listadoHtml = '';
  for (let User of users) {
    let botonEliminar = '<a href="#" onclick="eliminarUser(' + User.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

    let telefonoTexto = User.telefono == null ? '-' : User.telefono;
    let UserHtml = '<tr><td>'+User.id+'</td><td>' + User.nombre + ' ' + User.apellido + '</td><td>'
                    + User.email+'</td><td>'+telefonoTexto
                    + '</td><td>' + botonEliminar + '</td></tr>';
    listadoHtml += UserHtml;
  }

document.querySelector('#users tbody').outerHTML = listadoHtml;

}

function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}

async function eliminarUser(id) {

  if (!confirm('¿Desea eliminar este User?')) {
    return;
  }

 const request = await fetch('api/users/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });

  location.reload()
}
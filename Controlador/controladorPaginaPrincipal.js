$(document).ready(function () { 
  cargarImagen();
});

function cargarImagen() {
  
  $.ajax({
    url: '../Modelo/mostrarImagen.php',
    type: 'POST',
    data: { snacks_stack: snacks_stack  },
    success: function (response) {
      alert('entraaaa')
      $('#image').html(response);
    }
  });
}

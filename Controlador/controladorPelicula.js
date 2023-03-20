import{validarFormulario} from '../Vista/js/validarPelicula.js';
$(document).ready(function() {
    $('#formulario').submit(function(e) {
        e.preventDefault();
        let res =validarFormulario()
        if(res){
            $.ajax({
                type: "POST",
                url: '../Modelo/insertarPelicula.php',
                data: $(this).serialize(),
                success: function(response)
                {
                    var jsonData = JSON.parse(response);
                    // user is logged in successfully in the back-end
                    // let's redirect
                    if (jsonData.success === true)
                    {
                        alert('Pelicula Ingresada');
                        $('#titulo').val('');
                        $('#sinopsis').val('');
                        $('#director').val('');
                        $('#duracion').val('');
                    }
                    else
                    {
                        alert('No se ingreso Pelicula');
                    }
                }
           });
        }
     });
});
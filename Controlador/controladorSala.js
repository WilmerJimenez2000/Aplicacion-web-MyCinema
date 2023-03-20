import{validarFormulario} from '../Vista/js/validarSala.js';
$(document).ready(function () {
    $('#formulario').submit(function (e) {
        e.preventDefault();
        let res=validarFormulario()
        if(res){
            $.ajax({
                type: "POST",
                url: '../Modelo/insertarSala.php',
                data: $(this).serialize(),
                success: function(response)
                {
                    var jsonData = JSON.parse(response);
                    if (jsonData.success === true)
                    {
                        alert('Sala ingreada con exito')
                        $('#Capacidad').val('');
                        $('#horaInicio').val('');
                        $('#horaFin').val('');
                    }
                    else
                    {
                        alert('No se ingreso sala')
                    }
                }
           });
        }
        else{
            alert("Campos no validos")
        }
    });
});

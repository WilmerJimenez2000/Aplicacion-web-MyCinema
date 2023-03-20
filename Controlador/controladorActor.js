import{validarFormulario} from '../Vista/js/validarActor.js';
$(document).ready(function () {
    $('#formulario').submit(function (e) {
        e.preventDefault();
        let res=validarFormulario()
        if(res){
            $.ajax({
                type: "POST",
                url: '../Modelo/insertarActor.php',
                data: $(this).serialize(),
                success: function(response)
                {
                    var jsonData = JSON.parse(response);
                    if (jsonData.success === true)
                    {
                        alert('Actor ingreado con exito')
                        $('#nombre').val('');
                        $('#nacionalidad').val('');
                        $('#edad').val('');
                    }
                    else
                    {
                        alert('No se ingreso actor')
                    }
                }
           });
        }
        else{
            alert("Campos no validos")
        }
    });
});
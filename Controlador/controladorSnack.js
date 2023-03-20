import{validarFormulario} from '../Vista/js/validarSnack.js';
$(document).ready(function () {
    
    $('#formulario').submit(function (e) {
        e.preventDefault();
        let res=validarFormulario() 
        if(res){
            $.ajax({
                type: "POST",
                url: '../Modelo/insertarSnack.php', 
                data: $(this).serialize(),
                success: function(response)
                {
                    var jsonData = JSON.parse(response);
                    if (jsonData.success === true)
                    {   
                        alert('Snack registrado exitosamente')
                        $('#nombre').val('');
                        $('#Categoria').val('');
                        $('#Precio').val('');
                        $('#Descripcion').val('');
                    }
                    else
                    {
                        alert('No se ingreso Snack');
                    }
                }
           });
        } 
        else{
            alert("Campos no validos")
        }

    });
});
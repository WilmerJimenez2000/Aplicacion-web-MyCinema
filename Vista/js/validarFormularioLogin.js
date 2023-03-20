const validaciones={
    correo: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
}
function validarFormulario() {
    var correo = $("#correoIni").val();
    if (correo.length == 0) {
        alert('Ingrese un correo'); 
        return false;
    }

    if(!validaciones.correo.test(correo)){
        alert('Correo Incorreto'); 
        return false;
    }
    
    var password = $("#passIni").val();
    if (password.length == 0) {
        alert('Ingrese la constraseña');
        return false;
    }

    if (password.length <8 ) {
        alert('Contraseña incompleta');
        return false;
    }

    return true;
}
export{validarFormulario} 



function validarFormulario() {
    var codigo= $("#cod_ver").val();
    if (codigo.length == 0) {
        alert('Ingrese el código de verificación'); 
        return false;
    }

    if(codigo.length>=1 && codigo.length<4){
        alert('Ingrese el código completo');
        return false;
    }
    return true;
}
export{validarFormulario} 


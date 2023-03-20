function validarFormulario() {
    var tipodocumento=$("#mitipodocumento").val();
   
    
    if(tipodocumento=='null'){
        alert('Seleccione el tipo de documento a recibir.');
        return false;
    }


    return true;
}

export{validarFormulario}





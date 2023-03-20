function validarFormulario() {

    var pelicula=$("#myPelicula").val();
    var horaI=$("#myHoraI").val();
    var horaF=$("#myHoraF").val();
    var tarifa=$("#tarifa").val();
    var sala=$("#mySala").val();
   

    if(pelicula=='null'){
        alert('Seleccione una Película');
        return false;
    }

    if(sala=='null'){
        alert('Seleccione una Sala');
        return false;
    }

    if(horaI==''){
        alert('Seleccione una Hora Inicial');
        return false;
    }

    if(horaF==''){
        alert('Seleccione una Hora Final');
        return false;
    }

    if(horaI==horaF){
        alert('Horas Incorrectas');
        return false;
    }

    
    if (tarifa.length == 0) {
        alert('Escriba una tarifa para la funcion');
        return false;
    }


    return true;
}

export{validarFormulario}





$(document).ready(function() {
    extraerFuncion3D();
    extraerFuncion2D();
    extraerPelicula();
    fecha();
    
    $(document).on('click', '#btn_Logout', function(){
        ventanaUsuarioInvitado();
    });
    //localStorage.setItem("EstadoSesion",0);
    if(localStorage.getItem("EstadoSesion")==1){
        
        ventanaUsuarioLogueado();
       
    }
});

function extraerFuncion3D(){
    var id=localStorage.getItem('idPelicula')//cambiar por idPelicula
    var fecha=localStorage.getItem('fecha')
    $.post('../Modelo/funciones3D.php',{
        idPelicula: id,
        fechaEscogida: fecha
    },function(datos,estado){
        $('#tresDH').html(datos);
        //alert("Informacion:"+datos);
    })
}
function extraerFuncion2D(){
    var id=localStorage.getItem('idPelicula')//cambiar por idPelicula
    var fecha=localStorage.getItem('fecha')
    $.post('../Modelo/funciones2D.php',{
        idPelicula: id,
        fechaEscogida: fecha
    },function(datos,estado){
        $('#dosDH').html(datos);
        //alert("Informacion:"+datos);
    })
}

function extraerPelicula(){
    var id=localStorage.getItem('idPelicula')//cambiar por idPelicula
    $.post('../Modelo/mostrarInfoPelicula.php',{
        idPelicula: id
    },function(datos,estado){
        $('#tarjeta').html(datos);
        //alert("Informacion:"+datos);
    })
}

function fecha(){
    var fecha=localStorage.getItem('fecha')
    var dia=parseInt(fecha.substring(8,10))
    $.post('../Modelo/fecha.php',{
        day: dia
    },function(datos,estado){
        $("#fecha").html(datos);
        //alert("Informacion:"+datos);
    })

    /*alert(dia)
    $.ajax({
        type: "GET",
        url: "../Modelo/fecha.php",
        success: function (response) {
          $("#fecha").html(response);
        },
    });*/
}

function fechaEscogida(dia){
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    if(month<10){
        auxMonth='0'+month;
    }
    if(day<10 || dia<10){
        day='0'+day;
        dia='0'+dia;
    }
    if(dia>=day){
        let man=`${year}-${auxMonth}-${dia}`;
        localStorage.setItem("fecha", man)
    }
    else{
        month=month+1;
        if(month<10){
            auxMonth='0'+month;
        }
        let man=`${year}-${auxMonth}-${dia}`;
        localStorage.setItem("fecha", man)
    }
}
function guardarIdFuncion(idPasado){
    if(localStorage.getItem("EstadoSesion")==0){
        localStorage.setItem('direccionIndex',"../Vista/indexBoletos.html")
        alert('Para continuar debe iniciar sesion');
        location.href="../Vista/login.html";
    }else{
        localStorage.setItem("idFuncion", idPasado)
        location.href="../Vista/indexBoletos.html";
    }
}

function ventanaUsuarioLogueado(){

    let nombreUsuario=localStorage.getItem("nombre" );
   $(".login").html("<input id='btn_nomUsu' type='submit' src='#' value='"+nombreUsuario+"'><input id='btn_Logout' type='submit'  value='Cerrar Sesión'>");
 }
 
 function ventanaUsuarioInvitado(){
 
   $(".login").html("<input id='btn_reg' type='submit'  value='REGISTRARSE'><input id='btn_ini' type='submit'  value='INICIAR SESIÓN'>");
   localStorage.setItem("EstadoSesion",0);
   location.href="../INICIO/index.html";
 }
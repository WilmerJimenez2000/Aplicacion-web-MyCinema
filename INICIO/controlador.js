$(document).ready(function () {
    //alert('entraaa');
    mostrarImagenes1();
    mostrarImagenes2();
    mostrarImagenes3();
    tarjetas();


    if(localStorage.getItem("EstadoSesion")==1){
        
        ventanaUsuarioLogueado();
       
        
    } 
});

function mostrarImagenes1(){
    $.ajax({
        type: "GET",
        url: 'mostrar1.php',
        success: function(response){
            $('#1').html(response);
        }
   });
}
function mostrarImagenes2(){
    $.ajax({
        type: "GET",
        url: 'mostrar2.php',
        success: function(response){
            $('#2').html(response);
        }
   });
}
function mostrarImagenes3(){
    $.ajax({
        type: "GET",
        url: 'mostrar3.php',
        success: function(response){
            $('#3').html(response);
        }
   });
}
function tarjetas(){
    $.ajax({
        type: "GET",
        url: 'tarjetas.php',
        data: $(this).serialize(),
        success: function(response){
            $('#tarjeta').html(response);
        }
   });
}
function guardarIdPelicula(idPasado){
    localStorage.setItem("idPelicula", idPasado)
    var fecha=$("#fecha").val();
    //alert(fecha)
    localStorage.setItem("fecha", fecha)
}


function ventanaUsuarioLogueado(){

     let nombreUsuario=localStorage.getItem("nombre" );
    $(".login").html("<input id='btn_nomUsu' type='submit' src='#' value='"+nombreUsuario+"'><input id='btn_Logout' type='submit' onclick='ventanaUsuarioInvitado()'src='#' value='Cerrar Sesión'>");
}

function ventanaUsuarioInvitado(){

    $(".login").html("<input id='btn_nomUsu' type='submit' onclick='myhrefRegistro()' value='REGISTRARSE'><input id='btn_Logout' type='submit' onclick='myhrefInicioSesion()' value='INICIAR SESIÓN'>");

}


function myhrefRegistro(){
    location.href="../Vista/indexRegistro.html";

}

function myhrefInicioSesion(){

    location.href="../Vista/login.html";

   
}





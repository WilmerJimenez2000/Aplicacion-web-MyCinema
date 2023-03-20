$(document).ready(function() {


   
    
  $(document).on('click', '#btn_Logout', function(){
    ventanaUsuarioInvitado();
});

if(localStorage.getItem("EstadoSesion")==1){
    
    ventanaUsuarioLogueado();
   
}


    var parametros = {
        "id" : localStorage.getItem("idFuncion")
    }
    $.ajax({
        type: "POST",
        method: "POST",
        url: '../Modelo/mostrarPeliculaBoleto.php',
        data: parametros,
        success: function(response){
            console.log("Aquiiiioo");
            console.log(response);
            $('#pelicula').html(response);
        }
   });
   //Cargar pelicula
   $.ajax({
    type: "GET",
    url: '../Modelo/mostrarPeliculaBoleto.php',
    success: function(response){
        console.log(response);
        $('#pelicula').html(response);
    }
    });
    //Controladores de boletos

   //Setear el precio del boleto
   let precioBoleto = document.getElementById("tarifa");
   localStorage.setItem("tarifa",precioBoleto.innerText);

  
});


/////////////////////


function ventanaUsuarioLogueado(){

    let nombreUsuario=localStorage.getItem("nombre" );
   $(".login").html("<input id='btn_nomUsu' type='submit' src='#' value='"+nombreUsuario+"'><input id='btn_Logout' type='submit'  value='Cerrar Sesión'>");
 }
 
 function ventanaUsuarioInvitado(){
 
   $(".login").html("<input id='btn_reg' type='submit'  value='REGISTRARSE'><input id='btn_ini' type='submit'  value='INICIAR SESIÓN'>");
   localStorage.setItem("EstadoSesion",0);
   location.href="../INICIO/index.html";
 }
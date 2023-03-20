$(document).ready(function() {
    var snacks=[];
    localStorage.setItem("snacksIngresados",JSON.stringify(snacks));


    $(document).on('click', '#btn_Logout', function(){
      ventanaUsuarioInvitado();
  });

  if(localStorage.getItem("EstadoSesion")==1){
      
      ventanaUsuarioLogueado();
     
  }
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





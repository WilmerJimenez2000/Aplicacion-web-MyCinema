import{validarFormulario} from '../Vista/js/validarFormularioLogin.js';
$(document).ready(function () {


    
    $('#form_login').submit(function (e) {
        e.preventDefault();
        let res=validarFormulario();
        console.log(res);
        if(res){

           validarUsuario();
           

        }});
    
});


function validarUsuario(){

    let correo=$("#correoIni").val();
    let contrasenia= $("#passIni").val();


    $.ajax({
        url: '../Modelo/validarUsuario.php',
        type: 'POST',
        data: { correo:correo, contrasenia:contrasenia },
        success: function (response, nombre) {
            console.log(response);

            if(response=="FalseContrasena"){

                alert("Contraseña Incorrecta. Vuelva a ingresar:")

                $("#passIni").val("");


            }else if(response=="FalseEmail"){
                alert("Usuario no registrado");
                $("#correoIni").val("");
                $("#passIni").val("");
            }else{

               alert("Bienvenido "+ response+ "!");
               localStorage.setItem("EstadoSesion", 1);
                localStorage.setItem("nombre", response);
               if(localStorage.getItem("direccionIndex")=="../Vista/indexBoletos.html"){
                location.href="../Vista/indexBoletos.html";
               }
               else{
                location.href="../INICIO/index.html";
               }
               
            }
        }
    });

 
}




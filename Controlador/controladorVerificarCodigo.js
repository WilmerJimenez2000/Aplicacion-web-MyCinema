import{validarFormulario} from '../Vista/js/validarFormularioVerificacionCodigo.js';
import{generarCodigo} from '../Controlador/controladorRegistro.js';

$(document).ready(function () {

    
    let contador=localStorage.getItem("contador_fallas");
    contador=parseInt(contador)+1;
    localStorage.setItem("contador_fallas",contador);       
    

    if(localStorage.getItem("contador_fallas")==4){
        
        alert("Limite de intentos exedido.");
        location.href="../INICIO/index.html";
    }else{
        enviarCodigo();
    }


    actualizarTiempo();
   
   
    $('#form_cod_ver').submit(function (e) {
        e.preventDefault();
        let res=validarFormulario();
        console.log(res);
        if(res){

            comparacionCodigo(); 


        }});
    
});


function comparacionCodigo(){
    


    var codigo= $("#cod_ver").val();
    if(localStorage.getItem("codigo")==codigo){
        alert("Código correto!!");
        registrarUsuario();
        localStorage.setItem("EstadoSesion", 1);
        location.href="../INICIO/index.html";
    }else if(localStorage.getItem("contador_fallas")==2|| localStorage.getItem("contador_fallas")==3){
        alert("Limite de intentos exedido.");
        location.href="../INICIO/index.html";
    }else{
        let confirmacion=confirm("Código Incorrecto. Desea reenviar un nuevo código:");
       
        if(confirmacion){
        location.reload();
        
        }else{
            location.href="../INICIO/index.html";
            }
        }

    
}
 
/////********Tiempo de vijencia de código  */
var minutos=2;
var segundos=0;

function actualizarTiempo(){


   

    if(minutos==-1){
        tiempoCodigoExpirado();
    }else if(segundos==0){
    $('#tiempo_cod').html("0"+minutos+":0"+segundos);
      minutos--;
      segundos=59;
    setTimeout(actualizarTiempo,1000);   
    }else if(segundos<10){
    $('#tiempo_cod').html("0"+minutos+":0"+segundos);
      segundos--;
    setTimeout(actualizarTiempo,1000);
    }else{
        $('#tiempo_cod').html("0"+minutos+":"+segundos);
        segundos--;
    setTimeout(actualizarTiempo,1000);
    }

}
  
function tiempoCodigoExpirado(){

    
    if(localStorage.getItem("contador_fallas")==2){ 
        alert("Código Expirado. Limite de intentos exedido");
        location.href="indexs.html";
    }else{
        let confirmacion=confirm("El código ha expirado presione continuar para enviar otro código, o cancelar para terminar el proceso:");
        if(confirmacion){
        location.reload();
        }else{
        location.href="../INICIO/index.html";
        }
    }



}



function enviarCodigo(){

    let codigo = generarCodigo();
    localStorage.setItem("codigo", codigo);
    let nombre = localStorage.getItem("nombre")
    let mail = localStorage.getItem("email");
    enviarCorreo(nombre, codigo, mail);
} 


function enviarCorreo(nombre, codigo, mail){

    const serviceID = 'default_service';
   const templateID = 'template_ioivklj';

    var templateParams = {
        nombre: nombre,
        code: codigo,
        mail: mail
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });

    alert("El código se ha enviado a su correo. ");
}

function registrarUsuario(){

    let nombre=localStorage.getItem("nombre");
    let apellido=localStorage.getItem("apellido");
    let ci=localStorage.getItem("ci");
    let direccion=localStorage.getItem("direcccion");
    let telefono=localStorage.getItem("telefono");
    let fechaN=localStorage.getItem("fechaN");
    let email=localStorage.getItem("email");
    let contrasenia=localStorage.getItem("contrasenia");
   

   

    $.ajax({
        url: '../Modelo/registrarUsuario.php',
        type: 'POST',
        data: { nombre: nombre, apellido:apellido,
        ci:ci,direccion:direccion,telefono:telefono,
    fechaN:fechaN, email:email,contrasenia:contrasenia },
        success: function (response) {
          console.log(response);
        }
    });




}

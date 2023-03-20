import{validarFormulario} from '../Vista/js/validarRegistro.js';
$(document).ready(function() {
    
        
    $('#formulario').submit(function(e) {
        e.preventDefault();
        localStorage.setItem("contador_fallas",-1); 
        let res =validarFormulario();
        if(res){
            let codigo=generarCodigo();
            localStorage.setItem("nombre",$('#nombre').val());
            localStorage.setItem("apellido",$('#apellido').val());
            localStorage.setItem("ci",$('#ci').val());
            localStorage.setItem("direcccion", $('#direccion').val());
            localStorage.setItem("telefono", $('#telefono').val());
            localStorage.setItem("fechaN", $('#fechaN').val());
            localStorage.setItem("email", $('#email').val());
            localStorage.setItem("contrasenia", $('#contrasenia').val());
            localStorage.setItem("codigo", codigo);
           
           
             location.href="verificacionCodigo.html";

        }
        
       
     });
});



function generarCodigo(){
    var a = parseInt(Math.random()*9+1);
    var b = parseInt(Math.random()*10);
    var c = parseInt(Math.random()*10);
    var d = parseInt(Math.random()*10);
    var codigo = a*1000+b*100+c*10+d;
    return codigo;
}

export{generarCodigo}









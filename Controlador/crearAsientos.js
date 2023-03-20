'use strict'
const filas = ["A","B","C","D","E","F","G","H","I","J","K","L"];
let salida = "";
//Calcular el numero de filas necesarias
var fil = localStorage.getItem("numAsientos")/10;
fil = Math.floor(fil);
var w = localStorage.getItem("numAsientos") % 10;

if(localStorage.getItem("numAsientos")<=120 && localStorage.getItem("numAsientos")){
    let i = 0;
    let j = 0;
    let k = 0;
    for(i = 0; i < fil; i++){
        salida +="<div class='fila' id="+filas[i]+">";
        for(j = 1; j <= 10 ; j++){
            salida +="<div class='columna_Disponible' id="+filas[i]+j+"><span id='boton' onClick='cambiarEstadoBoleto("+filas[i]+j+")'>"+filas[i]+j+"</span></div>";
        }
        salida +="</div>";
    }

    if(w !=0){
        salida +="<div class='fila' id="+filas[i]+">";
        for(k = 1; k <= w; k++){
            salida +="<div class='columna_Disponible' id="+filas[i]+k+"><span id='boton' onClick='cambiarEstadoBoleto("+filas[i]+k+")'>"+filas[i]+k+"</span></div>";
        }
        salida +="</div>";
    }
    document.getElementById("grafico").innerHTML = salida;
}

function cambiarEstadoBoleto(nombreClase){
    let myDiv = document.getElementById(nombreClase.id);
    let nombClass = myDiv.className;
    if(nombClass ==  "columna_Disponible"){
        if(verificarNumeroBoletosAsientos()){
            myDiv.className = "columna_noDisponible";  
        } 
    }else if(nombClass == "columna_noDisponible"){
        if(decrementarNumeroAsientos()){
            myDiv.className = "columna_Disponible";
        }
    }else if(nombClass == "Ocupado"){
        return;   
    }
}

function verificarNumeroBoletosAsientos(){
    let num = localStorage.getItem("numAsientosSelecionados");
    if(num <localStorage.getItem("numBoletos")){
        num++
        localStorage.setItem("numAsientosSelecionados",num);
        return true;
    }else{
        alert("No se puede seleccionar mas asientos");
        return false;
    }
}
function decrementarNumeroAsientos(){
    let num = localStorage.getItem("numAsientosSelecionados");
    if(num > 0){
        num--;
        localStorage.setItem("numAsientosSelecionados",num);
        return true;
    }else{
        alert("No se puede eliminar asientos");
        return false;
    }
}

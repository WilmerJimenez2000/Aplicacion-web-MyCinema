<?php
if(isset($_POST['day'])){
    $day=$_POST['day'];
    date_default_timezone_set('America/Guayaquil'); 
    $dia = date('d');
    //$dia=31;
    $mes = date('m');  
    //$fecha="<h2 style='color: white;'>Agosto</h2> <br>";
    $fecha="";
    $cont=1;
    for($i=0;$i<7;$i++){
        if($dia>31){
            if($day==$cont){
                $fecha.="<a onclick='fechaEscogida(".$cont.");' href='indexSeleccionFuncion.html' style='background-color: yellow;' id=".$cont.">".'0'.$cont."</a>";
            }
            else{
                $fecha.="<a onclick='fechaEscogida(".$cont.");' href='indexSeleccionFuncion.html' id=".$cont.">".'0'.$cont."</a>";
            }
            
            $cont++;
        }else{
            if($day==$dia){
                $fecha.="<a onclick='fechaEscogida(".$dia.");' href='indexSeleccionFuncion.html' style='background-color: yellow;' id=".$dia.">".$dia."</a>";
            }
            else{
                $fecha.="<a onclick='fechaEscogida(".$dia.");' href='indexSeleccionFuncion.html' id=".$dia.">".$dia."</a>";
            }
            $dia++;
        }
        
    }
    echo $fecha;
}
?>
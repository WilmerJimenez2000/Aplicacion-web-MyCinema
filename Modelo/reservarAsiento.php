<?php
    include_once('conexion.php');

        $asiento = $_POST['asiento'];
        $conexion=conexionphp();//iniciamos la conexión
        $fila_numAsiento=str_split($asiento);
        if(count($fila_numAsiento)==2){
      
          $fila=$fila_numAsiento[0];
          $numAsientos=$fila_numAsiento[1];
         
      
      
      
        }else{
            $fila=$fila_numAsiento[0];
            $numAsientos=$fila_numAsiento[1];
            $numAsientos.=$fila_numAsiento[2];
        
            
        }
        $sql="UPDATE Asientos SET estado = 'false' WHERE fila='$fila' AND numAsientos=$numAsientos";
        $result = $conexion->query($sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conexion),E_USER_ERROR);
        echo json_encode(array('success' => $asiento,'numeroAsiento' => $_POST['asiento'])); 
    
?>
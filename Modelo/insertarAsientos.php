<?php
    //include_once('conexion.php');
    /*$nombre = $_POST['nombre'];
    $nacionalidad = $_POST['nacionalidad'];
    $edad = $_POST['edad'];*/
    function insertarAsientos($conexion,$idSala,$idFuncion){

        $sqlCapacidad="SELECT capacidad FROM Sala WHERE idsala=$idSala";
        $result=$conexion->query($sqlCapacidad);
        if($result->num_rows > 0){
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
            {
                $capacidad=$row['capacidad'];
                $asientos=$capacidad/2;
                $dato=1;
                $letra='A';
                for ($i = 0; $i < $capacidad; $i++) {
                    $sqlAsientos="INSERT INTO Asientos(fila,numAsientos,estado,id_Sala,id_Funcion) VALUES('$letra','$dato','true','$idSala','$idFuncion')";
                    $result2 = mysqli_query($conexion,$sqlAsientos) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conexion),E_USER_ERROR);
                    if($dato==$asientos || ($dato%10==0 && $dato>=10)){
                        $dato=0;
                        $letra++;
                    }
                    $dato++;
                }
            }
            return 1;
        }
        else{
            return 0;
        }
    }
?>
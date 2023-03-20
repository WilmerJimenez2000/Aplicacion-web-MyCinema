<?php
    include_once('conexion.php');

    if(isset($_POST['id'])){
        $idFuncion = $_POST['id'];

        $conexion=conexionphp();//iniciamos la conexión

        $asiento =""; 
        //Sacar id de sala
        $sql="SELECT *FROM Funcion WHERE idFuncion=$idFuncion";
        $result = $conexion->query($sql); //cuantas filas hay

        if ($result->num_rows > 0){//si la variable tiene al menos 1 fila entonces seguimos con el código 
            //$combobitActor="<option value='null'></option>";
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
            {
                $idSala = $row['Sala_idSala'];
            }
        }
        //sacar asientos no disponibles
        $sql="SELECT * FROM Asientos WHERE id_Sala = $idSala AND id_Funcion = $idFuncion AND estado = 'false'";
        $result2 = $conexion->query($sql); //cuantas filas hay
        if ($result2->num_rows > 0){//si la variable tiene al menos 1 fila entonces seguimos con el código 
            while ($row = $result2->fetch_array(MYSQLI_ASSOC)) 
            {
                $asiento .=$row['fila'].$row['numAsientos'].",";
            }
        }
        echo $asiento;
        $conexion->close(); //cerramos la conexión
    }
?>
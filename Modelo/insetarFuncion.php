<?php
    include_once('conexion.php');
    include_once('insertarAsientos.php');
    //Datos de ingreso
    $myPelicula = $_POST['myPelicula'];
    $mySala = $_POST['mySala'];
    $horaDisponible = $_POST['hourI'];
    $horaFin = $_POST['hourF'];
    $tarifa = $_POST['tarifa'];
    $fecha = $_POST['fecha'];


    $conexion=conexionphp();//iniciamos la conexión
    $sql="SELECT * FROM Funcion WHERE Sala_idSala=$mySala";
    $result = $conexion->query($sql); //cuantas filas hay
    $i=0;
    $contadorFecha=0;
    $contadorHora=0;
    if ($result->num_rows > 0){//si la variable tiene al menos 1 fila entonces seguimos con el código 
        while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
        {
            if($row['fecha']==$fecha){
                $contadorFecha++;
                if($horaDisponible<$row['horaFin']){
                    $contadorHora++;
                }
            }
        }
        if($contadorFecha==0){
            $sqlFun ="INSERT INTO Funcion(hora, tarifa, Pelicula_idPelicula, Sala_idSala, horaFin, fecha) VALUES ('$horaDisponible', '$tarifa', '$myPelicula','$mySala','$horaFin','$fecha')";
            $result2 = $conexion->query($sqlFun);
            if($result2){
                $id=mysqli_insert_id($conexion);
                $asientos=insertarAsientos($conexion,$mySala,$id);
            }
            echo json_encode(array('success' => 1,'my' => $asientos));
            //echo '<br>'.'insertar funcion y horario de sala fecha Validada';
        }
        else{
            if($contadorHora==0){
                $sqlFun ="INSERT INTO Funcion(hora, tarifa, Pelicula_idPelicula, Sala_idSala, horaFin, fecha) VALUES ('$horaDisponible', '$tarifa', '$myPelicula','$mySala','$horaFin','$fecha')";
                $result2 = $conexion->query($sqlFun);
                if($result2){
                    $id=mysqli_insert_id($conexion);
                    $asientos=insertarAsientos($conexion,$mySala,$id);
                }
                echo json_encode(array('success' => 1,'my' => $asientos));
                //echo '<br>'.'insertar funcion y horario de sala hora Validada';
            }
            else{
                echo json_encode(array('success' => 2));
            //echo 'no hay como0000000000000000000000000';
            } 
        }
    }
    else{
        $sqlFun ="INSERT INTO Funcion(hora, tarifa, Pelicula_idPelicula, Sala_idSala, horaFin, fecha) VALUES ('$horaDisponible', '$tarifa', '$myPelicula','$mySala','$horaFin','$fecha')";
        $result2 = $conexion->query($sqlFun);
        if($result2){
            $id=mysqli_insert_id($conexion);
            $asientos=insertarAsientos($conexion,$mySala,$id);
        }
        echo json_encode(array('success' => 1,'my' => $asientos));
    }
    $conexion->close(); //cerramos la conexión
    
    //$conectar=conexionphp();//Inicia la conexion

    //Insertar Funcion
    //
    //$result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    //echo json_encode(array('success' => 1,'myPelicula' => $_POST['myPelicula'],'mySala'=>$_POST['mySala']));
    //, 'tarifa'=>_POST['tarifa'],'horaDisponible'=>_POST['horaDisponible']
?>
<?php
if(isset($_POST['idFuncion'])){
    include_once('conexion.php');
    $id=$_POST['idFuncion'];
    $formato="";
    $conectar=conexionphp();
    $sql ="SELECT soporte FROM Sala WHERE idSala=(SELECT Sala_idSala FROM Funcion WHERE idFuncion=$id)";
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    while($row = mysqli_fetch_array($result)){
        $formato.="<h3>".$row['soporte']."</h3>";
    }
    echo $formato;
}

?>
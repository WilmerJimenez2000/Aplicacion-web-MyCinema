<?php
if(isset($_POST['idPelicula']) && $_POST['fechaEscogida']){
    include_once('conexion.php');
    $id=$_POST['idPelicula'];
    $fecha=$_POST['fechaEscogida'];
    $verFuncion="";
    $conectar=conexionphp();
    $sql ="SELECT idFuncion,hora,fecha,Sala_idSala FROM Funcion WHERE Pelicula_idPelicula=$id AND fecha='$fecha'";
    $result = mysqli_query($conectar,$sql) or trigger_error("Querry failed! SQL - Error: ".mysqli_error($conectar),E_USER_ERROR);
    $cont=0;
    if ($result->num_rows > 0){
        while($row = mysqli_fetch_array($result)){
            $sql1="SELECT soporte FROM Sala WHERE idSala=".$row['Sala_idSala']."";
            $result1 = $conectar->query($sql1);
            if ($result1->num_rows > 0){
                while ($row1 = $result1->fetch_array(MYSQLI_ASSOC)){
                    if($row1['soporte']=='3D'){
                        $verFuncion.="<a onclick='guardarIdFuncion(".$row['idFuncion'].");' id='".$row['idFuncion']."' class='btn btn-primary' style='margin-buttom:100px;'>".$row['hora']."</a>";
                        $cont++;
                    }
                }
            }   
        }
    }
    if($cont==0){
        echo "<h3>No hay funciones en 3D</h3>";
    }
    else{
        echo $verFuncion;
    }
    $conectar->close();
}
?>
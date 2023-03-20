<?php
include_once('conexion.php');
$conexion=conexionphp();
$sql="SELECT * FROM Pelicula";
$result = $conexion->query($sql); 
if ($result->num_rows > 0){
    $listsnack="";
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
    {
        if($row['idPelicula']==2){
            $listsnack.="<img class='d-block rounded mx-auto img-fluid' src='data:image/jpg;base64,".base64_encode( $row['imagen'] )."'/>";
        }
    }
    echo $listsnack;
}
else{
    echo 'no hay';
}
$conexion->close();

?>
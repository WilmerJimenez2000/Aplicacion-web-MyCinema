<?php
include_once('conexion.php');
$conexion=conexionphp();//iniciamos la conexión
$sql="SELECT * FROM Pelicula";
$result = $conexion->query($sql); //cuantas filas hay

if ($result->num_rows > 0){//si la variable tiene al menos 1 fila entonces seguimos con el código 
    $combobitPelicula="<option value='null'></option>";
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
    {
        if($row['estado']=='true'){
            $combobitPelicula .=" <option value='".$row['idPelicula']."'>".$row['titulo']."</option>"; //concatenamos el los options para luego ser insertado en el HTML
        }   
    }
    echo $combobitPelicula;
}
$conexion->close(); //cerramos la conexión
?>


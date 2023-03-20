<?php
include_once('conexion.php');
$conexion=conexionphp();//iniciamos la conexión
$sql="SELECT * FROM Actor";
$result = $conexion->query($sql); //cuantas filas hay

if ($result->num_rows > 0){//si la variable tiene al menos 1 fila entonces seguimos con el código 
    //$combobitActor="<option value='null'></option>";
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
    {
        //$combobitActor .=" <option value='".$row['nombre']."'>"."</option>"; //concatenamos el los options para luego ser insertado en el HTML
        $combobitActor .=" <option value='".$row['nombre']."'>".$row['nombre']."</option>";
    }
    echo $combobitActor;
}
$conexion->close(); //cerramos la conexión
?>
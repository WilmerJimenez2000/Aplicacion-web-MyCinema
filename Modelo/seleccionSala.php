<?php
include_once('conexion.php');
$conexion=conexionphp();//iniciamos la conexión
$sql="SELECT * FROM Sala";
$result = $conexion->query($sql); //cuantas filas hay

if ($result->num_rows > 0){//si la variable tiene al menos 1 fila entonces seguimos con el código 
   $combobitSala="<option value='null'></option>";
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
    {
       $combobitSala .=" <option value='".$row['idSala']."'>".$row['idSala']."</option>"; //concatenamos el los options para luego ser insertado en el HTML
    }
    echo $combobitSala;
}
$conexion->close(); //cerramos la conexión
?>


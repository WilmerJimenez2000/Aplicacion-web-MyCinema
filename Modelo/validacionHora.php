<?php
include_once('conexion.php');
$conexion=conexionphp();//iniciamos la conexión*/
$salaElegida =$_POST['search'];
$sql="SELECT * FROM Sala where idSala=$salaElegida";
$result = $conexion->query($sql);

$row = $result->fetch_array(MYSQLI_ASSOC);
$inputHora =" <input id='myHoraI' type='time' name='hourI'   step='7200' min='".$row['horaInicio']. "' max='".$row['horaFin']. "'>";
$inputHora .=" <input id='myHoraF' type='time' name='hourF'   step='7200' min='".$row['horaInicio']. "' max='".$row['horaFin']. "'>";

 
echo $inputHora;

$conexion->close(); //cerramos la conexión




?>


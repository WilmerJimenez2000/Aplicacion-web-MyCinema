<?php
    include_once('conexion.php');

    if(isset($_POST['id'])){
        $idFuncion = $_POST['id'];

        $conexion=conexionphp();//iniciamos la conexión

        $pelicula =""; 
        $peliculaTitulo ="";

        //Sacar informacion de funcion
        $sql="SELECT *FROM Funcion WHERE idFuncion=$idFuncion";
        $result = $conexion->query($sql); //cuantas filas hay

        if ($result->num_rows > 0){//si la variable tiene al menos 1 fila entonces seguimos con el código 
            //$combobitActor="<option value='null'></option>";
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
            {
                $pelicula .="<h3>".$row['hora']."</h3>";
                $pelicula .="<h3>Precio Boletos: $<span id='tarifa'>".$row['tarifa']."</span></h3>";
                $idPelicula = $row['Pelicula_idPelicula'];
                $idSala = $row['Sala_idSala'];
            }
        }

        //Sacar informacion de Pelicula
        $sql="SELECT * FROM Pelicula WHERE idPelicula = $idPelicula";
        $result2 = $conexion->query($sql); //cuantas filas hay

        if ($result2->num_rows > 0){//si la variable tiene al menos 1 fila entonces seguimos con el código 
            $peliculaTitulo .="<br>";
            $peliculaTitulo .="<br>";
            $peliculaTitulo .="<br>";
            while ($row = $result2->fetch_array(MYSQLI_ASSOC)) 
            {
                $peliculaTitulo .="<h3>".$row['titulo']."</h3>";
            }
        }
        //Sacar informacion de la sala -> capacidad
        $sql="SELECT * FROM Sala WHERE idSala = $idSala";
        $result3 = $conexion->query($sql); //cuantas filas hay
        if ($result3->num_rows > 0){//si la variable tiene al menos 1 fila entonces seguimos con el código 
            while ($row = $result3->fetch_array(MYSQLI_ASSOC)) 
            {
                $peliculaTitulo .="<span style='font-size: 0' id='capacidad'>".$row['capacidad']."</span>";
            }
        }

        $peliculaTitulo .= $pelicula;
        echo $peliculaTitulo;
        $conexion->close(); //cerramos la conexión
    }
?>
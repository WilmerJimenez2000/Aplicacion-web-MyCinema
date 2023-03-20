<?php
   function conexionphp(){
       $server = 'databasecine.cbniwvo0ar2n.us-east-1.rds.amazonaws.com';
       $user = 'admin';
       $pass = '8M^1SrzWd8hd';
       $db = 'cine';
       $conectar = mysqli_connect($server, $user, $pass, $db) or die ("Error de conexión");
       return $conectar;
   }
?>
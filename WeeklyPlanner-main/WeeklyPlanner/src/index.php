<?php
   $server = "localhost";
   $sUsername = "root";
   $password = "";
   $dbname = "testsql";
   
   $con = mysqli_connect($server,$sUsername,$password,$dbname);

   if($con -> connect_error){
       echo "NOT CONNECTED PROBABLY";
   }
?>
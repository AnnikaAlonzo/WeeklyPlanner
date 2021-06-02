<?php
   $server = "localhost";
   $sUsername = "id16955391_wpdb";
   $password = "WeeklyPlannerDBPass119!";
   $dbname = "id16955391_weeklyplannerdb";
   
   $con = mysqli_connect($server,$sUsername,$password,$dbname);

   if($con -> connect_error){
       echo "NOT CONNECTED PROBABLY";
   }
?>
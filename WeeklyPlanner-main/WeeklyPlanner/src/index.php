<?php
    $username = $_POST['username'];
    $password = $_POST['designation'];

    $con = new mysqli('localhost','root','','testsql');
    
    if($con -> connect_error){
        echo "CONNECTED PROBABLY";
    }

    $query = "INSERT INTO userdetails (username, designation) VALUES ('$username','$password')";
    $query1 = mysqli_query($con, "SELECT username FROM userdetails WHERE username = '".$username."'");

    if(!(mysqli_num_rows($query1) > 0)){
        $query_run = mysqli_query($con,$query);
        if($query_run){
            echo "1";
        }
    }else{
        echo "Email Already Exists";
    }
?>
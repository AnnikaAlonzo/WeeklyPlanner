<?php
    $server = "localhost";
    $sUsername = "root";
    $password = "";
    $dbname = "testsql";
    
    $con = mysqli_connect($server,$sUsername,$password,$dbname);

    $name = $_POST['username'];
    $designation = $_POST['designation'];

    if($con -> connect_error){
        echo "NOT CONNECTED PROBABLY";
    }
    $exists = mysqli_query($con,"SELECT username FROM userdetails WHERE username = '".$name."'");

    if(mysqli_num_rows($exists) > 0){
        
        if(isset($name,$designation)){
            $query1 = mysqli_query($con,"SELECT username, designation FROM userdetails WHERE username = '".$name."' AND BINARY designation = '".$designation."'");

            if(mysqli_num_rows($query1) > 0){
                echo "1";
            }else{
                echo "Email or Password is incorrect";
            }
        }
    }else{
        echo "Email is not Registered";
    }

?>
<?php
    include "index.php";

    $email = $_POST['email'];
    $password = $_POST['pass'];

    $exists = mysqli_query($con,"SELECT email FROM details WHERE email = '".$email."'");

    if(mysqli_num_rows($exists) > 0){
        
        if(isset($email,$password)){
            $query1 = mysqli_query($con,"SELECT email, pass FROM details WHERE email = '".$email."' AND BINARY pass = '".$password."'");

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
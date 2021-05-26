<?php
    include "index.php";

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $password = $_POST['pass'];

    $query = "INSERT INTO details (fname,lname, email, pass) VALUES ('$fname','$lname','$email','$password')";
    $query1 = mysqli_query($con, "SELECT email FROM details WHERE email = '".$email."'");

    if(!(mysqli_num_rows($query1) > 0)){
        $query_run = mysqli_query($con,$query);
        if($query_run){
            echo "1";
        }
    }else{
        echo "Email Already Registered";
    }
?>
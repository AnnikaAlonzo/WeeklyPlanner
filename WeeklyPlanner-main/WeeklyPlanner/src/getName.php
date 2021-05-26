<?php

    include "index.php";

    $email = $_POST['email'];

    $query1 = mysqli_query($con, "SELECT fname FROM details WHERE email = '".$email."'");
    $arr1 = mysqli_fetch_array($query1);
    if (mysqli_num_rows($query1) > 0) {
        echo $arr1[0];
    }

?>
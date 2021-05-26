<?php
    include "index.php";

    $currentUser = $_POST['currentUser'];
    $noteTitle = json_decode($_POST['title']);
    $noteDesc = json_decode($_POST['descriptions']);

    $exists = mysqli_query($con, "SELECT title FROM personalnotes WHERE title = '".$noteTitle."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT title, descriptions FROM personalnotes WHERE title = '".$noteTitle."' AND decriptions = '".$noteDesc."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "Note doesn't exist.";
    }

    if(count($noteTitle) == 0) {
        $i = 0;
    } else {
        $i = count($noteTitle) - 1;
    }

    
    if($noteTitle != "") {
        $insertquery = "INSERT INTO personalnotes(currentUser, title, descriptions) VALUES('$currentUser','$noteTitle[$i]', '$noteDesc[$i]')";
    
        if(!mysqli_query($con, $insertquery)) {
            die('Error '.mysqli_error($con));
        }
    }

?>
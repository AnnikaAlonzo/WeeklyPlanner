<?php
    include "index.php";

    $noteTitle = json_decode($_POST['title']);
    $updatedDesc = json_decode($_POST['descriptions']);

    $exists = mysqli_query($con, "SELECT title FROM personalnotes WHERE title = '".$noteTitle."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT title, descriptions FROM personalnotes WHERE title = '".$noteTitle."' AND decriptions = '".$updatedDesc."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "Note doesn't exist.";
    }

    for($i = 0; $i < count($noteTitle); $i++) {
        if($noteTitle != "") {
            $insertquery = "UPDATE personalnotes SET descriptions = '$updatedDesc[$i]' WHERE title = '$noteTitle[$i]'";
    
            if(!mysqli_query($con, $insertquery)) {
                die('Error '.mysqli_error($con));
            }
        }
    }

?>
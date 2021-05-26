<?php
    include "index.php";

    $taskName = json_decode($_POST['taskName']);

    $exists = mysqli_query($con, "SELECT taskName FROM schedule WHERE taskName = '".$taskName."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT taskName FROM schedule WHERE taskName = '".$taskName."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "Task does not exist.";
    }

    for($i = 0; $i < count($taskName); $i++) {
        if($taskName != "") {
            $query = "DELETE FROM schedule WHERE taskName = '$taskName[$i]'";
    
            mysqli_query($con, $query);
        }
    }

?>
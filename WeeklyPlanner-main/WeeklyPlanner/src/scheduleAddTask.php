<?php
    include "index.php";

    $currentUser = $_POST['currentUser'];
    $taskName = json_decode($_POST['taskName']);
    $taskDesc = json_decode($_POST['taskDesc']);
    $taskHour = json_decode($_POST['taskHour']);
    $taskMin = json_decode($_POST['taskMin']);
    $taskDay = json_decode($_POST['taskDay']);
    $taskMonth = json_decode($_POST['taskMonth']);
    $taskYear = json_decode($_POST['taskYear']);

    $exists = mysqli_query($con, "SELECT taskName FROM schedule WHERE taskName = '".$taskName."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT taskName, taskDesc, taskDay, taskMonth, taskYear FROM schedule 
        WHERE taskName = '".$taskName."' AND taskDesc = '".$taskDesc."' AND taskHour = '".$taskHour."' AND taskMin = '".$taskMin."' 
        AND taskDay = '".$taskDay."' AND taskMonth = '".$taskMonth."' AND taskYear = '".$taskYear."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "Task doesn't exist.";
    }

    if(count($taskName) == 0) {
        $i = 0;
    } else {
        $i = count($taskName) - 1;
    }

    if($taskName != "") {

        $insertquery = "INSERT INTO schedule(currentUser, taskName, taskDesc, taskHour, taskMin, taskDay, taskMonth, taskYear) 
        VALUES('$currentUser', '$taskName[$i]', '$taskDesc[$i]', '$taskHour[$i]','$taskMin[$i]', '$taskDay[$i]', '$taskMonth[$i]', '$taskYear[$i]')";
        if(!mysqli_query($con, $insertquery)) {
            die('Error '.mysqli_error($con));
        }
    }
?>
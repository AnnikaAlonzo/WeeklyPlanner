<?php
    include "index.php";

    $currentUser = $_POST['currentUser'];
    $taskName = json_decode($_POST['taskName']);
    // $updatedTaskName = json_decode($_POST['taskName']);
    $updatedTaskDesc = json_decode($_POST['taskDesc']);
    $updatedTaskHour = json_decode($_POST['taskHour']);
    $updatedTaskMin = json_decode($_POST['taskMin']);
    $updatedTaskDay = json_decode($_POST['taskDay']);
    $updatedTaskMonth = json_decode($_POST['taskMonth']);
    $updatedTaskYear = json_decode($_POST['taskYear']);


    $exists = mysqli_query($con, "SELECT taskName FROM schedule WHERE taskName = '".$taskName."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT taskName, taskDesc, taskHour, taskMin, taskDay, taskMonth, taskYear FROM schedule WHERE taskName = '".$taskName."' AND taskDesc = '".$updatedTaskDesc."' AND taskHour = '".$updatedTaskHour."' AND taskMin = '".$updatedTaskMin."' AND taskDay = '".$updatedTaskDay."' AND taskMonth = '".$updatedTaskMonth."' AND taskYear = '".$updatedTaskYear."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "Task doesn't exist.";
    }

    for($i = 0; $i < count($taskName); $i++) {
        if($taskName != "") {
            $insertquery = "UPDATE schedule SET taskDesc = '$updatedTaskDesc[$i]', taskHour = '$updatedTaskHour[$i]', taskMin = '$updatedTaskMin[$i]', taskDay = '$updatedTaskDay[$i]', taskMonth = '$updatedTaskMonth[$i]', taskYear = '$updatedTaskYear[$i]' WHERE taskName = '$taskName[$i]'";
    
            if(!mysqli_query($con, $insertquery)) {
                die('Error '.mysqli_error($con));
            }
        }
    }
?>
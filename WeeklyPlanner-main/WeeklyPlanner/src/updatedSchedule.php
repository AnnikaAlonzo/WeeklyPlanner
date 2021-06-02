<?php
    include "index.php";

    // $noteTitle = json_decode($_POST['title']);
    // $updatedDesc = json_decode($_POST['descriptions']);

    $taskName = json_decode($_POST['taskName']);
    $prevTitle = json_decode($_POST['prevTitle']);
    $taskDesc = json_decode($_POST['taskDesc']);
    $taskDay = json_decode($_POST['taskDay']);
    $taskMonth = json_decode($_POST['taskMonth']);
    $taskYear = json_decode($_POST['taskYear']);

    $exists = mysqli_query($con, "SELECT taskName FROM schedule WHERE taskName = '".$prevTitle."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT taskName, taskDesc, taskDay, taskMonth, taskYear FROM schedule WHERE taskName = '".$taskName."' AND taskDesc = '".$taskDesc."' AND taskDay = '".$taskDay."' AND taskMonth = '".$taskMonth."' AND taskYear = '".$taskYear."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "Task doesn't exist.";
    }

    for($i = 0; $i < count($taskName); $i++) {
        if($taskName != "") {
            $insertquery = "UPDATE schedule SET taskName = '$taskName[$i]', taskDesc = '$taskDesc[$i]', taskDay = '$taskDay[$i]', taskMonth = '$taskMonth[$i]', taskYear = '$taskYear[$i]' WHERE taskName = '$prevTitle[$i]'";
    
            if(!mysqli_query($con, $insertquery)) {
                die('Error '.mysqli_error($con));
            }
        }
    }

?>
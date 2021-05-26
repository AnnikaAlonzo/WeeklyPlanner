<?php
    include "index.php";

    $currentUser = $_POST['currentUser'];
    $taskName = json_decode($_POST['taskName']);
    $reminderDay = json_decode($_POST['reminderDay']);
    $reminderMonth = json_decode($_POST['reminderMonth']);
    $reminderYear = json_decode($_POST['reminderYear']);
    $taskHour = json_decode($_POST['taskHour']);
    $taskMin = json_decode($_POST['taskMin']);


    $exists = mysqli_query($con, "SELECT taskName FROM schedule WHERE taskName = '".$taskName."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT taskName, reminderDay, reminderMonth, reminderYear, taskHour, taskMin FROM schedule 
        WHERE taskName = '".$taskName."' AND reminderDay = '".$reminderDay."' AND reminderMonth = '".$reminderMonth."' AND reminderYear = '".$reminderYear."'
        AND taskHour = '".$taskHour."' AND taskMin = '".$taskMin."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "Task doesn't exist.";
    }

    for($i = 0; $i < count($taskName); $i++) {
        if($taskName != "") {
            $insertquery = "UPDATE schedule SET reminderDay = '$reminderDay[$i]', reminderMonth = '$reminderMonth[$i]', reminderYear = '$reminderYear[$i]', 
            taskHour = '$taskHour[$i]', taskMin = '$taskMin[$i]' WHERE taskName = '$taskName[$i]'";
    
            if(!mysqli_query($con, $insertquery)) {
                die('Error '.mysqli_error($con));
            }
        }
    }

?>
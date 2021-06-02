<?php
    include "index.php";

    $taskName = $_POST['taskName'];

    $getRow = mysqli_query($con,"SELECT * FROM schedule WHERE taskName = '".$taskName."'");
    $rowTotal = mysqli_num_rows($getRow);

    if($rowTotal > 0){
        $query = "DELETE FROM schedule WHERE taskName = '".$taskName."'";
        mysqli_query($con,$query);
    }

?>
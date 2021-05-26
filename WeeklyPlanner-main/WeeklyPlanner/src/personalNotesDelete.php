<?php
    include "index.php";

    $noteTitle = $_POST['title'];

    $getRow = mysqli_query($con,"SELECT * FROM personalnotes WHERE title = '".$noteTitle."'");
    $rowTotal = mysqli_num_rows($getRow);

    if($rowTotal > 0){
        $query = "DELETE FROM personalnotes WHERE title = '".$noteTitle."'";
        mysqli_query($con,$query);
    }

?>
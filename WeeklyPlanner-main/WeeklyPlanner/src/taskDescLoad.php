<?php

    include "index.php";

    $currentUser = $_POST['currentUser'];

    $sql = "SELECT id, taskDesc, GROUP_CONCAT(taskDesc ORDER BY id SEPARATOR',') as 'taskDesc' FROM schedule WHERE currentUser = '".$currentUser."'";

    $data = mysqli_query($con, $sql) or die ('error');
    $arr1 = mysqli_fetch_array($data);

    if (mysqli_num_rows($data) > 0) {
        echo $arr1[2];
    }

?>
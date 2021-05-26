<?php
    include "index.php";

    $expenseDay = json_decode($_POST['expDay']);
    $expenseMonth = json_decode($_POST['expMonth']);
    $expenseYear = json_decode($_POST['expYear']);
    
    $exists = mysqli_query($con, "SELECT expDay FROM expenses WHERE expDay = '".$expenseDay."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT expDay, expMonth, expYear FROM expenses WHERE expDay = '".$expenseDay."' AND expMonth = '".$expenseMonth."' AND expYear = '".$expenseYear."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "There is no date.";
    }

    for($i = 0; $i < count($expenseDay); $i++) {
        if($expenseDay != "") {
            $query = "DELETE FROM expenses WHERE expDay = '$expenseDay[$i]' AND expMonth = '$expenseMonth[$i]' AND expYear = '$expenseYear[$i]'";
    
            mysqli_query($con, $query);
        }
    }

?>
<?php
    include "index.php";

    $expenseDay = json_decode($_POST['expDay']);
    $expenseMonth = json_decode($_POST['expMonth']);
    $expenseYear = json_decode($_POST['expYear']);
    $updatedPrice = json_decode($_POST['expense']);
    
    $exists = mysqli_query($con, "SELECT expDay FROM expenses WHERE expDay = '".$expenseDay."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT expDay, expMonth, expYear, expense FROM expenses WHERE expDay = '".$expenseDay."' AND expMonth = '".$expenseMonth."' AND expYear = '".$expenseYear."' AND expense = '".$updatedPrice."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "Expense doesn't exist.";
    }

    for($i = 0; $i < count($updatedPrice); $i++) {
        if($updatedPrice != "") {
            $insertquery = "UPDATE expenses SET expense = '$updatedPrice[$i]' WHERE expDay = '$expenseDay[$i]' AND expMonth = '$expenseMonth[$i]' AND expYear = '$expenseYear[$i]'";
    
            if(!mysqli_query($con, $insertquery)) {
                die('Error '.mysqli_error($con));
            }
        }
    }

?>
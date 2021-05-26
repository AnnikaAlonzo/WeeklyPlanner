<?php
    include "index.php";

    $currentUser = $_POST['currentUser'];
    $expenseDay = json_decode($_POST['expDay']);
    $expenseMonth = json_decode($_POST['expMonth']);
    $expenseYear = json_decode($_POST['expYear']);
    $expensePrice = json_decode($_POST['expense']);

    $exists = mysqli_query($con, "SELECT expDay FROM expenses WHERE expDay = '".$expenseDay."'");

    if(mysqli_num_rows($exists) > 0) {
        $query1 = mysqli_query($con, "SELECT expDay, expMonth, expYear, expense FROM expenses WHERE expDay = '".$expenseDay."' AND expMonth = '".$expenseMonth."' AND expYear = '".$expenseYear."' AND expense = '".$expensePrice."'");

        if(mysqli_num_rows($query1) > 0) {
            echo "1";
        } 
    } else {
        echo "Expense doesn't exist.";
    }

    if(count($expenseDay) == 0) {
        $i = 0;
    } else {
        $i = count($expenseDay) - 1;
    }

    if($expensePrice != "") {
        $insertquery = "INSERT INTO expenses(currentUser, expDay, expMonth, expYear, expense) VALUES('$currentUser','$expenseDay[$i]', '$expenseMonth[$i]', '$expenseYear[$i]', '$expensePrice[$i]')";
    
        if(!mysqli_query($con, $insertquery)) {
            die('Error '.mysqli_error($con));
        }
    }
?>
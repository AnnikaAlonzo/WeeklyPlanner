<?php
    $servername = "localhost";
    $username = "id16955391_wpdb";
    $password = "WeeklyPlannerDBPass119";

  
    $conn = new mysqli($servername, $username, $password);
  
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $errors = [];
    
    $sql = "CREATE DATABASE id16955391_weeklyplannerdb";
    if ($conn->query($sql) === TRUE) {

        echo "1. Database created successfully <br/>";
        $conn->select_db("id16955391_weeklyplannerdb");
    
        $detailsTable = "CREATE TABLE details (
            id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            fname VARCHAR(225) NULL,
            lname VARCHAR(225) NULL,
            email VARCHAR(225) NULL,
            pass VARCHAR(225) NULL
            )";
    
        $pNotesTable = "CREATE TABLE personalnotes (
            id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            currentUser VARCHAR(225) NULL,
            title VARCHAR(225) NULL,
            descriptions VARCHAR(225) NULL
            )";
    

        $scheduleTable = "CREATE TABLE schedule (
            id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            currentUser VARCHAR(225) NULL,
            taskName VARCHAR(225) NULL,
            taskDesc VARCHAR(225) NULL,
            taskHour INT(11) NULL,
            taskMin INT(11) NULL,
            taskDay INT(11) NULL,
            taskMonth INT(11) NULL,
            taskYear INT(11) NULL,
            reminderDay INT(11) NULL,
            reminderMonth INT(11) NULL,
            reminderYear INT(11) NULL,
            reminderHour INT(11) NULL,
            reminderMin INT(11) NULL
            )";
        
        $expensesTable =  "CREATE TABLE expenses (
            id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            currentUser VARCHAR(225) NULL,
            expDay INT(11) NULL,
            expMonth INT(11) NULL,
            expYear INT(11) NULL,
            expense INT(11) NULL
            )";

        $tables = [$detailsTable,$pNotesTable,$scheduleTable,$expensesTable];            

        foreach($tables as $k => $sql){
            $query = @$conn->query($sql);
        
            if(!$query)
            $errors[] = "Table $k : Creation failed ($conn->error)";
            else
            $errors[] = "Table $k : Creation done";
        }
        
        
        foreach($errors as $msg) {
             echo "$msg <br>";
        }
    
    } else {
        echo "Error creating database: " . $conn->error;
    }

?>
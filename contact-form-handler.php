<?php
    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $email=$_POST['email'];
        $message=$_POST['message'];

        $to='nmemisevic1@gmail.com';
        $subject='Form Submission';
        $messager="Name: ".$name."\n"."Wrote the following: ".$message;
        $headers="From: ".$email;
        if(mail($to,$subject,$messager,$headers)){
            echo "<h1>Sent Succesefully!";
        }
        else{
            echo "Something went wrong";
        }
    }
?>
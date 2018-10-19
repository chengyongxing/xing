<?php
    $cookielist = isset($_GET['cookielist'])? $_GET['cookielist'] : '';
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'ku';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
    // echo $cookielist;
        $dle =  $conn->query("DELETE FROM gouwuche");
         $sql = "insert into gouwuche  values ('".$cookielist."')";
    
        $res = $conn->query($sql);

        if($res){
            echo "成功";
        }else{
            echo $conn->error;
        }
        $conn->close();   
    
?>
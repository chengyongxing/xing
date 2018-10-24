<?php
    $admin = isset($_GET['admin'])? $_GET['admin'] :"";
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'h5-1808';

    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    if($admin){
        $hhh = "SELECT * FROM car WHERE admin='".$admin."'";
        $resu = $conn->query($hhh);
        $zhi = $resu->fetch_all(MYSQLI_ASSOC);
        $resu->close();
        echo json_encode($zhi,JSON_UNESCAPED_UNICODE);
    }
    $conn->close();
    
?>
<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'h5-1808';

    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    $sql = 'select * from zuce';

    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQL_ASSOC);
    $result->close();

    echo json_encode($row);
    $conn->close();



?>
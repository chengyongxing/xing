<?php
     $qty = isset($_GET['qty'])? $_GET['qty'] :12;
    $curpage =  isset($_GET['curpage'])? $_GET['curpage'] : 1;
    $idx = ($curpage-1)*$qty;

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'ku';

    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    $quabu = 'select * from shangpin';
    $_quanbu = $conn->query($quabu); 
    $quan = $_quanbu->fetch_all(MYSQL_ASSOC);

    $sql = 'select * from shangpin order by id limit '.$idx.','.$qty;
    $result = $conn->query($sql); 
    $row = $result->fetch_all(MYSQL_ASSOC);

    $zuoxia ='select * from shangpin order by id limit 0,3';
    $zx=$conn->query($zuoxia);
    $bow = $zx->fetch_all(MYSQL_ASSOC);


     $res = array(
            "dataArr" => $row,
            "dadaBrr" => $bow,
            "len" => count($quan),
            "qty" => $qty*1,
            "nowye" => $curpage*1
        );
    $result->close();
    $zx->close();
    $_quanbu->close();
    // var_dump($row);
    echo json_encode($res);
    $conn->close();

?>
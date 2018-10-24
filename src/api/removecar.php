<?php
    $admin = isset($_GET['admin'])? $_GET['admin'] :"";
    $id = isset($_GET['id'])? $_GET['id'] :"";

    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'h5-1808';

    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    if($id){
        $remove =" delete from car where id=".$id." and admin='".$admin."'";
        $_remove = $conn->query($remove);
        if($_remove){
            $cunzai = "SELECT * FROM car WHERE  admin='".$admin."'";
            $_cunzai = $conn->query($cunzai); 
            $cunzai = $_cunzai->fetch_all(MYSQL_ASSOC);
            echo json_encode($cunzai,JSON_UNESCAPED_UNICODE);
        }else{
            echo "false";
        }
    }else{
        $remove =" delete from car where  admin='".$admin."'";
        $_remove = $conn->query($remove);
        if($_remove){
            $cunzai = "SELECT * FROM car WHERE  admin='".$admin."'";
            $_cunzai = $conn->query($cunzai); 
        echo "true";
        }else{
            echo "false";
        }
    }
    $conn->close();
    
?>
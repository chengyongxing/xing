<?php
    $admin = isset($_GET['admin'])? $_GET['admin'] :"";
    $id = isset($_GET['id'])? $_GET['id'] :"";
    $qty = isset($_GET['qty'])? $_GET['qty'] :"";
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'h5-1808';

    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    if($admin){
        $hhh = "SELECT * FROM car WHERE id=".$id." and admin='".$admin."'";
        $resu = $conn->query($hhh);
        $zhi = $resu->fetch_all(MYSQLI_ASSOC);
        $resu->close();
        if($zhi){
            $xiugai = "update car set qty='".$qty."' where id=".$id." and admin='".$admin."'";
            $ccc = $conn->query($xiugai); 
             if ($ccc) {
                echo true;
            } else {
                echo "Error: " . $xiugai . "<br>" . $conn->error;
            } 
            // echo json_encode($zhi,JSON_UNESCAPED_UNICODE);
        }
        
    }
    $conn->close();
    
?>
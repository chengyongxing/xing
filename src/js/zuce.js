jQuery(function($){
    $('#footerBottom').load('../html/bottom.html',function(){
            console.log(777);
            });
    $(".a-cart-c.a-sidebar").on("click",function(){
        location.href = "./car.html";
    })

    //用户名&密码
    admin();
    function admin(){
       var admin = Cookie.getCookie('admin');
        var $zhanghu = $(".top-nav-tool");
        if(admin === ''){
            let cii = `<li class="yg-card">
                        <span>
                            <a href="./zuce.html" id="__AD_head_zhuce" rel="nofollow">
                                注册
                            </a>
                        </span>|
                            </li>
                            <li class="yg-card">
                                <span>
                                    <a href="./denglu.html" id="__AD_head_denglu" rel="nofollow">
                                        登录
                                    </a>
                                </span>
                                |
                            </li>`;
                $zhanghu.prepend(cii);
            return;
        }else {
            let cii = `<li class="yg-card">
                        <span>
                            欢迎您 ， ${admin}
                        </span>
                    </li>
                     <li class="yg-card">
                        <span>
                            <a href="./zuce.html">
                                退出
                            </a>
                        </span>
                        |
                    </li>
                     `;
                $zhanghu.prepend(cii);
            }
        }
        $($(".yg-card")[1]).on("click",function(e){
                if(e.target.tagName.toLowerCase()=="a");
                    var admin = Cookie.getCookie('admin');
                    Cookie.removeCookie('admin',admin,"/");
                    $($(".yg-card")[1]).remove();
                    $($(".yg-card")[0]).remove();
                    admin();
            
        })
        //=====================================
        //侧边用户  购物车
    cebian();
    function cebian(){
       var admin = Cookie.getCookie('admin');
        var $xslideLogin = $(".sidebarcom-hover .slide-login");
        if(admin === ''){
            let cii = `<a href="#" class="slide-pic">
                        <img alt="" src="../picture/72x72.jpg" width="72" height="72" />
                    </a>
                    <p class="slide-login-btn">
                        你好！请
                        <a href="#">
                            登录
                        </a>
                        |
                        <a href="#">
                            注册
                        </a>
                    </p>`
                $xslideLogin.prepend(cii);
            return;
        }
        else {
            let cii = `<a href="#" class="slide-pic">
                                    <img alt="" src="../picture/72x72.jpg" width="72" height="72" />
                                </a>
                                <p class="slide-login-btn">
                                    <span>
                            欢迎您 ， ${admin}
                        </span><a href="../index.html">
                                退出
                            </a>
                                </p> `;
                $xslideLogin.prepend(cii);
            }
        }
        $($(".slide-login-btn a")).on("click",function(){
                    Cookie.removeCookie('admin');
                    cebian();
            
        })
    $(".sidebar .bar-top").on("mouseover",function(e){
        if(e.target.tagName.toLowerCase() == "a"){
            $(e.target).closest("li").addClass("hover");
        }
    })
    $(".sidebar").on("mouseout",function(e){
        $(".sidebar .bar-top li").each(function(idx,item){
                $(item).removeClass("hover");
            })
        
    })


    //返回顶部
    $("#_AD_right_top").on("click",function(){
        var $timer = setInterval(function(){
            var $huadongy = window.scrollY;
            $huadongy -= 100;
            if($huadongy <= 0){
                clearInterval($timer);
            }
            window.scrollTo(0, $huadongy)
        },30);
    })

    //注册  验证码
    hhhh();
    function hhhh(){
        var xsuiji = function(){
            var mima = parseInt(Math.random()*34);
            return mima;
        }
        var zifu = "1234567890abcdefghijklmnopqrstuvwsyz";
        var xkk = [];
        for(var i=0;i<4;i++){
            var kkk = xsuiji();
            xkk.push(zifu.charAt(kkk));
        };
        var $xiao = xkk.join("");
        $("#yz_yy").val($xiao); 

        $("#yz_yanz").on("blur",function(){
            var $_xyanzheng = $("#yz_yanz").val();
            if($_xyanzheng != $("#yz_yy").val()){
                $("#yz_yanz").attr("placeholder","验证码错误！！！！");
                hhhh();
                $("#yz_yanz").val("");
            }
        })
    }
    $("#yz_yy").on("click",hhhh);
    
    //验证
    
        // 注册
    var $fal = $("#yz_user");
    var $pas = $("#yz_user1");
    var $con = $("#yz_user2");
    var $sub = $("#button");
    $.ajax({
        type : "GET",
        url : "../api/zuce.php",
        dataType : "json",
        success : function(data){
            $fal.on("blur",function(){
                var $_fal = $fal.val();
                if(!/^1[3-9]\d{9}$/i.test($_fal)){
                    alert("你的手机号码不满足条件");
                    $("#yz_user").val("");
                    return false;
                }
                var $shuzu = [];
                for(var i=0;i<data.length;i++){
                    $shuzu.push(data[i].uname);
                }
                if($shuzu.indexOf($_fal) != -1){                    
                    alert("用户名已存在");
                    $("#yz_user").val("");
                }
           })
        }
    })

    $con.on("blur",function(){
        if($pas.val() != $con.val()){
            $("#yz_user2").val("");
            alert("密码不一致");
        }
    })
    $sub.on("click",function(e){
        e.preventDefault();
        var _yanZm = $("#yz_yanz").val().trim();
        var _con = $con.val().trim();
        var _fal = $fal.val().trim();
        if(_con.length >= 6 && _fal.length >= 1 && _yanZm.length >0){
            $.ajax({
                type : "POST",
                url : "../api/zuce1.php",
                dataType : "text",
                data : {fal:_fal,con:_con},
                success : function(data){
                    alert("注册成功");
                    location.href = "denglu.html"

                    
                }
            })
        }else{alert("登录失败");}
    })
   
    

})
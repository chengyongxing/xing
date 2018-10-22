jQuery(function($){
    $('#footerBottom').load('../html/bottom.html',function(){
            console.log(777);
            });

    //用户名&密码
        admin();
    function admin(){
        var admin = Cookie.getCookie('admin');
        var $zhanghu = $(".top-nav-tool");
        if(admin === ''){
            let cii = `<li class="yg-card">
                        <span>
                            <a href="zuce.html" id="__AD_head_zhuce" rel="nofollow">
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
                            <a href="./denglu.html">
                                退出
                            </a>
                        </span>
                        |
                    </li>
                     `;
                $zhanghu.prepend(cii);
            }
             $($(".yg-card")[1]).on("click",function(e){
                if(e.target.tagName.toLowerCase()=="a");
                        Cookie.removeCookie('admin');
                        $($(".yg-card")[1]).remove();
                        $($(".yg-card")[0]).remove();
                        admin();
                
            })
        }
       
        //=====================================
        var $pass = $("#yz_user1");
        var $add = $("#yz_user");
        var $btn = $("#button");
        $btn.on("click",function(){
            event.preventDefault();
            var Yname = $add.val();
            var Ypass = $pass.val();
            $.ajax({
                type : "POST",
                url : "../api/denglu.php",
                data : {Yname : Yname,mima : Ypass},
                success : function(data){
                    console.log(data);
                    data==Yname? location.href = "../html/shangping.html": alert("登录失败"); 
                     Cookie.setCookie("admin",data);
                     admin();
                }
            })
            
        })




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

})
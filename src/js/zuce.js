jQuery(function($){
    $('#footerBottom').load('../html/bottom.html',function(){
            console.log(777);
            });

    //用户名&密码
    Cookie.setCookie("admin",12)
    admin();
    function admin(){
       var admin = Cookie.getCookie('admin');
        var $zhanghu = $(".top-nav-tool");
        if(admin === ''){
            let cii = `<li class="yg-card">
                        <span>
                            <a href="./html/denglu.html" id="__AD_head_zhuce" rel="nofollow">
                                注册
                            </a>
                        </span>|
                            </li>
                            <li class="yg-card">
                                <span>
                                    <a href="../html/denglu.html" id="__AD_head_denglu" rel="nofollow">
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
                            <a href="../index.html">
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
                    Cookie.removeCookie('admin');
                    $($(".yg-card")[1]).remove();
                    $($(".yg-card")[0]).remove();
                    admin();
            
        })
        //=====================================

})
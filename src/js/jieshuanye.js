jQuery(function($){

    $('#pageHeader').load('../html/top.html .top-nav.borbot',function(){
        $(".a-cart-c.a-sidebar").on("click",function(){
            location.href = "./car.html";
        })
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
                            <a href="./shangping.html">
                                退出
                            </a>
                        </span>
                        |
                    </li>`;
                    $zhanghu.prepend(cii);
                    $.ajax({
                        type : "get",
                        datatype : "json",
                        data : {admin :admin},
                        url : "../api/addcar.php",
                        success : function(data){
                            if(data != "[]"){
                                var Ydata = JSON.parse(data);
                                let ZZong = 0;
                                let SShu =0;
                                Ydata.forEach(function(item){
                                    // console.log(item);
                                    let xiaoji = (item.price-0)*(item.qty-0);
                                    ZZong += xiaoji;
                                    SShu += (item.qty-0);
                                    let hhh = `<div class="order_meg_con" >
                                            <div class="o_meg">
                                                <dl>
                                                    <dt>
                                                        <a href="#">
                                                            <img src="${item.img}">
                                                        </a>
                                                    </dt>
                                                    <dd>
                                                        <p class="o_m_tit">
                                                            <a href="#">
                                                                ${item.wenzi}
                                                            </a>
                                                        </p>
                                                        <p class="o_m_cor">
                                                            <span>
                                                                颜色:共同
                                                            </span>
                                                            <span>
                                                                规格:共同
                                                            </span>
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div class="o_price">
                                                <p class="o_price_num">
                                                    ¥
                                                    <i>
                                                        ${item.price}
                                                    </i>
                                                </p>
                                            </div>
                                            <div class="o_quantity">
                                                ×${item.qty}
                                            </div>
                                            <div class="o_sum">
                                                <p>
                                                    ¥
                                                    <i>
                                                        ${xiaoji}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>`;

                                    $(".order_form.c_clearfix").prepend(hhh);
                                })

                                $(".o_rt.Zong i").html("");
                                $(".o_rt.Zong i").html(ZZong);
                                $(".o_rt.o_paid .fi_paid").html("");
                                $(".o_rt.o_paid .fi_paid").html(ZZong);
                                $("#cart_num_2").html(SShu);

                            }
                        }
                    })

            }


            //点击退出
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
        }

    })

//点击提交订单返回到选择支付方式
    $(".c_clearfix.pt20 .submit_order").on("click",function(){
        var $timer = setInterval(function(){
            var $huadongy = window.scrollY;
            $huadongy -= 100;
            if($huadongy <= 450){
                clearInterval($timer);
            }
            window.scrollTo(0, $huadongy)
        },30);
    })
    




    $('#footerBottom').load('../html/bottom.html',function(){
            });

})

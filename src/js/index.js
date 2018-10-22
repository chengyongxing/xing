 jQuery(function($){
    //用户名&密码
    // Cookie.setCookie("admin",12)
    admin();
    function admin(){
       var admin = Cookie.getCookie('admin');
        var $zhanghu = $(".top-nav-tool");
        if(admin === ''){
            let cii = `<li class="yg-card">
                        <span>
                            <a href="./html/zuce.html" id="__AD_head_zhuce" rel="nofollow">
                                注册
                            </a>
                        </span>|
                            </li>
                            <li class="yg-card">
                                <span>
                                    <a href="./html/denglu.html" id="__AD_head_denglu" rel="nofollow">
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
                            <a href="./index.html">
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

        //购物车
    $(".mycart").on("mouseover",function(){
        $(".mycart .cart-bag").addClass("active");
        $(".mycart .cart-info").css("display","block");
    })
    $(".mycart").on("mouseout",function(){
        $(".mycart .cart-bag").removeClass("active");
        $(".mycart .cart-info").css("display","none");
    })

    //轮播图
    $(document).ready(function(e) {
        var unslider04 = $('#b04').unslider({
            dots: true
        }),
        data04 = unslider04.data('unslider');
         
        $('.unslider-arrow04').click(function() {
            var fn = this.className.split(' ')[1];
            data04[fn]();
        });
    });

    //商品
    $.ajax({
        url : 'api/index.php',
        data : {qty : 55},
        type : "GET",
        dataType: 'json',
        success : function(data){
            var $xul = $(".three_col460").children('ul');
            $(data.dataArr).each(function(idx,item){
                item.img = item.img.slice(3);
                let str = `<li data-minid="${item.id}">
                            <div class="three_box">
                                <a href="#" alt="${item.wenzi}" title="${item.subtit}">
                                    <div class="three_img_box">
                                        <img class="lazy-loading" src="${item.img}" data-original="java:void(0);"
                                        alt="${item.wenzi}" title="${item.subtit}">
                                    </div>
                                    <p class="three_box_tit c_clearfix">
                                        <em class="img_tit">
                                            ${item.wenzi}
                                        </em>
                                    </p>
                                    <p class="three_subtit">
                                        ${item.subtit}
                                    </p>
                                    <div class="three_yen">
                                        <span class="fl three_price">
                                            <i>
                                                &yen;
                                            </i>
                                            ${item.price}
                                        </span>
                                        <span class="fl sale_price">
                                            <p class="i_pos_abs">
                                            </p>
                                            <span class="fl five_star mt5">
                                            </span>
                                            <span class="or_p">
                                                平日价
                                            </span>
                                            <em class="line_price">
                                                <i>
                                                    &yen;
                                                </i>
                                                ${item.linePrice}
                                            </em>
                                        </span>
                                        <span class="fr purchased">
                                            <i>
                                                ${item.purchased}
                                            </i>
                                            人已购买
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div class="tax_box_bt">
                            </div>
                        </li>`
                $xul.append(str);
            })
            chuna();//先执行一次
              // 点击其中一个商品传递到详情页
              function chuna(){
                  var chuandi = $(".three_box").closest("li");
                   var params = "";
                    for(var n=0;n<chuandi.length;n++){
                            chuandi[n].index = n; 
                            chuandi[n].onclick = function(){
                                n = this.index ;
                                for(var key in data.dataArr[n]){
                                    params += key + "=" + data.dataArr[n][key] + "&";
                                }
                                params = params.slice(0,-1);
                                location.href = "html/xiangqingye.html?" + encodeURI(params);
                        }
                    }
              }

        }
    })

    //侧边用户  购物车
    cebian();
    function cebian(){
       var admin = Cookie.getCookie('admin');
        var $xslideLogin = $(".sidebarcom-hover .slide-login");
        if(admin === ''){
            let cii = `<a href="#" class="slide-pic">
                        <img alt="" src="picture/72x72.jpg" width="72" height="72" />
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
                                    <img alt="" src="picture/72x72.jpg" width="72" height="72" />
                                </a>
                                <p class="slide-login-btn">
                                    <span>
                            欢迎您 ， ${admin}
                        </span><a href="./index.html">
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
    
 jQuery(function($){
    $("#guding input").on("click",function(){
        location.href = "./html/car.html";
    })
    $(".a-cart-c.a-sidebar").on("click",function(){
        location.href = "./html/car.html";
    })
    var data = Cookie.setCookie("xinXi",data);
    Cookie.removeCookie("xinXi",data,"/git/xing/src/html");
                                    
    //用户名&密码
    // Cookie.setCookie("admin",12)
    admin();
            function admin(){
               var admin = Cookie.getCookie('admin');
               // console.log(admin);
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
                                </li>`;
                        $zhanghu.prepend(cii);

                        $.ajax({
                            type : "get",
                            datatype : "json",
                            data : {admin :admin},
                            url : "api/addcar.php",
                            success : function(data){
                                if(data != ""){
                                    //把商品存进cookie，详情页时用
                                    // console.log(data);
                                    Cookie.removeCookie("xinXi");
                                    Cookie.setCookie("xinXi",data);
                                    //
                                    let jiage =0;
                                    let shulian = 0;
                                    var Ydata = JSON.parse(data);
                                    Ydata.forEach(function(item){
                                         jiage += (item.price-0)*(item.qty-0);
                                        item.img = item.img.slice(3);
                                        
                                         shulian += (item.qty-0);
                                         let str = `<div class="dadada clearfix">
                                                        <span class="immg"><img src = "${item.img}"/></span>
                                                        <span class="dmmg">${item.wenzi}</span>
                                                        <span class="pmmg">￥${item.price}x${item.qty}</span>
                                                    </div>

                                                    `
                                        $("#cartlist").append(str);
                                        $("#cartlist .none_cart").remove();
                                        $("#guding").css("display","block");

                                    })
                                    $("#guding").children().first().html(shulian);
                                    $("#guding").children("span").last().html(jiage);
                                    $("#cart_num_2").html(shulian);
                                    $("#cart_num_1").html(shulian);

                                }
                                
                            }
                        })
                    }
                }
                //点击退出当前用户
                $($(".yg-card")[1]).on("click",function(e){
                        if(e.target.tagName.toLowerCase()=="a");
                            var admin = Cookie.getCookie('admin');
                            Cookie.removeCookie('admin',admin,"/");
                            $($(".yg-card")[1]).remove();
                            $($(".yg-card")[0]).remove();
                            // admin();
                    
                })
                if($("#guding").children().first().html()==""){
                    $("#guding").css("display","none");
                }else{
                    $("#guding").css("display","block");
                }


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
    // $(document).ready(function(e) {
    //     var unslider04 = $('#b04').unslider({
    //         dots: true
    //     }),
    //     data04 = unslider04.data('unslider');
         
    //     $('.unslider-arrow04').click(function() {
    //         var fn = this.className.split(' ')[1];
    //         data04[fn]();
    //     });
    // });

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
                                data.dataArr[n]["img"] = "../" + data.dataArr[n]["img"];
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

//头部搜索框
    //输入时
    var $baidu = $("#sch_in");
    var $ul = $(".houlai");
    $baidu.on("input",function(){
        var _baidu = $baidu.val();
        window.$ul = function(data){
            // console.log(data);
            data.s.map(function(item){
               var sty = `<li>${item}</li>`;
                $ul.append(sty);
            });
        }
        clearTimeout($baidu.timer);
        $baidu.timer = setTimeout(function(){
            var script = document.createElement("script");
            script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&cb=$ul&wd="+_baidu;
            document.body.appendChild(script);
        },200)
        $ul.html("");
    })
    // 失去焦点清空li
    $baidu.on("change",function(){
        clearTimeout($baidu.timer);
        $baidu.timer = setTimeout(function(){
            $ul.html("");
        },200)
    })
    
    //点击添加
    let ull = $("form .l");
    ull.on("click",function(e){
        if(e.target.tagName == "LI"){
            let kkkkkkk = $(e.target).html();
            $ul.html("");
            $baidu.val(kkkkkkk);
        }else{
            $ul.html("");
        }
    })

    
})
    
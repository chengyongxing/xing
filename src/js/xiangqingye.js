jQuery(function($){
     $('#pageHeader').load('../html/top.html',function(){
            $("#guding input").on("click",function(){
                location.href = "./car.html";
            })
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
                                    <a href="../index.html">
                                        退出
                                    </a>
                                </span>
                                |
                            </li>
                             `;
                        $zhanghu.prepend(cii);

                        var xinXi = Cookie.getCookie('xinXi');
                        var YxinXi = JSON.parse(xinXi);
                        var jiage = 0;
                        var shulian = 0;
                        YxinXi.forEach(function(item){
                            jiage += (item.price-0)*(item.qty-0);
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
                $($(".yg-card")[1]).on("click",function(e){
                        if(e.target.tagName.toLowerCase()=="a");
                            var admin = Cookie.getCookie('admin');
                            Cookie.removeCookie('admin',admin,"/");
                            $($(".yg-card")[1]).remove();
                            $($(".yg-card")[0]).remove();
                            admin();
                    
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

                //
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
            });

 $('#footerBottom').load('../html/bottom.html',function(){
            });
// ==============================
// 
// 


//获取参数
    var params = decodeURI(location.search).slice(1); 
    var paramsArr = params.split("&");
    var paramsObj = {};
    paramsArr.forEach(function(item){
        var arr = item.split("=");
        paramsObj[arr[0]] = arr[1];
    });
    // console.log(paramsObj);


//==========渲染========
    $('<span>"'+paramsObj.wenzi+'"</span>').appendTo($('.sh-crumbs'));
    $('<span>"'+paramsObj.wenzi+'"</span>').appendTo($(".sh-goods-parameters h1"));
    $('<span>"'+paramsObj.subtit+'"</span>').appendTo($(".sh-goods-parameters .description"));
    $('<span class="price" alt="'+paramsObj.price+'" id="rel_price"><i>￥</i>'+paramsObj.price+'</span>').appendTo($(".price-box .mb"));

    ($("#preview .jqzoom img")).attr("src",""+paramsObj.img+"");

    for(var i=1;i<4;i++){
        $('<li><img alt="'+paramsObj.wenzi
+'" title="'+paramsObj.subtit+'" src="'+paramsObj.img+'"/></li>').prependTo($(".items ul"));
    }


    $(".items").on("click",function(e){
        if(e.target.tagName == "IMG"){
            let lin = $(e.target).attr("src");
            ($("#preview .jqzoom img")).attr("src","");
            ($("#preview .jqzoom img")).attr("src",""+lin+"");
        }
    })
//高亮
    $(".items ul").children('li').first().addClass('active');
    $(".items ul").on("mouseover",function(e){
        $(".items ul li").removeClass('active');
        if(e.target.tagName == "IMG"){
            $(e.target).closest("li").addClass("active");
        }
    })



    //qty  避免点一次相当于点几次情况unbind('click').bind("click"
    // console.log($("#goodsNumber .box"))
    let nmm = $("#goodsNumber .box #lessBtn").next().val();
    if(nmm <= 1){
        $("#goodsNumber .box #lessBtn").addClass("limit");
    }else{
        $("#goodsNumber .box #lessBtn").removeClass("limit");
    }
    $("#goodsNumber .box").unbind('click').bind("click",function(e){
        let Num;
        if(e.target.className == "hh"){
            Num = $(e.target).next().val();
            if(Num <= 2){
                $(e.target).addClass("limit");
            }
            Num--;
            $(e.target).next().attr("value",""+Num+"");
        }
        if(e.target.className == ""){
            Num = $(e.target).prev().val();
            if(Num >= 1){
                $("#goodsNumber .box #lessBtn").removeClass("limit");
            }
            Num++;
            $(e.target).prev().attr("value",""+Num+"");
        }
    })

// =======================点击添加到购物车=======
    $(".sh-shopping-cart").on("click",function(){
                        //加入购物车动画
        let $fuzi = $(".jqzoom").children("img").first().clone();
        $fuzi.prependTo($(".jqzoom"));
        $fuzi.addClass("clone-img");
        var $weishao = $(".jqzoom").offset();
        var $weidao = $(".a-cart-c.a-sidebar").offset();
        console.log($weidao);
        $fuzi.animate({left:$weidao.left-150,top:$weidao.top-200,width:0,height:0},1000,function(){
            $fuzi.remove();
        })

//用cookie原因，免得每次添加商品时要写入数据库同时读取数据库渲染，增加请求次数
        let admin = Cookie.getCookie('admin');
        if(admin == ""){
            alert("请先登录");
        }else{
            let qty = $("#goodsNumber .box #lessBtn").next().val() -0;
            paramsObj["qty"]=qty;
            //查看cookie里的有没有这个商品
            let kkk = JSON.parse(Cookie.getCookie("xinXi"));
            let iii = [];
            kkk.forEach(function(item){
                iii.push(item.id);
            })
            //有这个商品则数量相加
            if(iii.indexOf(paramsObj.id) != -1){
                kkk.forEach(function(item){
                    if(item.id==paramsObj.id){
                        item.qty = (item.qty-0)+(paramsObj.qty-0);
                        let bbb = JSON.stringify(kkk);
                        Cookie.setCookie("xinXi",bbb);
                    }
                })
            }else{
                //没有则把商品信息添加到购物车
                kkk.push(paramsObj);
                let bbb = JSON.stringify(kkk);
                Cookie.setCookie("xinXi",bbb);
            }
            //先把之前的div移除，重新渲染
            $(".dadada").remove();
            var jiage1 = 0;
            var shulian1 = 0;
            kkk.forEach(function(item){
                jiage1 += (item.price-0)*(item.qty-0);
                 shulian1 += (item.qty-0);
                 let str = `<div class="dadada clearfix">
                                <span class="immg"><img src = "${item.img}"/></span>
                                <span class="dmmg">${item.wenzi}</span>
                                <span class="pmmg">￥${item.price}x${item.qty}</span>
                            </div>`
                $("#cartlist").append(str);
                $("#cartlist .none_cart").remove();
                $("#guding").css("display","block");

            })
            $("#guding").children().first().html(shulian1);
            $("#guding").children("span").last().html(jiage1);
            $("#cart_num_2").html(shulian1);
            $("#cart_num_1").html(shulian1);
            
            // admin();
            // console.log(kkk)
            //写入数据库
            $.ajax({
                type : "GET",
                url : "../api/xiangqingye.php",
                data : {admin:admin,id:paramsObj["id"],qty:qty,img:paramsObj["img"],wenzi:paramsObj["wenzi"],subtit:paramsObj["subtit"],price:paramsObj["price"],linePrice:paramsObj["linePrice"],purchased:paramsObj["purchased"],timer:paramsObj["timer"]},
                dataType : "json",
                success : function(data){
                    if(data == true){
                        console.log("添加商品成功！");
                    }
                }
            })
        }
        
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
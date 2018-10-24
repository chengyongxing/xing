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
                if(admin === '' || admin == undefined){
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
                                if(data != ""){
                                    let jiage =0;
                                    let shulian = 0;
                                    var Ydata = JSON.parse(data);
                                    Ydata.forEach(function(item){
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
                        })
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
//========头部结束=============
    //商品分类头部，移动时高亮
    $(".menu-icon").on("mouseover",function(){
        $(this).children('.iconimghover').addClass("active");
        let $xunhuan = $(this).closest(".listthemone.l").siblings();
        $xunhuan.each(function(idx,item){
           $(item).children().first().children().last().removeClass('active');
        })

    })

    $(".classify-menu.border1").on("mouseout",function(){
        $(".menu-icon").children('.iconimghover').removeClass("active");
    })

    $(".menu-icon").on("mouseover",function(){
        $(this).children('.iconimghover').addClass("active");
        let $xunhuan = $(this).closest(".listthemone.l").siblings();
        $xunhuan.each(function(idx,item){
           $(item).children().first().children().last().removeClass('active');
        })
    })
    //点击高亮
    $(".menu-icon").on("click",function(){
        $(this).children('.iconimghover').css("display","block");
        let $xunhuan = $(this).closest(".listthemone.l").siblings();
        $xunhuan.each(function(idx,item){
           $(item).children().first().children().last().css('display','none');
        })

    })



    //商品
    function danchu(){
        let $Aa = $(".left_p").find("a");
        $Aa.each(function(idx,item){
            $(item).removeClass('p_now');
        })
    }
    $(".pagelist").on("click",function(e){
        if(e.target.tagName == "A"){
            danchu();
            let curpage = $(e.target).html();
            $(e.target).addClass("p_now");
            shuanyan(curpage);
        }
    })
    $(".left_p").on("click",function(e){
        if(e.target.className == "last_page l mgr5"){
            danchu();
            let curpage = 1;
            $(e.target).addClass("p_now");
            $(e.target).next().children().first().addClass('p_now');
            shuanyan(curpage);
        }
        if(e.target.className == "last_page"){
            danchu();
            let curpage = 4;
            $(e.target).addClass("p_now");
            $(e.target).prev().children().last().addClass("p_now");
            shuanyan(curpage);
        }
    })
    shuanyan(1);

    function shuanyan(Acurpage){
        var $xul = $("#goodslist_div");
        $xul.html("");
        $.ajax({
            url : '../api/index.php',
            data : {qty : 23,curpage :Acurpage},
            type : "GET",
            dataType: 'json',
            success : function(data){
                $(data.dataArr).each(function(idx,item){
                    let str = `<div class="pruwrap" style="z-index: 1;" data-minid="${item.id}">
                                    <dl class="pruwrapdl mg1">
                                        <dt>
                                            <div class="goodsphoto">
                                                <a href="#">
                                                    <img src="${item.img}">
                                                </a>
                                            </div>
                                        </dt>
                                        <dd class="goods-tittle">
                                            <a href="#">
                                                ${item.wenzi}
                                            </a>
                                        </dd>
                                        <dd class="goods-picmass pdl16">
                                            <div class="l price">
                                                <div class="fl now-price">
                                                    <span>
                                                        ￥
                                                    </span>
                                                    ${item.price}
                                                </div>
                                            </div>
                                            <div class="r review">
                                                评论
                                                <a href="#">
                                                    ${item.purchased}
                                                </a>
                                                条
                                            </div>
                                        </dd>
                                        <dd class="goods-discuss" style="display: block;">
                                            <h4 class="discuss-tit">
                                                会员评价：
                                            </h4>
                                            <p class="discuss-con">
                                                <span class="str">
                                                    买了两次了，很香，其它的效果有待考...
                                                </span>
                                            </p>
                                        </dd>
                                    </dl>
                                </div>`
                    $xul.append(str);
                })
                chuna(data);//先执行一次
                  // 点击其中一个商品传递到详情页
                  
            }
        })
    }
    function chuna(data){
          var chuandi = $(".pruwrap");
           var params = "";
            for(var n=0;n<chuandi.length;n++){
                    chuandi[n].index = n; 
                    chuandi[n].onclick = function(){
                        n = this.index ;
                        for(var key in data.dataArr[n]){
                            params += key + "=" + data.dataArr[n][key] + "&";
                        }
                        params = params.slice(0,-1);
                        location.href = "../html/xiangqingye.html?" + encodeURI(params);
                }
            }
      }
    $("#goodslist_div").on("mouseover",function(e){
        if(e.target.tagName=="IMG"||e.target.tagName=="DD"||e.target.tagName=="DT"||e.target.tagName=="A"||e.target.tagName=="H4"){
            $(e.target).closest(".pruwrapdl").removeClass('mg1');
            $(e.target).closest(".pruwrapdl").addClass('mg0');
            $(e.target).closest(".pruwrapdl").addClass('hoverdl');
            $(e.target).closest(".pruwrapdl").closest(".pruwrap").css("z-index",4);
        }
    })
     $("#goodslist_div").on("mouseout",function(e){
        if(e.target.tagName=="IMG"||e.target.tagName=="DD"||e.target.tagName=="DT"||e.target.tagName=="A"||e.target.tagName=="H4"){
            $(e.target).closest(".pruwrapdl").addClass('mg1');
            $(e.target).closest(".pruwrapdl").removeClass('mg0');
            $(e.target).closest(".pruwrapdl").removeClass('hoverdl');
            $(e.target).closest(".pruwrapdl").closest(".pruwrap").css("z-index",1);
        }
    })

   //点击升序，降序 
    let cheshi = true;      
    $($(".nav-sorting-list li")[4]).unbind('click').bind("click",function(){
        if(cheshi == true){
            var $xul = $("#goodslist_div");
            $xul.html("");
            $.ajax({
                url : '../api/index.php',
                data : {qty : 23,curpage :1},
                type : "GET",
                dataType: 'json',
                success : function(data){
                    let shij = data.dataArr.sort(function(a,b){
                          return  Date.parse(b.timer) - Date.parse(a.timer);
                      });
                    $(shij).each(function(idx,item){
                        let str = `<div class="pruwrap" style="z-index: 1;" data-minid="${item.id}">
                                        <dl class="pruwrapdl mg1">
                                            <dt>
                                                <div class="goodsphoto">
                                                    <a href="#">
                                                        <img src="${item.img}">
                                                    </a>
                                                </div>
                                            </dt>
                                            <dd class="goods-tittle">
                                                <a href="#">
                                                    ${item.wenzi}
                                                </a>
                                            </dd>
                                            <dd class="goods-picmass pdl16">
                                                <div class="l price">
                                                    <div class="fl now-price">
                                                        <span>
                                                            ￥
                                                        </span>
                                                        ${item.price}
                                                    </div>
                                                </div>
                                                <div class="r review">
                                                    评论
                                                    <a href="#">
                                                        ${item.purchased}
                                                    </a>
                                                    条
                                                </div>
                                            </dd>
                                            <dd class="goods-discuss" style="display: block;">
                                                <h4 class="discuss-tit">
                                                    会员评价：
                                                </h4>
                                                <p class="discuss-con">
                                                    <span class="str">
                                                        买了两次了，很香，其它的效果有待考...
                                                    </span>
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>`
                        $xul.append(str);
                    })
                    chuna(data);//先执行一次
                      // 点击其中一个商品传递到详情页
                }
            })
            cheshi = !cheshi;
            return cheshi;            
        }
        if(cheshi ==false){
            var $xul = $("#goodslist_div");
            $xul.html("");
            $.ajax({
                url : '../api/index.php',
                data : {qty : 23,curpage :1},
                type : "GET",
                dataType: 'json',
                success : function(data){
                    let shij = data.dataArr.sort(function(a,b){
                          return Date.parse(a.timer) - Date.parse(b.timer);
                      });
                    console.log(shij)
                    $(shij).each(function(idx,item){
                        let str = `<div class="pruwrap" style="z-index: 1;" data-minid="${item.id}">
                                        <dl class="pruwrapdl mg1">
                                            <dt>
                                                <div class="goodsphoto">
                                                    <a href="#">
                                                        <img src="${item.img}">
                                                    </a>
                                                </div>
                                            </dt>
                                            <dd class="goods-tittle">
                                                <a href="#">
                                                    ${item.wenzi}
                                                </a>
                                            </dd>
                                            <dd class="goods-picmass pdl16">
                                                <div class="l price">
                                                    <div class="fl now-price">
                                                        <span>
                                                            ￥
                                                        </span>
                                                        ${item.price}
                                                    </div>
                                                </div>
                                                <div class="r review">
                                                    评论
                                                    <a href="#">
                                                        ${item.purchased}
                                                    </a>
                                                    条
                                                </div>
                                            </dd>
                                            <dd class="goods-discuss" style="display: block;">
                                                <h4 class="discuss-tit">
                                                    会员评价：
                                                </h4>
                                                <p class="discuss-con">
                                                    <span class="str">
                                                        买了两次了，很香，其它的效果有待考...
                                                    </span>
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>`
                        $xul.append(str);
                    })
                    chuna(data);//先执行一次
                      // 点击其中一个商品传递到详情页
                }
            })
            cheshi = !cheshi;
            return cheshi;
        }
    })



    

    let cheshi1 = true;      
    $($(".nav-sorting-list li")[5]).unbind('click').bind("click",function(){
        if(cheshi1 == true){
            var $xul = $("#goodslist_div");
            $xul.html("");
            $.ajax({
                url : '../api/index.php',
                data : {qty : 23,curpage :1},
                type : "GET",
                dataType: 'json',
                success : function(data){
                    let shij = data.dataArr.sort(function(a,b){
                          return  Date.parse(b.price) - Date.parse(a.price);
                      });
                    $(shij).each(function(idx,item){
                        let str = `<div class="pruwrap" style="z-index: 1;" data-minid="${item.id}">
                                        <dl class="pruwrapdl mg1">
                                            <dt>
                                                <div class="goodsphoto">
                                                    <a href="#">
                                                        <img src="${item.img}">
                                                    </a>
                                                </div>
                                            </dt>
                                            <dd class="goods-tittle">
                                                <a href="#">
                                                    ${item.wenzi}
                                                </a>
                                            </dd>
                                            <dd class="goods-picmass pdl16">
                                                <div class="l price">
                                                    <div class="fl now-price">
                                                        <span>
                                                            ￥
                                                        </span>
                                                        ${item.price}
                                                    </div>
                                                </div>
                                                <div class="r review">
                                                    评论
                                                    <a href="#">
                                                        ${item.purchased}
                                                    </a>
                                                    条
                                                </div>
                                            </dd>
                                            <dd class="goods-discuss" style="display: block;">
                                                <h4 class="discuss-tit">
                                                    会员评价：
                                                </h4>
                                                <p class="discuss-con">
                                                    <span class="str">
                                                        买了两次了，很香，其它的效果有待考...
                                                    </span>
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>`
                        $xul.append(str);
                    })
                    chuna(data);//先执行一次
                      // 点击其中一个商品传递到详情
                }
            })
            cheshi1 = !cheshi1;
            return cheshi1;            
        }
        if(cheshi1 ==false){
            var $xul = $("#goodslist_div");
            $xul.html("");
            $.ajax({
                url : '../api/index.php',
                data : {qty : 23,curpage :1},
                type : "GET",
                dataType: 'json',
                success : function(data){
                    let shij = data.dataArr.sort(function(a,b){
                          return Date.parse(a.price) - Date.parse(b.price);
                      });
                    $(shij).each(function(idx,item){
                        let str = `<div class="pruwrap" style="z-index: 1;" data-minid="${item.id}">
                                        <dl class="pruwrapdl mg1">
                                            <dt>
                                                <div class="goodsphoto">
                                                    <a href="#">
                                                        <img src="${item.img}">
                                                    </a>
                                                </div>
                                            </dt>
                                            <dd class="goods-tittle">
                                                <a href="#">
                                                    ${item.wenzi}
                                                </a>
                                            </dd>
                                            <dd class="goods-picmass pdl16">
                                                <div class="l price">
                                                    <div class="fl now-price">
                                                        <span>
                                                            ￥
                                                        </span>
                                                        ${item.price}
                                                    </div>
                                                </div>
                                                <div class="r review">
                                                    评论
                                                    <a href="#">
                                                        ${item.purchased}
                                                    </a>
                                                    条
                                                </div>
                                            </dd>
                                            <dd class="goods-discuss" style="display: block;">
                                                <h4 class="discuss-tit">
                                                    会员评价：
                                                </h4>
                                                <p class="discuss-con">
                                                    <span class="str">
                                                        买了两次了，很香，其它的效果有待考...
                                                    </span>
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>`
                        $xul.append(str);
                    })
                    chuna(data);//先执行一次
                      // 点击其中一个商品传递到详情页
                      
                }
            })
            cheshi1 = !cheshi1;
            return cheshi1;
        }
    })
        
    








         $('#footerBottom').load('../html/bottom.html',function(){
            });



     
   })
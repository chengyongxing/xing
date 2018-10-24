jQuery(function($){
    $('#pageHeader').load('../html/top.html .top-nav.borbot',function(){
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
                                    Ydata.forEach(function(item){
                                        // console.log(item);
                                        let xiaoji = (item.price-0)*(item.qty-0);
                                        let hhh = `<tr data-id="${item.id}">
                                                    <td><input type="checkbox" name="check"></td>
                                                    <td><img src="${item.img}"/></td>
                                                    <td>${item.wenzi}</td>
                                                    <td class="jiaGe">${item.price}</td>
                                                    <td id="goodsNumber"><div class="box"> 
                                                         <a href="javascript:;" id="lessBtn" class="hh">-</a> 
                                                         <input class="l" id="goodsNumberInput" type="text" value="${item.qty}" /> 
                                                         <a href="javascript:;" id="addBtn" class="">+</a> 
                                                        </div>
                                                    </td>
                                                    <td>￥<span class="XIAOJI">${xiaoji}</td>
                                                    <td><span class="tong">&times;</span></td>
                                                </tr>`;
                                        $("#gouwu tbody").prepend(hhh);
                                        // ==========功能========================================
                                            let li = $("#gouwu tbody tr");
                                            for(let i=0;i<li.length-2;i++){
                                                let nmm = $(li[i]).find("#goodsNumber .box #lessBtn").next().val();
                                                if(nmm <= 1){
                                                    $(li[i]).find("#goodsNumber .box #lessBtn").addClass("limit");
                                                }else{
                                                    $(li[i]).find("#goodsNumber .box #lessBtn").removeClass("limit");
                                                }
                                                //点击增减
                                                $(li[i]).find("#goodsNumber .box").unbind('click').bind("click",function(e){
                                                    let Num;
                                                    if(e.target.className == "hh"){
                                                        Num = $(e.target).next().val();
                                                        if(Num < 3){
                                                            $(e.target).addClass("limit");
                                                        }
                                                        Num--;
                                                        $(e.target).next().attr("value",""+Num+"");
                                                    }
                                                    if(e.target.className == ""){
                                                        Num = $(e.target).prev().val();
                                                        if(Num >= 1){
                                                            $(li[i]).find("#goodsNumber .box #lessBtn").removeClass("limit");
                                                        }
                                                        Num++;
                                                        $(e.target).prev().attr("value",""+Num+"");
                                                    }
                                                    if(typeof(Num)=="number"){
                                                        $(li[i]).find(".XIAOJI").html("");
                                                        let oo = $(li[i]).find(".jiaGe").html();
                                                        let hhhhhhh = Num * (oo-0);
                                                        $(li[i]).find(".XIAOJI").html(hhhhhhh);
                                                    }
                                                    panduan2();
                                                })
                                                //内容改变时
                                                $(li[i]).find("#goodsNumberInput").on("change",function(){
                                                    let oo = $(this).closest("tr").find(".jiaGe").html();
                                                    let rr = $(this).val();
                                                    let or = (oo-0)*(rr-0);
                                                    $(this).closest("tr").find(".XIAOJI").html("");
                                                    $(this).closest("tr").find(".XIAOJI").html(or);
                                                    panduan2();
                                                })
                                                //全选
                                                var $yiInput = $(":checkbox").filter(".all");
                                                var $waiInput = $(":checkbox").not(".all");
                                                $yiInput.unbind('click').bind("click",function(){
                                                    let zoNg = 0;
                                                    let zShu = 0;
                                                    $yiInput.prop("checked",this.checked);
                                                    $waiInput.prop("checked",this.checked);
                                                    if(this.checked){
                                                        $waiInput.each(function(idx,item){
                                                            var zonG = $(item).closest("tr").find(".XIAOJI").html();
                                                            zoNg += (zonG-0);
                                                            var zshU = $(item).closest("tr").find("#goodsNumberInput").val();
                                                            zShu+= (zshU-0);

                                                        })
                                                    }
                                                    $(".bb span").html("");
                                                    $(".bb span").html(zoNg);
                                                    $(".bbbb span").html("");
                                                    $(".bbbb span").html(zoNg);
                                                    $(".cccc span").html("");
                                                    $(".cccc span").html(zShu);

                                                })
                                                //判断
                                                function panduan(){
                                                    var len = $waiInput.length;
                                                    var checkedLen = $waiInput.filter(":checked").length;
                                                    if(len == checkedLen){
                                                        $yiInput.prop("checked",true);
                                                    }else{
                                                        $yiInput.prop("checked",false);

                                                    }
                                                }
                                                panduan2();
                                                function panduan2(){
                                                    let zoNg2 = 0;
                                                    let zShu2 = 0;
                                                    for(let i=0;i<$waiInput.filter(":checked").length;i++){
                                                        var jdong = $waiInput.filter(":checked")[i];
                                                        var zongG2 = $(jdong).closest("tr").find(".XIAOJI").html();
                                                        var zongS2 = $(jdong).closest("tr").find("#goodsNumberInput").val();
                                                        zoNg2 += (zongG2-0);
                                                        zShu2+= (zongS2-0);
                                                    }
                                                    $(".bb span").html("");
                                                    $(".bb span").html(zoNg2);
                                                    $(".bbbb span").html("");
                                                    $(".bbbb span").html(zoNg2);
                                                    $(".cccc span").html("");
                                                    $(".cccc span").html(zShu2);
                                                }
                                                
                                                //点击判断
                                                // let Zongg = 0;
                                                // let Zongs = 0;
                                                $waiInput.unbind('click').bind("click",function(){
                                                    // var zongG = $(this).closest("tr").find(".XIAOJI").html();
                                                    // var zongS = $(this).closest("tr").find("#goodsNumberInput").val();
                                                    // let zhenZong = $(".bb span").html();
                                                    // let zhenShu = $(".cccc span").html();
                                                    // if(this.checked){
                                                    //     var xiez = (zhenZong-0)+(zongG-0);
                                                    //     var xies =(zhenShu-0)+(zongS-0);
                                                    //     $(".bb span").html("");
                                                    //     $(".bb span").html(xiez);
                                                    //     $(".bbbb span").html("");
                                                    //     $(".bbbb span").html(xiez);
                                                    //     $(".cccc span").html("");
                                                    //     $(".cccc span").html(xies);
                                                    // }else{
                                                    //     var xiez1 = (zhenZong-0)-(zongG-0);
                                                    //     var xies1 =(zhenShu-0)-(zongS-0);
                                                    //     $(".bb span").html("");
                                                    //     $(".bb span").html(xiez1);
                                                    //     $(".bbbb span").html("");
                                                    //     $(".bbbb span").html(xiez1);
                                                    //     $(".cccc span").html("");
                                                    //     $(".cccc span").html(xies1);
                                                    // }
                                                    panduan2();
                                                    panduan();
                                                })
                                                //删除
                                                $(".datalist").unbind('click').bind("click",function(e){
                                                    if(e.target.className == "tong"){
                                                        let ID = $(e.target).closest("tr").attr("data-id");
                                                        let admin = Cookie.getCookie('admin');
                                                        $.ajax({
                                                            type : "GET",
                                                            url : "../api/removecar.php",
                                                            data : {admin:admin,id:ID},
                                                            success :function(data){
                                                                location.href="./car.html";
                                                            }
                                                        })

                                                    }
                                                    if(e.target.className == "sahnchu1"){
                                                        let admin = Cookie.getCookie('admin');
                                                        $.ajax({
                                                            type : "GET",
                                                            url : "../api/removecar.php",
                                                            data : {admin:admin},
                                                            success :function(data){
                                                                location.href="./car.html";
                                                            }
                                                        })
                                                    }
                                                })


                                                console.log($(li[i]).attr("data-id"))
                                                //点击更新数据库
                                                
                                                
                                            }

                                    })
                                }else{
                                    $("#gouwu h2").html("购物车空空如也！！！！");
                                }
                            }
                        })
                    }
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
                //点击数量变化
                
                
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
// =======================================top===============



   $('#footerBottom').load('../html/bottom.html',function(){
            });
 

})
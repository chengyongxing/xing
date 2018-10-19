window.onload = function(){
    var news = document.getElementsByClassName("xxsqj")[0];
    var shuchu1 = document.getElementsByClassName("xainshi1")[0];
    var shuchu2 = document.getElementsByClassName("xainshi2")[0];
    var xli = news.children;

    var xbtn = document.getElementById("xbtn");
    var xdingwei = document.getElementsByClassName("xdingwei")[0];
    
    function xianshi(){
        shuchu1.style.display = "none";
        shuchu2.style.display = "none";
        xdingwei.style.display = "none";
        for(var i=0;i<xli.length;i++){
            var p = xli[i].children;
            p[1].onmouseover = function(e){
                shuchu1.style.display = "block";
            };
            var ox = (window.innerWidth - 980)/2;
            p[1].onmousemove = function(e){
                shuchu1.style.left = e.clientX - ox + 'px';
            };
            p[1].onmouseout = function(){
                shuchu1.style.display = "none";
            };
            p[2].onmouseover = function(e){
                shuchu2.style.display = "block";
            };
            var ox = (window.innerWidth - 980)/2;
            p[2].onmousemove = function(e){
                shuchu2.style.left = e.clientX - ox + 'px';
            };
            p[2].onmouseout = function(){
                shuchu2.style.display = "none";
            };
        }
        xbtn.onmouseover = function(){
            xdingwei.style.display = "block";
        }
        xbtn.onmouseout = function(){
            xdingwei.style.display = "none";
        }
    }
    xianshi();

    // ============================================
    var data = [{
                id:'001',
                imgurl:'../images/rEditCart01.png',
                name:'Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee',
                color:"BLACK",
                size:"Default",
                qty:3,
                price:1470.00
                },{
                id:'002',
                imgurl:'../images/rEditCart02.png',
                name:'Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee',
                color:"BLACK",
                size:"Default",
                qty:3,
                price:1470.00
                },{
                id:'003',
                imgurl:'../images/rEditCart03.png',
                name:'Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee',
                color:"BLACK",
                size:"Default",
                qty:3,
                price:1470.00
                },{
                id:'004',
                imgurl:'../images/rEditCart04.png',
                name:'Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee',
                color:"BLACK",
                size:"Default",
                qty:3,
                price:1470.00
                
    }];
        var totallist_c= document.getElementById("totallist_c");
        var str = '<h3>Edit Cart</h3><ul>';
        str += data.map(function(item){
            return '<li class="clearfix" data-id="'+item.id+'">'
                +'<div class="fl"><img src="'+item.imgurl+'"></div>'
                + '<div class="fr"><h4>'+item.name+'</h4>'
                + '<p class="price">Color：'+item.color+'</p>'
                + '<p class="price">Size：<span>'+item.size+'</span></p>'
                + '<p class="price">Qty：'+item.qty+'</p>'
                + '<p class="price">Price：<span>$ '+item.price+'</span></p></div>'
                + '</li>';
        }).join("");
        str += '</ul>';
        totallist_c.innerHTML = str;
        //商品结算列表2
        var data2 = [{
                id:'001',
                imgurl:'../images/rEditPack01.png',
                name:'Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee',
                color:"BLACK",
                size:"Default",
                qty:3,
                price:1470.00
                },{
                id:'002',
                imgurl:'../images/rEditPack02.png',
                name:'Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee',
                color:"BLACK",
                size:"Default",
                qty:3,
                price:1470.00
                },{
                id:'003',
                imgurl:'../images/rEditPack03.png',
                name:'Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee',
                color:"BLACK",
                size:"Default",
                qty:3,
                price:1470.00
                },{
                id:'004',
                imgurl:'../images/rEditPack04.png',
                name:'Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee',
                color:"BLACK",
                size:"Default",
                qty:3,
                price:1470.00
                
    }];
        var totallist_b= document.getElementById("totallist_b");
        var str = '<p>'+'<h3>Package Products</h3><span>Qty:1</span><span style="color:red;">Price:$258.89</span>'+'</p><ul>';
        str += data2.map(function(item){
            return '<li class="clearfix" data2-id="'+item.id+'">'
                +'<div class="fl"><img src="'+item.imgurl+'"></div>'
                + '<div class="fr"><h4>'+item.name+'</h4>'
                + '<p class="price">Color：'+item.color+'</p>'
                + '<p class="price">Size：<span>'+item.size+'</span></p>'
                + '<p class="price">Qty：'+item.qty+'</p>'
                + '<p class="price">Price：<span>$ '+item.price+'</span></p></div>'
                + '</li>';
        }).join("");
        str += '</ul>';
        totallist_b.innerHTML = str;

        // 吸顶菜单
        
    window.onscroll = function(){
            var totallist_t = document.getElementsByClassName("totallist_t")[0];
            var totallist_ts1=totallist_t.children[0];
            var totallist_ts2=totallist_t.children[1];
            var zhensb = document.getElementsByClassName("zhensb")[0];
        if(window.scrollY>=167){
            totallist_t.style.position = "fixed";
            totallist_t.style.left = "740";
            totallist_t.style.top = "0";
            totallist_t.style.border ="1px solid #CC0000";
            totallist_t.style.borderTop ="4px solid #CC0000";
            totallist_ts1.className = "triangel1";
            totallist_ts2.className = "triangel2";
            zhensb.style.position = "relative";

        }else{
            
            totallist_t.style.position = "static";
            totallist_t.style.border ="1px none";
            totallist_t.style.borderTop ="2px solid #FF4500";
            totallist_ts1.className = "";
            totallist_ts2.className = "";
            zhensb.style.position = "absolute";
        }
    }
    //头部购物车函数
                render();
                function render(){
                    var div = document.querySelector('#mdfk');
                    var nowmoney = div.previousElementSibling.previousElementSibling;
                    var em = div.previousElementSibling.previousElementSibling.previousElementSibling;
                    var goodslist;
                    goodslist = Cookie.getCookie('goodslist');
                    if(goodslist === ''){
                        goodslist = [];
                    }else{
                        goodslist = JSON.parse(goodslist);
                    }
                    // 创建用于保存价格
                    var total = 0;//总价
                      var Yem = 0;//件数
                        // 创建ul
                        var ul = document.createElement('ul');
                        ul.className = 'Y-top_ul2';
                        ul.innerHTML = goodslist.map(function(goods){
                            // 计算总价
                            total += goods.price * goods.qty*1;
                            Yem +=parseInt(goods.qty) ;
                            return `<li  data-guid="${goods.guid}">
                                        <img src="${goods.imgurl}" />
                                        <a href="#"><span>${goods.name}</span>  <br /><span>$${goods.price}x${goods.qty}</span></a>
                                    </li>
                            `;
                        }).join('')+'<button>跳转购物车</button>';
                        div.innerHTML = '';
                        div.appendChild(ul);
                        // 写入总价
                        em.innerHTML = Yem;
                        nowmoney.innerText = total.toFixed(2);
                          var button = document.getElementsByTagName("button")[0];
                            button.onclick=function(){
                                   location.href = "car.html?";
                                };
                       var Yjiesuan =document.getElementById("Yjiesuan");
                       Yjiesuan.innerHTML = "USD:"+total.toFixed(2);
                };
                // 点击返回顶部
        var totop = document.getElementById("totop");
        totop.onclick = function(){
            var timer = setInterval(function(){
            var y = window.scrollY;
                     y -= 100;
                     if(y <= 0){
                         clearInterval(timer);
                     }
                        
             window.scrollTo(0,y);
             },30)
        }

         //账户
     admin();
     function admin (){
       var admin = Cookie.getCookie('admin');
        var zhanghu =document.querySelector("#Y-top p");
        if(admin === ''){
            return;
        }else {
            zhanghu.innerHTML=`<p>您好  ${admin}   , <a href="#">点此关闭退出</a></p>`;
            zhanghu.onclick=function(e){
                if(e.target.tagName.toLowerCase()=="a"){
                    zhanghu.innerHTML= `<p>您好,请<a href="zucebiao.html">登录</a>或者 <a href="zucebiao.html">注册</a> <span>账户</span> , <a href="#">点此关闭退出</a></p>`;
                    Cookie.removeCookie('admin');
                }
            }
        }
     }
}
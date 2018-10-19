// 菜单吸顶
window.onload = function(){
    var search = document.getElementById("lmg-search");
   var search_c1=document.getElementsByClassName("lmg-search-c")[0].getElementsByTagName("span")[0];
   var search_c2= search.getElementsByTagName("h1")[0];
    var search_c3= search.getElementsByClassName("lmg-search-r fr")[0];
    window.onscroll = function(){
        if(window.scrollY >= 20){
            search.className = "fixed";
            search_c1.className="hide";
            search_c2.style.height = "45px";
              search_c3.className="hide";
        }else if(window.scrollY < 20){
            search.className = "";
            search_c1.className="";
            search_c2.style.height = "66px";
              search_c3.className="lmg-search-r fr";
        }
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
        
        Yrender(); 
        var goodslist;//这是cookie提升全局变量不用再次获取

        //购物车主函数加载加入购物车的商品
        function Yrender(){
                //中间的购物车列表
               var tbody = document.getElementsByTagName("tbody")[0];
               var tFoot = document.getElementsByTagName("tfoot")[0];
               var subPrice =tFoot.getElementsByTagName("b")[0];
               var Yjiesheng =tFoot.getElementsByTagName("b")[1];
               //头部的购物车
                var div = document.querySelector('#mdfk');
                var nowmoney = div.previousElementSibling.previousElementSibling;
                var em = div.previousElementSibling.previousElementSibling.previousElementSibling;
                //这是底部商品列表
                var str = "";
                var total = 0;//总价
                 var hhh=0;
                 goodslist = Cookie.getCookie("goodslist") || [];//提取cookie
                if(typeof goodslist == "string"){
                    goodslist = JSON.parse(goodslist);//goodslist用JOSN转换数组
                }
                for(var i=0;i<goodslist.length;i++){

                    var good = goodslist[i];
                    var jiesheng = -(good.sale-good.price)*good.qty;
                    
                    str += '<tr data-guid="'+good.guid+'" >'+
                    '<td>'+
                        '<img src="'+good.imgurl+'" alt="" />'+
                        '<li>'+
                        '<h5>'+good.name+'</h5>'+
                        '<span>ID:'+'<em>'+good.guid+'</em>'+'</span>'+
                        '<span>Size:'+'<em>Default</em></span></li></td>'+
                    '<td><div class="Yjian">-</div><input type="text" value="'+good.qty+'" min="1"/><div class="Yjia">+</div></td>'+
                    '<td><del>'+good.price*good.qty+'</del><b>'+good.sale*good.qty+'</b></td>'+
                    '<td><b>总额:'+good.sale*good.qty+'</b><p>你节省了'+jiesheng+'</p></td>'+
                    '<td><div class="btn-close">×</div></td></tr>';                             
                    total += good.sale*good.qty//总价格
                    hhh+=jiesheng;
                }
                    tbody.innerHTML = str;
                    Yjiesheng.innerHTML = hhh;//节省的钱
                    subPrice.innerHTML = total.toFixed(2);
                    //顶部购物车
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
                        //购物车按钮
                        cunSQL();
                          var button = document.getElementsByTagName("button")[0];
                            button.onclick=function(){
                                   location.href = "car.html?";
                                };
            };

            // 底层商品
        var commodity = document.querySelector('.commodity');
        var Ydata;

        var status = [200,304];
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(status.indexOf(xhr.status)!=-1){
               var res = xhr.responseText;
                Ydata = JSON.parse(res);
               function chushi(all){
                    var str = '<ul id="Yfocus">';
                    str+= all.map(function(item){
                        return '<li data-guid="'+item.id+'">'
                                    +'<img src="'+item.imgurl+'">'
                                    +'<del>'+item.price+'</del></br>'+'<span>现价：'+item.sale+'</span>'
                                    +'<p>'+item.nickname+'</p>'
                                    +'<div class="btn">'
                                      +'<button>Add to</button>'
                                    +'</div>'
                                +'</li>';
                    }).join(""); 
                str +="</ul>" ;
                return str;
                }
            commodity.innerHTML= chushi(Ydata.dataArr);
            gundong();
            commodity.onclick = e=>{
                        e = e || window.event;
                        var target = e.target || e.srcElement;//兼容
                        if(target.parentElement.className === 'btn'){
                            var li = target.parentElement.parentElement;
                            var guid = li.getAttribute('data-guid');
                            for(var i = 0; i<goodslist.length; i++){
                                    
                                    if(goodslist[i].guid === guid){
                                        goodslist[i].qty++;
                                    Cookie.setCookie('goodslist',JSON.stringify(goodslist));
                                        break;
                                    }  
                                };
                                    if(i === goodslist.length){
                                        var jiange = li.children[1].innerText;
                                        var yiqian = li.children[3].innerText;
                                        yiqian = Number(yiqian.slice(3));
                                        jiange = Number(jiange);
                                       
                                        var mygoods = {
                                            guid:guid,//guid商品唯一标识
                                            imgurl:li.children[0].src,
                                            name:li.children[4].innerText,
                                            price:jiange,//现价
                                            sale:yiqian,//原价
                                            qty:1
                                        };

                                        goodslist.push(mygoods);
                                Cookie.setCookie('goodslist',JSON.stringify(goodslist));
                            };
                            Yrender();
                        };
                        
                    };
               
            }
        };
        xhr.open("get","../api/shangpin.php?qty=10",true);
        xhr.send(null);


                    // 点击商品添加购物车按钮，将商品存入cookie同时刷新购物车
                    
                    


           var tbody = document.getElementsByTagName("tbody")[0];
           //tbody 三个按钮 btn-close 删除商品   Yjian减少商品数量 Yjia增加商品数量
           var Remove= document.getElementById("remove");
            tbody.onclick = function(e){ 
                e.preventDefault();
                var Yvalue =e.target.parentElement.children[1];
                if(e.target.className == "btn-close"){//删除
                    var currentGuid = e.target.parentElement.parentElement.getAttribute("data-guid");
                    for(var i=0;i<goodslist.length;i++){
                        if(goodslist[i].guid == currentGuid){
                            goodslist.splice(i,1);
                            break;
                        }
                    }
                    Cookie.setCookie("goodslist",JSON.stringify(goodslist));
                    Yrender();
                }else if(e.target.className =="Yjian"){//减少
                    if(Yvalue.value<=1){
                            Yvalue.value=1;
                        }else{
                            var currentGuid = e.target.parentElement.parentElement.getAttribute("data-guid");
                            for(var i=0;i<goodslist.length;i++){
                                if(goodslist[i].guid == currentGuid){
                                    goodslist[i].qty--;
                                    break;
                                }
                            }
                            Cookie.setCookie("goodslist",JSON.stringify(goodslist));
                            Yrender();
                    }
                }else if(e.target.className =="Yjia"){//增加
                       var currentGuid = e.target.parentElement.parentElement.getAttribute("data-guid");
                        for(var i=0;i<goodslist.length;i++){
                            if(goodslist[i].guid == currentGuid){
                                goodslist[i].qty++;
                                break;
                            }
                    }
                    Cookie.setCookie("goodslist",JSON.stringify(goodslist));
                    Yrender();
                }

                      
            }
            //清空按钮
            Remove.onclick = function(){
                    Cookie.removeCookie("goodslist");
                        Yrender();
            }

            //列表底部两个按钮
           var tFoot = document.getElementsByTagName("tfoot")[0];
           var Ya =tFoot.getElementsByTagName("a");
            tFoot.onclick = function(e){
                if(e.target==Ya[0]){
                    location.href = "shangpin.html?"
                }else if(e.target==Ya[1]){
                    location.href = "jiesuan.html?"
                }

            }


            function gundong(){
                var bigbox =document.querySelector(".commodity");
                var focus= document.querySelector("#Yfocus");
                var li =focus.children[0];
                var leng = focus.children.length;
                var idx = 0;
                var liwidth=li.offsetWidth;
                var liheight=li.offsetHeight;
                focus.style.height=liheight+"px";
                focus.style.width=liwidth*leng+"px";
                var prev=document.createElement("div");
                var next=document.createElement("div");
                prev.classList.add("prev");
                next.classList.add("next");
                bigbox.appendChild(prev);
                bigbox.appendChild(next);
                prev=document.querySelector(".prev");
                next=document.querySelector(".next");
                prev.onclick = function(){
                        idx--;
                        move();
                }
                next.onclick = function(){
                     
                        idx++;
                        move();                     
                }
                 function move(){
                    if(idx>=leng){
                        focus.style.left = 0;
                        idx = 1;
                    }
                    if(idx<0){
                        focus.style.left = 0;
                        idx = 0;
                    }
                     var letf = -(li.offsetWidth+40)*idx;
                    if(parseFloat(focus.style.left)<-parseFloat(focus.style.width)+(40*leng)){
                        letf = 0;
                        idx = 0;
                    }
                    
                    animate(focus,{left:letf},30) ;
                   
                }
            }

        //保存购物车商品cookie
        function cunSQL(){
              cookielist = Cookie.getCookie("goodslist") || [];//提取cookie
               var cookiexhr = new XMLHttpRequest();
                cookiexhr.onload = function(){
                    if(status.indexOf(cookiexhr.status)!=-1){
                       var del = cookiexhr.responseText;
                    }
                }; 
                cookiexhr.open("get","../api/gouwuche.php?cookielist="+cookielist,true);
                cookiexhr.send(null);
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
   
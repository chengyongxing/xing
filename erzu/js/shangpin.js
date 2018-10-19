/* 
* @Author: Marte
* @Date:   2018-08-23 19:06:31
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-20 20:25:05
*/
window.onload=function(){
    var Ydata;
    var xhr = new XMLHttpRequest();
    var status = [200,304];
    xhr.onload = function(){
        if(status.indexOf(xhr.status) >=0){
            var res = xhr.responseText;
            Ydata = JSON.parse(res);
            console.log(Ydata);
            var box = document.getElementById("Y-liebiao1");
            var Y_sort=document.getElementsByClassName("Y_sort")[0];
            var Y_i=Y_sort.getElementsByTagName("i")[0];
            var Yprice = document.getElementById("Yprice");
            var Ybest = document.getElementsByClassName("Ybest")[0];
            var Yshijian = document.getElementById("Yshijian");
            // 商品录入列表
            function chushi(all){
                     var str = "<ul>";
                    str+= all.map(function(item){
                        return '<li data-myid="'+item.id+'">'
                                    +'<img src="'+item.imgurl+'">'
                                    +'<label for="check'+item.id+'"><input type="checkbox" id="check'+item.id+'">'+item.name+'</label>'
                                    +'<del>'+item.price+'</del>'+'<span>现价：'+item.sale+'</span>'
                                    +'<p>'+item.nickname+'</p>'+'<a href="#" class="chuandi">wholesale</a>'
                                    +'<p>发布时间:'+item.time+'</p>'
                                +'</li>';
                    }).join(""); 
                str +="</ul>" ;
                YJLpage();
                return str;
            }

            function YJLpage(){
              var YJLpage =document.querySelector("#YJLpage");
              var pageLen =Math.ceil(Ydata.len/Ydata.qty);
                    YJLpage.innerHTML = "";
                    for(var i=1;i<=pageLen;i++){
                        var span = document.createElement("a");
                        span.innerHTML = i;
                        if(i == Ydata.nowye){
                            span.classList.add("active") ;
                        }
                        YJLpage.appendChild(span);
                    }
              YJLpage.onclick = function(e){
              if(e.target.tagName.toLowerCase() == "a"){
                  var curpage = e.target.innerHTML;
                  xhr.open("get","../api/shangpin.php?curpage="+curpage+"&qty=12",true);
                  xhr.send(null);
                  chuna();
              }
                
           }
          }
            box.innerHTML= chushi(Ydata.dataArr);
            var Ysj = true;
            Yshijian.onclick=function(){
                if(Ysj==true){
                    Ysj = false;
                     Yprice.style.color ="#40406B";
                    Yshijian.style.color ="#FF4500";
                     var shij = Ydata.dataArr.sort(function(a,b){
                    return  Date.parse(b.time) - Date.parse(a.time);
                });
                box.innerHTML= chushi(shij);
                chuna();
                }else if(Ysj==false){
                    Ysj = true;
                     Yprice.style.color ="#40406B";
                    Yshijian.style.color ="#FF4500";
                     var shij = Ydata.dataArr.sort(function(a,b){
                    return  Date.parse(a.time) - Date.parse(b.time);
                });box.innerHTML= chushi(shij);
                chuna();
               
            }};
          
            // 点击降序
           var Ytrue = true;
           Yprice.onclick = function(){                
                Yprice.style.color ="#FF4500";
                Yshijian.style.color ="#40406B";
                Y_i.style.transform="rotate(180deg)";
                if(Ytrue==false){
                     Ytrue=true;
                     var nnn = Ydata.dataArr.sort(function(item1,item2){
                        return item2.sale-item1.sale;
                     });
                     box.innerHTML= chushi(nnn);
                     chuna();
                }else if(Ytrue==true){
                     Y_i.style.transform="rotate(0deg)";
                     Ytrue=false;
                     var bbb = Ydata.dataArr.sort(function(item1,item2){
                        return item1.sale-item2.sale;
                     });
                     box.innerHTML= chushi(bbb);
                     chuna();
                }                                                                        
            }
            // 左下角商品
             function zuoxia(bll) {
                var str = "<h5>Best Reviewed Items</h5><ul>";
                    str+= bll.map(function(item){
                        return '<li >'
                                    +'<img src="'+item.imgurl+'">'
                                    +'<p>'+item.nickname+'</p>'
                                    +'<p>原价：<del>'+item.price+'</del></p>'
                                    +'<p>现价：<span>'+item.sale+'</span></p>'
                                    +'<p>'+item.nickname+'</p>'
                                +'</li>';
                    }).join("");
                str +="</ul>" ;
                return  str;
            }
           Ybest.innerHTML = zuoxia(Ydata.dadaBrr);
           //
          chuna();//先执行一次
          // 点击其中一个商品传递到详情页
          function chuna(){
              var chuandi = document.getElementsByClassName("chuandi");
               var params = "";
                for(var n=0;n<chuandi.length;n++){
                        chuandi[n].index = n; 
                        chuandi[n].onclick = function(){
                            n = this.index ;
                            for(var key in Ydata.dataArr[n]){
                                params += key + "=" + Ydata.dataArr[n][key] + "&";
                            }
                            params = params.slice(0,-1);
                            location.href = "xiangqingye.html?" + encodeURI(params);
                    }
                }
          }
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
            // 菜单吸顶
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
                };

        }
    }
    xhr.open("get","../api/shangpin.php",true);
    xhr.send(true);
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
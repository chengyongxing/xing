
document.addEventListener("DOMContentLoaded",()=>{
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
                        Yem +=goods.qty;
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
                       location.href = "html/car.html?";
                    };
                    
            }; 

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

        //轮播图
        let focus= document.querySelector(".focus");
        let ul =focus.children[0];
        let imglist=ul.children[0];
        let firstImg=imglist.children[0];
        let cloneLi = firstImg.parentElement.cloneNode(true);
        ul.appendChild(cloneLi);
        let leng = ul.children.length;
        let idx = 0;
        let imgwidth;
        let imgheight;
        let page=createpage();
        firstImg.onload=()=>{
            imgwidth=firstImg.offsetWidth;
            imgheight=firstImg.offsetHeight;
            focus.style.width=imgwidth+"px";
            focus.style.height=imgheight+"px";
            ul.style.width=imgwidth*leng+"px";
        }
        //轮播图页码
        function createpage(){
                let pagelist=document.createElement("div");
                pagelist.classList.add("page");
                for(var i=1;i<leng;i++){
                    let span =document.createElement("span");
                    span.innerText=i;
                    pagelist.appendChild(span);
                }
                pagelist.children[0].classList.add("active");
                focus.appendChild(pagelist);
                return pagelist;
        }
        page.onclick=function(e){
                idx=e.target.innerHTML-1;
                move();
        }
      

        setInterval(()=>{
            idx++;
            move();
        }, 3000)

        let prev=document.createElement("div");
        let next=document.createElement("div");
        prev.classList.add("prev");
        next.classList.add("next");
        focus.appendChild(prev);
        focus.appendChild(next);
        prev=document.querySelector(".prev");
        next=document.querySelector(".next");
        prev.onclick = function(e){idx--;move();}
        next.onclick = function(e){idx++;move();}

        function move(){
            if(idx>=leng){
                ul.style.left = 0;
                idx = 1;
            }
            for(var i=0;i<leng-1;i++){
                page.children[i].classList.remove("active");
            }
            if(idx == leng-1){
                page.children[0].classList.add("active");
            }else{
                page.children[idx].classList.add("active");
            }
            let letf = imgwidth*idx;
            animate(ul,{left:-letf},30)
        }
        
        var gundonglist =document.querySelector(".main-center");
        var gondongul =gundonglist.children[1];
        // console.log(gundonglist,prevbtn,gondongul);
        var status = [200,304];
        var gundongxhr = new XMLHttpRequest();
        gundongxhr.onload = function(){
            if(status.indexOf(gundongxhr.status)!=-1){
               var res = gundongxhr.responseText;
                Ydata = JSON.parse(res);
               gondongul.innerHTML = Ydata.dataArr.map(function(item){
                item.imgurl = item.imgurl.slice(3);
                
                return ` <li data-myid="${item.id}"><a href="#">
                                <img src="${item.imgurl}"  alt="" />
                                <p>${item.name}</p>
                                <p>原价:<span>${item.price}</span></p>
                                <p>现价：<span>${item.sale}</span></p>
                                <span>便宜了$ ${item.price-item.sale}</span>
                            </a>
                        </li>`
               }).join("");
               gundong();
            }
        };
        gundongxhr.open("get","api/shangpin.php?qty=6",true);
        gundongxhr.send(null); 

        function gundong(){
                var li =gondongul.children[0];
                var leng = gondongul.children.length;
                var idx = 0;
                var liwidth=li.offsetWidth+13;
                var liheight=li.offsetHeight;
                gondongul.style.height=liheight+"px";
                gondongul.style.width=liwidth*leng+"px";
                var gondongprev=document.createElement("div");
                var gondongnext=document.createElement("div");
                gondongprev.classList.add("prev");
                gondongnext.classList.add("next");

                gundonglist.appendChild(gondongprev);
                gundonglist.appendChild(gondongnext);

                gondongprev=document.querySelector(".main-center .prev");
                gondongnext=document.querySelector(".main-center .next");

                gondongprev.onclick = function(){
                        idx--;
                        gondongmove();
                }
                gondongnext.onclick = function(){
                        idx++;
                        gondongmove();                     
                }
                 function gondongmove(){
                    if(idx>=leng){
                        letf = 0;
                        idx = 0;
                    }
                    if(idx<0){
                        gondongul.style.left = 0;
                        idx = 0;
                    }
                     var letf = -(li.offsetWidth+13)*idx;
                    animate(gondongul,{left:letf},30) ;
                   
                }
            }

        var idxlist =document.querySelector(".main-bottom");
        var idxlistul =idxlist.children[1];
        var idxlistxhr = new XMLHttpRequest();
        idxlistxhr.onload = function(){
            if(status.indexOf(idxlistxhr.status)!=-1){
               var idxlist_res = idxlistxhr.responseText;
                Ydata1 = JSON.parse(idxlist_res);
               idxlistul.innerHTML = Ydata1.dataArr.map(function(item){
                item.imgurl = item.imgurl.slice(3);
                return ` <li data-myid="${item.id}"><a href="#">
                                <img src="${item.imgurl}" alt="" />
                                <p>${item.name}</p>
                                <p>原价:<span>${item.price}</span></p>
                                <p>现价：<span>${item.sale}</span></p>
                                <span>便宜了$ ${item.price-item.sale}</span>
                            </a>
                        </li>`
               }).join("");
               
            }
        };
        idxlistxhr.open("get","api/shangpin.php?qty=12",true);
        idxlistxhr.send(null); 

        
})
window.onload = function(){

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
                       location.href = "car.html?";
                    };
                    
            }; 
    // 注册
    var fal = document.getElementById("fal");
    var pas = document.getElementById("pas");
    var con = document.getElementById("con");
    var sub = document.querySelector(".sub");
    var status = [200,304];
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(status.indexOf(xhr.status)!=-1){
           var res = xhr.responseText;
           res = JSON.parse(res);
           fal.onblur = function(e){
                var _fal = fal.value;
                var shuzu = [];
                for(var i=0;i<res.length;i++){
                    shuzu.push(res[i].uname);
                }
                if(shuzu.indexOf(_fal) != -1){
                    alert("用户名已存在");
                }
           }    
        }
    }
    xhr.open("get","../api/zucebiao2.php",true);
    xhr.send(null);

    con.onblur = function(){
        var _pas = pas.value;
        var _con = con.value;
        if(_pas != _con){
            alert("密码不一致");
        }
    }
    sub.onclick = function(e){
        e.preventDefault();
        var _con = con.value;
        var _fal = fal.value;
        _fal = _fal.trim();
        if(_con.length >= 6&&_fal.length>=6){
            var status = [200,304];
            var xhr = new XMLHttpRequest();
            xhr.onload =  function(){
                if(status.indexOf(xhr.status) >= 0){
                    var res = xhr.responseText;
                    alert("注册成功");
                    con.value = "";
                    fal.value = "";
                    pas.value = "";

                }
            }
        }else{alert("用户名或密码个数不能少于六");}
        
        xhr.open("post","../api/zucebiao1.php",true);
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send("fal="+_fal+"&con="+_con);
    }

// 登录
    var pass = document.querySelector("#pass");
    var add = document.getElementById("add");
    var btn = document.querySelector(".btn");
    btn.onclick=function(){
        event.preventDefault();
        var Yname = add.value;
        var Ypass = pass.value;
        var xhr_denglu =  new XMLHttpRequest();
        xhr_denglu.onload = function(){
            var status = [200,304];
            if(xhr_denglu.readyState == 4 && status.indexOf(xhr_denglu.status) != -1){
                var res = xhr_denglu.responseText;
                res==Yname? location.href = "../html/shangpin.html": alert("登录失败"); 
                 Cookie.setCookie("admin",res);
                 admin();
            }
        }   
        xhr_denglu.open("post","../api/zucebiao.php");
        xhr_denglu.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr_denglu.send('Yname='+Yname+'&mima='+Ypass);
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

    // var status = [200,304];
    // var xhr = new XMLHttpRequest();
    // xhr.onload = function(){
    //     if(status.indexOf(xhr.status)!=-1){
    //        var res = xhr.responseText;
    //        res = JSON.parse(res);
    //        var pass = document.querySelector("#pass");
    //        var add = document.getElementById("add");
    //        var btn = document.querySelector(".btn");
    //        add.onblur = function(e){
    //             var _add = add.value;
    //             var shuzu = [];
    //             for(var i=0;i<res.length;i++){
    //                 shuzu.push(res[i].uname);
    //             }
    //             if(shuzu.indexOf(_add) != -1){
    //                 var idx = shuzu.indexOf(_add);
    //                 btn.onclick = function(){
    //                     event.preventDefault();

    //                     var _pass = pass.value;
    //                     if(res[idx].password == _pass){
    //                         location.href = "../html/shangpin.html";
    //                     }else{alert("密码错误");}
    //                 }
            
    //             }else{alert("用户名不存在");}
    //        }

           
    //     }
    // }
    // xhr.open("get","../api/zucebiao.php",true);
    // xhr.send(null);


}
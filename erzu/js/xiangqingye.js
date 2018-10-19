window.onload=function(){
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
                    
        var data=[{
            id:'001',
            imgurl:"../images/main1.png",
            name:"Up& Down Open Cowhide Leather Case with Crocdile...",
            price:'py6.',
            numb:129.99
        },{
            id:'002',
            imgurl:"../images/main2.png",
            name:"Up& Down Open Cowhide Leather Case with Crocdile...",
            price:'py6.',
            numb:229.99
        },{
            id:'003',
            imgurl:"../images/main3.png",
            name:"Up& Down Open Cowhide Leather Case with Crocdile...",
            price:'py6.',
            numb:259.99
        },{
            id:'004',
            imgurl:"../images/main4.png",
            name:"Up& Down Open Cowhide Leather Case with Crocdile...",
            price:'py6.',
            numb:329.99
        }];

        var datai=[{
            imgurll:"../images/jia.png",
            imgurlc:"../images/deng.png",
           
        }];
       
        var dataj=[{
            id:'005',
            price:'py6.',
            num:data[0].numb+data[1].numb,
            lpp:"Only need:",
            numb:data[0].numb+data[1].numb-100,
            save:'Save:py6.'+49.49,
            imgurl:"../images/gouwu.png"
        },
        {
            id:'006',
            price:'py6.',
            num:data[2].numb+data[1].numb+data[3].numb,
            lpp:"Only need:",
            numb:data[2].numb+data[1].numb+data[3].numb-100,
            save:'Save:py6.'+49.49,
            imgurl:"../images/gouwu.png"
        },
        {
            id:'007',
            price:'py6.',
            num:data[0].numb+data[2].numb+data[3].numb,
            lpp:"Only need:",
            numb:data[0].numb+data[2].numb+data[3].numb-100,
            save:'Save:py6.'+49.49,
            imgurl:"../images/gouwu.png"
        }];


//****************获取传参数**********************//
     var params = decodeURI(location.search).slice(1); 
            var paramsArr = params.split("&");
            var paramsObj = {};
            paramsArr.forEach(function(item){
                var arr = item.split("=");
                paramsObj[arr[0]] = arr[1];
            });

//******************商品名显示*******************//
      var L_top = document.getElementsByClassName("L_top")[0];
        L_top.innerHTML=paramsObj.name;
//*****************计算表单中的优惠***************//
    var tab1= document.getElementById("tab1");
    var tab2= document.getElementById("tab2");
    var tab3= document.getElementById("tab3");
    var tab4= document.getElementById("tab4");
    tab1.innerHTML = paramsObj.sale;
    tab2.innerHTML = parseInt(paramsObj.sale*0.9);
    tab3.innerHTML = parseInt(paramsObj.sale*0.8);
    tab4.innerHTML = parseInt(paramsObj.sale*0.7);

//***************显示传过来的图片及图片切换****************//
       var l_jiage=document.getElementById("l_jiage");
       var l_numb=document.getElementById("l_numb");
       var photo =document.getElementById("photo");
       photo.innerHTML='<img src="'+paramsObj.imgurl+'"/>';

       var photo1=document.getElementById("photo1");
       var photo2=document.getElementById("photo2");
       var photo3=document.getElementById("photo3");
       var photo4=document.getElementById("photo4");
       var photo5=document.getElementById("photo5");
       photo1.innerHTML='<img src="'+paramsObj.imgurl1+'"/>';
       photo2.innerHTML='<img src="'+paramsObj.imgurl2+'"/>';
       photo3.innerHTML='<img src="'+paramsObj.imgurl3+'"/>';
       photo4.innerHTML='<img src="'+paramsObj.imgurl1+'"/>';
       photo5.innerHTML='<img src="'+paramsObj.imgurl2+'"/>';

      photo1.onclick=function(){
          photo.innerHTML='<img src="'+data[3].imgurl+'"/>';
      }
      photo2.onclick=function(){
          photo.innerHTML='<img src="'+data[1].imgurl+'"/>';
      }
      photo3.onclick=function(){
          photo.innerHTML='<img src="'+data[2].imgurl+'"/>';
      }
      photo4.onclick=function(){
          photo.innerHTML='<img src="'+data[3].imgurl+'"/>';
      }
      photo5.onclick=function(){
          photo.innerHTML='<img src="'+data[1].imgurl+'"/>';
      }

    //*****************计算购买的总价********************//
       var str="";
       var jiner;
       str+=paramsObj.sale+'py6.'+'×'+1+'='+paramsObj.sale;
        l_jiage.innerHTML=str;

       l_numb.onclick=function numb(){ 
           l_jiage.innerHTML="";
          var numb=l_numb.value;
           jiner=numb*paramsObj.sale;
       var str="";
            if(numb>=1){
              str+=paramsObj.sale+'py6.'+'×'+numb+'='+jiner;
            } 
         l_jiage.innerHTML=str;
  }






//****************三个不同套餐模块tab切换*************************//
    var list1=document.getElementById("list1");
    var list2=document.getElementById("list2");
    var list3=document.getElementById("list3");
    var list4=document.getElementById("list4");
    var jia1 =document.getElementById("jia1");
    var jia2 =document.getElementById("jia2");
    var deng =document.getElementById("deng");
    var offer1 =document.getElementById("offer1");
    var offer2 =document.getElementById("offer2");
    var offer3 =document.getElementById("offer3");

    offer1.onclick=function(){
            list1.innerHTML="";
            list2.innerHTML="";
            list3.innerHTML="";
            list4.innerHTML="";
            jia2.innerHTML ="";
            deng.innerHTML="";
            var str1 ='<ul>';
            var str2 ='<ul>';
            var str3 ='<ul>';
            str1 += '<li data-id="'+data[0].id+'">'
            +'<img src="'+data[0].imgurl+'">'
            + '<p class="spm">'+data[0].name+'</p>'
            + '<p class="price">'+data[0].price+data[0].numb+'</p>'
            + '</li>';
             str1 += '</ul>';
             list1.innerHTML=str1;

             str2 += '<li data-id="'+data[1].id+'">'
            +'<img src="'+data[1].imgurl+'">'
            + '<p class="spm">'+data[1].name+'</p>'
            + '<p class="price">'+data[1].price+data[1].numb+'</p>'
            + '</li>';
             str2 += '</ul>';
             list2.innerHTML=str2;
            str3 +='<li data-id="'+dataj[0].id+'">'
            +'<p><del>'+dataj[0].price+dataj[0].num+'</del></p>'
            +'<p class="color">'+dataj[0].lpp+'</p>'
            +'<span class="last_price">'+dataj[0].price+dataj[0].numb+'</span>'
            +'<span class="save_g">'+dataj[0].save+'</span>'
            +'<img src="'+dataj[0].imgurl+'"/>'
             str3 += '</ul>';
             console.log(dataj[0].numb);
            list4.innerHTML=str3;
       jia1.innerHTML='<img src="'+datai[0].imgurll+'"/>';
       deng.innerHTML='<img src="'+datai[0].imgurlc+'"/>';
      
    }
    offer2.onclick=function(){
          list1.innerHTML="";
          list2.innerHTML="";
          list3.innerHTML="";
           list4.innerHTML="";
           deng.innerHTML="";
            var str1 ='<ul>';
            var str2 ='<ul>';
            var str3 ='<ul>';
            var str4='<ul>';
            str1 += '<li data-id="'+data[2].id+'">'
            +'<img src="'+data[2].imgurl+'">'
            + '<p class="spm">'+data[2].name+'</p>'
            + '<p class="price">'+data[2].price+data[2].numb+'</p>'
            + '</li>';
             str1 += '</ul>';
             list1.innerHTML=str1;

             str2 += '<li data-id="'+data[1].id+'">'
            +'<img src="'+data[1].imgurl+'">'
            + '<p class="spm">'+data[1].name+'</p>'
            + '<p class="price">'+data[1].price+data[1].numb+'</p>'
            + '</li>';
             str2 += '</ul>';
            list2.innerHTML=str2;
      
            str3 += '<li data-id="'+data[3].id+'">'
            +'<img src="'+data[3].imgurl+'">'
            + '<p class="spm">'+data[3].name+'</p>'
            + '<p class="price">'+data[3].price+data[3].numb+'</p>'
            + '</li>';
             str3 += '</ul>';

              str4 +='<li data-id="'+dataj[1].id+'">'
            +'<p><del>'+dataj[1].price+dataj[1].num+'</del></p>'
            +'<p class="color">'+dataj[1].lpp+'</p>'
            +'<span class="last_price">'+dataj[1].price+dataj[1].numb+'</span>'
            +'<span class="save_g">'+dataj[1].save+'</span>'
            +'<img src="'+dataj[1].imgurl+'"/>'
             str4 += '</ul>';
     
        jia1.innerHTML='<img src="'+datai[0].imgurll+'"/>';
        jia2.innerHTML='<img src="'+datai[0].imgurll+'"/>';
      
      
            list4.innerHTML=str4;
            list3.innerHTML=str3;
            deng.innerHTML='<img src="'+datai[0].imgurlc+'"/>';
    }
    offer3.onclick=function(){
         list1.innerHTML="";
          list2.innerHTML="";
          list3.innerHTML="";
           list4.innerHTML="";
           deng.innerHTML="";
           
            var str1 ='<ul>';
            var str2 ='<ul>';
            var str3 ='<ul>';
            var str3 ='<ul>';
            var str4='<ul>';
          str1 += '<li data-id="'+data[0].id+'">'
            +'<img src="'+data[0].imgurl+'">'
            + '<p class="spm">'+data[0].name+'</p>'
            + '<p class="price">'+data[0].price+data[0].numb+'</p>'
            + '</li>';
             str1 += '</ul>';
             list1.innerHTML=str1;

             str2 += '<li data-id="'+data[2].id+'">'
            +'<img src="'+data[2].imgurl+'">'
            + '<p class="spm">'+data[2].name+'</p>'
            + '<p class="price">'+data[2].price+data[2].numb+'</p>'
            + '</li>';
             str2 += '</ul>';
            list2.innerHTML=str2;
      
            str3 += '<li data-id="'+data[3].id+'">'
            +'<img src="'+data[3].imgurl+'">'
            + '<p class="spm">'+data[3].name+'</p>'
            + '<p class="price">'+data[3].price+data[3].numb+'</p>'
            + '</li>';
             str3 += '</ul>';

              str4 +='<li data-id="'+dataj[2].id+'">'
            +'<p><del>'+dataj[2].price+dataj[2].num+'</del></p>'
            +'<p class="color">'+dataj[2].lpp+'</p>'
            +'<span class="last_price">'+dataj[2].price+dataj[2].numb+'</span>'
            +'<span class="save_g">'+dataj[2].save+'</span>'
            +'<img src="'+dataj[2].imgurl+'"/>'
             str4 += '</ul>';
            jia1.innerHTML='<img src="'+datai[0].imgurll+'"/>';
            jia2.innerHTML='<img src="'+datai[0].imgurll+'"/>';
            list3.innerHTML=str3;
            deng.innerHTML='<img src="'+datai[0].imgurlc+'"/>';
            list4.innerHTML=str4;
      
    }


//********************最帅的社会分隔线**********************//
       



          //ul的样式
            var cytDate = [{       
                star:'../images/5star.png',
                nDate:'07/11/2012',
                Test:'Test',
                times0:'(0)',
                times1:'(2)',
                contents:'Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent,I recommend.negative:no trademark',
                imgurl:{
                  url1:'../images/main1.png',
                  url2:'',
                  url3:'',
                  url4:'',
                  url5:'',
                  url6:'',
                  url7:'',
                  url8:'',
                  url9:'',
                },
                autoReply:'Thank you for rating'
             },{
                star:'../images/5star.png',
                nDate:'07/11/2012',
                Test:'Test',
                times0:'(0)',
                times1:'(2)',
                contents:'Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent,I recommend.negative:no trademark',
                imgurl:{
                  url1:'',
                  url2:'',
                  url3:'',
                  url4:'',
                  url5:'',
                  url6:'',
                  url7:'',
                  url8:'',
                  url9:'',
                },
                autoReply:'Thank you for rating'
            },{
                star:'../images/5star.png',
                nDate:'07/11/2012',
                Test:'Test',
                times0:'(0)',
                times1:'(2)',
                contents:'Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent,I recommend.negative:no trademark',
                imgurl:{
                  url1:'../images/main2.png',
                  url2:'',
                  url3:'',
                  url4:'',
                  url5:'',
                  url6:'',
                  url7:'',
                  url8:'',
                  url9:'',
                },
                autoReply:'Thank you for rating'
            },{
                star:'../images/5star.png',
                nDate:'07/11/2012',
                Test:'Test',
                times0:'(0)',
                times1:'(2)',
                contents:'Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent,I recommend.negative:no trademark',
                imgurl:{
                  url1:'../images/main6.png',
                  url2:'../images/main4.png',
                  url3:'',
                  url4:'',
                  url5:'',
                  url6:'',
                  url7:'',
                  url8:'',
                  url9:'',
                },
                autoReply:'Thank you for rating'
            }];

          var userContent = document.getElementsByClassName("userContent")[0];
          var yanZheng = document.getElementById("yanZheng");
          var yanZhengMa = document.getElementById("yanZhengMa");
              yanZhengMa.value = "点击获取验证码";
          var filterword = document.getElementById("filterword");
          var cyt_btn = document.getElementById("cyt_btn");
          var content = document.getElementById("content");
          var arr = 'fuck,cao,bitch,操,他妈的,婊子'.split(","); 
          var filterStr = [];


            function getYanZhengMa() {
                    var randomMa = [];
                    for(var i=0;i<4;i++){
                        randomMa.push(parseInt(Math.random()*10));
                    }
                    return randomMa.join("");
            }       
            yanZhengMa.onclick = function () {
                    var _yanZhengMa = getYanZhengMa(); 
                    yanZhengMa.value = _yanZhengMa;
            }

            //验证码输入ul
            function contentList () {
                  var str = '';
                      for (var i=0;i<cytDate.length;i++){
                          str +='<li class="clearfix">'
                              +'<div class="fl"><img src="'+cytDate[i].star+'" alt=""><br /> '
                              +'<span>'+cytDate[i].nDate+'</span><br />'
                              +'<span>'+cytDate[i].Test+'</span><br />'
                              +'<i></i>'
                              +'<span>'+cytDate[i].times0+'</span>'
                              +'<i></i>'
                              +'<span>'+cytDate[i].times1+'</span></div>'
                              +'<div class="fr"><p class="pinglun">'+cytDate[i].contents+'</p>'
                              +'<img src="'+cytDate[i].imgurl.url1+'" alt="" />'
                              +'<img src="'+cytDate[i].imgurl.url2+'" alt="" />'
                              +'<img src="'+cytDate[i].imgurl.url3+'" alt="" />'
                              +'<img src="'+cytDate[i].imgurl.url4+'" alt="" />'
                              +'<img src="'+cytDate[i].imgurl.url5+'" alt="" />'
                              +'<img src="'+cytDate[i].imgurl.url6+'" alt="" />'
                              +'<img src="'+cytDate[i].imgurl.url7+'" alt="" />'
                              +'<img src="'+cytDate[i].imgurl.url8+'" alt="" />'
                              +'<img src="'+cytDate[i].imgurl.url9+'" alt="" />'
                              +'<i></i><p>'+cytDate[i].autoReply+'</p> '
                              +'</div></li>'  
                      }return str;
              }
          var cyt_str = contentList();
          userContent.innerHTML = cyt_str; //将cyt_str的值赋予给 评论区的ul的内容

          var cytDate_p;

              //星级评价
      var Ydiv= document.getElementById("Ydiv").children;
      var Yn;
              for(var i=0;i<Ydiv.length;i++){
                 Ydiv[i].index= i;
                Ydiv[i].onmouseover= function(){
                   for(var i=0;i<Ydiv.length;i++){
                        Ydiv[i].className = "";
                    }
                   Yn=this.index;
                  for(var a=0;a<=Yn;a++){
                    Ydiv[a].className = "on";
                  }
                };                    
            }
          
          //验证码
          cyt_btn.onclick = function() {
                var _content = content.value;
                var _yanZheng = yanZheng.value;
                var _uname = document.getElementById("uname").value;
                
               
                

                if(_yanZheng == yanZhengMa.value){
                   arr.forEach(
                    function (item) {
                        var reg = new RegExp(item,"gi");
                        _content = _content.replace(item,"**");
                    });   
                  filterStr.push(_content.trim());//把验证过的文字放入空数组filterStr
                  cytDate_p =filterStr[0];//输出数组第一个
                    content.value = "";
                    content.focus();

                var cytDate_arr = {
                  star:'../images/'+(Yn+1)+'star.png',
                  nDate:'07/11/2012',
                  Test:_uname,
                  times0:'(0)',
                  times1:'(2)',
                  contents:cytDate_p,
                  imgurl:{
                  url1:'',
                  url2:'',
                  url3:'',
                  url4:'',
                  url5:'',
                  url6:'',
                  url7:'',
                  url8:'',
                  url9:'',
                  },
                  autoReply:'Thank you for rating'
                };

                cytDate.pop();//删除最后一个
                filterStr.pop();//清空数组
                cytDate.unshift(cytDate_arr);
                contentList ();
                var cyt_str = contentList();
                  userContent.innerHTML = cyt_str;
                }else if(_yanZheng == ""){
                  alert("请输入验证码！")
                }else if(_yanZheng != yanZhengMa.value){
                  alert("验证码有误！")
                };
                
                
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
                       location.href = "car.html?";
                    };
                    
            }; 
          

//****************存储加入购物车的信息**********************//
       var car = document.getElementById("car");
       var l_numb =document.getElementById("l_numb");
       var goodslist = Cookie.getCookie("goodslist") || [];//获取cookie
       if(typeof goodslist=="string"){
          goodslist = JSON.parse(goodslist);//转成数组
       }
        car.onclick = function(){
          var numbf = document.getElementById("l_numb").value;
          var i;
          var has = goodslist.some(function(item,idx){
                        i = idx;
                        return item.guid == paramsObj.id;

                    })
          if(has){
                goodslist[i].qty+=parseInt(numbf);
            }else{
               var carArr = {
                    guid:paramsObj.id,
                    name:paramsObj.name,
                    imgurl:paramsObj.imgurl,
                    price:paramsObj.sale,
                    sale:paramsObj.sale,
                    qty:parseInt(numbf) 
                };
                  goodslist.push(carArr);
            }
             Cookie.setCookie('goodslist',JSON.stringify(goodslist));
              render();

              //飞入购物车
              var Yclonimg=photo.firstElementChild;
              var cloneImg = Yclonimg.cloneNode();
              var carList = document.querySelector("#mdfk");
              var bos =Yclonimg.getBoundingClientRect();
              var pos=carList.getBoundingClientRect();
              cloneImg.classList.add('clone-img');
              cloneImg.style.left = bos.left + 'px';
              cloneImg.style.top = bos.top + 'px';
              document.body.appendChild(cloneImg);
              var topTarget = pos.top-20;
              animate(cloneImg,{top:topTarget,left:pos.left,width:20},50,donghua);
              function donghua(){
                    // 删除用于动画的图片
                    document.body.removeChild(cloneImg);
                   
                }
            }
    // =============================================
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





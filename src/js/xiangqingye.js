jQuery(function($){


//获取参数
    var params = decodeURI(location.search).slice(1); 
    var paramsArr = params.split("&");
    var paramsObj = {};
    paramsArr.forEach(function(item){
        var arr = item.split("=");
        paramsObj[arr[0]] = arr[1];
    });
    console.log(paramsObj);
})
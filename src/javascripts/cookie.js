function setCookie( name , value , options = {} ){
     

      if(typeof options.expires === "number"){
            // 把options.expires里面的数字转换成日期对象; 
            var d = new Date();
            d.setDate( d.getDate() + options.expires );
            options.expires = d; 
      }

      var cookie = [
            name , "=" , value,
            typeof options.path === "string" ? ";path=" + options.path : "",
            typeof options.domain === "string" ? ";domain=" + options.domain : "",
            options.expires ? ";expires=" + options.expires : ""
      ].join("");

      return document.cookie = cookie;
}


// 删除cookie; 

function removeCookie( name ){
      setCookie(name , null , { expires : - 1})
}
function getCookie( name ){
      // 把cookie字符串转换成数组; 
      var a = document.cookie.split("; ");
      var res = a.map( item => {
            // item 是cookie字符串 key=value ; 
            // item 变成数组; 
            var a_item = item.split("=")
            // console.log( item , a_item );
            // a_item第0项就是cookie名
            if(a_item[0] === name){
                  // 表示找到我们想要的数据; 
                  return a_item[1];
            }

            return "";
      }).join("");
      return res;
}
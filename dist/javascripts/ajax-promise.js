function ajax_promise( options ) {
      // 默认参数如何应用;
      var d = {
            type : "GET"
      }
      for(var attr in options){
            d[attr] = options[attr];
      }
      options = d;
      if( typeof options.data === "object" && !(options.data instanceof Array) && options.data !== null){
            var temp = "";
            for(var attr in options.data){
                  temp += `&${ attr }=${ options.data[attr] }`
            }     
            options.data = temp.slice(1);
      }
      

      if (options.type.toUpperCase() === "GET" && options.data) {
            options.url += "?" + options.data;
      }

      var xhr = new XMLHttpRequest();

      xhr.open(options.type, options.url);

      if (options.type.toUpperCase() === "POST" && options.data) {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.send(options.data);
      } else {
            xhr.send();
      }

      return new Promise( function ( fullfill ){
            xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4 && xhr.status === 200) {
                        // 在这里改变promise对象状态; 
                        //  - 成功状态; 
                        fullfill( xhr.responseText );
                  }
            }
      })
     
}
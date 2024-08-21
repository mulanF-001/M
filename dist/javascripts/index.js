function animate(dom, options , callback ) {
          // dom  : 任意dom对象; 
          // attr : 任意css属性( width , height , left , top );
          // target : 当前属性运动的目标点; 
    
          // 变成获取任意元素的任意属性的起始值; 
          // 起始点 : dom对象 + 属性名; 
          // 获取的属性名在options对象之中; 
          for (var attr in options) {
                var start = parseInt(getComputedStyle(dom)[attr]);
                // 起始点放在start里面; 
                // start 只有一个，我们多个属性的起始点只能存储一个; 
                // { width : { start : , target : options[attr]}}
    
                // 把start起始点装进options之中; 
                options[attr] = {
                      start: start,
                      // 取出原本的值放入target 属性之中; 
                      target: options[attr]
                }
          }
    
          clearInterval(dom.t);
          dom.t = setInterval(function () {
                // 在定时器之中遍历options，进行运动; 
                for (var attr in options) {
                      // target => options[attr].target
                      // start  => options[attr].start
    
                      var speed = (options[attr].target - options[attr].start) / 10;
                      // - 速度这个玩意不能是小数; 
                      // 对速度进行取整; 
                      // speed = Math.floor( speed );
                      if (speed > 0) {
                            speed = Math.ceil(speed)
                      } else {
                            speed = Math.floor(speed);
                      }
    
                      // 如何判定所有属性到达目标点; 
                      // - 一个属性到达目标点了那么就删除options里面的这条属性; 
    
                      if (options[attr].start === options[attr].target) {   
                            // 删除到达目标点的属性; 
                            delete options[attr]
                            // 什么时候该关闭定时器 ? 
                            // options 里面没有属性了就关闭定时器; 
                            // - 对象里面一条属性都没有; 
                            // - for in 这个对象; for in 里面的代码不执行; 
                            // - for in 里面的代码没有执行就关闭定时器; 
                            // - 如果执行就不能关闭定时器; 
    
                            // 代表for in 里面的代码有没有执行; 
                            var flag = false;
                            
                            for(var attr in options ){
                    
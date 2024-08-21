var btn = document.getElementById("btn");
var username = document.getElementById("username");
var password = document.getElementById("password");

btn.onclick = async function () {
    var options = {
        url: "http://127.0.0.1:8888/users/login",
        type: "POST",
        data: {
            username: username.value,
            password: password.value
        }
    }
    let data = await ajax_promise(options)
    // alert( data );
    // 根据服务器返回的登录信息进行用户提示; 
    data = JSON.parse(data);

    // 用switch定义code情况; 
    switch (data.code) {
        case 0:
            errorTip(data.message);
            break;
        case 1:
            successTip(data.message);

            setTimeout(function () {
                
                location.href = "./首页.html"
            }, 2000)
            // 登录成功之后获取存储用的id; 
            setCookie("userid", data.user.id);
            setCookie("token", data.token, {
                expires: 1
            });

            break;
    }
}

var login_tip = document.getElementById("login_tip");

function errorTip(msg) {
    login_tip.style.display = "block";
    login_tip.classList.remove("alert-success");
    login_tip.classList.add("alert-danger");

    login_tip.innerHTML = msg;

    setTimeout(function () {
        login_tip.style.display = "none";
    }, 2000)
}
function successTip(msg) {
    login_tip.classList.remove("alert-danger");
    login_tip.classList.add("alert-success");
    login_tip.style.display = "block";
    login_tip.innerHTML = msg;

    setTimeout(function () {
        login_tip.style.display = "none";
    }, 2000)
}
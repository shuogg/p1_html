/**
 * Created by liushuo on 2017/8/1.
 */
var reserver = 'http://www.91ox.cn:8000/'
var httpserver = 'http://www.91ox.cn/'

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

header = {'X-CSRFToken': csrftoken }




function  Insert_Name() {
    var Oname = document.getElementById('vname');
    try {
        Oname.innerHTML = ' <li class="layui-nav-item"  style="float: right"><a href="">退出</a></li>   <li class="layui-nav-item" style="float: right">' + name + '</li> '
    }
    catch (e) {
        window.location.href= httpserver + 'index.html'
    }

}






function  get_req(objurl,dataType,message) {
    $.ajax({
        url:reserver + objurl,
        contentType : "application/x-www-form-urlencoded;charset=utf-8",
        cache: true,
        type: 'get',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
	headers: header,
        async: false,
        dataType : dataType,
        success: function(data){
            if (data.status == '0')
            {
                window.location.href= httpserver + 'login.html';
            }
            if (data.status == '200')
            {

            }
        }

    })

}

function   post_req(ojburl,data,dataType,message) {
    $.ajax({
        contentType : "application/x-www-form-urlencoded;charset=utf-8",
        cache: true,
        type: "POST",
        url: reserver + ojburl,
        data: data,// 你的formid
        async: false,
        dataType: dataType,
	headers: header,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        error: function (data) {
            alert('请求失败')
            result =  false
        },
        success: function(data){
            if (data.status == "200")
            {
                alert(message + '成功')
                result = true;
            }
            else
            {
                alert(message + '失败')
                result = false;
            }
        }


    });
    return result;

}


function check_login() {
    get_req('check_user','json','登录')
}



function login() {
    result =  post_req('login',$('#Login').serialize(),'json','登录')
    if (result) {
        var namev = document.getElementById('name')
        name = namev.value
        window.location.href= httpserver + 'index.html'
    }

}

function logout() {
    delete name;


}
function create_user() {
    result = post_req('register',$('#Cuser').serialize(),'json','注册')
}

function CUser_Lay() {
    result = post_req('register',$('#CUser_Lay').serialize(),'json','注册')
    if (result) {
        layer.closeAll()
        myrefresh()
    }
}





function isStr(s)
{
    var patrn=/^[a-z]{1,20}$/;
    if (!patrn.exec(s)) return false
    return true
}


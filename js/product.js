/**
 * Created by liushuo on 2017/8/8.
 */
var reserver = 'http://192.168.137.1:8000/'
var httpserver = 'http://192.168.137.1:90/'

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

function  getdata_req(objurl,dataType,message) {
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
        error: function (data) {
            alert(message + '请求错误')
            result = 'error'

        },
        success: function(data){
                    result = data

        }

    })
    return result

}

function Product_List() {
    result =  getdata_req('api/v1/Product/','json','获取产品列表')
    project_list = {}
    if ( 'error' != result) {
        for (var i = 0; i < result.data.length ; i ++ )
        {
            project_list[result.data[i].product_name] = result.data[i].product_id
        }
        /*
            var Oul = document.getElementById('vname');
            var Odiv = document.getElementById('div1')

            alert(result)
            var Cul = document.createElement('ul');
            html_text = '<div class="layui-form component"> <select lay-search="" lay-filter="component"> <option value="">搜索组件或模块</option> <option value="element/color.html">color 颜色</option> </select><div class="layui-unselect layui-form-select"><div class="layui-select-title"><input type="text" placeholder="搜索组件或模块" value="" class="layui-input layui-unselect"><i class="layui-edge"></i></div><dl class="layui-anim layui-anim-upbit"><dd lay-value="element/color.html" class="">color 颜色</dd><dd lay-value="element/icon.html" class="">iconfont 字体图标</dd><dd lay-value="element/button.html" class="">button 按钮</dd><dd lay-value="element/form.html" class="">form 表单组</dd><dd lay-value="element/form.html#input" class="">input 输入框</dd><dd lay-value="element/form.html#select" class="">select 下拉选择框</dd><dd lay-value="element/form.html#checkbox" class="">checkbox 复选框</dd><dd lay-value="element/form.html#switch" class="">switch 开关</dd><dd lay-value="element/form.html#radio" class="">radio 单选框</dd><dd lay-value="element/form.html#textarea" class="">textarea 文本域</dd><dd lay-value="element/nav.html" class="">nav 导航菜单</dd><dd lay-value="element/nav.html#breadcrumb" class="">breadcrumb 面包屑</dd><dd lay-value="element/tab.html" class="">tabs 选项卡</dd><dd lay-value="element/table.html" class="">table 表格</dd><dd lay-value="element/progress.html" class="">progress 进度条</dd><dd lay-value="element/collapse.html" class="">collapse 折叠面板/手风琴</dd><dd lay-value="element/auxiliar.html#blockquote" class="">blockquote 引用块</dd><dd lay-value="element/auxiliar.html#fieldset" class="">fieldset 字段集</dd><dd lay-value="modules/layer.html" class="">layer 弹出层/弹窗综合</dd><dd lay-value="modules/layim.html" class="">layim 即时通讯/聊天</dd><dd lay-value="modules/laydate.html" class="">laydate 日期时间选择器</dd><dd lay-value="modules/laypage.html" class="">laypage 分页</dd><dd lay-value="modules/laytpl.html" class="">laytpl 模板引擎</dd><dd lay-value="modules/form.html" class="">form 表单模块</dd><dd lay-value="modules/element.html" class="">element 常用元素操作</dd><dd lay-value="modules/layedit.html" class="">layedit 富文本编辑器</dd><dd lay-value="modules/upload.html" class="">upload 文件/图片上传</dd><dd lay-value="modules/tree.html" class="">tree 树形菜单</dd><dd lay-value="modules/util.html" class="">util 工具集</dd><dd lay-value="modules/flow.html" class="">flow 信息流/图片懒加载</dd><dd lay-value="modules/code.html" class="">code 代码修饰</dd></dl></div> </div>'
            Cul.innerHTML= html_text
            Odiv.insertBefore(Cul, Oul);
            */
    }
    return project_list
}

function  Init_Project() {
    project_list = Product_List()
    var projectObj = new Array();
    html_str = '<div class="dropdown header-center"><button class="btn btn-default dropdown-toggle"  id="p_btn" style="width:80%;" data-toggle="dropdown">'

    html_strend = '</ul> </div>'
    ul_str = ''
    for (var o in project_list)
    {
        ul_str += '<li><a href="#">' + o + '</a></li>'
        projectObj.push(o)
    }
    html_str1 = projectObj[0] + '&nbsp&nbsp&nbsp&nbsp<span class="caret"></span></button><ul class="dropdown-menu" id="p_ul">'
    html = html_str + html_str1 + ul_str + html_strend
    var Oul = document.getElementById('vname');
    var Odiv = document.getElementById('div1')
    var Cul = document.createElement('ul');
    Cul.innerHTML= html
    Odiv.insertBefore(Cul, Oul);
}










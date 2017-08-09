/**
 * Created by liushuo on 2017/8/9.
 */

var OP_ul = document.getElementById('p_ul');
var OP_li = OP_ul.getElementsByTagName('a');
var OP_btn = document.getElementById('p_btn')
for (var i = 0; i < OP_li.length; i++) {
        OP_li[i].onclick = function () {
            OP_btn.innerHTML = this.innerHTML + '&nbsp&nbsp&nbsp&nbsp<span class="caret"></span>'
            now_project = this.innerHTML
            now_projectid = project_list[now_project]
            /*alert(now_project)
            alert(now_projectid)
            */
        }
}

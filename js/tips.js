//防抖处理
// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

document.addEventListener("copy",function(){
    new Vue({
        data: function () {
            this.$notify({
                title: "复制成功👻",
                message: "有一说一我写的文本真的有复制的必要吗?",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "success",
                duration: 3000
            });
        }
    })
})

document.onkeydown = function(event){
    let keyNum = event.keyCode || window.event.keyCode || arguments.callee.caller.arguments[0].keyCode;
    // console.log(keyNum);
    if(keyNum && keyNum == 123){
        new Vue({
            data: function () {
                this.$notify({
                    title: "你已被发现🤔",
                    message: "扒源码还请务必遵守GPL协议哦~",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "warning",
                    duration: 3000
                });
            }
        })
    }
}

// notify：弹窗类型，可以替换为message（信息提示）和confirm（二次确认提示）

// title：弹窗标题，可以改为自定义标题

// message:弹窗信息，可以改为自定义内容

// position：弹出位置，bottom、top和left、right两两组合

// offset：偏移量，简单可以理解为与边界的距离

// showClose：是否显示关闭按钮

// type：提示类型，可选success/warning/info/error等

// duration：停留时间，弹出停留至消失的时间，单位ms
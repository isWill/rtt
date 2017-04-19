var toTop = document.getElementById('toTop'); // 返回顶部的按钮
var distance, timer; // 定义返回顶部的距离和定时器

// 为定时器赋值
function goTop() {
    timer = setInterval(function () {
        runToTop();
    }, 1);
}

// 返回顶部的方法
function runToTop() {
    distance = document.documentElement.scrollTop || document.body.scrollTop;
    distance -= 50;
    if (distance > 0) {
        window.scrollTo(0, distance);
    } else {
        window.scrollTo(0, 0);
        clearInterval(timer);
    }
}

// 监听返回按钮的单击事件
toTop.addEventListener('click', function () {
    goTop();
});

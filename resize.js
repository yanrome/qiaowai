// $(window).resize(function ()// 绑定到窗口的这个事件中
// {
//
//     let designSize = 1920; // 设计图尺寸
//
//     let html = document.documentElement;
//
//     let wW = html.clientWidth;// 窗口宽度
//     let rem = wW * 100 / designSize;
//
//     document.documentElement.style.fontSize = rem + 'px';
// });
(function () {
    if(document.documentElement.clientWidth>960){
        document.addEventListener('DOMContentLoaded', function () {
            var deviceWidth = document.documentElement.clientWidth;
            document.documentElement.style.fontSize = deviceWidth / 1920 * 100 + 'px';
        }, false);
        window.onresize = function () {
            var deviceWidth = document.documentElement.clientWidth;
            document.documentElement.style.fontSize = deviceWidth / 1920 * 100 + 'px';
        };
    }else {
        document.addEventListener('DOMContentLoaded', function () {
            var deviceWidth = document.documentElement.clientWidth;
            document.documentElement.style.fontSize = 960 / 1920 * 100 + 'px';
        }, false);
        window.onresize = function () {
            var deviceWidth = document.documentElement.clientWidth;
            document.documentElement.style.fontSize = 960 / 1920 * 100 + 'px';
        };
    }


})();

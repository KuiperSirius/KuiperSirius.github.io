<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr('href', "/images/failure.ico");
        document.title = '😰 w(ﾟДﾟ)w 页面崩溃啦！ ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="shortcut icon"]').attr('href', "/images/favicon.ico");
        document.title = '😏 ♪(^∇^*) 噫？又好了！';
        titleTime = setTimeout(function () {
            document.title = '🤔 啊来来！原标题是啥来着？ ';
        }, 2000);
		
		titleTime = setTimeout(function () {
            document.title = '😮哦~！想起来了！ ';
        }, 4000);
		
		titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 6000);
    }
});
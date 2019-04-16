var subpages = ['http://127.0.0.1:8848/demo/html/sleep/sleep.html', 'blood.html', 'mine.html'];
        var subpage_style = {
            top: '45px',
            bottom: '51px'
        };
            
        var aniShow = {};
            
         //创建子页面，首个选项卡页面显示，其它均隐藏；
        mui.plusReady(function() {
            var self = plus.webview.currentWebview();
            for (var i = 0; i < 4; i++) {
                var temp = {};
                var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
                if (i > 0) {
                    sub.hide();
                }
            /* 让新创建的webview，追加合并到当前的窗口上。合并成一个窗口。
                * 目的：将父子窗口合并成一个页面，实现同开同关的效果。 避免点击返回安监室，子页面先关闭，而父页面的头部和尾部没有关闭的BUG。
             */
                self.append(sub);
            }
        });
         //当前激活选项
        var activeTab = subpages[0];
        var title = document.getElementById("title");
        //选项卡点击事件
        mui('.mui-bar-tab').on('tap', 'a', function(e) {
            var targetTab = this.getAttribute('href');
                
            if (targetTab == activeTab) {
                return;
            }
            //更换标题
            title.innerHTML = this.querySelector('.mui-tab-label').innerHTML;
            //显示目标选项卡
            //若为iOS平台或非首次显示，则直接显示
            if(mui.os.ios||aniShow[targetTab]){
                plus.webview.show(targetTab);
            }else{
                //否则，使用fade-in动画，且保存变量
                var temp = {};
                temp[targetTab] = "true";
                mui.extend(aniShow,temp);
                plus.webview.show(targetTab,"fade-in",300);
            }
            //隐藏当前;
            plus.webview.hide(activeTab);
            //更改当前活跃的选项卡
            activeTab = targetTab;
    });
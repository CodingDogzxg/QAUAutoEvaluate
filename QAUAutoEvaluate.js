// ==UserScript==
// @name         QAUAutoEvaluate 青农自动评教
// @namespace    https://github.com/CodingDogzxg
// @version      0.1
// @description  自动评教 以防鼠标点击累死人
// @author       QAUCodingDog_zxg
// @include      http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_find.do?*
// @license      MIT
// ==/UserScript==

var url = location.pathname;

if (url == "http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_find.do?*") {
    var tableBox = document.getElementById("Nsb_r_list Nsb_table");
    var tableList = tableBox[0].getElementsByTagName("a");

    // setTimeout(window.open("http://www.baidu.com", "_blank"), 500);

    var pageList = [];
    for(var i=0;i<tableList.length;i++){
        pageList.push(tableList[i].getAttribute("href"));
    }

    function OpenPageInOrder(index) {
        for(var j=0; j<tableList.length; j++) {
            var currentWindow = setTimeout(window.open(tableList[j], "_blank"), 500);
            while (currentWindow != null || !currentWindow.closed) {
                // sleep函数 等待5
                var startTime = new Date().getTime() + parseInt(5000, 10);
                while(new Date().getTime() < startTime) {}
            }
        }
    }
}
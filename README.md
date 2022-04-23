类小红书样式卡片
====
<img src="https://github.com/itsdapi/Redbook-like-cards/blob/main/images/preview.jpg" width="300"><img src="https://github.com/itsdapi/Redbook-like-cards/blob/main/images/preview2.jpeg" width="315">

一些特点
----
图片高度自适应 非常简单的代码结构（难得我也写不出） 标题也能高度自适应 超出部分会隐去<br><br><br>

食用方法
----

1、拷贝community-cards文件夹<br>
2、在需要添加的页面json里<br>
>"cards":"/Components/community-cards/community-cards-slot-selector/community-cards-slot-selector"<br>

3、好啦！<br>
4、如果backgroundImage没有接收到参数就自动切换到文字模式（<br><br><br>

一些接口
----

|名称|类型|默认值|
|---|----|-----|
|width|String|345|
|gap|String|20|
|backgroundImage|String| |
|title|String|标题（限14字）|
|userinfo_username|String|用户名（限9字）|
|userinfo_headshot|String|/images/cat02.jpg|
|likesCounter|Number|0|


要修改默认值的在comunity-cards-slot-selector.js里面改<br>
单位一般是rpx<br>
图中瀑布流不在本项目中 这里推荐另一篇文章<br>
[小程序瀑布流的实践](https://segmentfault.com/a/1190000022415428)<br><br><br>

一些问题
----
因为我还没做到和后端对接的地方 所以很多地方仅仅只是实现了前端展示逻辑uwu<br>
还不能实现高度限制！万一有人上传长截图将会突破天际！<br><br><br>


代码片段
----
[点我](https://developers.weixin.qq.com/s/uqXBsJmO7hyA)

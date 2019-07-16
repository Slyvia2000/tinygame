// 此文件完成分数显示与增加
// 1 创建分数构造函数
var dataObj=function(){
    // 1.1 创建变量保存游戏分数
    this.score=0;
    // 1.2 创建变量保存分数是否是双倍
    this.double=1;
}
// 2 为分数构造函数添加方法draw
dataObj.prototype.draw=function(){
    // 2.1 获取画布宽度和高度
    var w=canWidth;
    var h=canHeight;
    // 2.2 保存画笔1状态
    ctx1.save();
    // 2.3 设置画笔1填充样式
    ctx1.fillStyle='#fff';
    // 2.4 设置字体
    ctx1.font='35px SimHei'
    // 2.5 文本居中
    ctx1.textAlign='center';
    // 2.6 绘制分数
    ctx1.fillText('SCORE:'+this.score,w*0.5,h*0.5-80);
    // 2.7 恢复画笔1状态
    ctx1.restore();
}
// 3 将data.jx添加到index.html文件中
// 4 在main.js创建分数对象并且调用相应的方法
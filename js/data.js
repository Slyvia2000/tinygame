// 此文件完成分数显示与增加
// 1 创建分数构造函数
var dataObj=function(){
    this.fruitNum=0;
    // 1.1 创建变量保存游戏分数
    this.score=0;
    // 1.2 创建变量保存分数是否是双倍
    this.double=1;
    this.gameOver=false;
    this.alpha=0;
}

// 大鱼和小于碰到一起
dataObj.prototype.reset=function(){
    this.fruitNum=0;
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

    if(this.gameOver){
        this.alpha+=deltaTime*0.0003;
        this.alpha=this.alpha>1?1:this.alpha;
        ctx1.fillStyle=`rgba(255,255,255,${this.alpha})`;
        ctx1.font='55px Verdana';
        ctx1.fillText("GAMEOVER",w*0.5,h*0.5);
    }
    // 2.7 恢复画笔1状态
    ctx1.restore();
}
// 3 将data.jx添加到index.html文件中
// 4 在main.js创建分数对象并且调用相应的方法
dataObj.prototype.addScore=function(){
    this.score+=this.fruitNum*100*this.double;
    this.fruitNum=0;
    this.double=1;
}
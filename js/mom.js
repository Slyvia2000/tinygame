// 1.创建大鱼构造方法
var momObj=function(){
    // 1.1 创建变量保存大鱼眼睛图片
    this.bigEye=[];
    // 1.2 创建变量保存大鱼身体图片
    this.bigBody=[];
    // 1.3 创建变量保存大鱼尾巴图片
    this.bigTail=[];
    // 1.4 创建变量保存大鱼位置
    this.x;
    this.y;
    // 1.5 创建变量保存大鱼游动角度
    this.angle;
};
// 2.为大鱼构造方法添加方法init
momObj.prototype.init=function(){
    // 2.1 创建循环遍历大鱼眼睛数组 创建图片对象并下载图片
    for(var i=0;i<2;i++){
        this.bigEye[i]=new Image();
        this.bigEye[i].src=`src/bigEye${i}.png`;
    };
    // 2.2 创建循环遍历大鱼身体数组 创建图片对象并下载图片
    for(var i=0;i<8;i++){
        this.bigBody[i]=new Image();
        this.bigBody[i].src=`src/bigSwim${i}.png`;
    };
    // 2.3 创建循环遍历大鱼尾巴数组 创建图片对象并下载图片
    for(var i=0;i<8;i++){
        this.bigTail[i]=new Image();
        this.bigTail[i].src=`src/bigTail${i}.png`;
    };
    // 让大鱼出现时显示在画布中心的位置
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    // 让大鱼游动的角度0
    this.angle=0;
};
// 3.为大鱼构造方法添加方法draw
momObj.prototype.draw=function(){
    // 3.0 将鼠标位置赋值给大鱼
    this.x=mx;
    this.y=my;
    // 3.1 保存画笔1状态
    ctx1.save();
    // 3.2 修改旋转轴心在大鱼xy上
    ctx1.translate(this.x,this.y);
    // 3.3 修改旋转角度大鱼角度
    ctx1.rotate(this.angle);
    // 3.4 绘制大鱼身体(1)有序 目的 防止覆盖
    ctx1.drawImage(this.bigBody[0],0,0);
    // 3.5 绘制大鱼尾巴(2)有序
    ctx1.drawImage(this.bigTail[0],0+37,0+5);
    // 3.6 绘制大鱼眼睛(3)有序
    ctx1.drawImage(this.bigEye[0],0+20,0+20);
    // 3.7 恢复画笔状态
    ctx1.restore();
};
// 4.将mom.js添加至index.html
// 5.在main.js创建大鱼对象并且调用相关方法
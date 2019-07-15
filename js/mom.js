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
    }
    // 2.2 创建循环遍历大鱼身体数组 创建图片对象并下载图片
    for(var i=0;i<8;i++){
        this.bigBody[i]=new Image();
        this.bigBody[i].src=`src/bigSwim${i}.png`;
    }
    // 2.3 创建循环遍历大鱼尾巴数组 创建图片对象并下载图片
    for(var i=0;i<8;i++){
        this.bigTail[i]=new Image();
        this.bigTail[i].src=`src/bigSwim${i}.png`;
    }
};
// 3.为大鱼构造方法添加方法draw
momObj.prototype.draw=function(){
};
// 4.将mom.js添加至index.html
// 5.在main.js创建大鱼对象并且调用相关方法
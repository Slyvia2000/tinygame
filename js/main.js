// 作用：创建游戏中所有全局变量；创建所有游戏中角色对象；绘制游戏角色；
// 5.页面加载调用game
document.body.onload=game;

// 1.声明所有全局变量
var can1;//画布1
var can2;//画布2
var ctx1;//画笔1
var ctx2;//画笔2
const DEBUG=true;

// 上一帧被执行的时间
var lastTime;
// 二帧间隔的时间差
var deltaTime;

var canWidth;//画布宽高
var canHeight;

var bgPic;//背景图片
// 1.1 创建全局变量保存海葵
var ane;
// 1.2 创建全局变量保存食物
var fruit;
// 1.3 创建全局变量保存大鱼 小鱼
var mom;
var baby;

// 1.4 创建全局变量保存分数
var data;
// 1.5 大鱼吃食物特效
var wave;
// 1.6 大鱼喂小鱼食物
var halo;
// 1.7 漂浮物
var dust;

// 项目入口程序......
// 2.创建函数game 第一个执行的函数：入口函数<==
function game(){
    init();
    gameloop();
};


// 3.创建函数init 初始化
function init(){
    // 3.1:初始化2个画布2支画笔
    can1=document.getElementById('canvas1');//鱼 食物
    can2=document.getElementById('canvas2');//背景 海葵
    ctx1=can1.getContext('2d');
    ctx2=can2.getContext('2d');
    // 3.3:初始化图片
    bgPic=new Image();
    bgPic.src='src/background.jpg';

    lastTime=Date.now();
    deltaTime=0;

    // 3.2:初始化宽高
    canWidth=can1.width;
    canHeight=can1.height;
    
    // 3.4 创建海葵对象并且调用初始化方法
    ane=new aneObj();
    ane.init();
    // 3.5 创建食物对象并且调用初始化方法
    fruit=new fruitObj();
    fruit.init();
    // 3.6 创建大鱼对象并且调用初始化方法
    mom=new momObj();
    mom.init();

    baby=new babyObj();
    baby.init();

    mx=canWidth*0.5;
    my=canHeight*0.5;
    // 3.7 创建鼠标移动监听绑定画布1上
    can1.addEventListener('mousemove',canHandler,false);
    // 3.8 创建分数对象
    this.data=new dataObj();
    // 3.9 创建wave对象并且调用初始化方法
    wave=new waveObj();
    wave.init();
    // 3.10 创建漂浮物对象并且调用初始化方法
    dust=new dustObj();
    dust.init();
    // 3.11 halo

    halo=new haloObj();
    halo=init();
    
}
// 4.创建函数gameloop 循环绘制元素
function gameloop(){
    // 4.1创建定时器调用gameloop
    requestAnimationFrame(gameloop);

    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    if(deltaTime>40){deltaTime=40;}
    drawBackground();
    // 4.3 清除画布1
    ctx1.clearRect(0,0,canWidth,canHeight);
    // 4.3.1 完成碰撞检测
    momFruitsCollsion();
    momBabyCollision();
    // 4.4调用监听食物数量的函数
    fruitMonitor();
    // 4.5调用绘制背景函数
    // 4.6调用绘制海葵函数
    ane.draw();
    // 4.7调用绘制食物函数
    fruit.draw();
    // 4.8 调用绘制大鱼函数
    mom.draw();
    baby.draw();
    // 4.9 调用绘制分数函数
    data.draw();
    // 4.10 调用绘制wave函数
    wave.draw();
    // 4.11 调用绘制投喂函数
    halo.draw();
    // 4.12 调用绘制漂浮物函数
    dust.draw();
}

// 6.将文件main.js添加至index.html
// 6.1 创建2个全局变量保存鼠标位置
var mx=0;
var my=0;
// 7.鼠标移动画布事件处理函数
function canHandler(e){
    // 游戏结束，鼠标不能控制大鱼
    if(data.gameOver){return;};

    /*
    // 7.1 获取鼠标x位置
    var x=e.offsetX;
    // 7.2 获取鼠标y位置
    var y=e.offsetY;
    // console.log(x,y)
    // 7.3 将鼠标x与y位置赋值全局变量mx，my
    mx=x;
    my=y;
    */
   
    if(e.offsetX || e.layerX){
      mx = e.offsetX == undefined ? e.layerX : e.offsetX;
    }
    if(e.offsetY || e.layerY){
     my = e.offsetY == undefined ? e.layerY : e.offsetY;
    }
}
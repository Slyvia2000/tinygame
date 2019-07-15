// 作用：创建游戏中所有全局变量；创建所有游戏中角色对象；绘制游戏角色；
// 1.声明所有全局变量
var can1;//画布1
var can2;//画布2
var ctx1;//画笔1
var ctx2;//画笔2
var canWidth;//画布宽高
var canHeight;
var bgPic;//背景图片
// 1.1 创建全局变量保存海葵
var ane;
// 2.创建函数game 第一个执行的函数：入口函数
function game(){
    init();
    gameloop();
};
// 3.创建函数init 初始化
function init(){
    // 3.1:初始化2个画布2支画笔
    can1=document.getElementById('canvas1');
    can2=document.getElementById('canvas2');
    ctx1=can1.getContext('2d');
    ctx2=can2.getContext('2d');
    // 3.2:初始化宽高
    canWidth=can1.width;
    canHeight=can1.height;
    console.log(canWidth+':'+canHeight);
    console.log(ctx1);
    console.log(ctx2);
    // 3.3:初始化图片
    bgPic=new Image();
    bgPic.src='src/background.jpg';
    // 3.4 创建海葵对象并且调用初始化方法
    ane=new aneObj();
    ane.init();
}
// 4.创建函数gameloop 循环绘制元素
function gameloop(){
    // 4.1创建定时器调用gameloop
    requestAnimationFrame(gameloop);
    // 4.5调用绘制背景函数
    drawBackground();
    // 4.6调用绘制海葵函数
    ane.draw();
}
// 5.页面加载调用game
document.body.onload=game;
// 6.将文件main.js添加至index.html
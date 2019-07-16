// 此文件完成所有游戏中碰撞检测功能
// 1 大鱼碰撞食物
function momFruitsCollsion(){
    // 如果游戏结束了，大鱼就不能吃食物
    if(data.gameOver){return};
    // 1.1 创建循环遍历所有食物
    for(var i=0;i<fruit.num;i++){
        // 1.2 判断当前食物是否是显示状态
        if(fruit.alive[i]){
            // 1.3 计算大鱼与食物距离
            var len=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            // 1.4 如果大鱼与食物距离小于900
            if(len<900){
                // 1.5 食物消失
                fruit.alive[i]=false;
                // 果实的数量+1
                data.fruitNum++;
                // 1.6 计算分数score
                // 1.7 判断食物类型
                if(fruit.fruitType[i]!=='blue'){
                    data.double=2;
                }
                // 1.8 分数累加
                // 大鱼吃到食物出现动画效果
                wave.born(fruit.x[i],fruit.y[i]);
            };
        };
    };
};
// 2 大鱼碰撞小鱼
function momBabyCollsion(){
    // 游戏结束 大鱼不能喂小鱼
    if(data.gameOver){return};

    if(DEBUG){}
    
    //大鱼必须吃到一定数量的果实后，才能喂小鱼
    if(data.fruitNum>0){
        var l=calLength2(mom.x,mom.y,baby.x,baby.y);
        if(l<900){
            baby.babyBodyIdx=0;
            data.addScore();
            // 产生一个大鱼碰小鱼的特效
            halo.born(baby.x,baby.y)
        }
    }
}
// 3 将collsion.js加载至index.html
// 4 并且在main.js gameloop 调用以上函数

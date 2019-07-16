// 此文件完成所有游戏中碰撞检测功能
// 1 大鱼碰撞食物
function momFruitsCollsion(){
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
                // 1.6 计算分数score
                // 1.7 判断食物类型
                if(fruit.fruitType[i]!=='blue'){
                    data.score+=200;
                }else{
                    data.score+=100;
                }
                // 1.8 分数累加
            }
        };
    };
};
// 2 大鱼碰撞小鱼
function momBabyCollsion(){
    // 2.1 
    // 2.2
    // 2.3
    // 2.4
    // 2.5
}
// 3 将collsion.js加载至index.html
// 4 并且在main.js gameloop 调用以上函数

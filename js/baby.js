var babyObj=function(){
    this.x;
    this.y;
    this.angle;
    this.babyEye=[];
    this.babyBody=[];
    this.babyTail=[];
    // 图片下标
    this.babyEyeIdx=0;
    // 睁眼时间长度
    this.babyEyeEndtime=2000;
    // 计时开始
    this.babyEyeStart=1;

    this.babyBodyIdx=0;
    this.babyBodyEndtime=3000;
    this.babyBodyStart=1;

    this.babyTailIdx=0;
    this.babyTailEndTime=1000;
    this.babyTailStart=1;
};

// 初始化
babyObj.prototype.init=function(){
    // 初始位置
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.angle=0;
    // 初始图片组
    for(var i=0;i<2;i++){
        this.babyEye[i]=new Image();
        this.babyEye[i].src=`./src/babyEye${i}.png`;
    };
    for(var i=0;i<20;i++){
        this.babyBody[i]=new Image();
        this.babyBody[i].src=`./src/babyFade${i}.png`;
    };
    for(var i=0;i<8;i++){
        this.babyTail[i]=new Image();
        this.babyTail[i].src=`./src/babyTail${i}.png`;
    }
}
// 绘制
babyObj.prototype.draw=function(){
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.99);
    // lerp angle
    var deltaY=mom.y-this.y;
    var deltaX=mom.x-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    // lerp angle
    this.angle=lerpAngle(beta,this.angle,0.6);
    // 判断尾巴 身体 眼睛
    this.babyBodyStart+=deltaTime;
    if(this.babyBodyStart>this.babyEyeEndtime){
        this.babyBodyIdx=(this.babyBodyIdx+1);
        this.babyBodyStart=1;
        if(this.babyBodyIdx>18){
            this.babyBodyIdx=18;
            data.gameOver=true;//游戏结束
        }
    }

    this.babyTailStart+=deltaTime;
    if(this.babyTailStart>this.babyEyeEndtime){
        this.babyTailIdx=(this.babyTailIdx+1)%8;
        this.babyTailStart=1;
    }

    this.babyEyeStart+=deltaTime;
    if(this.babyEyeStart>this.babyEyeEndtime){
        this.babyEyeIdx=(this.babyBodyIdx+1)%2;
        this.babyEyeStart=1;
    }
    if(this.babyEyeIdx==0){
        this.babyEyeEndtime=3000;
    }
    if(this.babyEyeIdx==1){
        this.babyEyeEndtime=300;
    }

    var eye=this.babyEye[this.babyEyeIdx];
    var body=this.babyBody[this.babyBodyIdx];
    var tail=this.babyTail[this.babyTailIdx];

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(body,-body.width*0.5,-body.height*0.5);
    ctx1.drawImage(tail,-tail.width*0.5+23,-tail.height*0.5);
    ctx1.drawImage(eye,-eye.width*0.5,-eye.height*0.5);
    ctx1.restore();
}
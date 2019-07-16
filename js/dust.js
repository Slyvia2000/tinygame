var dustObj=function(){
    this.x=[];
    this.y=[];
    this.amp=[];
    this.pics=[];
    this.No=[];
    this.alpha=[];
}

dustObj.prototype.num=30;

dustObj.prototype.init=function(){

    for(var i=0;i<this.num;i++){
        this.x[i]=Math.random()*canWidth;
        this.y[i]=Math.random()*canHeight;
        this.amp[i]=20+Math.random()*50;
        this.No[i]=Math.floor(Math.random()*7);
    }
    this.alpha=0;

    for(var i=0;i<7;i++){
        this.pics[i]=new Image();
        this.pics[i].src=`./src/dust${i}.png`;
    }
}

dustObj.prototype.draw=function(){
    this.alpha+=deltaTime*0.0008;
    var l=Math.sin(this.alpha);
    for(var i=0;i<this.num;i++){
        var no=this.No[i];
        ctx1.drawImage(this.pics[no],this.x[i]+this.amp[i]*l,this.y[i]);
    }
}
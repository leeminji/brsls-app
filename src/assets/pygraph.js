const pygraph = (function(){
    return {
        _data : [],
        _canvas : null,
        _round : [],
        setCanvas : function(canvas){
            this._canvas = canvas;
            this._canvas.height = 500;
        },
        setData : function(data){
            this._data = data;
        },
        draw : function(){
            if( this._data.length == 0 || this._canvas == null ) return;
            
            const pos = this.getRandomPos(this._canvas);
            //const posX = [110,190,190,110,130,190];
            //const posY = [150,120,190,250,290,300];
            this.drawArcFill(0, this._canvas, this._data[0] );
            this.drawArcFill(1, this._canvas, this._data[1] );

        },
        getPosX : function(pre, data){
            console.log(pre);
            console.log(current);

            var current_r = this.getRadius(dta)
            
            return Math.sqrt( Math.pow(pre.r + current.r)-400 ) + pre.x;

        },
        getPosY : function(pre, data){
            return pre.y - 20;
        },
        drawArcFill : function(index, canvas, data){
            const context = canvas.getContext("2d");
            const radius = this.getRadius(data.percent);
            if( index == 0 ){
                let posX = radius;
                let posY = radius;

                context.beginPath();
                context.fillStyle = "rgba(0,0,0,0.5)";
                context.arc(posX, posY, radius, 0,2*Math.PI, false);
                context.fill();
            }else{
                let posX = radius+100;
                let posY = radius+100;
                context.beginPath();
                context.fillStyle = "rgba(0,0,0,0.5)";
                context.arc(posX, posY, radius, 0,2*Math.PI, false);
                context.fill();
            }
        },
        getRandomPos : function(canvas){
            //console.log(canvas.width, canvas.height);
            const randomX = Math.floor(Math.random()*canvas.width);
            const randomY = Math.floor(Math.random()*canvas.height);
            return {x : randomX, y:randomY};
        },
        getRadius : function(percent){
            return (50+(160*percent/100))/2;
        }

    }
}());

export { pygraph };
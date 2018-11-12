function getReactangle(width, height, color, x, y,direction){
	this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    this.direction = direction;
	/*ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);*/
    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height, this.direction);
    }	
};
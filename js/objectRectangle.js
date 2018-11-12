function getReactangle(width, height, color, x, y,direction){
	this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    this.direction = direction;
    this.speedX = 0;
    this.speedY = 0;
	/*ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);*/
    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height, this.direction);
    }	

    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    } 
    
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    }
};
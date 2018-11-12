var rectMain;
var rectMainShoot;
var tankEnemyBody = [];
var tankEnemyHead = [];
var tankEnemyBody1;
var tankEnemyHead1;
var tankShoots = [];
function startGame() {
		myGameArea.start();
		rectMain = new getReactangle(40, 40, "red", 0, 180,"right");
		rectMainShoot = new getReactangle(10, 10, "red", 40, 195, "right");
		tankEnemyBody1 = new getReactangle(40, 40, "blue", 200, 360, "top");
		tankEnemyHead1 = new getReactangle(10, 10, "blue", 215, 350, "top");
	}
	var myGameArea = {
		canvas : document.createElement("canvas"),
		start : function() {
			this.canvas.width = 800;
			this.canvas.height = 400;
			this.context = this.canvas.getContext("2d");
			document.body.insertBefore(this.canvas, document.body.childNodes[0]);
			this.frameNo = 0; 
			this.interval = setInterval(updateGameArea, 20);
		window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
	},
	clear : function(){
		this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
	},
	stop : function() {
        clearInterval(this.interval);
    }
};

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
};


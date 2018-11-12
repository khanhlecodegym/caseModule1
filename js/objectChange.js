var tankShoots = [];
var directionShoot;
const distanceMoveShort = 1;
function updateGameArea(){
	var x,y;
	myGameArea.clear();
	
	if(myGameArea.key){
		EventsKey(myGameArea.key);
	}
	if (rectMain.crashWith(tankEnemyBody1)) {
        myGameArea.stop();
    }else {
		tankEnemyBody1.update();
		tankEnemyBody1.y += -distanceMoveShort;
		tankEnemyHead1.y += -distanceMoveShort;
		tankEnemyHead1.update();
		rectMain.update();
		rectMainShoot.update();
		
	}
	if(myGameArea.key == 32){
		myGameArea.frameNo += 1;
		directionShoot = rectMainShoot.direction;
		if(directionShoot == "top" || directionShoot == "down"){
			tankShoots.push(new getReactangle(6, 6, "red", rectMainShoot.x + 2, rectMainShoot.y+6, directionShoot));
		}else {
			tankShoots.push(new getReactangle(6, 6, "red", rectMainShoot.x + 10, rectMainShoot.y+2, directionShoot));
			//tankShoot = new getReactangle(6, 6, "red", rectMainShoot.x + 10, rectMainShoot.y+2, "right");
		}
	}

	for (i = 0; i < tankShoots.length; i++) {
		if(tankShoots[i].direction == "left"){
			tankShoots[i].x += -distanceMoveShort;
		}
		if(tankShoots[i].direction == "right"){
			tankShoots[i].x += distanceMoveShort;
		}
		if(tankShoots[i].direction == "top"){
			tankShoots[i].y += -distanceMoveShort;
		}
		if(tankShoots[i].direction == "down"){
			tankShoots[i].y += distanceMoveShort;
		}
 		if(tankShoots[i].x > 800 || tankShoots[i].x <= 0 || tankShoots[i].y <= 0 || tankShoots[i].y >= 400)  {
 			tankShoots.splice(i,1);
 		}  
        tankShoots[i].update();
    }

	// if(tankShoots>= 1){
	// 	SetPointShootTank();
	// }
};

function SetPointShootTank(){
	for (i = 0; i < tankShoots.length; i += 1) {
        if(tankShoots[i].x > 800){
        	tankShoots.splice(i,1);
        }
        tankShoots[i].speedX += distanceMoveShort;
        tankShoots[i].newPos();
        tankShoots[i].update();
    }
}


//Xử ký sự kiện hot keys di chuyển
function EventsKey(hotkeys){
	switch(myGameArea.key){
		case 37 : 
			moveleft();
			break;
		case 38 :
			moveup();
			break;
		case 39 :
			moveright();
			break;
		case 40 :
			movedown();
			break;
	}
}

//Xử lý tank shoot
// function tankShoot(){
// 	var x,y;
// 	x = rectMainShoot.x + 10;
// 	y = rectMainShoot.y + 2;
// 	//if(tankShoot)
// 	tankShoots.push(new getReactangle(6, 6, "red", x, y,rectMainShoot.direction))

// 	for (i = 0; i < tankShoots.length; i += 1) {
//         tankShoots[i].speedX += 1;
//         tankShoots[i].newPos();
//         tankShoots[i].update();
//     }
// }

function moveright() {
	if(rectMain.direction == "right"){
	    rectMain.x += 2; 
	    rectMainShoot.x += 2;
	}else{
		rectMain.direction = "right"; 
		rectMainShoot.direction = "right";
		getPointShoot(rectMain.x, rectMain.y);
	}
};


function moveup() {
	if(rectMain.direction == "top"){
		rectMain.y -= 2; 
		rectMainShoot.y -= 2;
	}
    else{
    	rectMain.direction = "top"; 
		rectMainShoot.direction = "top";
		getPointShoot(rectMain.x, rectMain.y);
    }
};

function getPointShoot(x,y){
	switch(rectMainShoot.direction){
		case "top" :
			rectMainShoot.x = x+15;
			rectMainShoot.y = y-10;
			break;
		case "right" :
			rectMainShoot.x = x+40;
			rectMainShoot.y = y+15;
			break;
		case "left" :
			rectMainShoot.x = x-10;
			rectMainShoot.y = y+15;
			break;
		case "down" :
			rectMainShoot.x = x+15;
			rectMainShoot.y = y+40;
			break;
	}
	
};

function moveleft() {
    if(rectMain.direction == "left"){
		rectMain.x -= 2; 
	    rectMainShoot.x -= 2;
	}
    else{
    	rectMain.direction = "left"; 
		rectMainShoot.direction = "left";
		getPointShoot(rectMain.x, rectMain.y);
    }
};

function movedown() {
    if(rectMain.direction == "down"){
		rectMain.y += 2; 
	    rectMainShoot.y += 2;
	}
    else{
    	rectMain.direction = "down"; 
		rectMainShoot.direction = "down";
		getPointShoot(rectMain.x, rectMain.y);
    }
};
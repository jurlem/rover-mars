// Rover Object Goes Here, default direction "N"
let rover = {
  direction : 'N',
  position : [0, 0],
  //commands : 'rffrfflfrff',
  travelLog :[]
}

// current rover position:
//console.log(rover);



function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case 'N': 
     rover.direction = 'W';
     break;
    case 'W':
     rover.direction = 'S';
     break;
    case 'S':
     rover.direction = 'E';
     break; 
    case 'E':
     rover.direction = 'N';
     break;
  }
  console.log('Rover is now facing ' + rover.direction );
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case 'N': 
     rover.direction = 'E';
     break;
    case 'W':
    rover.direction = 'N';
     break;
    case 'S':
     rover.direction = 'W';
     break; 
    case 'E':
     rover.direction = 'S';
     break;
  }
  console.log('Rover is now facing ' + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch(rover.direction){
    case 'N': 
     rover.position[1] -= 1;
     break;
    case 'W':
     rover.position[0] -= 1;
     break;
    case 'S':
     rover.position[1] += 1;
     break; 
    case 'E':
     rover.position[0] += 1;
     break;
  }
  rover.travelLog.push([rover.position[0], rover.position[1]]) 

  console.log('Rovers new position: ' + rover.position);
}

function move(rover){
 let commands = 'rffrfflfrff' ;
 for (i=0; i<commands.length; i++){
   commandsArray = commands.split('');
  switch(commandsArray[i]){
    case 'r':
    turnRight(rover);
     break;
    case 'f':
    moveForward(rover); 
     break;
    case 'l' :
    turnLeft(rover);
     break;
     default:
     console.log('something fishy');
     break
  }}}

move(rover);
console.log(rover);





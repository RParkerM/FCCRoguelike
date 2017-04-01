//imports
import { refreshView } from 'viewport';

//VIEWPORT CONSTANTS
const cols = 20;
const rows = 15;
let viewport = createRandomViewPort(cols,rows);

function AttemptMove(direction){
  if(direction == "left"){
    console.log("Moving Left");
  }else if(direction == "right"){
    console.log("Moving Right");
  }else if(direction == "up"){
    console.log("Moving Up");
  }else if(direction == "down"){
    console.log("Moving Down");
  }
}

function keyhandler(e){
  //console.log(e);
  let controlviewer = document.getElementById("controlviewer");
  controlviewer.innerHTML = e.key;
  if(e.key == "ArrowLeft"){
    AttemptMove("left");
  }else if(e.key == "ArrowRight"){
    AttemptMove("right");
  }else if(e.key == "ArrowUp"){
    AttemptMove("up");
  }else if(e.key == "ArrowDown"){
    AttemptMove("down");
  }
}

function getRandomBGIndex(){
  const MAXINDEX = 2;
  const MININDEX = 1;
  return Math.floor(Math.random()*(MAXINDEX-MININDEX + 1)+MININDEX);
}

function createRandomViewPort(cols, rows){
  var data = [];
  for(var y = 0; y < rows; y++){
    data[y] = [];
    for(var x = 0; x < cols; x++){
      data[y][x] = getRandomBGIndex();
    }
  }
  return {cols, rows, data};
}

console.log(viewport);

function refresh() {
    ReactDOM.render(
        <ViewPort rows={viewport.rows} cols={viewport.cols} data={viewport.data}/>,
        document.getElementById('viewport')
    );
}

function Create(){
  viewport = createRandomViewPort(cols,rows);
  refresh();
}

refresh();
window.onkeydown = keyhandler;
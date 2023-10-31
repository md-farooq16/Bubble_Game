var clutter = "";
var timer = 60;
var score = 0;
var hitrn =0;

function makingBubbles(){
for(var i = 1 ; i<=147 ; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;

    document.querySelector("#pbtm").innerHTML = clutter;
}
}

function runTimer(){
   var timerInterval = setInterval(function(){
        if(timer > 0){
    timer--;
    document.querySelector(".box2").textContent = timer;
}else{
    clearInterval(timerInterval);
    document.querySelector("#pbtm").innerHTML = `<p class="Gameover">GAME OVER</p>`;
}
    },1000)

    
}

function newHitVal(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector(".box1").textContent = hitrn;
}

function scoreIncrease(){
    score += 10;
    document.querySelector(".box3").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",(dets)=>{
  var clickedVal = Number(dets.target.textContent);

  if(clickedVal == hitrn){
    scoreIncrease();
    makingBubbles();
    newHitVal()
  }
})

makingBubbles();
runTimer();
newHitVal();
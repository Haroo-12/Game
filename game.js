var hitrn =0
var time = 5;
var score = 0
function makebuble(){
var clutter = ""
for(var i =1;i<=112 ; i++){
    var ans = Math.floor(Math.random() * 10);
clutter+= `<div class="box1">${ans}</div>`;
}
document.querySelector("#pbtm").innerHTML= clutter
}


function runtimer(){
var ans =  setInterval(function(){
    if(time>0){
    time--
    document.querySelector("#timer").textContent= time
    }
  else{
    clearInterval(ans)
      score = 0 
    document.querySelector("#pbtm").innerHTML =`<h1 class= "kala">gameover</h1>`
    let createbtn = document.createElement("button")
    createbtn.textContent = "run again"
    createbtn.setAttribute("id","run-again")
    document.querySelector("#pbtm").appendChild(createbtn)
    let runagainbtn = document.querySelector("#run-again")
    runagainbtn.addEventListener("click" ,function(){
        time = 5
        document.querySelector("#timer").textContent= time
        runtimer()
        makebuble()
    })
  }
},1000)
}


function hittie(){
     hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitt").textContent = hitrn
}



function incrementvalue(){
 score+=10
document.querySelector("#scorl").textContent = score
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
  var clckpb = Number(dets.target.textContent)
if(clckpb==hitrn){
  incrementvalue()
  hittie()
  makebuble()
}
})

runtimer()
makebuble()

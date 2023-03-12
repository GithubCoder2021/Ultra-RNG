var rng = 4096;

function luck(){
  rng = Math.floor(Math.random()* 4096)+1;
}



setInterval (function(){
 if (rng < 4097 && rng > 2048){
  document.getElementById("rng").innerText = "Effortless (1/1)";
  document.getElementById("rng").style.color = "white";
 }else if (rng < 2049 && rng > 1024){
  document.getElementById("rng").innerText = "Easy (1/2)";
  document.getElementById("rng").style.color = "green";
 }else if (rng < 1025 && rng > 512){
  document.getElementById("rng").innerText = "Medium (1/4)";
  document.getElementById("rng").style.color = "yellow";
 }else if (rng < 513 && rng >256){
  document.getElementById("rng").innerText = "Hard (1/8)";
  document.getElementById("rng").style.color = "orange";
 }else if (rng < 257 && rng > 128){
  document.getElementById("rng").innerText = "Difficult (1/16)";
  document.getElementById("rng").style.color = "red";
 }else if (rng < 129 && rng > 64){
  document.getElementById("rng").innerText = "Challenging (1/32)";
  document.getElementById("rng").style.color = "#7A0000";
 }else if (rng < 65 && rng >32){
  document.getElementById("rng").innerText = "Intense (1/64)";
  document.getElementById("rng").style.color = "#444444";
 }else if (rng < 33 && rng > 16){
  document.getElementById("rng").innerText = "Remorseless (1/128)";
  document.getElementById("rng").style.color = "#F800FF";
 }else if (rng < 17 && rng > 8){
  document.getElementById("rng").innerText = "Relentless (1/256)";
  document.getElementById("rng").style.color = "#8400FF";
 }else if (rng < 9 && rng >4){
  document.getElementById("rng").innerText = "Insane (1/512)";
  document.getElementById("rng").style.color = "blue";
 }else if (rng < 5 && rng >2){
  document.getElementById("rng").innerText = "Extreme (1/1024)";
  document.getElementById("rng").style.color = "#00BAFF";
 }else if (rng < 3 && rng >1){
  document.getElementById("rng").innerText = "Terrifying (1/2048)";
  document.getElementById("rng").style.color = "#00FFFB";
 } else {
  document.getElementById("rng").innerText = "Catastrophic (1/4096)";
  document.getElementById("rng").style.color = "white";
 }
}, 50);


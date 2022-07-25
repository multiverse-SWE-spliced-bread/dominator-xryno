const sendBtn = document.getElementById("send-btn");


sendBtn.addEventListener("click", function(){ 
   const newP = document.createElement("p")
   newP.innerText = document.getElementById("inp").value;
   document.getElementById("chat").appendChild(newP);
   document.getElementById("inp").value = "";
},false);
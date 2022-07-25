const quietBtn = document.getElementById("quiet-btn");
const loudBtn = document.getElementById("loud-btn");
const sarcBtn = document.getElementById("sarc-btn");
let para = document.getElementById("patrick")

quietBtn.addEventListener("click", function(){ 
    para.innerHTML = para.innerHTML.toLowerCase();
},false);


loudBtn.addEventListener("click", function(){ 
    para.innerHTML = para.innerHTML.toUpperCase();
},false);


sarcBtn.addEventListener("click", function(){ 

    let sarcLen = para.innerHTML.length
    let new2 = ""

    for (i=0; i<sarcLen; i++) {

        if (i % 2 === 0){

            new2 += para.innerHTML[i].toLowerCase();

        } else {
            new2 += para.innerHTML[i].toUpperCase();
        }

       
    }
    para.innerHTML = new2
},false);






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

    let j = 0

    for (i=0; i<sarcLen; i++) {

    
    if (para.innerHTML[i] !== " ") {

             if (j % 2 === 0){

                new2 += para.innerHTML[i].toUpperCase();
                j++
                
            } else {
                new2 += para.innerHTML[i].toLowerCase();
                j++
            }

        } else {
            new2 += para.innerHTML[i]

        }  

}
    para.innerHTML = new2
},false);






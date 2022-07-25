

for (i=2; i < 101; i++) {
console.log("test")
 const newDiv = document.createElement("div");
 newDiv.setAttribute('id', "block-" + i);
 newDiv.setAttribute('class', "red-block");
 document.getElementById("blocks").appendChild(newDiv);


}



 let list = document.getElementsByClassName("red-block")

for (i=0; i < list.length; i++) {

    list[i].addEventListener("mouseover", function(){ 
           
        this.style.display="none";
                        
         },);

}




 
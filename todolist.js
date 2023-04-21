

//const buttonDoc = buttonElement.addEventListener("onclick", createElement());


function createElement_() {

    if (document.getElementById("input-bar").value.trim() != "") {
        var divElement = document.createElement("div");
        var divCancel = document.createElement("div");
        var divText = document.createElement("div");
        var container = document.createElement("div");
        var nodeText = document.createTextNode("  X");
        var dutyText = document.createTextNode(document.getElementById("input-bar").value);
        var list = document.getElementById("list-elements");
        var flag;
        var flagChecked = true; 


        divElement.id = "div-element";
        divCancel.id = "div-cancel";
        divText.id = "div-text";

        container.id = "default-container";


        container.appendChild(dutyText);

        divElement.appendChild(container);


        divCancel.appendChild(nodeText);



        divElement.appendChild(divText);
        divElement.appendChild(divCancel);


        list.appendChild(divElement);
        list.appendChild(document.createElement("br"));
        divCancel.addEventListener("click", () => {
            divElement.remove();
        });
        divElement.addEventListener("click", () => {


          if(flagChecked){
            container.style.textDecoration = "line-through";
            flag = true;
            flagChecked = false; 
          }
          else if(!flagChecked){
            container.style.textDecoration = "none"; 
            flagChecked = true; 
          }

        })
        divElement.addEventListener("mouseover", () => {

            flag = false; 
            container.style.textDecoration = "line-through";
        })
        divElement.addEventListener("mouseleave", () => {
            if (flag == false && flagChecked == true) {
                container.style.textDecoration = "none";
            }




        })

    }
    else {
        alert("empty string!");
    }

}

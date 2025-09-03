console.log("testing if index.html points to this javascript file");

let Whole_List = document.getElementById("todolist");
let User_Input = document.getElementById("userInput");
// function adds item 
function addtheitem(){

    let li_item = document.createElement("li");
    let span_item = document.createElement("span");
    span_item.textContent = " X";
    
    span_item.addEventListener("click",function(){

        li_item.style.display = "none";
    });

    li_item.textContent = User_Input.value+"  ";

    li_item.appendChild(span_item);
    Whole_List.appendChild(li_item);

        
}



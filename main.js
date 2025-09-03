console.log("testing if index.html points to this javascript file");

let Whole_List = document.getElementById("todolist");
let User_Input = document.getElementById("userInput");
// function adds item 
function addtheitem(){

    let li_item = document.createElement("li");
    li_item.textContent = User_Input.value;
    Whole_List.appendChild(li_item);

        
}



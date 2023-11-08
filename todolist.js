const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = inputbox.value;
        listcontainer.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener("click",function(event){
   if(event.target.tagName ==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();

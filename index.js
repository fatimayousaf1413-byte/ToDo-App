const input = document.querySelector(".input input")
const tasks = document.querySelector(".tasks")
const btn = document.querySelector(".input button")

function addTask() {
    if (input.value == '') {
        alert("Please Enter Task");
    }
    else {
        let element = document.createElement("ul");
        element.innerHTML = `${input.value} <i class="fa fa-trash"></i>`;
        tasks.appendChild(element);
        input.value = '';
        element.querySelector("i").addEventListener("click" , (e)=>{
            element.remove();
        })
    }
}
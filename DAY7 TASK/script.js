const addBtn = document.querySelector("#addBtn");
const taskinput = document.querySelector("#task-input");
const tasklist = document.querySelector("#task-list");

addBtn.addEventListener("click", () => {
    const taskText = taskinput.value.trim();
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');


    span.textContent = taskText;
    delBtn.textContent = "delete";

    delBtn.addEventListener("click", ()=> {
        li.remove();
    });

    if(taskText===""){
        alert("please enter a task");
        return;
    }

    li.appendChild(span);
    li.appendChild(delBtn);
    tasklist.appendChild(li);

    taskinput.value = "" ;

})
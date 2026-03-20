let arrayofTasks = [];
let taskInput = document.getElementById("taskItem");
let addTaskItem = document.getElementById("addTaskItemButton");
let taskList = document.getElementById("taskList");

// let taskItem (taskName, taskCategory, taskDeadline, taskProgress)= {
//     // taskName: "Call Doctor",
//     // taskCategory: "Work, Home, Family, Health&Wellness",
//     // taskDueBy: "date",
//     // taskStatus: "In Progress, Completed, Overdue",

//     // filterTasks: function () {
//     //     //filter tasks by status or category

//     renderTaskList()
//     }
// };

addTaskItemButton.addEventListener("click", function () {
    let taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter an item.");
        return;
    }

    arrayofTasks.push(taskValue);
    renderTaskList();
    taskValue = ""; // Clear the input field
});


function renderTaskList() {
    taskList.innerHTML = ""; // Clear existing list
    for (let i = 0; i < arrayofTasks.length; i++) {
        let taskListItem = document.createElement("li");
        taskListItem.innerText = arrayofTasks[i];
        taskList.appendChild(taskListItem);
    }
}
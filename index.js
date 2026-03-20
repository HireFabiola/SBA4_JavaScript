let arrayofTasks = []; // Declare array for storing tasks
let catDropdown = document.getElementById("categoryDropdown");
let categoryDisplay = document.getElementById("selectedCategoryValue");

// Get task name input from browser
let taskInput = document.getElementById("taskItem");
let addTaskItem = document.getElementById("addTaskItemButton");


// Get task category from browser
categoryDropdown.addEventListener("change", function() {
  const selectedValue = this.value;
  display.textContent = `Selected value: ${selectedValue}`;
});



// let taskItem = {
//     // taskName: "Call Doctor",
//     // taskCategory: "Work, Home, Family, Health&Wellness",
//     // taskDueBy: "date",
//     // taskStatus: "In Progress, Completed, Overdue",

//     // filterTasks: function () {
//     //     //filter tasks by status or category

//     renderTaskList()
//     }
// };

// Display Task 
addTaskItemButton.addEventListener("click", function () {
    let taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter an item.");
        return;
    }

    //checkDuplicateItem(item);
    arrayofTasks.push(taskValue);
    renderTaskList();
    taskInput.value = ""; // Clear the input field
});


function renderTaskList() {
    taskList.innerHTML = ""; // Clear existing list
    for (let i = 0; i < arrayofTasks.length; i++) {
        let taskListItem = document.createElement("li");
        taskListItem.innerText = arrayofTasks[i];
        taskList.appendChild(taskListItem);
    }
}
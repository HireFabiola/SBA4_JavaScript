let arrayofTasks = [];

let taskList = document.getElementById("output"); //point to screen output area
let taskForm = document.getElementById("Form"); //point to form



taskForm.addEventListener("submit", function () {

    //code to prevent default form behavior of refreshing page automatically
    event.preventDefault();

    // Check that all input fields are valid before proceeding
    if (!taskForm.checkValidity()) {
        taskForm.reportValidity();
        return;
    }

    // Initialize variables with user input
    let taskName = document.getElementById("Description").value;
    let taskCategory = document.getElementById("categoryDropdown").value;
    let taskDueDate = document.getElementById("dueDate").value;
    let taskProgress = document.getElementById("statusDropdown").value;

    // Create taskItem object, add to array, print to screen and reset user input fields
    let taskItem = {
        name_description: taskName,
        category: taskCategory,
        deadline: taskDueDate,
        progress: taskProgress,
    }
    arrayofTasks.push(taskItem);

    renderTaskList();

    document.getElementById("Description").value = "";
    document.getElementById("categoryDropdown").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("statusDropdown").value = "";

});

// Clear existing list to dynamically update list with user additions/deletions 
function renderTaskList() {
    taskList.innerHTML = ""; // Clear existing list
    for (let i = 0; i < arrayofTasks.length; i++) {
        let taskListItem = document.createElement("li");
        taskListItem.innerText = arrayofTasks[i].name_description + " " + arrayofTasks[i].category + " " + arrayofTasks[i].deadline + " " + arrayofTasks[i].progress;
        taskList.appendChild(taskListItem);
    }
}


















// let taskName = document.getElementById("Description").value;
// let addTaskItem = document.getElementById("addTaskItemButton");
// let taskList = document.getElementById("taskList");
// let taskProgress = document.getElementById("progressDropdown");


// let taskItem () = {
//     taskName: 
//     taskCategory: "Work, Home, Family, Health&Wellness",
//     taskDueBy: "date",
//     taskProgress: "In Progress, Completed, Overdue",

//     filterTasks: function () {
// filter tasks by status or category

//         renderTaskList()
//     }
// };

// addTaskItemButton.addEventListener("click", function () {
//     let taskValue = taskInput.value;

//     if (taskValue === "") {
//         alert("Please enter an item.");
//         return;
//     }

//     // Add a change event listener
//     progressDropdown.addEventListener("change", function () {
//         // Get the selected value using the .value property
//         let selectedValue = progressDropdown.value;

//         // Display the value (or perform any other action)
//         document.getElementById("selectedProgressValue").textContent = selectedValue;
//         console.log("Selected value:", selectedValue);
//     });

//     arrayofTasks.push(taskItem)
//     renderTaskList();
//     taskValue = ""; // Clear the input field
// });


// function renderTaskList() {
//     taskList.innerHTML = ""; // Clear existing list
//     for (let i = 0; i < arrayofTasks.length; i++) {
//         let taskListItem = document.createElement("li");
//         taskListItem.innerText = arrayofTasks[i];
//         taskList.appendChild(taskListItem);
//     }
// }
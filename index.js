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
    let taskProgress = document.querySelector('input[name="status"]:checked').value;

    // Create taskItem object, add to array, print to screen and reset user input fields
    let taskItem = {
        name_description: taskName,
        category: taskCategory,
        deadline: taskDueDate,
        progress: taskProgress,
    }


    arrayofTasks.push(taskItem);

    renderTaskList(taskProgress);

    document.getElementById("Description").value = "";
    document.getElementById("categoryDropdown").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("statusButtons").value = "";

});

// Clear existing list to dynamically update list with user additions and/or status updates
function renderTaskList(updateProgress) {
    taskList.innerHTML = ""; // Clear existing list
    for (let i = 0; i < arrayofTasks.length; i++) {
        let taskListItem = document.createElement("li");
        taskListItem.innerText = arrayofTasks[i].name_description + " " + arrayofTasks[i].category + " " + arrayofTasks[i].deadline + " " + arrayofTasks[i].progress;
        taskList.appendChild(taskListItem);
    }


}

















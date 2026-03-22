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

    renderTaskList();

    taskForm.reset();
});

// Clear existing list to dynamically update list with user additions and/or status updates
function renderTaskList() {

    //normalize dates (ignoring time of day) then compare them
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    taskList.innerHTML = ""; // Clear existing list
    for (let i = 0; i < arrayofTasks.length; i++) {
        let taskListItem = document.createElement("li");
        let dueDate = new Date(arrayofTasks[i].deadline);
        dueDate.setHours(0, 0, 0, 0);
        if (dueDate < currentDate) {
            taskListItem.innerText = arrayofTasks[i].name_description + " " + arrayofTasks[i].category + " " + arrayofTasks[i].deadline + " " + arrayofTasks[i].progress + " Task is overdue";
        }
        else {
            taskListItem.innerText = arrayofTasks[i].name_description + " " + arrayofTasks[i].category + " " + arrayofTasks[i].deadline + " " + arrayofTasks[i].progress;
        }
        taskList.appendChild(taskListItem);
    }
}

















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

    //normalize dates (ignoring time of day) then compare them to decide overdue status
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    taskList.innerHTML = ""; // Clear existing list

    for (let i = 0; i < arrayofTasks.length; i++) {
        // let taskListItem = document.createElement("li");
        let taskListItem = arrayofTasks[i];

        let dueDate = new Date(arrayofTasks[i].deadline + "T00:00:00");
        dueDate.setHours(0, 0, 0, 0);

        //if ((dueDate < currentDate) && (arrayofTasks[i].progress !== "Completed")) {
        //     taskListItem.innerText = arrayofTasks[i].name_description + " " + arrayofTasks[i].category + " " + arrayofTasks[i].deadline + " " + arrayofTasks[i].progress + " Task is overdue";
        // }
        // else {
        //taskListItem.innerText = arrayofTasks[i].name_description + " " + arrayofTasks[i].category + " " + arrayofTasks[i].deadline + " " + arrayofTasks[i].progress;
        // }
        // taskList.appendChild(taskListItem);

        // Create row
        let row = document.createElement("div");
        row.className = "row w-100 mb-2 border-bottom pb-2";

        // Create columns
        let colDesc = document.createElement("div");
        colDesc.className = "col-2";
        colDesc.innerText = taskListItem.name_description;

        let colCategory = document.createElement("div");
        colCategory.className = "col-2";
        colCategory.innerText = taskListItem.category;

        let colDeadline = document.createElement("div");
        colDeadline.className = "col-2";
        colDeadline.innerText = taskListItem.deadline;

        let colStatus = document.createElement("div");
        colStatus.className = "col-2";
        colStatus.innerText = taskListItem.progress;

        let colFilter = document.createElement("div");
        colFilter.className = "col-2";
        colFilter.innerText = ""; // placeholder for later

        let colMessage = document.createElement("div");
        colMessage.className = "col-2";

        // Append columns to row
        row.appendChild(colDesc);
        row.appendChild(colCategory);
        row.appendChild(colDeadline);
        row.appendChild(colStatus);
        row.appendChild(colFilter);
        row.appendChild(colMessage);

        taskList.appendChild(row)

    }
}

















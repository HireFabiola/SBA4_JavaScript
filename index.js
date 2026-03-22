let arrayofTasks = [];
console.log('Im at the top');
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

        // Create row
        let row = document.createElement("div");
        row.className = "row w-100 mb-2 border-bottom pb-2";

        // Create Description column node
        let colDesc = document.createElement("div");
        colDesc.className = "col-2";
        colDesc.innerText = taskListItem.name_description;
       
        // Create Category column node
        let colCategory = document.createElement("div");
        colCategory.className = "col-2";
        colCategory.innerText = taskListItem.category;

        //Create Deadline column node
        let colDeadline = document.createElement("div");
        colDeadline.className = "col-2";
        colDeadline.innerText = taskListItem.deadline;

        //Ctreate Progress Column node and radio buttons for updating status
        let colStatus = document.createElement("div");
        colStatus.className = "col-2";
        colStatus.innerText = taskListItem.progress;
        // Recereate radio buttons and/or update progress
        let statusOptions = ["Not Started", "In Progress", "Completed"];
        statusOptions.forEach(optionText => {
            if (optionText !== taskListItem.progress) {
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = 'statusOptions';
                radioInput.value = optionText;
                radioInput.addEventListener("change", function () {
                    taskListItem.progress = optionText;
                    renderTaskList();
                });
                radioInput.id = optionText.toLowerCase();

                const label = document.createElement('label');
                label.htmlFor = optionText.toLowerCase();


                label.appendChild(radioInput);
                label.appendChild(document.createTextNode(optionText));
                colStatus.appendChild(label);
            }
        })

        //Create Alert column node for Overdue message
        let colMessage = document.createElement("div");
        colMessage.className = "col-2";
        if ((dueDate < currentDate) && (taskListItem.progress !== "Completed"))
            colMessage.innerText = "Overdue";

        //Create column to hold filer dropdown
        let colFilter = document.createElement("div");
        colFilter.className = "col-2";
        colFilter.innerText = ""; // placeholder for later


        // Append columns to row
        row.appendChild(colDesc);
        row.appendChild(colCategory);
        row.appendChild(colDeadline);
        row.appendChild(colStatus);
        row.appendChild(colMessage);
        row.appendChild(colFilter);

        taskList.appendChild(row)
    }
}



















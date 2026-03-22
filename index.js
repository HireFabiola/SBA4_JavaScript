let arrayofTasks = [];
const filterOptions = [{ value: "byDate", text: "By Date" }, { value: "byStatus", text: "By Status" }];
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
    createFilterDD(filterOptions);
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

        //Create Progress Column node and radio buttons for updating status
        let colStatus = document.createElement("div");
        colStatus.className = "col-2";

        let statusText = document.createElement("span");
        statusText.innerText = taskListItem.progress;
        statusText.style.fontWeight = "bold";

        // Append checked option with bold styling
        colStatus.appendChild(statusText);
        colStatus.appendChild(document.createElement("br")); // optional spacing

        // Recreate radio buttons for updating to nonselected options
        let statusOptions = ["Not Started", "In Progress", "Completed"];

        statusOptions.forEach(optionText => {
            if (optionText !== taskListItem.progress) {

                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = `status-${i}`;
                radioInput.value = optionText;

                radioInput.addEventListener("change", function () {
                    taskListItem.progress = optionText;
                    renderTaskList();
                });

                const label = document.createElement('label');
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

        //Create column to hold filter dropdown
        let colFilter = document.createElement("div");
        colFilter.className = "col-2";
        colFilter.innerText = "";
        // Append columns to row
        row.appendChild(colDesc);
        row.appendChild(colCategory);
        row.appendChild(colDeadline);
        row.appendChild(colStatus);
        row.appendChild(colMessage);
        row.appendChild(colFilter);

        taskList.appendChild(row);
    }
}

function createFilterDD(dataArray) {
    let filterDD = document.getElementById("filterDropdown");
    filterDD.innerHTML = "";

    dataArray.forEach(item => {
        // Create a new option element
        const option = document.createElement('option');

        // Set the value and text content of the option
        option.value = item.value;
        option.text = item.text;

        // Append the option to the select element
        filterDD.appendChild(option);
    });
}























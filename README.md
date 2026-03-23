Task Management App

Overview
This project is a dynamic Task Management Application built using HTML, CSS (Bootstrap), and JavaScript. It allows users to create, manage, and track tasks with deadlines, categories, and progress statuses.
The application emphasizes core JavaScript concepts such as arrays, objects, DOM manipulation, event handling, and conditional logic, while also introducing dynamic UI updates based on user interaction.

Features
Add Tasks
Users can create tasks with:
-Description (task name)
-Category (Work, Home, Family, Health & Wellness)
-Deadline (date input)
-Status (Not Started, In Progress, Completed)

Update Task Progress
-Each task displays its current status in bold
-Only the remaining valid status options appear as radio buttons
-Selecting a new status dynamically updates the task and re-renders the list

Overdue Detection
-Tasks are automatically checked against the current date
-If a task is past its deadline and not completed, it is flagged as: "Overdue" in the alert column

Filtering
The filter dynamically updates the displayed list without modifying the original data.  Users can filter tasks by:
-Category
-Status


Technologies Used
HTML5
CSS3 (Bootstrap for layout and styling)
JavaScript (Vanilla JS)

Data Structure
Data Structure

Each task is stored as an object inside an array:
{
  name_description: "Task name",
  category: "Work",
  deadline: "2026-03-20",
  progress: "In Progress"
}

How It Works
Tasks are stored in an array (arrayofTasks)
The UI is generated dynamically using a renderTaskList() function
Any change (add task, update status, filter selection) triggers a full re-render
Event listeners are attached to dynamically created elements (radio buttons) to update task state

Future Improvements
If more time were available, the following enhancements would be implemented:
-Improve UI/UX with better spacing, alignment, and visual hierarchy
-Add multi-filtering (e.g., filter by both category AND status simultaneously)
-Include task editing and deletion functionality
-Improve accessibility and responsiveness
-Allow sorting by date

Reflection

One of the main challenges I faced during this project was managing the interaction between the data structure and the DOM. I initially struggled with understanding when I was working with a JavaScript object versus a DOM element, which led to issues when trying to update and render the task list correctly. Another challenge was implementing the dynamic radio buttons for updating task status, particularly ensuring that only the appropriate options appeared and that the correct task was updated.

To solve these challenges, I focused on breaking the problem down into smaller parts and reasoning through the flow of data. I leaned heavily on console logging and step-by-step debugging to understand what my code was actually doing versus what I expected it to do. This helped me identify logical errors, especially in my filtering conditions.

If I had more time, I would improve the visual design and user experience of the application.  I would also refine the filtering logic to allow for more advanced combinations and interactions.  All in all, the project was a success at helping me anchor my understanding of objects and manipulating webpages through the DOM.

Author
Fabiola Aurelien
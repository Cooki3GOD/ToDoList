// Variables

const input = document.querySelector("input");
const addBtn = document.querySelector("button"); // Add Task btn
const taskList = document.querySelector("ul"); // List Of tasks

// Functions

function addTask(task) {
    if(input.value != "" && input.value != " ") { // Checks if the input field is not empty or if it isnt just a space
        task = input.value; // Sets the value of the input to the variable
        let li = document.createElement("li"); // creates new Li element
        li.textContent = task; // Puts the value of task var into Li element
        taskList.appendChild(li); // Puts Li element into the list
        let span = document.createElement("span"); // Creates a new span element
        span.innerText = "X" // Adds text to the span
        li.appendChild(span); // Puts span inside of li
    }
    else {
        alert("You need to put a task in order to add it to the list!"); // Sends a message if input is empty
    }
    input.value = ""; // Clears input field
    saveTasks(); // Saves the task
}

addBtn.addEventListener("click", addTask); // Click the button to execute the addTask function

function markAsComplete() {
    if(event.target.tagName === "SPAN") { 
        event.target.parentElement.remove(); // If the clicked element is a span it deletes the task
    }
    else {
        if(event.target.classList.contains("checked")) { // Checks if the clicked task is already checked
            event.target.classList.remove("checked");   // removes class checked if the clicked task is already mark as checked
        }
        else { 
            event.target.classList.add("checked"); // adds class checked if the clicked task is not marked as checked
        }
    }
}

taskList.addEventListener("click", markAsComplete); // Marks a task as complete after clicking on it

function saveTasks() {
    localStorage.setItem("data", taskList.innerHTML); // function that stores all the tasks 
}

function showTasks() {
    taskList.innerHTML = localStorage.getItem("data"); // shows the tasks even after refreshing the website
}

showTasks();
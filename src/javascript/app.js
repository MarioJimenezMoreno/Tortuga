"use strict";
// Variables to store the initial mouse position and scroll position
let isDragging = false;
let initialMouseY;
let initialScrollTop;
let firstLoad = true;
// The specific element to enable scrolling with mouse drag
const daysContainer = document.querySelector(".daysContainer");
const calendarContainer = document.querySelector(".calendar");
const newTask = document.querySelector(".newTask");
let array = [1, 2, 3, 4, 5];
let counter = 0;
window.onload = () => {
    setupDays();
    window.location.replace("http://127.0.0.1:5500/src/app.html#app");
};
newTask.onclick = () => {
    taskWindowController("open");
};
function setupDays() {
    const previousDiv = document.createElement("div");
    previousDiv.innerHTML = "DIA 1";
    previousDiv.classList.add("previousTaskContainer");
    daysContainer.appendChild(previousDiv);
    const currentDiv = document.createElement("div");
    currentDiv.innerHTML = "DIA 2";
    currentDiv.classList.add("currentTaskContainer");
    currentDiv.setAttribute("id", "app");
    daysContainer.appendChild(currentDiv);
    const nextDiv = document.createElement("div");
    nextDiv.innerHTML = "DIA 3";
    nextDiv.classList.add("nextTaskContainer");
    daysContainer.appendChild(nextDiv);
}
// Function to handle the mousemove event while dragging
function handleMouseMove(event) {
    if (!isDragging)
        return;
    const deltaY = event.clientY - initialMouseY;
    daysContainer.scrollTop = initialScrollTop - deltaY;
}
// Function to handle the mousedown event and initiate the dragging
function handleMouseDown(event) {
    isDragging = true;
    initialMouseY = event.clientY;
    initialScrollTop = daysContainer.scrollTop;
    document.addEventListener("mousemove", handleMouseMove);
}
// Function to handle the mouseup event and stop the dragging
function handleMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", handleMouseMove);
}
// Función para calcular el porcentaje de scroll respecto al contenido
function calculateScrollPercentage(container) {
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
// Función para cambiar las clases de los contenedores según el porcentaje de scroll
function updateContainersByScroll() {
    let previousContainer = document.querySelector(".previousTaskContainer");
    let currentContainer = document.querySelector(".currentTaskContainer");
    let nextContainer = document.querySelector(".nextTaskContainer");
    const scrollPercentage = calculateScrollPercentage(daysContainer);
    const thresholdPercentage = 25;
    console.log(scrollPercentage);
    if (scrollPercentage <= thresholdPercentage) {
        nextContainer.remove();
        console.log("previous creado");
        currentContainer.className = "nextTaskContainer";
        currentContainer.classList.remove("currentTaskContainer");
        previousContainer.className = "currentTaskContainer";
        previousContainer.classList.remove("previousTaskContainer");
        const previousDiv = document.createElement("div");
        previousDiv.innerHTML = "DIA 1_" + counter;
        previousDiv.classList.add("previousTaskContainer");
        daysContainer.insertBefore(previousDiv, previousContainer);
    }
    else if (scrollPercentage >= 100 - thresholdPercentage) {
        previousContainer.remove();
        console.log("next creado");
        nextContainer.className = "currentTaskContainer";
        nextContainer.classList.remove("nextTaskContainer");
        currentContainer.className = "previousTaskContainer";
        currentContainer.classList.remove("currentTaskContainer");
        const nextDiv = document.createElement("div");
        nextDiv.classList.add("nextTaskContainer");
        nextDiv.innerHTML = "DIA 3_" + counter;
        daysContainer.appendChild(nextDiv);
    }
    counter++;
}
function taskWindowController(action) {
    switch (action) {
        case "open":
            break;
        case "close":
            break;
        case "create":
            break;
    }
}
//  Attach event listener to the daysContainer element MOUSE DOWN
daysContainer.addEventListener("mousedown", handleMouseDown);
//  Attach event listener to the document MOUSE UP
document.addEventListener("mouseup", handleMouseUp);
//  Attach event listener to the daysContainer element SCROLL
daysContainer.addEventListener("scroll", updateContainersByScroll);

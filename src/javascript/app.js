"use strict";
// Variables to store the initial mouse position and scroll position
let isDragging = false;
let initialMouseY;
let initialScrollTop;
// The specific element to enable scrolling with mouse drag
const tasksCicle = document.querySelector(".tasksCicle");
let array = [1, 2, 3, 4, 5];
window.onload = () => {
    setupDays();
    window.location.replace("http://127.0.0.1:5500/src/app.html#app");
};
function setupDays() {
    const previousDiv = document.createElement("div");
    previousDiv.classList.add("previousTaskContainer");
    tasksCicle.appendChild(previousDiv);
    const currentDiv = document.createElement("div");
    currentDiv.classList.add("currentTaskContainer");
    tasksCicle.appendChild(currentDiv);
    const nextDiv = document.createElement("div");
    nextDiv.classList.add("nextTaskContainer");
    tasksCicle.appendChild(nextDiv);
}
// Function to handle the mousemove event while dragging
function handleMouseMove(event) {
    if (!isDragging)
        return;
    const deltaY = event.clientY - initialMouseY;
    tasksCicle.scrollTop = initialScrollTop - deltaY;
}
// Function to handle the mousedown event and initiate the dragging
function handleMouseDown(event) {
    isDragging = true;
    initialMouseY = event.clientY;
    initialScrollTop = tasksCicle.scrollTop;
    document.addEventListener("mousemove", handleMouseMove);
}
// Function to handle the mouseup event and stop the dragging
function handleMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", handleMouseMove);
}
// Attach event listeners when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
});
// Función para calcular el porcentaje de scroll respecto al contenido
function calculateScrollPercentage(container) {
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    console.log(scrollTop);
    console.log(scrollHeight);
    console.log(clientHeight);
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
// Función para cambiar las clases de los contenedores según el porcentaje de scroll
function updateContainersByScroll() {
    const previousContainer = document.querySelector(".previousTaskContainer");
    const currentContainer = document.querySelector(".currentTaskContainer");
    const nextContainer = document.querySelector(".nextTaskContainer");
    const previousContainerHeight = previousContainer.clientHeight;
    const currentContainerHeight = currentContainer.clientHeight;
    const previousScrollPercentage = calculateScrollPercentage(tasksCicle);
    const currentScrollPercentage = calculateScrollPercentage(tasksCicle);
    const thresholdPercentage = 70;
    if (previousScrollPercentage >= thresholdPercentage) {
        /*ELIMINO NEXT*/
        console.log("previous");
        currentContainer.className = "nextTaskContainer";
        currentContainer.classList.remove("currentTaskContainer");
        previousContainer.className = "currentTaskContainer";
        previousContainer.classList.remove("previousTaskContainer");
        const previousDiv = document.createElement("div");
        previousDiv.classList.add("previousTaskContainer");
        tasksCicle.insertBefore(previousDiv, currentContainer);
    }
    else if (currentScrollPercentage <= 100 - thresholdPercentage) {
        /* ELIMINO PREVIOUS */
        console.log("next");
        nextContainer.className = "currentTaskContainer";
        nextContainer.classList.remove("nextTaskContainer");
        currentContainer.className = "previousTaskContainer";
        currentContainer.classList.remove("currentTaskContainer");
        const nextDiv = document.createElement("div");
        nextDiv.classList.add("nextTaskContainer");
        tasksCicle.appendChild(nextDiv);
    }
}
tasksCicle.addEventListener("scroll", updateContainersByScroll);

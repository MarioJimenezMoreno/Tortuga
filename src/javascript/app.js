"use strict";
// Variables to store the initial mouse position and scroll position
let isDragging = false;
let initialMouseY;
let initialScrollTop;
// The specific element to enable scrolling with mouse drag
const scrollableElement = document.querySelector(".tasksCicle");
const startContainer = document.querySelector("#startContainer");
window.onload = () => {
    window.location.replace("http://127.0.0.1:5500/src/app.html#app");
};
// Function to handle the mousemove event while dragging
function handleMouseMove(event) {
    if (!isDragging)
        return;
    const deltaY = event.clientY - initialMouseY;
    scrollableElement.scrollTop = initialScrollTop - deltaY;
}
// Function to handle the mousedown event and initiate the dragging
function handleMouseDown(event) {
    isDragging = true;
    initialMouseY = event.clientY;
    initialScrollTop = scrollableElement.scrollTop;
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

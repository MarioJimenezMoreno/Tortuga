const daysContainer: HTMLElement = document.querySelector(".daysContainer")!;
const daysPreview: HTMLElement = document.querySelector(".daysPreview")!;
const calendarContainer: HTMLElement = document.querySelector(".calendar")!;
const newTask: HTMLElement = document.querySelector(".newTask")!;
const createTaskBtn: HTMLElement = document.querySelector(".createTaskBtn")!;
const fader: HTMLElement = document.querySelector(".fader")!;
const taskCreatorContainer: HTMLElement = document.querySelector(
  ".taskCreatorContainer"
)!;

const taskNameInput: HTMLInputElement =
  document.querySelector(".taskNameInput")!;
const categoryInput: HTMLInputElement =
  document.querySelector(".categoryInput")!;
const initialHourInput: HTMLInputElement =
  document.querySelector(".initialHourInput")!;
const initialMinuteInput: HTMLInputElement = document.querySelector(
  ".initialMinuteInput"
)!;
const endHourInput: HTMLInputElement = document.querySelector(".endHourInput")!;
const endMinuteInput: HTMLInputElement =
  document.querySelector(".endMinuteInput")!;

let array = [1, 2, 3, 4, 5];
let counter: number = 0;
let closedWindow: boolean = true;

let isDragging: boolean = false;
let initialMouseY: any;
let initialScrollTop: any;
let firstLoad: boolean = true;

window.onload = () => {
  setupDays();
  window.location.replace("http://127.0.0.1:5500/src/app.html#app");
};

newTask.onclick = () => {
  createTaskController("setup");
  animationController("newTask");
};

createTaskBtn.onclick = () => {
  createTaskController("create");
  animationController("newTask");
};

taskCreatorContainer.onclick = (event) => {
  if (event.target === taskCreatorContainer) {
    animationController("newTask");
  }
};

taskNameInput.oninput = () => {
  createTaskController("check");
};
categoryInput.oninput = () => {
  createTaskController("check");
};
initialHourInput.oninput = () => {
  createTaskController("check");
};
initialMinuteInput.oninput = () => {
  createTaskController("check");
};
endHourInput.oninput = () => {
  createTaskController("check");
};
endMinuteInput.oninput = () => {
  createTaskController("check");
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
function handleMouseMove(event: any) {
  if (!isDragging) return;

  const deltaY = event.clientY - initialMouseY;
  daysContainer.scrollTop = initialScrollTop - deltaY;
}

// Function to handle the mousedown event and initiate the dragging
function handleMouseDown(event: any) {
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
function calculateScrollPercentage(container: any) {
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Función para cambiar las clases de los contenedores según el porcentaje de scroll
function updateContainersByScroll() {
  let previousContainer: HTMLElement = document.querySelector(
    ".previousTaskContainer"
  )!;
  let currentContainer: HTMLElement = document.querySelector(
    ".currentTaskContainer"
  )!;
  let nextContainer: HTMLElement =
    document.querySelector(".nextTaskContainer")!;

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
  } else if (scrollPercentage >= 100 - thresholdPercentage) {
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

function animationController(action: String) {
  switch (action) {
    case "newTask":
      if (closedWindow) {
        fader.style.animation = "";
        fader.style.zIndex = "4";
        fader.style.opacity = "0.25";
        fader.style.visibility = "visible";
        taskCreatorContainer.style.visibility = "visible";
        closedWindow = false;
      } else {
        fader.style.zIndex = "2";
        fader.style.visibility = "hidden";
        taskCreatorContainer.style.visibility = "hidden";
        closedWindow = true;
      }
      break;
  }
}

function createTaskController(state: String) {
  switch (state) {
    case "check":
      if (
        taskNameInput.value !== "" &&
        categoryInput.value !== "" &&
        initialHourInput.value !== "" &&
        initialMinuteInput.value !== "" &&
        endHourInput.value !== "" &&
        endMinuteInput.value !== ""
      ) {
        createTaskBtn.classList.remove("disabled");
      } else if (
        taskNameInput.value === "" ||
        categoryInput.value === "" ||
        initialHourInput.value === "" ||
        initialMinuteInput.value === "" ||
        endHourInput.value === "" ||
        endMinuteInput.value === ""
      ) {
        createTaskBtn.classList.add("disabled");
      }
      break;

    case "setup":
      createTaskBtn.classList.add("disabled");
      taskNameInput.value = "";
      categoryInput.value = "";
      initialHourInput.value = "";
      initialMinuteInput.value = "";
      endHourInput.value = "";
      endMinuteInput.value = "";
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

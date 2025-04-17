const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const framesContainer = document.getElementById("frames-container");
const message = document.getElementById("message");
const successfulCount = document.getElementById("successful-count");
const failedCount = document.getElementById("failed-count");
const themeToggle = document.getElementById("theme-toggle");

let frameCount = 0;
let successfulTasks = 0;
let failedTasks = 0;
const todoList = [];


addButton.addEventListener("click", function() {
    const task = input.value.trim();
    if (task === "") {
        alert("Please write a task!");
        return;
    }

    if (todoList.includes(task)) {
        alert("This task is already on the list!");
        input.value = "";
        return;
    }

    if (frameCount >= 20) {
        message.style.display = "block";
        return;
    }

    // Yeni çerçeve oluştur
    const frame = document.createElement("div");
    frame.classList.add("frame");
    frame.textContent = task;


    frame.addEventListener("click", function() {
        const options = frame.querySelector(".frame-options");
        options.style.display = options.style.display === "flex" ? "none" : "flex";
    });


    const options = document.createElement("div");
    options.classList.add("frame-options");

    const greenButton = document.createElement("button");
    greenButton.classList.add("option-btn", "green");
    greenButton.textContent = "";

    const redButton = document.createElement("button");
    redButton.classList.add("option-btn", "red");
    redButton.textContent = "";

    options.appendChild(greenButton);
    options.appendChild(redButton);
    frame.appendChild(options);


    greenButton.addEventListener("click", function() {
        successfulTasks++;
        successfulCount.textContent = successfulTasks;
        frame.remove();
        frameCount--;
    });


    redButton.addEventListener("click", function() {
        failedTasks++;
        failedCount.textContent = failedTasks;
        frame.remove();
        frameCount--;
    });


    framesContainer.appendChild(frame);
    frameCount++;
    todoList.push(task);

    input.value = "";
    message.style.display = "none";

});


themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
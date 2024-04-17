const inputBox = document.querySelector(".input-box");
const button = document.getElementById("btn");
const listContainer = document.getElementById("list-container");

button.addEventListener("click", function() {
    if(inputBox.value === "") {
        alert("please enter a text");
    } else {
        let listItem = document.createElement("li");
        let span = document.createElement("span");
        listItem.innerHTML = inputBox.value;
        span.innerHTML = "\u00d7";
        listItem.append(span);
        listContainer.append(listItem);
    }
    inputBox.value = "";
    upadateStorage();
})

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        upadateStorage();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        upadateStorage();
    }
})

function upadateStorage() {
    localStorage.setItem("list", listContainer.innerHTML);
}

function showStorage() {
    listContainer.innerHTML = localStorage.getItem("list");
}
showStorage();
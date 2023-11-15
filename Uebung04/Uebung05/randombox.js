let box = document.getElementById("box");
let container = document.getElementById("container");

function generateBox() {
    let newBox = box.cloneNode(true);
    newBox.classList.add("flex")
    if(Math.random() > 0.5) {
        newBox.classList.add("border")
    }
    container.appendChild(newBox)
}
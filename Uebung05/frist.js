// Skript unterhalb im Body initialisiert
document.getElementById('inputField').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log("test")
        addToList();
    }
});

document.addEventListener('keypress', function (e) {
    if (e.key === 'e') {
        var list = document.getElementById('list');
        var items = document.querySelectorAll('li');
        list.removeChild(items[0])
    }
})
function addToList() {
    var inputField = document.getElementById('inputField');
    var list = document.getElementById('list');
    var newItem = document.createElement('li');
    newItem.textContent = inputField.value;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.onclick = function() {
        list.removeChild(newItem);
    };

    newItem.appendChild(removeButton);
    list.appendChild(newItem);
    inputField.value = '';
    inputField.focus()
}

function checkEnter(e) {
    if (e.key === 'Enter') {
        console.log("test")
        addToList();
    }
}
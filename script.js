// Get the textarea element
const textarea = document.getElementById("myTextarea");

//after enter data store it in local storage
textarea.addEventListener("input", saveToLocalStorage);

function saveToLocalStorage() {
    localStorage.setItem("Text-enter", textarea.value);
}
if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("Text-enter");
}


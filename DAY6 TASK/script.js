const paragraph = document.querySelector("p"); 
const button = document.querySelector("button");
const div = document.querySelector("div");

paragraph.textContent = " changed using java script ";
div.style.backgroundColor = "pink";

button.addEventListener("click" , () => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "hello world";
    div.appendChild(newParagraph);
})
// create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Hi there and greetings!");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const existingDiv = document.getElementById("my-target-element");
document.body.appendChild(newDiv, existingDiv);
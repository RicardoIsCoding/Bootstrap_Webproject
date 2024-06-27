document.addEventListener('DOMContentLoaded', loadButton);

function loadButton() {
    var tag = document.createElement("button");
    var text = document.createTextNode("toggle color");
    tag.addEventListener('click', changeColor);
    tag.appendChild(text);

    // Adding styles to fix the button at the bottom-left corner
    tag.style.position = 'fixed';
    tag.style.left = '10px';  // You can adjust the exact position here
    tag.style.bottom = '10px';  // You can adjust the exact position here
    tag.style.zIndex = '1000';  // High z-index to ensure it is on top of other elements

    // Adding the button to the body of the document
    document.body.appendChild(tag);
}


function changeColor() {
    var root = document.documentElement;

    // Get the current background color
    var currentColor = getComputedStyle(root).getPropertyValue('--background-color').trim();

    // change background color
    root.style.setProperty('--background-color', currentColor === '#ffffff' ? '#000000' : '#ffffff');

    // change default color
    var currentColor = getComputedStyle(root).getPropertyValue('--default-color').trim();
    root.style.setProperty('--default-color', currentColor === '#212529' ? '#eaeaea' : '#212529');

    // change heading color
    var currentColor = getComputedStyle(root).getPropertyValue('--heading-color').trim();
    root.style.setProperty('--heading-color', currentColor === '#37373f' ? '#eaeaea' : '#37373f');
}
// Get elements by their IDs
const changeTextButton = document.getElementById('changeTextButton');
const addElementButton = document.getElementById('addElementButton');
const paragraph = document.getElementById('paragraph');

// Change text content dynamically
changeTextButton.addEventListener('click', function() {
    paragraph.textContent = "The text has been changed!";
});

// Add a new element when button is clicked
addElementButton.addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.textContent = "This is a newly added element!";
    newElement.style.backgroundColor = 'lightblue';
    newElement.style.padding = '10px';
    newElement.style.marginTop = '10px';
    document.body.appendChild(newElement);
});

// for common input type values function converted in number 
function getInputValueById(inputValueId) {
    const inputValueById = document.getElementById(inputValueId);
    const inputValueString = inputValueById.value;
    const inputValue = parseFloat(inputValueString);
    inputValueById.value = '';
    return inputValue;
}

// for common element type function converted in number
function getElementById(elementId) {
    const elementById = document.getElementById(elementId);
    const elementString = elementById.innerText;
    const element = parseFloat(elementString);
    return element;
}


// total number element will convert into number by elementId function.. and newValue parameter will set innerText.. 
function setInnerText(elementId, newValue) {
    const elementById = document.getElementById(elementId);
    elementById.innerText = newValue;
}
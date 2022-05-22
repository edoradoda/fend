function checkForText(inputText) {
    console.log("::: Running checkFortext :::", inputText);
    if(inputText==undefined || inputText=="") {
        alert("Enter text!")
        return false;
    }

    return true
}


export { checkForText }

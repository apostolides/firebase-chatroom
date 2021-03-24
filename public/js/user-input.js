let userInput = document.getElementById("user-input");

function getMessageFromInput(){
    return userInput.value;
}

function clearInputField(){
    userInput.value = "";
}

document.getElementById('send-button').addEventListener('click',()=>{
    writeMessage(getMessageFromInput());
    clearInputField();
});

userInput.addEventListener('keyup',event=>{
    if(event.key == "Enter"){
        writeMessage(getMessageFromInput());
        clearInputField();
    }
});



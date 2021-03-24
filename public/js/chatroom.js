function revealChatroom(){
    document.getElementById("chatroom").classList.remove("hidden");
}

function hideChatroom(){
    document.getElementById("chatroom").classList.add("hidden");
}

function revealSignInButtons(){
    document.getElementById("sign-in-button-area").classList.remove("hidden");
}

function hideSignInButtons(){
    document.getElementById("sign-in-button-area").classList.add("hidden");
}

function updateChatroom(firestoreMessages){
    let messages = document.getElementById("messages");
    messages.innerHTML = "";
    for(let message of firestoreMessages){
        let formatedMessage = `[*] ${message.user}: ${message.message}`;
        messages.appendChild(document.createTextNode(formatedMessage));
        messages.appendChild(document.createElement("br"));
    }
}

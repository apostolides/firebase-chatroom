firebase.auth().onAuthStateChanged(function(user){
    if(user){
        hideSignInButtons();
        revealChatroom();
        listenForMessages();
    }
    else{
        hideChatroom();
        revealSignInButtons();
    }
});


let authProvider = new firebase.auth.GoogleAuthProvider();

document.getElementById("sign-in-button").addEventListener('click',()=>{
    firebase.auth().signInWithPopup(authProvider)
    .then(result=>{
        
    })
    .catch(err=>{

    });
});
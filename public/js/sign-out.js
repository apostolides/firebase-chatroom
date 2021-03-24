document.getElementById("sign-out-button").addEventListener('click',()=>{
    firebase.auth().signOut()
    .then(()=>{

    })
    .catch(err=>{

    });
});
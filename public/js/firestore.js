let db = firebase.firestore();

function listenForMessages(){
    let ref = db.collection('Chatroom');
    let query = ref.orderBy('timestamp').limitToLast(40);
    query.onSnapshot(async function(querySnapshot){
        let messages = []
        await querySnapshot.forEach(doc=>{
            let message = {user:doc.data().user,message:doc.data().data,timestamp:doc.data().timestamp}
            messages.push(message);
        });
        updateChatroom(messages);
    });
}

function writeMessage(message){
    let mes = message.trim();
    if(mes){
        db.collection("Chatroom").add({
            data:mes,
            user:firebase.auth().currentUser.displayName,
            timestamp:firebase.firestore.Timestamp.now()
        }).then(docReft=>{
            // console.log(docReft);
        }).catch(err=>{
            // console.error(err);
        });
    }
}
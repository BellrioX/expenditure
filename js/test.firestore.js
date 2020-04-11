function myFunction1() {
    const firebase = require("firebase");
    // // Required for side-effects
    // require("firebase/firestore");

    firebase.initializeApp({
        apiKey: "AIzaSyB590A3aoJtstgg8gZoVXGlHkBWLAjLzWQ",
        authDomain: "money-s-e6527.firebaseapp.com",
        projectId: "money-s-e6527",
    });

    var db = firebase.firestore();

    // db.collection("user").add({
    //         type: "Sports",
    //         spent: 25252,
    //         fs_timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //     })
    //     .then(function (docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function (error) {
    //         console.error("Error adding document: ", error);
    //     });

    db.collection("user").orderBy("fs_timestamp", "desc").limit(1).get().then(snapshot => {
        snapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            let initial = 1000;
            console.log("Initial Money =", initial);
            const data = doc.data();
            var x = data.spent;
            console.log("Spent $", x);
            document.getElementById("grab-display").innerHTML = "SGD " + initial;
        });
    });
}

myFunction1()
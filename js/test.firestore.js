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

    db.collection("user").orderBy("fs_timestamp", "desc").limit(1).get().then(snapshot => {
        snapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data();
            console.log(doc.id, " => ", data.spent);
            console.log("Spent", data.spent);
            var x = data.spent;
            console.log("X = ", x);
            document.getElementById("grab-display").innerHTML = "SGD " + x;
        });
    });
}

myFunction1()
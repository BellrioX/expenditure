let firebaseConfig = {
    apiKey: "AIzaSyB590A3aoJtstgg8gZoVXGlHkBWLAjLzWQ",
    authDomain: "money-s-e6527.firebaseapp.com",
    databaseURL: "https://money-s-e6527.firebaseio.com",
    projectId: "money-s-e6527",
    storageBucket: "money-s-e6527.appspot.com",
    messagingSenderId: "610868968674",
    appId: "1:610868968674:web:bc04311cb15eea0586b2bb",
    measurementId: "G-E73R6VDLM9"
};

$(document).ready(() => {

    ///writeUserData(4, "$246.64", "$4363.23"

    function writeUserData(userId, total, highest) {
        firebase.database().ref('users/' + userId).set({
            total: total,
            highest: highest
        });
    }

    let d = new Date();
    let month = d.getMonth() + 1
    let datestring = `${d.getDate()}${month}${d.getFullYear()}`
    console.log(datestring)
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    writeUserData(datestring, "$246.64", "$436234243.23")
    database.ref('/users').once('value').then(function (snapshot) {
        console.log(snapshot.val());
    });
});
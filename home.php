<html>

<head>
    <title>fafafa</title>
</head>

<body>
<center>
    <h2>Enter Name</h2>
    <input type="text" id="user" required="required"><br>
    <button type="button" onclick="getdata();">Get</button> 
</center>


<center>
    <p>Namee : <strong id="name"></strong></p>
    <p>Gender : <strong id="gender"></strong></p>
    <p>Country : <strong id="country"></strong></p>
</center>



<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB590A3aoJtstgg8gZoVXGlHkBWLAjLzWQ",
        authDomain: "money-s-e6527.firebaseapp.com",
        databaseURL: "https://money-s-e6527.firebaseio.com",
        projectId: "money-s-e6527",
        storageBucket: "money-s-e6527.appspot.com",
        messagingSenderId: "610868968674",
        appId: "1:610868968674:web:bc04311cb15eea0586b2bb",
        measurementId: "G-E73R6VDLM9"
    };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
</script>
<script type="text/javascript" src="app.js"></script>
</body>


</html>
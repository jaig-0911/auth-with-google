
var firebaseConfig = {
    apiKey: "AIzaSyDpmMGTirVRyIokg2c_kb5q8Ri-estYyZ8",
    authDomain: "the-dump-app.firebaseapp.com",
    databaseURL: "https://the-dump-app.firebaseio.com",
    projectId: "the-dump-app",
    storageBucket: "the-dump-app.appspot.com",
    messagingSenderId: "349875560034",
    appId: "1:349875560034:web:369129da326a3cf70e3b3b",
    measurementId: "G-6LRLSE4X81"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    
    function signout(){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
            alert("you are signout!");
            window.location = 'index.html'
        }).catch(function(error) {
        // An error happened.
            console.log(error)
        });
    }
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log("user info", user);
        
            var h1 = document.createElement("h1");
            h1.innerHTML = "welcome, " + user.displayName;
            welcome  =document.getElementById("welcome")
            welcome.append(h1);
   
        } else {
            console.log("no user logged in")
            window.location = 'index.html'
            // User is signed out.
            // ...
    }
    }); 
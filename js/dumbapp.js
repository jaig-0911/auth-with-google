
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



function signinwithgoogle(){
    console.log("heyhey");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
        var user = result.user;
        console.log("user info", user);

    }).catch(function(error){
        console.log('google sign in error', error);
        alert('Please Try Again !')
    });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("user info", user);
        window.location = 'signout.html'
    } else {
        console.log("no user logged in")
        // User is signed out.
        // ...
}
}); 
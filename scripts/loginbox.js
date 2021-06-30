// Firebase Initialization
var config = {
  apiKey: "AIzaSyBRRG-5SqlUsfo_h1fhaaIeTf_2b5QSJqY",
  authDomain: "gamervault-fd419.firebaseapp.com",
  projectId: "gamervault-fd419",
  storageBucket: "gamervault-fd419.appspot.com",
  messagingSenderId: "985528869080",
  appId: "1:985528869080:web:97fa46d30068b7dd56b7ad",
  measurementId: "G-6W8BG6TNPG"
}

firebase.initializeApp(config);
var clouddb = firebase.firestore();


// Signup Event 
const emailInput = document.querySelector('.emailInput');
const passInput = document.querySelector('.passInput');
const signupButton = document.querySelector('.signupButton');

if (signupButton) {
  signupButton.addEventListener("click", function signUp() {
    // Get email and pass
    const email = emailInput.value;
    const pass = passInput.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
firebase.auth().onAuthStateChanged(user => {
    const user1 = firebase.auth().currentUser;
    const usernameInput = document.querySelector('.usernameInput').value;
    user1.updateProfile({
      displayName: usernameInput
    }).then(() => {
      //Update successful
    }).catch((error) => {
      console.log(error);
    });
})
    console.log("signed up");
    //window.location.href = 'https://dpr5c7.github.io/github.io/index.html';
  })
}

// Update Login, Signup, Logout Buttons
firebase.auth().onAuthStateChanged(user => {
  const indexLogin = document.querySelector('#indexLogin');
  const indexSignup = document.querySelector('#indexSignup');
  const indexLogout = document.querySelector('#indexLogout');
  const userHeaderText = document.querySelector('#userHeaderText');
  const loginButton = document.querySelector('#loginButton');
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified, signedIn;

  if (user !== null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
    signedIn = true;
    indexLogin.style.display = "none";
    indexSignup.style.display = "none";
    indexLogout.style.display = "block";
    userHeaderText.style.display = "block";
    userHeaderText.innerHTML = "Welcome " + name + "!";
  }

  if (user == null) {
    signedIn = false;
    indexLogin.style.display = "block";
    indexSignup.style.display = "block";
    indexLogout.style.display = "none";
    userHeaderText.style.display = "none";
  }
})

// Login box - Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

 // Add login event
loginButton.addEventListener("click", function logIn() {
 // Get email and pass
  const loginEmail = document.querySelector('#loginEmail');
  const loginPass = document.querySelector('#loginPass');
  const email = loginEmail.value;
  const pass = loginPass.value;
  const auth = firebase.auth();
 // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
  console.log("signed in")
  document.getElementById('id01').style.display='none';
});

//Logout
indexLogout.addEventListener("click", function logOut() {
  firebase.auth().signOut();
  console.log('logged out');
});


// Google Sign In

googleButton = document.querySelector(".googleButton");

googleButton.addEventListener("click", function() {
  console.log("Google Button Clicked!");
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
})

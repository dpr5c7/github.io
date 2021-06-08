// Initialize Firebase
  var config = {
  apiKey: "AIzaSyBRRG-5SqlUsfo_h1fhaaIeTf_2b5QSJqY",
  authDomain: "gamervault-fd419.firebaseapp.com",
  projectId: "gamervault-fd419",
  storageBucket: "gamervault-fd419.appspot.com",
  messagingSenderId: "985528869080",
  appId: "1:985528869080:web:97fa46d30068b7dd56b7ad",
  measurementId: "G-6W8BG6TNPG"
}; 
  firebase.initializeApp(config);
  getElements()
 
// Get elements
function getElements() {  
  const testEmail = document.getElementById('testEmail');
  const testPass = document.getElementById('testPass');
  const btnLogin = document.getElementById('testLogin');
  const btnSignUp = document.getElementById('testSignUp');
  const btnLogout = document.getElementById('testLogout');
};

 // Add login event
function logIn() {
 // Get email and pass
  getElements();
  const email = testEmail.value;
  const pass = testPass.value;
  const auth = firebase.auth();
 // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
};

function signUp() {
 // Get email and pass
  getElements();
  const email = testEmail.value;
  const pass = testPass.value;
  const auth = firebase.auth();
 // Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
};

function logOut() {
  firebase.auth().signOut();
  console.log('logged out');
};

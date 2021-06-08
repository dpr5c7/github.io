(function() { 
// Initialize Firebase
  const config = {
  apiKey: "AIzaSyBRRG-5SqlUsfo_h1fhaaIeTf_2b5QSJqY",
  authDomain: "gamervault-fd419.firebaseapp.com",
  projectId: "gamervault-fd419",
  storageBucket: "gamervault-fd419.appspot.com",
  messagingSenderId: "985528869080",
  appId: "1:985528869080:web:97fa46d30068b7dd56b7ad",
  measurementId: "G-6W8BG6TNPG"
}; 
  firebase.initializeApp(config);
 
// Get elements
  const testemail = document.getElementById('testemail');
  const testpass = document.getElementById('testpass');
  const btnLogin = document.getElementById('testlogin');
  const btnSignUp = document.getElementById('testsignup');
  const btnLogout = document.getElementById('testlogout');

 // Add login event
 btnLogin.addEventListener('click', e=> {
  const email = testemail.value;
  const pass = testpass.value;
  const auth = firebase.auth();
 // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

}());

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

signupButton.addEventListener("click", function signUp() {
 // Get email and pass
  const email = emailInput.value;
  const pass = passInput.value;
  const auth = firebase.auth();
 // Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
  console.log("signed up")
})

// Update Login, Signup, Logout Buttons

// Get the modal
				var modal = document.getElementById('id01');

				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
					if (event.target == modal) {
					modal.style.display = "none";
					}
				}

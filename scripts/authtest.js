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
 	var clouddb = firebase.firestore();
  getElements();
  
// Get elements
function getElements() {  
  const testEmail = document.getElementById('testEmail');
  const testPass = document.getElementById('testPass');
  const testInputa = document.getElementById('testInput');
  const testInputb = document.getElementById('testInput2');
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
  console.log("signed in")
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
  console.log("signed up")
};

function logOut() {
  firebase.auth().signOut();
  console.log('logged out');
};

function submitToDB() {
const testInputa = document.getElementById('testInput');
const testInputb = document.getElementById('testInput2');
var testData = {
	test1: testInputa.value,
  test2: testInputb.value};
  
console.log(testData);    
    clouddb.collection('test1').add(testData)
    .then((docRef) => {
    	console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
    	console.error("Error adding document: ",error);
    });
}

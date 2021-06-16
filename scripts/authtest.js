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
		//set() to initially set and update() to update
    clouddb.collection('test1').doc('test3').set(testData)
    .then(() => {
    	console.log("Document written!");
    })
    .catch((error) => {
    	console.error("Error adding document: ",error);
    });
}

function getUserData() {
	var user = firebase.auth().currentUser;
	var name, email, photoUrl, uid, emailVerified, signedIn;
	
	if (user!= null) {
		name = user.displayName;
		email = user.email;
		photoUrl = user.photoURL;
		emailVerified = user.emailVerified;
		uid = user.uid;
    signedIn = true;
	};
  
  if (user == null) {
  	signedIn = false;
  };
  
	const test1 = document.getElementById('UserInfo1');
  const test2 = document.getElementById('UserInfo2');
  const test3 = document.getElementById('UserInfo3');
	test1.value = email
  test2.value = uid
  test3.value = signedIn
}

function getDBData() {
	var docRef = clouddb.collection("test1").doc("test3");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
         var infoStuff = doc.data()
         const test1 = document.getElementById('DBInfo1');
         const test2 = document.getElementById('DBInfo2');
         test1.value = infoStuff.test1
         test2.value = infoStuff.test2
         
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
}

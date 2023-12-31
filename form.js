// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBqz4IqjjyZLDMINGp9H8fEwhUkNkWUB7k",
  authDomain: "form-87b4f.firebaseapp.com",
  projectId: "form-87b4f",
  storageBucket: "form-87b4f.appspot.com",
  messagingSenderId: "394369479791",
  appId: "1:394369479791:web:b40290bbc55fadf30ec99a",
  measurementId: "G-CWS5ZCDJV4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));

  alert("Signed Up");
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
}

//
//	function signOut(){
//
//		auth.signOut();
//		alert("Signed Out");
//	}

auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    alert("Active User " + email);
    //Take user to a different or home page

    //is signed in
  } else {
    alert("No Active User");
    //no user is signed in
  }
});

//function writeData(){
//	firebase.database().ref("User").set({
//		name: document.getElementById("name").value,
//		number: document.getElementById("number").value;
//		}
//	})

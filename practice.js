// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDs4MdDOOH1036fxdWE1pypkhdjO5cWr2Y",
  authDomain: "gossipbase-148ad.firebaseapp.com",
  databaseURL: "https://gossipbase-148ad-default-rtdb.firebaseio.com",
  projectId: "gossipbase-148ad",
  storageBucket: "gossipbase-148ad.appspot.com",
  messagingSenderId: "536645051541",
  appId: "1:536645051541:web:b1e654a5e595ba9d90e79c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


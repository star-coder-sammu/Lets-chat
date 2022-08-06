
//ADD YOUR FIREBASE LINKS HERE
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
    


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("RoomName -" + Room_names);
      row = "<div class='room_name'  id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose  : "adding room name" 
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";

}

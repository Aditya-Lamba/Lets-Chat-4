
  var firebaseConfig = {
    apiKey: "AIzaSyAVzGC8P9ufOz0aEX1XC7PWbNb6epoWMG4",
    authDomain: "twitter-kids.firebaseapp.com",
    databaseURL: "https://twitter-kids-default-rtdb.firebaseio.com",
    projectId: "twitter-kids",
    storageBucket: "twitter-kids.appspot.com",
    messagingSenderId: "522290198141",
    appId: "1:522290198141:web:d69e332c9c144fb4bde314",
    measurementId: "G-PH7Y6KCWEQ"
  };
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

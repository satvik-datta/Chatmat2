var firebaseConfig = {
    apiKey: "AIzaSyC7qat8C6lHt0qSLhbWWm9MKB27B7t3ADs",
    authDomain: "kwitter-b423a.firebaseapp.com",
    databaseURL: "https://kwitter-b423a-default-rtdb.firebaseio.com",
    projectId: "kwitter-b423a",
    storageBucket: "kwitter-b423a.appspot.com",
    messagingSenderId: "477286309288",
    appId: "1:477286309288:web:ac285788ef5dcec658119d",
    measurementId: "G-Z0363J6TJK"
  };
  firebase.initializeApp(firebaseConfig);

  function make_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
  }

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
         console.log("room name - " + Room_names);
         row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;

        //End code
      });
    });
  }
  getData();
  function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location = "kwitter_page.html";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
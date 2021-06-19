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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
//getData();

function send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0
        });
        document.getElementById("msg").value = "";
}
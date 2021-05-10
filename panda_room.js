
var firebaseConfig = {
      apiKey: "AIzaSyCmJ2ygthRyin0CYEPmfOhZB6cAblwlk4Q",
      authDomain: "panda-3eeb5.firebaseapp.com",
      databaseURL: "https://panda-3eeb5-default-rtdb.firebaseio.com",
      projectId: "panda-3eeb5",
      storageBucket: "panda-3eeb5.appspot.com",
      messagingSenderId: "500901861164",
      appId: "1:500901861164:web:495929ec316bb6e6e8be89"
    };
    
    firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Heyy " + user_name + " Welcome!";

     function addRoom()
     {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });

           localStorage.setItem("room_name", room_name);

           window.location = "Panda_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName (this.id)' > #"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
       window.location = "Panda_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
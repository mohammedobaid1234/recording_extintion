const firebaseConfig = {
	apiKey: "AIzaSyCXTBZavWJ1srvIBmpmUYcct3Tl6hNb5G4",
	authDomain: "accord-b4777.firebaseapp.com",
	databaseURL: "https://accord-b4777-default-rtdb.firebaseio.com",
	projectId: "accord-b4777",
	storageBucket: "accord-b4777.appspot.com",
	messagingSenderId: "339251259422",
	appId: "1:339251259422:web:3e905173f4a96d4d82e60f",
	measurementId: "G-P9G3F7WJXT"
  };

 firebase.initializeApp(firebaseConfig);

 var last_recent_redirect_id = 2;

 firebase.database().ref('visits/'+last_recent_redirect_id).set({
	  visit_redirect_id: last_recent_redirect_id,
  });

  firebase.database().ref('visits').on('value',   function(snapshot) {
	// console.log(snapshot);
  var visit_ids =[];   
  var childKey;
  snapshot.forEach(function(childSnapshot) {
	 childKey = childSnapshot.key;
	var childData = childSnapshot.val();
	// console.log(childKey);
	visit_ids.push(childKey);
  });
  
 
  if (visit_ids.includes("5")) {
	// firebase.database().ref('visits').child("4").get().then((snapshot) => {
	//   console.log(snapshot.val());
	// })
		recordButton.click();      
	  console.log("test");
	} else {
	  stopButton.click();      
		console.log("No data available");
	}
});
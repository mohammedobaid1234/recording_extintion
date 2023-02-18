const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
	measurementId: ""
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
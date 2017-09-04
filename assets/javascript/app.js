var train = null;
var destination = null;
var first = null;
var frequency = null;

var trainUpload = null;


// Initialize Firebase
    var config = {
        apiKey: "AIzaSyCkeqG-SdklI5gFegRpGInHuim4iRw11aY",
        authDomain: "traintime-30a9d.firebaseapp.com",
        databaseURL: "https://traintime-30a9d.firebaseio.com",
        projectId: "traintime-30a9d",
        storageBucket: "",
        messagingSenderId: "558497385423"
    };
firebase.initializeApp(config);


// Create a variable to reference the database
var database = firebase.database();

// on page load load info from server using jquery

$('.submit').on('click', function(event) {
    event.preventDefault();

    train = $('#train-input-0').val().trim();
    destination = $('#train-input-1').val().trim();
    first = $('#train-input-2').val().trim();
    frequency = $('#train-input-3').val().trim();
    //testing
    console.log(train, destination, first, frequency);

    database.ref().push({
        train: train ,
        destination: destination,
        first: first,
        frequency: frequency
    });
});

database.ref().on("child_added", function(childSnapshot) {
      // Log everything that's coming out of snapshot
  console.log(childSnapshot.val().train);
  console.log(childSnapshot.val().destination);
  console.log(childSnapshot.val().first);
  console.log(childSnapshot.val().frequency);
  // full list of items to the well
  $("#table-body").append("<tr>" +
    "<td class = 'table-name'>" + childSnapshot.val().train + "</td>" +
    "<td class = 'table-name'>" + childSnapshot.val().destination + "</td>" +
    "<td class = 'table-name'>" + childSnapshot.val().frequency + "</td>" +
    "</tr>");
  // Handle the errors
  }, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

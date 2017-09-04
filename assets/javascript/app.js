var train = null;
var destination = null;
var first = null;
var frequency = null;

var trainUpload = null;

$( document ).ready(function() {
    console.log(moment().format());
});

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
    var trainName = childSnapshot.val().train;
    var trainDestination = childSnapshot.val().destination;
    var trainFrequency = childSnapshot.val().frequency;

    var sv = childSnapshot.val();
	var start = moment(sv.first, "HHmm");
	var minDiff = parseInt(start.diff(moment(), "minutes"));
	var freq = parseInt(sv.frequency);
	var minLeft = freq + (minDiff % freq);
    console.log(start, minDiff, freq, minLeft);

	var m = moment().add(minLeft, "minutes");
	var nextTrain = m.format("hh:mm");


  // full list of items to the well
    $("#table-body").append("<tr>" +
        "<td class = 'table-name'>" + trainName + "</td>" +
        "<td class = 'table-name'>" + trainDestination + "</td>" +
        "<td class = 'table-name'>" + trainFrequency + "</td>" +
        "<td class = 'table-name'>" + nextTrain +
        "<td class = 'table-name'>" + minLeft +
        "</tr>");
  // Handle the errors
  }, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

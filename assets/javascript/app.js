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

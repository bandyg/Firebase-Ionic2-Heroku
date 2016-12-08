
var five = require("johnny-five");
var firebase = require("firebase");
var board = new five.Board();
var config = {
  apiKey: "AIzaSyDazuFdCgvR5yJNp-jgOxYa1bB6lRmNhhs",
  authDomain: "arduino-3c71c.firebaseapp.com",
  databaseURL: "https://arduino-3c71c.firebaseio.com",
  storageBucket: "arduino-3c71c.appspot.com",
  messagingSenderId: "69889639940"
};
firebase.initializeApp(config);
var db = firebase.database();

board.on("ready", function () {

  var servoy = new five.Servo(10);//ServoY
  var servox = new five.Servo(9);//ServoX  
  var motion = new five.Motion(3);//Sensor-Pir
  var led = new five.Led(13);//led10
  var led2 = new five.Led(12);//led9
  var led3 = new five.Led(11);//led8
  var buff = new five.Led(2);//Bocina10  

  var sx;
  var sy;


  db.ref('metadata').on('value', function (snapshot) {
    if (snapshot.val().app === 0) {
      led.fadeOut();   
      buff.fadeIn();
    } else {
      led.fadeIn();
      buff.fadeOut();
    }
    if (snapshot.val().led2 === 0) {
      led2.fadeOut();
    } else {
      led2.fadeIn();
    }
    if (snapshot.val().led3 === 0) {
      led3.fadeOut();
    } else {
      led3.fadeIn();
    }
    servox.to(snapshot.val().servoX);
    servoy.to(snapshot.val().servoY);

    sx = snapshot.val().servoX;
    sy = snapshot.val().servoY;
  });

  motion.on("calibrated", function () {
    console.log("calibrated");
  });

  motion.on("motionstart", function () {
    console.log("move start");
    db.ref('metadata').set({
      app: 1,
      servoX: sx,
      servoY: sy,
      led2: 1,
      led3: 1
    });

  });

  motion.on("motionend", function () {
      console.log("move end");
    db.ref('metadata').set({
      app: 0,
      servoX: sx,
      servoY: sy,
      led2: 0,
      led3: 0
    });
  });
});

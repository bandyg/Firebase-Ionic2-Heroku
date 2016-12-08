var canvas = document.getElementById("preview");
var press = 0;
var config = {
    apiKey: "AIzaSyDazuFdCgvR5yJNp-jgOxYa1bB6lRmNhhs",
    authDomain: "arduino-3c71c.firebaseapp.com",
    databaseURL: "https://arduino-3c71c.firebaseio.com",
    storageBucket: "arduino-3c71c.appspot.com",
    messagingSenderId: "69889639940"
};
firebase.initializeApp(config);
var db = firebase.database();
var tmpX, tmpY, sx, sy;
var foc1, foc2, foc3;
//----------------------------
this.db.ref('metadata').on('value', function (snapshot) {
    foc1 = snapshot.val().app;
    foc2 = snapshot.val().led2;
    foc3 = snapshot.val().led3;

    if (foc1 === 1) {
        document.getElementById("alert").style.background = "red";
        document.getElementById("alert").textContent = "PELIGRO!!";
        document.getElementById('f1').src = "img/prendido.png";
    } else {
        document.getElementById("alert").style.background = "none";
        document.getElementById("alert").textContent = "SEGURO!!";
        document.getElementById('f1').src = "img/apagado.png";
    }

    if (foc2 === 1) {
        document.getElementById('f2').src = "img/prendido.png";
    } else {
        document.getElementById('f2').src = "img/apagado.png";
    }
    if (foc3 === 1) {
        document.getElementById('f3').src = "img/prendido.png";
    } else {
        document.getElementById('f3').src = "img/apagado.png";
    }
    sx = snapshot.val().servoX;
    sy = snapshot.val().servoY;

});
//----------------------------
function cambiar(num) {
    switch (num) {
        case 1:
            if (this.foc1 === 0) {
                this.foc1 = 1;
                this.foc2 = 1;
                this.foc3 = 1;
            } else {
                this.foc1 = 0;
                this.foc2 = 0;
                this.foc3 = 0;
            }
            break;
        case 2:
            if (this.foc2 === 0) {
                this.foc2 = 1;
            } else {
                this.foc2 = 0;
            }
            break;
        case 3:
            if (this.foc3 === 0) {
                this.foc3 = 1;
            } else {
                this.foc3 = 0;
            }
            break;
    }
    db.ref('metadata').set({
        app: this.foc1,
        servoX: this.sx,
        servoY: this.sy,
        led2: this.foc2,
        led3: this.foc3
    });
}
//----------------------------
function moverServos(x1, y1) {

    if (x1 < tmpX) {
        sx = sx - (tmpX - x1);
    } else if (x1 > tmpX) {
        sx = sx + (x1 - tmpX);
    }
    if (sx > 180) {
        sx = 180;
    } else if (sx < 0) {
        sx = 0;
    }

    if (y1 < tmpY) {
        sy = sy - (tmpY - y1);
    } else if (y1 > tmpY) {
        sy = sy + (y1 - tmpY);
    }
    if (sy > 180) {
        sy = 180;
    } else if (sy < 0) {
        sy = 0;
    }

    db.ref('metadata').set({
        app: this.foc1,
        servoX: this.sx,
        servoY: this.sy,
        led2: this.foc2,
        led3: this.foc3
    });

    this.tmpX = x1;
    this.tmpY = y1;
}

//----------------------------
if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
        var output = document.getElementById("output");
        canvas.addEventListener("mousemove", function (evt) {
            oMousePos(canvas, evt)
        }, false);
    }
}

//----------------------------
function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    var x1 = Math.round(evt.clientX - ClientRect.left);
    var y1 = Math.round(evt.clientY - ClientRect.top);

    if (press === 1) {
        moverServos(x1, y1)
    }
}

//----------------------------
function myFunction(elmnt, clr) {
    if (clr === "1") {
        elmnt.style.color = "red";
        this.press = 1;
    } else {
        elmnt.style.color = "green";
        this.press = 0;
    }
};



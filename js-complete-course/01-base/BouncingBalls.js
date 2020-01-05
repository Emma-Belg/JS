;(function () {
    console.log('IIFE JS Loaded!')
})()

    // the below is an example of functional programing
    //this is a JS literal object. It encapsulates data about the object but no functionality, the fuctionality is separated from the object and can be seen below.
    /*
    let ball  = {
        x: 300,
        y: 200,
    }
    let speed = 10;

    function setup () {
        createCanvas (600, 400);
    }

    //The functions related to the object are separate to the object
    function draw () {
        background (0);
        move();
        show();
    }

    function show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(ball.x, ball.y, 24, 24);
    }

    function move() {
        ball.x = ball.x + random(-5, 5);
        ball.y = ball.y + speed;
    }
     */


    //It could also be written in a  OOP format
    /*first we need to 'encapsulate' the object by defining it in a class, this is like making a template or blueprint for the object.
    Please note that is is not CREATING the object, that needs to be done later and can be done using the JS keyword 'new' + the object name
    You can then call the object name along with the dot operator to call a function with the object*/
    /* Object classes encapsulate both the data and functionality of the object so that it can be used later. The creation of the object is referred to as the 'instance'

     * The first thing we should do in the class is to define the constructor in this class. Note that classes always start with a capital letter*/



    class Ball {
        //we are adding data to the 'constructor' of the object class that we are creating
        constructor (x, y, r) {
            /*The 'this' keyword is being used here because it is  generic term keyword and can then be used as a template later. because it is within the class it knows
            that it is referring to the Ball object. When I create the Ball object later we will use 'Ball.' and not 'this.' We use 'this.' in the template because we
            can use this class constructor to create several balls and they will not all have the exact same name (we can number them).
             */
            this.x = x;
            this.y = y;
            this.r = r;
        }
        //we will now define the functionality of the ball. Notice that you do not need to write "function" inside a class, you can simply write the name and js knows it is a function
        move(){
            this.x = this.x + random(-5, 5);
            this.y = this.y + speed;
        }
        show() {
            stroke(255);
            strokeWeight(4);
            noFill();
            ellipse(this.x, this.y, this.r * 2);
        }
    }


    //You can now use the above class to 'initialise' instances of the ball class without having to make several
    let speed = 1;
    //creating several balls from the class
    let ball = [];

    function setup () {
        //the Keyword 'new' is an instruction to "construct" or create an object instance.
        createCanvas(600, 400);
       // for (let i=0; i < 10; i++) {
       //     let x = 10 + 20 * i;
            ball[0] = new Ball(200, 200, 20);
            ball[1] = new Ball(400, 150, 40);
       // }
    }

    //creating a draw function using the functions within the Ball class
    function draw() {
        background(0);
        ball[0].move();
        ball[0].show();
        ball[1].move();
        ball[1].show();
    }

    setup();
    draw();



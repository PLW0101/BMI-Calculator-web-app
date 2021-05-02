// use nodemon to spin up our server, $ nodemon calculator.js

const express = require("express");
//const bodyParser=require("body-parser");
//see https://stackoverflow.com/questions/66525078/bodyparser-is-deprecated

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //console.log(req.body);  //see bodyParser about how to can tap into these values, becareful about the deprecated
  //console.log(req.body.num1);
  let num1 = Number(req.body.num1); // notice the num1 & num2 come from the name in in the form in index.html
  let num2 = Number(req.body.num2);
  //body parser parses the value into text, use Number to change that to number

  let result = num1 + num2;

  res.send("The result of the calculation is " + result);
});


// BMI Calculator

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  /*   
//console.log(req.body);  //see bodyParser about how to tap into these values, be careful about the deprecated
  //console.log(req.body.num1);
  let weight = Number(req.body.myWeight); // notice the myWeight & myHeight come from the name in in the form in bmiCalculator.html
  let height = Number(req.body.myHeight);
  //body parser parses the value into text, use Number to change that to number
 */

  // try instead of Number(req.body.myWeight)
  let weight = parseFloat(req.body.myWeight);
  let height = parseFloat(req.body.myHeight);
  let bmi = (weight / Math.pow(height, 2)).toFixed(2);

  res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

/* 
Calculator Setup Challenge
Before we start creating our Calculator website, we'll need to set up a new project. Follow the steps below using your Hyper Terminal to complete this challenge:

Make a new folder called Calculator on your Desktop

Change Directory to this new folder

Inside the Calculator folder, create a new file called calculator.js

Set up a new NPM package

Open the project folder in Atom 

Using NPM install the express module

Require express in your calculator.js

Setup express

Create a root route get method with app.get()

Send the words Hello World from the root route as the response

Spin up our server on port 3000 with app.listen

Run server with nodemon
*/

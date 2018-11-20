/*
 * Hello. 2 points.
 */

function hello() {

  // WRITE YOUR EXERCISE 1 CODE HERE
  let div=document.getElementById("output1");
  div.innerHTML=("Hello, AP Computer Science Principles!");
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY      Use the @name variable to store
  let name; // DO NOT MODIFY      the value that the user enters
  //////////// DO NOT MODIFY      in response to your prompt.

  // WRITE YOUR EXERCISE 2 CODE HERE
  name=prompt("Please Enter Your Name")
  document.getElementById("output2").innerHTML=("Hello, " + name + "!");

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY
<<<<<<< HEAD
  let fahrenheit=((cels * 9/5) + 32).toFixed(2);
=======
  let fahrenheit = ((cels * 9/5) + 32).toFixed(2);
>>>>>>> 8dedc939a665aff21139d1c0d773e1c9ae2e4c04
  document.getElementById("output3").innerHTML=(cels+" degrees Celsius equals "+fahrenheit + " degrees Fahrenheit.");
  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
  let celsius=((fahr-32)*(5/9)).toFixed(2);
  document.getElementById("output4").innerHTML=(fahr+" degrees Fahrenheit equals "+celsius+ " degrees Celsius.");

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  let miles = Math.floor(inches/63360);
  let yards = Math.floor((inches-(miles*63360))/36);
  let feet = Math.floor((inches-(miles*63360)-(yards*36))/12);
  inches = Math.floor((inches-(miles*63360)-(yards*36)-(feet*12))/1);
  
  document.getElementById("output5").innerHTML=("Miles: "+miles+"</br>Yards: "+yards+"</br>Feet: "+feet+"</br>Inches: "+inches);
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  let kilometers=Math.floor(centimeters/100000);
  let meters=Math.floor((centimeters-(kilometers*100000))/100);
  centimeters=Math.floor((centimeters-(kilometers*100000)-(meters*100)));
  document.getElementById("output6").innerHTML=("Kilometers: "+kilometers+"</br>Meters: "+meters+"</br>Centimeters: "+centimeters);
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let gallons=Math.floor(fluidOunces/128);
  let quarts=Math.floor((fluidOunces-gallons*128)/32);
  let pints=Math.floor((fluidOunces-(gallons*128)-(quarts*32))/16);
  let cups=Math.floor((fluidOunces-(gallons*128)-(quarts*32)-(pints*16))/8);
  fluidOunces=Math.floor(fluidOunces-(gallons*128)-(quarts*32)-(pints*16)-(cups*8));
  document.getElementById("output7").innerHTML=("Gallons: "+gallons+"</br>Quarts: "+quarts+"</br>Pints: "+pints+"</br>Cups: "+cups+"</br>Fluid Ounces: "+fluidOunces);
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let tons=Math.floor(ounces/32000);
  let pounds=Math.floor((ounces-(tons*32000))/16);
  ounces=Math.floor((ounces-(tons*32000)-(pounds*16)));
  document.getElementById("output8").innerHTML=("Tons: "+tons+"</br>Pounds: "+pounds+"</br>Ounces: "+ounces);
  
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let dollars=Math.floor(pennies/100);
  let quarters=Math.floor((pennies-(dollars*100))/25);
  let dimes=Math.floor((pennies-(dollars*100)-(quarters*25))/10);
  let nickels=Math.floor((pennies-(dollars*100)-(quarters*25)-(dimes*10))/5);
  pennies=Math.floor(pennies-(dollars*100)-(quarters*25)-(dimes*10)-(nickels*5));
  document.getElementById("output9").innerHTML=("Dollars: "+dollars+"</br>Quarters: "+quarters+"</br>Dimes: "+dimes+"</br>Nickels: "+nickels+"</br>Pennies: "+pennies);
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
<<<<<<< HEAD
  amount=amount*100;
  
  let quarters2=Math.floor(amount/25);
  let dimes2=Math.floor((amount-(quarters2*25))/10);
  let nickels2=Math.floor((amount-(quarters2*25)-(dimes2*10))/5);
  let pennies2=Math.floor((amount-(quarters2*25)-(dimes2*10)-(nickels2*5)));
  let coins=quarters2+dimes2+nickels2+pennies2;
  let coinWord=" coins.";
  if (coins==1){
	  coinWord=" coin.";
  }

  document.getElementById("output10").innerHTML=(coins+coinWord);  
=======
  let quarters2=Math.floor(amount/.25);
  let dimes2=Math.floor((amount-(quarters2*.25))/.10);
  let nickels2=Math.floor((amount-(quarters2*.25)-(dimes2*.10))/.5);
  let pennies2=Math.floor((amount-(quarters2*.25)-(dimes2*.10)-(nickels2*.5))/.01);
  let coins=quarters2+dimes2+nickels2+pennies2;
  document.getElementById("output10").innerHTML=(coins+" coins.");
>>>>>>> 8dedc939a665aff21139d1c0d773e1c9ae2e4c04
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

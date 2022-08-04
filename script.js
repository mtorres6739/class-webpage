let userName = prompt("Enter your name: ");
// let favColor = prompt("What is your favorite color?");
alert("Your name is " + userName);

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.write(greeting);

document.write("! " + userName + "! how are you?");

// let header = document.getElementById("header");
// document.style.favColor = favColor;



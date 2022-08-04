let userName = prompt("Enter your name: ");

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

document.write("! " + userName + "! These are my favorite movies. What are yours?");




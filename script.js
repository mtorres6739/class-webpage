// let userName = prompt("Enter your name: ");

// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// document.write(greeting);

// document.write("! " + userName + "! These are my favorite movies. What are yours?");


function name(){
    let userName = prompt("What is your name?");
    document.write(`${userName}! These are my favorite movies. What are yours?`);
}


function greeting(){
    const time = new Date().getHours();
    let greeting;
if (time < 10) {
    greeting = "Good morning, ";
} else if (time < 18) {
    greeting = "Good day, ";
} else {
    greeting = "Good evening, ";
}
    document.write(greeting);
}

function bestService(){
    let corretAnswer = "army";
    let response;
    while (response !== corretAnswer){
        response = (prompt("Which military branch is the best?")).toLowerCase();
        if (response !== corretAnswer){
            alert("Sorry, if you didn't say army you are wrong!")
        }
    }
}

function starRating(){
    const stars = prompt("How many stars would you give the movie Forrest Gump? (1-5)");
    for (let i = 1; i <= stars; i++){
        document.write(`<img src="star.png" alt="star"/>`);
    };
}
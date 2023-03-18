function randomNumber() {
    // Array for storing values
    let arr = [];

    // Generates a random number and turns it into a string
    let randNum = Math.floor(Math.random() * 1000).toString();
    
    // For loop goes through the string and adds values to array
    for (let i = 0; i < randNum.length; i++) {
        arr.push(parseInt(randNum[i]) * (10 ** (randNum.length - i - 1)));
    }

    // Display values
    document.getElementById("num").innerHTML = "Randomly Generated Number: " + randNum;
    document.getElementById("breakdown").innerHTML = "Breakdown: " + arr.join(", ");
    
}
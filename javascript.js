var numOfWins = [];

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

function myFunction(){
    var randomNum1 = Math.floor(Math.random() * 6 + 1);
    var randomNum2 = Math.floor(Math.random() * 6 + 1);

    

    var randomImgSource1 = "images/dice" + randomNum1 + ".png"
    var randomImgSource2 = "images/dice" + randomNum2 + ".png"


    document.querySelector(".img1").src = randomImgSource1;
    document.querySelector(".img2").src = randomImgSource2;



    // Checking the winner
    if (randomNum1 > randomNum2){
        document.querySelector("h1").innerHTML = "Player One Win!";
        numOfWins.push(1);
    } 
    else if (randomNum1 === randomNum2) {
        document.querySelector("h1").innerHTML = "It's a Draw 😕";
    } 
    else {
        document.querySelector("h1").innerHTML = "Player Two Win!";
        numOfWins.push(2);
    }
    console.log(numOfWins)

    var playerOneScore = getOccurrence(numOfWins, 1); // Prints the number for player one
    var playerTwoScore = getOccurrence(numOfWins, 2); // Prints the number for player two

    document.querySelector(".player-one-score").innerHTML = "Score: " + playerOneScore;
    document.querySelector(".player-two-score").innerHTML = "Score: " + playerTwoScore;
}






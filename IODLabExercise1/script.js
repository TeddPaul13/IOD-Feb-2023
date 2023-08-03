

//This function rolls the dice (generates random number)
function rollDice(sides) {
    document.getElementById("diceNumber1").innerHTML = Math.floor(Math.random() * sides + 1);
    document.getElementById("diceNumber2").innerHTML = Math.floor(Math.random() * sides + 1);
    
}

// This function select and displays the number of dice to be rolled
function displayDice(){
    let x = document.getElementById("my-selector1").value;

    if (x === "1"){
        document.getElementById("second-dice").style.display = "none";
        document.getElementById("twoDice").style.display = "none";
        document.getElementById("oneDice").style.display = "flex";
    }
    if (x === "2"){
        document.getElementById("second-dice").style.display ="flex";
        document.getElementById("twoDice").style.display = "flex";
        document.getElementById("oneDice").style.display = "none";
    }

}
//This function (selects and updates the number of sides on the dice) and enables buttons
function selectDiceSides(){
    let firstDropdown = document.getElementById("side-selector").value;
    let secondDropdown = document.getElementById("my-selector1").value;
    
    if (firstDropdown == 4){
        document.getElementById("diceNumber1").innerHTML = firstDropdown;
        document.getElementById("diceNumber2").innerHTML = firstDropdown;
    }
    if (firstDropdown == 6){
        document.getElementById("diceNumber1").innerHTML = firstDropdown;
        document.getElementById("diceNumber2").innerHTML = firstDropdown;
    }
    if (firstDropdown == 10){
        document.getElementById("diceNumber1").innerHTML = firstDropdown;
        document.getElementById("diceNumber2").innerHTML = firstDropdown;
    }
    
    if(firstDropdown !== "0" && secondDropdown !== "0"){
       
        document.getElementById("oneDice").disabled = false;
       document.getElementById("twoDice").disabled = false;
    }else{
        document.getElementById("oneDice").disabled = true;
       document.getElementById("twoDice").disabled = true;
    }
}
// Function created to call the two inner function on the same html button.
function testFunction(){
    displayDice();
    selectDiceSides();
}
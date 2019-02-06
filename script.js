
document.addEventListener("DOMContentLoaded", function() {


    function getRandomInt(min, max) { 
        return Math.floor(Math.random() * (max - min)) + min;
    }


    let roll = document.getElementById("roll");
    let calculate = document.getElementById("calculate");
    let startRolls = document.getElementById("startRolls");
    let radiobox1 = document.getElementById("radio1");
    let radiobox2 = document.getElementById("radio2");
    let radiobox3 = document.getElementById("radio3");
    let radiobox4 = document.getElementById("radio4");
    let radiobox5 = document.getElementById("radio5");
    let radiobox6 = document.getElementById("radio6"); 
    let player1button = document.getElementById("player1");
    let player2button = document.getElementById("player2");
    let player3button = document.getElementById("player3");
    let player4button = document.getElementById("player4");

    calculate.addEventListener("click", calculateScore)
    startRolls.addEventListener("click", startTurn);
    roll.addEventListener("click", updatevalue);

    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("box1").checked = false;
    });
    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("box2").checked = false;
    });
    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("box3").checked = false;
    });
    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("box4").checked = false;
    });
    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("box5").checked = false;
    });
    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("radio1").checked = false;
    });
    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("radio2").checked = false;
    });
    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("radio3").checked = false;
    });
    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("radio4").checked = false;
    });
    document.getElementById("startRolls").addEventListener("click", () => {
        document.getElementById("radio5").checked = false;
    });
    

    


    /*function writeScore2(){
        document.getElementById("twoScore").value = sumTwos;
    }*/


    function startTurn() {
        document.getElementById("value1").value = 0;
        document.getElementById("value2").value = 0;
        document.getElementById("value3").value = 0;
        document.getElementById("value4").value = 0;
        document.getElementById("value5").value = 0;
        count = 0;
    }
    
                player1button.addEventListener("click", function () {
                alert("Player 1's turn");
                radiobox1.addEventListener("change", function () { document.getElementById("oneScore1").value = sumOnes; })
                radiobox2.addEventListener("change", function () { document.getElementById("oneScore2").value = sumTwos; });
                radiobox3.addEventListener("change", function () { document.getElementById("oneScore3").value = sumThrees; })
                radiobox4.addEventListener("change", function () { document.getElementById("oneScore4").value = sumFours; })
                radiobox5.addEventListener("change", function () { document.getElementById("oneScore5").value = sumFives; })
                radiobox6.addEventListener("change", function () { document.getElementById("oneScore6").value = sumSixes; })
                // Check what radio button that's selectes
                // Get the coe´rrespondig value
                // Update the corresponding score for player 1
            });
                player2button.addEventListener("click", function () {
                alert("Player 2's turn");
                radiobox1.addEventListener("change", function () { document.getElementById("twoScore1").value = sumOnes; })
                radiobox2.addEventListener("change", function () { document.getElementById("twoScore2").value = sumTwos; });
                radiobox3.addEventListener("change", function () { document.getElementById("twoScore3").value = sumThrees; })
                radiobox4.addEventListener("change", function () { document.getElementById("twoScore4").value = sumFours; })
                radiobox5.addEventListener("change", function () { document.getElementById("twoScore5").value = sumFives; })
                radiobox6.addEventListener("change", function () { document.getElementById("twoScore6").value = sumSixes; })

            });
        
                player3button.addEventListener("click", function () {
                alert("Player 3's turn");
                radiobox1.addEventListener("change", function () { document.getElementById("threeScore1").value = sumOnes; })
                radiobox2.addEventListener("change", function () { document.getElementById("threeScore2").value = sumTwos; });
                radiobox3.addEventListener("change", function () { document.getElementById("threeScore3").value = sumThrees; })
                radiobox4.addEventListener("change", function () { document.getElementById("threeScore4").value = sumFours; })
                radiobox5.addEventListener("change", function () { document.getElementById("threeScore5").value = sumFives; })
                radiobox6.addEventListener("change", function () { document.getElementById("threeScore6").value = sumSixes; })
            });

                player4button.addEventListener("click", function () {
                alert("Player 4's turn");
                radiobox1.addEventListener("change", function () { document.getElementById("fourScore1").value = sumOnes; })
                radiobox2.addEventListener("change", function () { document.getElementById("fourScore2").value = sumTwos; });
                radiobox3.addEventListener("change", function () { document.getElementById("fourScore3").value = sumThrees; })
                radiobox4.addEventListener("change", function () { document.getElementById("fourScore4").value = sumFours; })
                radiobox5.addEventListener("change", function () { document.getElementById("fourScore5").value = sumFives; })
                radiobox6.addEventListener("change", function () { document.getElementById("fourScore6").value = sumSixes; })
            });
        

    
      

    function updatevalue() {
        if (++count <= 3) {
            if (document.getElementById("box1").checked == false) {
                document.getElementById("value1").value = getRandomInt(1, 7);
            }
            if (document.getElementById("box2").checked == false) {
                document.getElementById("value2").value = getRandomInt(1, 7);
            }

            if (document.getElementById("box3").checked == false) {
                document.getElementById("value3").value = getRandomInt(1, 7);
            }

            if (document.getElementById("box4").checked == false) {
                document.getElementById("value4").value = getRandomInt(1, 7);
            }

            if (document.getElementById("box5").checked == false) {
                document.getElementById("value5").value = getRandomInt(1, 7);
            }
        }
        else {confirm ("NEXT PLAYER"); }
    }

    function calculateScore() {
        var arrayOfValues = [];

        if (document.getElementById("box1").checked == true) { arrayOfValues.push(parseInt(document.getElementById("value1").value)) }
        if (document.getElementById("box2").checked == true) { arrayOfValues.push(parseInt(document.getElementById("value2").value)) }
        if (document.getElementById("box3").checked == true) { arrayOfValues.push(parseInt(document.getElementById("value3").value)) }
        if (document.getElementById("box4").checked == true) { arrayOfValues.push(parseInt(document.getElementById("value4").value)) }
        if (document.getElementById("box5").checked == true) { arrayOfValues.push(parseInt(document.getElementById("value5").value)) }

        var player1_ones = arrayOfValues.filter(value => value == 1);
        var player1_twos = arrayOfValues.filter(value => value == 2);
        var player1_threes = arrayOfValues.filter(value => value == 3);
        var player1_fours = arrayOfValues.filter(value => value == 4);
        var player1_fives = arrayOfValues.filter(value => value == 5);
        var player1_sixes = arrayOfValues.filter(value => value == 6);

        sumOnes = player1_ones.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue;
        }, 0);
        sumTwos = player1_twos.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue;
        }, 0);
        sumThrees = player1_threes.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue;
        }, 0);
        sumFours = player1_fours.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue;
        }, 0);
        sumFives = player1_fives.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue;
        }, 0);
        sumSixes = player1_sixes.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue;
        }, 0);

        var i;
        let total = 0;
        for (i = 0; i < arrayOfValues.length; i++) {
            let checkedValue = arrayOfValues[i];
            total += checkedValue;
            document.getElementById("sumBox").value = total;

        }

        document.getElementById("ones").value = sumOnes;
        document.getElementById("twos").value = sumTwos;
        document.getElementById("threes").value = sumThrees;
        document.getElementById("fours").value = sumFours;
        document.getElementById("fives").value = sumFives;
        document.getElementById("sixes").value = sumSixes;
    }

});

    
    






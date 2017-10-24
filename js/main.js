let myMap = new Map;
let totalValue = 0;
let average = 0;
let colorBarArr = [];
let colorMap = [[], []];
let myMapArr = [[], [], []];
let givenLetters = [];

$("#goButton").on("click", function () {
    $("#right-column").empty();
    givenLetters = $("#targetLetters").val().split(",");
    let myText = $("#sourceText").val();

    // creates a Map -> key: letter, value:count of letter
    for (let i = 0; i < givenLetters.length; i++) {
        myMap.set(givenLetters[i], char_count(myText, givenLetters[i]));
    }

    myMap.forEach(function (value, key, mapObj) {
        totalValue += value;
        average = totalValue / myMap.size;
        let valueProgress = Math.ceil(average) * 10 * value;
        $("#right-column").append("<progress max='100'><p></p></progress>");
        $("#right-column>progress:last").addClass(getColor(value)).attr('value', valueProgress);
    });

    // returns the color according to the average
    function getColor(amount) {
        if (amount === average) {
            return "yellow";
            console.log("yellow");
        }
        if (amount > average && amount < (average * 1.5)) {
            return "lightgreen";
        }
        if (amount > (average * 1.25)) {
            return "darkgreen";
        }
        if (amount > (average * 0.5) && amount < average) {
            return "orange";
        }
        if (amount < (average * 0.5)) {
            return "red";
        } else return "black"; // statement'larin saglamasini yapmak icin: black
    }

    // finds the count of the letter in str                  
    function char_count(str, letter) {
        var letter_Count = 0;
        for (var position = 0; position < str.length; position++) {
            if (str.charAt(position) == letter) {
                letter_Count += 1;
            }
        }
        return letter_Count;
    }
});

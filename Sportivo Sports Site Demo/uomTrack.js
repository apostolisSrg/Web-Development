'use strict'

alert('Γειά σας λάτρες των Σπορ!!');

console.log('Το site Sportivo σας χαιρετά');




var rIndex,
    table = document.getElementById("uomTrack");


function checkEmptyInput() {
    var isEmpty = false,


        race = document.getElementById("race").value,
        perbest = document.getElementById("perbest").value,
        fname = document.getElementById("fname").value,
        ranking = document.getElementById("ranking").value,
        club = document.getElementById("club").value;


    if (race === "") {
        alert("Το αγώνισμα δεν μπορεί να είναι άδειο");
        isEmpty = true;
    } else if (perbest === "") {
        alert("Το Personal Best δεν μπορεί να είναι άδειο");
        isEmpty = true;
    } else if (fname === "") {
        alert("Το όνομα του Αθλητή δεν μπορεί να είναι άδειο");
        isEmpty = true;
    } else if (ranking === "") {
        alert("Το Ranking δεν μπορεί να είναι άδειο");
        isEmpty = true;
    } else if (club === "") {
        alert("O σύλλογος δεν μπορεί να είναι άδειος");
        isEmpty = true;
    }
    return isEmpty;
}

// ΠΡΟΣΘΗΚΗ ΓΡΑΜΜΗΣ
function addHtmlTableRow() {

    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(1),
            cell2 = newRow.insertCell(2),
            cell3 = newRow.insertCell(3),
            cell4 = newRow.insertCell(4),
            cell5 = newRow.insertCell(5),



            race = document.getElementById("race").value,
            perbest = document.getElementById("perbest").value,
            fname = document.getElementById("fname").value,
            ranking = document.getElementById("ranking").value,
            club = document.getElementById("club").value;



        cell1.innerHTML = race;
        cell2.innerHTML = perbest;
        cell3.innerHTML = fname;
        cell4.innerHTML = ranking;
        cell5.innerHTML = club;


        selectedRowToInput();
    }
}


function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {

            rIndex = this.rowIndex;

            document.getElementById("race").value = this.cells[1].innerHTML;
            document.getElementById("perbest").value = this.cells[2].innerHTML;
            document.getElementById("fname").value = this.cells[3].innerHTML;
            document.getElementById("ranking").value = this.cells[4].innerHTML;
            document.getElementById("club").value = this.cells[5].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
    var
        race = document.getElementById("race").value,
        perbest = document.getElementById("perbest").value;
    fname = document.getElementById("fname").value;
    ranking = document.getElementById("ranking").value;
    club = document.getElementById("club").value;
    if (!checkEmptyInput()) {

        table.rows[rIndex].cells[1].innerHTML = race;
        table.rows[rIndex].cells[2].innerHTML = perbest;
        table.rows[rIndex].cells[3].innerHTML = fname;
        table.rows[rIndex].cells[4].innerHTML = ranking;
        table.rows[rIndex].cells[5].innerHTML = club;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    // ΚΑΘΑΡΙΣΜΟΣ ΤΟΥ ΚΕΙΜΕΝΟΥ

    document.getElementById("race").value = "";
    document.getElementById("perbest").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("ranking").value = "";
    document.getElementById("club").value = "";
}

var tableMMSA = document.getElementById("uomTrack"), sumVal = 0;

getMin();
getMax();
getSum();
getAvg();

// MINIMUM
function getMin() {
    var minVal, minIndex;
    for (var i = 1; i < tableMMSA.rows.length; i++) {
        if (i === 1) {
            minVal = tableMMSA.rows[i].cells[2].innerHTML;
            minIndex = tableMMSA.rows[i].rowIndex;
        } else if (minVal > tableMMSA.rows[i].cells[2].innerHTML) {
            minVal = tableMMSA.rows[i].cells[2].innerHTML;
            minIndex = tableMMSA.rows[i].rowIndex;
        }
    }

    document.getElementById("minV").innerHTML = "Minimum Value = " + minVal;
    document.getElementById("minV").style.color = "red";
    document.getElementById("minV").style.fontSize = "large";
    document.getElementById("minV").style.fontWeight = "bold";
    console.log("Min => " + minVal);
}


// MAXIMUM
function getMax() {
    var maxVal, maxIndex;
    for (var i = 1; i < tableMMSA.rows.length; i++) {
        if (i === 1) {
            maxVal = tableMMSA.rows[i].cells[2].innerHTML;
            maxIndex = tableMMSA.rows[i].rowIndex;
        } else if (maxVal < tableMMSA.rows[i].cells[2].innerHTML) {
            maxVal = tableMMSA.rows[i].cells[2].innerHTML;
            maxIndex = tableMMSA.rows[i].rowIndex;
        }
    }

    document.getElementById("maxV").innerHTML = "Maximum Value = " + maxVal;
    document.getElementById("maxV").style.color = "green";
    document.getElementById("maxV").style.fontSize = "large";
    document.getElementById("maxV").style.fontWeight = "bold";


    console.log("Max => " + maxVal);
}

// SUMMARIZE
function getSum() {
    for (var i = 1; i < tableMMSA.rows.length; i++) {
        sumVal = sumVal + parseFloat(tableMMSA.rows[i].cells[2].innerHTML);
    }
    document.getElementById("sumV").innerHTML = "Sum Value = " + sumVal;
    document.getElementById("sumV").style.fontSize = "large";
    document.getElementById("sumV").style.fontWeight = "bold";


    console.log("Sum => " + sumVal);
}

// AVERAGE
function getAvg() {
    var avg = sumVal / (tableMMSA.rows.length - 1);
    document.getElementById("avgV").innerHTML = "Average Value = " + parseFloat(avg);
    document.getElementById("avgV").style.color = "blue";
    document.getElementById("avgV").style.fontSize = "large";
    document.getElementById("avgV").style.fontWeight = "bold";
    console.log("Avg => " + parseFloat(avg));
}










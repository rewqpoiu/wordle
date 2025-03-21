// Just some variables
let selectedbox = 1;
let selectedrow = 1;
const T1B1 = document.getElementById("T1B1");

// The list was obtained from 'https://github.com/tabatkins/wordle-list/blob/main/words' and is located in 'wordlist.js'
const randomIndex = Math.floor(Math.random() * window.globalWordList.length);
let word = window.globalWordList[randomIndex];
let l1 = word[0];
let l2 = word[1];
let l3 = word[2];
let l4 = word[3];
let l5 = word[4];

// Function when pressing the start button
function startFocus() {
	// Hiding the start button and styling the 6 rows
    document.getElementById("heading1").style.fontSize = 30 + "px";
    btn.style.display = "none";
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "none";
    var div = document.getElementById("try");
    div.style.display = "inline";
    div.style.textAlign = "center";

    // Bakcspace and tab event listener
	document.body.addEventListener("keydown",(event) => {
        if (event.keyCode === 8) {
            if (selectedbox === 1) {selectedbox = 2}
            if (selectedbox < 1) {selectedbox += 1}
            backSpace();
        }
        if (event.keyCode == 9) {   // Tab pressed
          event.preventDefault(); // Prevent default action
        }
    });
    
	// Focusing the T1B1
    T1B1.focus();
}

// Function to handle A-Z keypress
function nextBox() {
	setTimeout(function() {
	    if (selectedbox < 6) {
            selectedbox += 1;
    	    let selectedinput = "T" + selectedrow + "B" + selectedbox;
            var inputId = document.getElementById(selectedinput);
		    inputId.focus();
        }

        // Enter keypress moves to next row
	    document.body.addEventListener("keydown",(event) => {
		    if (event.keyCode === 13 && selectedbox === 6) {
                checkValue();

                // Goes to the next row
			    selectedbox = 1;
			    selectedrow += 1;
			    let selectedinput = "T" + selectedrow + "B" + selectedbox;
			    document.getElementById(selectedinput).focus();

		    }
	    })
	}, 1);
}

// Backspace function
function backSpace() {
    if (selectedbox >= 1) {
        selectedbox -= 1;
        let selectedinput = "T" + selectedrow + "B" + selectedbox;
        document.getElementById(selectedinput).value = "";
		document.getElementById(selectedinput).focus();
    }
}

// Prevent focus loss
document.addEventListener("click", function (event) {
    if (selectedbox === 6) {
        let selectedinput = "T" + selectedrow + "B5";
        document.getElementById(selectedinput).focus();
    } else {
    let selectedinput = "T" + selectedrow + "B" + selectedbox;
    document.getElementById(selectedinput).focus();
    }
})

function checkValue() {
    const tb = "T" + selectedrow + "B";
    const tb1 = document.getElementById(tb + 1);
    const tb2 = document.getElementById(tb + 2);
    const tb3 = document.getElementById(tb + 3);
    const tb4 = document.getElementById(tb + 4);
    const tb5 = document.getElementById(tb + 5);

    const tb1v = tb1.value.toLowerCase();
    const tb2v = tb2.value.toLowerCase();
    const tb3v = tb3.value.toLowerCase();
    const tb4v = tb4.value.toLowerCase();
    const tb5v = tb5.value.toLowerCase();

    const t6b1 = document.getElementById("T6B1").value.toLowerCase();
    const t6b2 = document.getElementById("T6B2").value.toLowerCase();
    const t6b3 = document.getElementById("T6B3").value.toLowerCase();
    const t6b4 = document.getElementById("T6B4").value.toLowerCase();
    const t6b5 = document.getElementById("T6B5").value.toLowerCase();
    const finalValue = t6b1 + t6b2 + t6b3 + t6b4 + t6b5;
    
    if (tb1v == l1){
        tb1.style.backgroundColor = "#56cc6d"; // Green
    } else if (tb1v == l2 || tb1v == l3 || tb1v == l4 || tb1v == l5) {
        tb1.style.backgroundColor = "#ccca56"; // Yellow
    } else {tb1.style.backgroundColor = "#9aa4b4";}

    if (tb2v == l2){
        tb2.style.backgroundColor = "#56cc6d";
    } else if (tb2v == l1 || tb2v == l3 || tb2v == l4 || tb2v == l5) {
        tb2.style.backgroundColor = "#ccca56";
    } else {tb2.style.backgroundColor = "#9aa4b4";}

    if (tb3v == l3){
        tb3.style.backgroundColor = "#56cc6d";
    } else if (tb3v == l1 || tb3v == l2 || tb3v == l4 || tb3v == l5) {
        tb3.style.backgroundColor = "#ccca56";
    } else {tb3.style.backgroundColor = "#9aa4b4";}

    if (tb4v == l4){
        tb4.style.backgroundColor = "#56cc6d";
    } else if (tb4v == l1 || tb4v == l2 || tb4v == l3 || tb4v == l5) {
        tb4.style.backgroundColor = "#ccca56";
    } else {tb4.style.backgroundColor = "#9aa4b4";}

    if (tb5v == l5){
        tb5.style.backgroundColor = "#56cc6d";
    } else if (tb5v == l1 || tb5v == l2 || tb5v == l3 || tb5v == l4) {
        tb5.style.backgroundColor = "#ccca56";
    } else {tb5.style.backgroundColor = "#9aa4b4";}

    setTimeout(() => {
        if (tb1v == l1 && tb2v == l2 && tb3v == l3 && tb4v == l4 && tb5v == l5) {
            alert("YOU WON!");
            location.reload();
        } else if (selectedrow == 7 && finalValue !== word) {
            alert("YOU LOST!\nThe word was " + word);
            location.reload();
        }
    }, 1);
}
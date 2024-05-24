"use strict";

console.log("Alfred K > Alfred L");

function showPopUp() {
    alert("SOMETHING IS HAPPENING");
}

function colorChange() {
    const buttonColor=document.getElementById("button-color");
    if(buttonColor.style.backgroundColor == "blue")  {
        buttonColor.style.backgroundColor = "initial";
    } else {
        buttonColor.style.backgroundColor = "blue";
    }
}
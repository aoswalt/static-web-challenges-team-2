'use strict';

//NOTE(adam): initial div colors and event handlers
(function() {
  var boxes = document.getElementsByTagName("div");
  boxes[0].style.backgroundColor = "red";
  boxes[0].onclick = divClick;
  boxes[1].style.backgroundColor = "green";
  boxes[1].onclick = divClick;
  boxes[2].style.backgroundColor = "yellow";
  boxes[2].onclick = divClick;
})();

var hasSelection = false;
var selectedDiv;
var colorForm = document.getElementById("color-form");
var colorInput = document.getElementById("color-input");

function divClick(event) {
  if(hasSelection) {
    if(event.srcElement == selectedDiv) {
      event.srcElement.className = "";
      hasSelection = false;
      colorForm.style.display = "none";
      return;
    }
    selectedDiv.className = "";
  }

  event.srcElement.className = "selected";
  selectedDiv = event.srcElement;
  hasSelection = true;

  colorForm.style.display = "block";
}

function applyColor() {
  if(!hasSelection) return;

  selectedDiv.style.backgroundColor = colorInput.value;
}

document.getElementById("color-button").onclick = applyColor;
colorInput.onkeypress = function(event) {
  if(event.keyCode == 13) {
    applyColor();
  }
}

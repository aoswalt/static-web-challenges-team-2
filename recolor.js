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

function divClick(event) {
  if(hasSelection) {
    if(event.srcElement == selectedDiv) {
      event.srcElement.className = "";
      hasSelection = false;
      return;
    }
    selectedDiv.className = "";
  }


  event.srcElement.className = "selected";
  selectedDiv = event.srcElement;
  hasSelection = true;
}

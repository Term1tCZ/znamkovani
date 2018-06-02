function counter() {
  var text = "";
  var i = 0;
  while (i < 10) {
      text += "<br>The number is " + i;
      i++;
  }
  document.getElementById("count").innerHTML = text;
}

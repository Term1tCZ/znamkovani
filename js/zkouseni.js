function realCas() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkCas(m);
    s = checkCas(s);
    document.getElementById('cas').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(realCas, 1000);
    //return  h + ":" + m + ":" + s;
}
realCas();

function checkCas(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
checkCas();

function datum() {
  var datum = new Date();
  var den = new Date();
  var mesice = ["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"];
  var vyslednyStinng = "";
  vyslednyStinng = den.getDate() + ".&nbsp;" + mesice[datum.getMonth()] + "&nbsp;";
  document.getElementById("datum").innerHTML = vyslednyStinng;
}
datum();

function cancel() {
  var txt;
    if (confirm("Opravdu chceš obnovit stránku?")) {
        location.reload();
    }
}

function test() {
  var x = document.getElementById("form");
  var inp1 = Number(x.elements[0].value);
  var inp2 = Number(x.elements[1].value);
  var inp3 = Number(x.elements[2].value);
  var check1 = x.elements[3].checked;
  var check2 = x.elements[5].checked;
  var check3 = x.elements[7].checked;
  var uzSkoroval = false;
  if (inp3 > inp1) {
    alert("To je trochu blbost, ne?\nP.S. Zkontroluj si své údaje.")
  }
  if (inp2 > inp1) {
    alert("To je trochu blbost, ne?\nP.S. Zkontroluj si své údaje.")
  }
  if ((check1) && (!check2) && (!check3)) {
    document.getElementById("vidim").style.visibility = "visible";
    document.getElementById("demo").innerHTML = "0%";
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
  }
  if ((check1) && (!check2) && (check3)) {
    document.getElementById("vidim").style.visibility = "visible";
    document.getElementById("demo").innerHTML = "0%";
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
  }
  if ((!check1)  && (check2) && (!check3)) {
    if (inp3 == 0) {
      var t = (1 / inp1) * 100;
      var t1 = Math.round(t * 100) / 100;
      document.getElementById("vidim").style.visibility = "visible";
      document.getElementById("demo").innerHTML = t1 + "%";
      document.getElementById("demo1").innerHTML = "";
      document.getElementById("demo2").innerHTML = "";
    }
    if (inp3 == inp1) {
      var t = (1 / inp1) * 100;
      var t1 = Math.round(t * 100) / 100;
      console.log("t", t, " t1 ", t1);
      // document.getElementById("vsichni").style.visibility = "visible";
      alert("vsichni uz byli")
      console.log("ahoj");
    } else {
      var y;
      var t = ((inp3 + 1) / inp1) * 100;
      var t1 = Math.round(t * 100) / 100;
      if (t1 <= 33) {
        document.getElementById("vidim").style.visibility = "visible";
        document.getElementById("demo").innerHTML = t1 + "%";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("demo2").innerHTML = "";
      }
      if ((t1 <= 70) && (t1 > 34)) {
        document.getElementById("vidim").style.visibility = "visible";
        document.getElementById("demo1").innerHTML = t1 + "%";
        document.getElementById("demo").innerHTML = "";
        document.getElementById("demo2").innerHTML = "";
      }
      if (t1 > 70) {
        document.getElementById("vidim").style.visibility = "visible";
        document.getElementById("demo2").innerHTML = t1 + "%";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("demo").innerHTML = "";
      }
    }
    uzSkoroval = true;
  }
  if ((!check1) && (!check2) && (!check3)) {
    var t = (inp3 / inp1) * 100;
    var t1 = Math.round(t * 100) / 100;
    if (t1 <= 33) {
      document.getElementById("vidim").style.visibility = "visible";
      document.getElementById("demo").innerHTML = t1 + "%";
      document.getElementById("demo1").innerHTML = "";
      document.getElementById("demo2").innerHTML = "";
    }
    if ((t1 <= 70) && (t1 > 34)) {
      document.getElementById("vidim").style.visibility = "visible";
      document.getElementById("demo1").innerHTML = t1 + "%";
      document.getElementById("demo").innerHTML = "";
      document.getElementById("demo2").innerHTML = "";
    }
    if (t1 > 70) {
      document.getElementById("vidim").style.visibility = "visible";
      document.getElementById("demo2").innerHTML = t1 + "%";
      document.getElementById("demo1").innerHTML = "";
      document.getElementById("demo").innerHTML = "";
    }
    uzSkoroval = true;
  }
  if ((check1) && (check2) && (!check3)) {
    var t = (inp3 / inp1) * 100;
    var t1 = Math.round(t * 100) / 100;
    if (t1 <= 33) {
      document.getElementById("vidim").style.visibility = "visible";
      document.getElementById("demo").innerHTML = t1 + "%";
      document.getElementById("demo1").innerHTML = "";
      document.getElementById("demo2").innerHTML = "";
    }
    if ((t1 <= 70) && (t1 > 34)) {
      document.getElementById("vidim").style.visibility = "visible";
      document.getElementById("demo1").innerHTML = t1 + "%";
      document.getElementById("demo").innerHTML = "";
      document.getElementById("demo2").innerHTML = "";
    }
    if (t1 > 70) {
      document.getElementById("vidim").style.visibility = "visible";
      document.getElementById("demo2").innerHTML = t1 + "%";
      document.getElementById("demo1").innerHTML = "";
      document.getElementById("demo").innerHTML = "";
    }
    uzSkoroval = true;
  }
  if ((check1) && (check2) && (check3)) {
      var datum = new Date();
      var den = datum.getDate();
      var mesic = datum.getMonth()+1;
      var nasobeni = den * mesic;
      var plus = den + mesic;
      var minus1 = den - mesic;
      var minus2 = mesic - den;
      console.log("s");
      if ((inp2 == den) || (inp2 == mesic) || (inp2 == nasobeni) || (inp2 == plus) || ((minus2 > 0) && (minus2 == inp2)) || ((minus1 > 0) && (minus1 == inp2))) {
          document.getElementById("vidim").style.visibility = "visible";
          document.getElementById("demo2").innerHTML = "100%";
          document.getElementById("demo1").innerHTML = "";
          document.getElementById("demo").innerHTML = "";
          console.log("a");
      }
      else {
        document.getElementById("vidim").style.visibility = "visible";
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("demo").innerHTML = "0%";
      }
      uzSkoroval = true;
  }
  if ((!check1) && (check2) && (check3)) {
      var datum = new Date();
      var den = datum.getDate();
      var mesic = datum.getMonth()+1;
      var nasobeni = den * mesic;
      var plus = den + mesic;
      var minus1 = den - mesic;
      var minus2 = mesic - den;
      if ((inp2 == den) || (inp2 == mesic) || (inp2 == nasobeni) || (inp2 == plus) || ((minus2 > 0) && (minus2 == inp2)) || ((minus1 > 0) && (minus1 == inp2))) {
          document.getElementById("vidim").style.visibility = "visible";
          document.getElementById("demo2").innerHTML = "100%";
          document.getElementById("demo1").innerHTML = "";
          document.getElementById("demo").innerHTML = "";
      }
      else {
        document.getElementById("vidim").style.visibility = "visible";
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("demo").innerHTML = "0%";
      }
      uzSkoroval = true;
  }
  if ((!check1) && (!check2) && (check3)) {
      var datum = new Date();
      var den = datum.getDate();
      var mesic = datum.getMonth()+1;
      var nasobeni = den * mesic;
      var plus = den + mesic;
      var minus1 = den - mesic;
      var minus2 = mesic - den;
      if ((inp2 == den) || (inp2 == mesic) || (inp2 == nasobeni) || (inp2 == plus) || ((minus2 > 0) && (minus2 == inp2)) || ((minus1 > 0) && (minus1 == inp2))) {
          document.getElementById("vidim").style.visibility = "visible";
          document.getElementById("demo2").innerHTML = "100%";
          document.getElementById("demo1").innerHTML = "";
          document.getElementById("demo").innerHTML = "";
          console.log(den);
          console.log(mesic);
          uzSkoroval = true;
      }
      if ((inp2 == (den + 1)) || (inp2 == (den - 1))) {
        document.getElementById("vidim").style.visibility = "visible";
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("demo").innerHTML = "33%";
        console.log(den);
        console.log(mesic);
        uzSkoroval = true;
      }
      if (uzSkoroval == false) {
        document.getElementById("vidim").style.visibility = "visible";
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("demo").innerHTML = "0%";
      }
      //jeste opravit, pokud je cislo blizko vybraneho, ma 33% sanci
  }
}
test();

function myFunction() {
    var x = document.getElementById("form");
    var inp1 = Number(x.elements[0].value);
    var inp2 = Number(x.elements[1].value);
    var inp3 = Number(x.elements[2].value);
    if ((isNaN(inp1)) || (isNaN(inp3)) || (isNaN(inp2))) {
         document.getElementById("dis").disabled = true;
         document.getElementById("dis").style.cursor = "not-allowed";
    }
    else {
      document.getElementById("dis").disabled = false;
      document.getElementById("dis").style.cursor = "";
    }
}
myFunction();

function viditelnost() {
      document.getElementById("vidim").style.visibility = "hidden";
}

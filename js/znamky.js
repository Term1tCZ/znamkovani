var subject = [];
var zobrazeni = [];

function pocitadloPredmetu(predmet) {
  var soucet = 0;
  var vaha = 0;
  var prumer = 0;
  if (predmet.length != 0) {
    for (var i = 0; i < predmet.length; i++) {
        soucet = soucet + (predmet[i][0] * predmet[i][1]);
        vaha = vaha + predmet[i][1];
    }
    prumer = soucet / vaha;
    prumer = Math.round(prumer * 100) / 100;
    //document.getElementById('prumer').innerHTML = prumer;

    return prumer;
  }
  return "";
}

function vypisZnameksubject() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < subject.length; i++) {
    switch (subject[i][1]) {
      case 1:
        vypis[0] = vypis[0] + subject[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + subject[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + subject[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + subject[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + subject[i][0] + " ";
        break;
      default:

    }
 }

  document.getElementById("subject-v1").innerHTML = vypis[0];
  document.getElementById("subject-v2").innerHTML = vypis[1];
  document.getElementById("subject-v3").innerHTML = vypis[2];
  document.getElementById("subject-v4").innerHTML = vypis[3];
  document.getElementById("subject-v5").innerHTML = vypis[4];
}
vypisZnameksubject();

function formular() {
    console.log("pred zob",zobrazeni);
    console.log("pred sub",subject);
      subject = subject.concat(zobrazeni);
      console.log("zobrazeni", zobrazeni);
      console.log("predmet",subject);
      // subject.push([znamka, vaha]);
      document.getElementById("subject-prumer-novy").innerHTML = pocitadloPredmetu(subject);
      vypisZnameksubject();
}

function cancel() {
  var txt;
    if (confirm("Opravdu chceš obnovit stránku?")) {
        location.reload();
    }
}

function znamkyNaObrazovku() {
  var zobrazeniSting = "";
  zobrazeni.forEach(
    function(element) {
      zobrazeniSting = zobrazeniSting + element[0] + " [" + element[1] + "], ";
    }
  );

  document.getElementById("zobrazit").innerHTML = zobrazeniSting;
}

function zobrazeniZnamek() {
  var znamka = parseInt(document.getElementById("valZnamka").value);
  var vaha = parseInt(document.getElementById("valVaha").value);
  console.log(znamka);
  var element = document.getElementById("butPridat");

  if (znamka == 0 || vaha == 0 ) {
    //element.classList.add("disabled");
  } else {
    //element.classList.remove("disabled");
    zobrazeni.push([znamka, vaha]);
    znamkyNaObrazovku();
  }


}

function obnovit() {
  zobrazeni.length = 0;
  document.getElementById("zobrazit").innerHTML = "";
}

function odebrat() {
  zobrazeni.pop();
  console.log('po odebrani', zobrazeni);
  znamkyNaObrazovku();

}

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

function zavrit() {
  document.getElementById("valVaha").value = "0";
  document.getElementById("valZnamka").value = "0";
}

function vidimDatum() {
  document.getElementById("datum").style.visibility = "hidden";
  document.getElementById("cas").style.visibility = "hidden";
}

function upravaVah() {
  window.location.href="index.html";
}

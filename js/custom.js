var matematika = [];

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

function vypisZnamekmatematika() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < matematika.length; i++) {
    switch (matematika[i][1]) {
      case 1:
        vypis[0] = vypis[0] + matematika[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + matematika[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + matematika[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + matematika[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + matematika[i][0] + " ";
        break;
      default:

    }
 }

  document.getElementById("matematika-v1").innerHTML = vypis[0];
  document.getElementById("matematika-v2").innerHTML = vypis[1];
  document.getElementById("matematika-v3").innerHTML = vypis[2];
  document.getElementById("matematika-v4").innerHTML = vypis[3];
  document.getElementById("matematika-v5").innerHTML = vypis[4];
}
vypisZnamekmatematika();
document.getElementById("matematika-prumer").innerHTML = pocitadloPredmetu(matematika);


function formular() {
    var znamka = parseInt(document.getElementById("valZnamka").value);
    var vaha = parseInt(document.getElementById("valVaha").value);
    // var predmet = parseInt(document.getElementById("valPredmet").value);
      matematika.push([znamka, vaha]);
      document.getElementById("matematika-prumer-novy").innerHTML = pocitadloPredmetu(matematika);
      vypisZnamekmatematika();
}

function cancel() {
  var txt;
    if (confirm("Opravdu chceš obnovit stránku?")) {
        location.reload();
    }
}

function zobrazeniZnamek() {
  var znamka = parseInt(document.getElementById("valZnamka").value);
  var vaha = parseInt(document.getElementById("valVaha").value);
  document.getElementById("znam").innerHTML = znamka + " [" + vaha + "]" + ", ";
  console.log(znamka);
  console.log(vaha);
}

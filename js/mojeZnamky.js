var cestina = [[2,2],[2,3],[2,2],[1,2],[1,2],[2,2],[1,3],[3,3],[2,3]];
var matematika = [[1,1],[1,1],[1,1],[1,3],[1,3],[2,3],[3,3],[2,3],[1,3]];
var ajina = [[1,1],[1,1],[1,1],[1,1],[1,2],[3,2],[2,2],[2,2],[1,4],[2,4],[1,4]];
var nemina = [[2,3]];

function pocitadloPredmetu(predmet) {
  var soucet = 0;
  var vaha = 0;
  var prumer = 0;
  for (var i = 0; i < predmet.length; i++) {
      soucet = soucet + (predmet[i][0] * predmet[i][1]);
      vaha = vaha + predmet[i][1];
  }
  prumer = soucet / vaha;
  prumer = Math.round(prumer * 100) / 100;
  //document.getElementById('prumer').innerHTML = prumer;

  return prumer;
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

function vypisZnamekcestina() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < cestina.length; i++) {
    switch (cestina[i][1]) {
      case 1:
        vypis[0] = vypis[0] + cestina[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + cestina[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + cestina[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + cestina[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + cestina[i][0] + " ";
        break;
      default:

    }
 }

  document.getElementById("cestina-v1").innerHTML = vypis[0];
  document.getElementById("cestina-v2").innerHTML = vypis[1];
  document.getElementById("cestina-v3").innerHTML = vypis[2];
  document.getElementById("cestina-v4").innerHTML = vypis[3];
  document.getElementById("cestina-v5").innerHTML = vypis[4];
}
vypisZnamekcestina();
document.getElementById("cestina-prumer").innerHTML = pocitadloPredmetu(cestina);

function vypisZnamekajina() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < ajina.length; i++) {
    switch (ajina[i][1]) {
      case 1:
        vypis[0] = vypis[0] + ajina[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + ajina[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + ajina[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + ajina[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + ajina[i][0] + " ";
        break;
      default:

    }
 }

 document.getElementById("ajina-v1").innerHTML = vypis[0];
 document.getElementById("ajina-v2").innerHTML = vypis[1];
 document.getElementById("ajina-v3").innerHTML = vypis[2];
 document.getElementById("ajina-v4").innerHTML = vypis[3];
 document.getElementById("ajina-v5").innerHTML = vypis[4];
}
vypisZnamekajina();
document.getElementById("ajina-prumer").innerHTML = pocitadloPredmetu(ajina);

function vypisZnameknemina() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < nemina.length; i++) {
    switch (nemina[i][1]) {
      case 1:
        vypis[0] = vypis[0] + nemina[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + nemina[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + nemina[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + nemina[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + nemina[i][0] + " ";
        break;
      default:

    }
 }

 document.getElementById("nemina-v1").innerHTML = vypis[0];
 document.getElementById("nemina-v2").innerHTML = vypis[1];
 document.getElementById("nemina-v3").innerHTML = vypis[2];
 document.getElementById("nemina-v4").innerHTML = vypis[3];
 document.getElementById("nemina-v5").innerHTML = vypis[4];
}
vypisZnameknemina();
document.getElementById("nemina-prumer").innerHTML = pocitadloPredmetu(nemina);

function formular() {
    var znamka = parseInt(document.getElementById("valZnamka").value);
    var vaha = parseInt(document.getElementById("valVaha").value);
    var predmet = parseInt(document.getElementById("valPredmet").value);

    if (predmet == 0) {
      matematika.push([znamka, vaha]);
      document.getElementById("matematika-prumer-novy").innerHTML = pocitadloPredmetu(matematika);
      vypisZnamekmatematika();
    }
    else if (predmet == 1) {
      cestina.push([znamka, vaha]);
      document.getElementById("cestina-prumer-novy").innerHTML = pocitadloPredmetu(cestina);
      vypisZnamekcestina();
    }
    else if (predmet == 2) {
      ajina.push([znamka, vaha]);
      document.getElementById("ajina-prumer-novy").innerHTML = pocitadloPredmetu(ajina);
      vypisZnamekajina();
    }
    else {
      nemina.push([znamka, vaha]);
      document.getElementById("nemina-prumer-novy").innerHTML = pocitadloPredmetu(nemina);
      vypisZnameknemina();
    }
}

function cancel() {
  var txt;
    if (confirm("Opravdu chceš obnovit stránku?")) {
        location.reload();
    }
}

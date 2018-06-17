var cestina = [[2,2],[2,2],[3,2],[5,2],[2,3],[2,3],[1,2],[1,2],[2,2],[1,3],[3,3],[2,3],[2,2],[2,3]];
var matematika = [[1,1],[1,1],[1,1],[1,3],[1,3],[2,3],[3,3],[2,3],[4,3],[1,3],[1,3],[1,3],[1,3],[1,3],[1,3],[1,3],[1,3],[2,5],[1,3],[1,3],[2,3]];
var ajina = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],[3,2],[2,2],[2,2],[1,2],[1,4],[2,4],[1,4],[1,4],[1,1]];
var nemina = [[1,1],[1,3],[1,3],[1,4],[1,4],[1,2],[1,3],[1,3],[1,5]];
var zemak = [[2,3],[1,2],[2,4],[1,5],[1,3]];
var obcanka = [[1,5],[1,4],[1,4],[1,4]];
var dejak = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[2,2],[1,3],[2,3],[1,1],[1,2],[1,3]];
var fyzika = [[1,1],[1,1],[2,1],[1,1],[1,1],[2,1],[2,1],[1,1],[2,1],[2,2],[1,3],[1,3],[1,3],[1,2],[1,5]];
var chemie = [[1,1],[1,2],[1,2],[3,2],[4,3],[1,3],[2,3],[1,2],[1,3],[1,5]];
var biola = [[1,3],[2,3],[2,3],[2,3],[1,3],[1,3],[1,3]];
var ivt = [[1,3],[2,3],[1,5],[1,3],[1,5]];
//znamka, vaha

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

function vypisZnamekzemak() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < zemak.length; i++) {
    switch (zemak[i][1]) {
      case 1:
        vypis[0] = vypis[0] + zemak[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + zemak[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + zemak[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + zemak[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + zemak[i][0] + " ";
        break;
      default:

    }
 }

 document.getElementById("zemak-v1").innerHTML = vypis[0];
 document.getElementById("zemak-v2").innerHTML = vypis[1];
 document.getElementById("zemak-v3").innerHTML = vypis[2];
 document.getElementById("zemak-v4").innerHTML = vypis[3];
 document.getElementById("zemak-v5").innerHTML = vypis[4];
}
vypisZnamekzemak();
document.getElementById("zemak-prumer").innerHTML = pocitadloPredmetu(zemak);

function vypisZnamekobcanka() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < obcanka.length; i++) {
    switch (obcanka[i][1]) {
      case 1:
        vypis[0] = vypis[0] + obcanka[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + obcanka[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + obcanka[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + obcanka[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + obcanka[i][0] + " ";
        break;
      default:

    }
 }

 document.getElementById("obcanka-v1").innerHTML = vypis[0];
 document.getElementById("obcanka-v2").innerHTML = vypis[1];
 document.getElementById("obcanka-v3").innerHTML = vypis[2];
 document.getElementById("obcanka-v4").innerHTML = vypis[3];
 document.getElementById("obcanka-v5").innerHTML = vypis[4];
}
vypisZnamekobcanka();
document.getElementById("obcanka-prumer").innerHTML = pocitadloPredmetu(obcanka);

function vypisZnamekdejak() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < dejak.length; i++) {
    switch (dejak[i][1]) {
      case 1:
        vypis[0] = vypis[0] + dejak[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + dejak[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + dejak[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + dejak[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + dejak[i][0] + " ";
        break;
      default:

    }
 }

 document.getElementById("dejak-v1").innerHTML = vypis[0];
 document.getElementById("dejak-v2").innerHTML = vypis[1];
 document.getElementById("dejak-v3").innerHTML = vypis[2];
 document.getElementById("dejak-v4").innerHTML = vypis[3];
 document.getElementById("dejak-v5").innerHTML = vypis[4];
}
vypisZnamekdejak();
document.getElementById("dejak-prumer").innerHTML = pocitadloPredmetu(dejak);

function vypisZnamekfyzika() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < fyzika.length; i++) {
    switch (fyzika[i][1]) {
      case 1:
        vypis[0] = vypis[0] + fyzika[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + fyzika[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + fyzika[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + fyzika[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + fyzika[i][0] + " ";
        break;
      default:

    }
 }

 document.getElementById("fyzika-v1").innerHTML = vypis[0];
 document.getElementById("fyzika-v2").innerHTML = vypis[1];
 document.getElementById("fyzika-v3").innerHTML = vypis[2];
 document.getElementById("fyzika-v4").innerHTML = vypis[3];
 document.getElementById("fyzika-v5").innerHTML = vypis[4];
}
vypisZnamekfyzika();
document.getElementById("fyzika-prumer").innerHTML = pocitadloPredmetu(fyzika);

function vypisZnamekchemie() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < chemie.length; i++) {
    switch (chemie[i][1]) {
      case 1:
        vypis[0] = vypis[0] + chemie[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + chemie[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + chemie[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + chemie[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + chemie[i][0] + " ";
        break;
      default:

    }
 }

 document.getElementById("chemie-v1").innerHTML = vypis[0];
 document.getElementById("chemie-v2").innerHTML = vypis[1];
 document.getElementById("chemie-v3").innerHTML = vypis[2];
 document.getElementById("chemie-v4").innerHTML = vypis[3];
 document.getElementById("chemie-v5").innerHTML = vypis[4];
}
vypisZnamekchemie();
document.getElementById("chemie-prumer").innerHTML = pocitadloPredmetu(chemie);

function vypisZnamekbiola() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < biola.length; i++) {
    switch (biola[i][1]) {
      case 1:
        vypis[0] = vypis[0] + biola[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + biola[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + biola[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + biola[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + biola[i][0] + " ";
        break;
      default:

    }
 }

 document.getElementById("biola-v1").innerHTML = vypis[0];
 document.getElementById("biola-v2").innerHTML = vypis[1];
 document.getElementById("biola-v3").innerHTML = vypis[2];
 document.getElementById("biola-v4").innerHTML = vypis[3];
 document.getElementById("biola-v5").innerHTML = vypis[4];
}
vypisZnamekbiola();
document.getElementById("biola-prumer").innerHTML = pocitadloPredmetu(biola);

function vypisZnamekivt() {
  var vypis = ["", "", "", "", ""]

  for (var i = 0; i < ivt.length; i++) {
    switch (ivt[i][1]) {
      case 1:
        vypis[0] = vypis[0] + ivt[i][0] + " ";
        break;
      case 2:
        vypis[1] = vypis[1] + ivt[i][0] + " ";
        break;
      case 3:
        vypis[2] = vypis[2] + ivt[i][0] + " ";
        break;
      case 4:
        vypis[3] = vypis[3] + ivt[i][0] + " ";
        break;
      case 5:
        vypis[4] = vypis[4] + ivt[i][0] + " ";
        break;
      default:

    }
 }

 document.getElementById("ivt-v1").innerHTML = vypis[0];
 document.getElementById("ivt-v2").innerHTML = vypis[1];
 document.getElementById("ivt-v3").innerHTML = vypis[2];
 document.getElementById("ivt-v4").innerHTML = vypis[3];
 document.getElementById("ivt-v5").innerHTML = vypis[4];
}
vypisZnamekivt();
document.getElementById("ivt-prumer").innerHTML = pocitadloPredmetu(ivt);

function formular() {
    var znamka = parseInt(document.getElementById("valZnamka").value);
    var vaha = parseInt(document.getElementById("valVaha").value);
    var predmet = parseInt(document.getElementById("valPredmet").value);

    if (predmet == 0) {
      matematika.push([znamka, vaha]);
      document.getElementById("matematika-prumer-novy").innerHTML = pocitadloPredmetu(matematika);
      vypisZnamekmatematika();
    }
    if (predmet == 1) {
      cestina.push([znamka, vaha]);
      document.getElementById("cestina-prumer-novy").innerHTML = pocitadloPredmetu(cestina);
      vypisZnamekcestina();
    }
    if (predmet == 2) {
      ajina.push([znamka, vaha]);
      document.getElementById("ajina-prumer-novy").innerHTML = pocitadloPredmetu(ajina);
      vypisZnamekajina();
    }
    if (predmet == 3) {
      nemina.push([znamka, vaha]);
      document.getElementById("nemina-prumer-novy").innerHTML = pocitadloPredmetu(nemina);
      vypisZnameknemina();
    }
    if (predmet == 4) {
      zemak.push([znamka, vaha]);
      document.getElementById("zemak-prumer-novy").innerHTML = pocitadloPredmetu(zemak);
      vypisZnamekzemak();
    }
    if (predmet == 5) {
      obcanka.push([znamka, vaha]);
      document.getElementById("obcanka-prumer-novy").innerHTML = pocitadloPredmetu(obcanka);
      vypisZnamekobcanka();
    }
    if (predmet == 6) {
      dejak.push([znamka, vaha]);
      document.getElementById("dejak-prumer-novy").innerHTML = pocitadloPredmetu(dejak);
      vypisZnamekdejak();
    }
    if (predmet == 7) {
      fyzika.push([znamka, vaha]);
      document.getElementById("fyzika-prumer-novy").innerHTML = pocitadloPredmetu(fyzika);
      vypisZnamekfyzika();
    }
    if (predmet == 8) {
      chemie.push([znamka, vaha]);
      document.getElementById("chemie-prumer-novy").innerHTML = pocitadloPredmetu(chemie);
      vypisZnamekchemie();
    }
    if (predmet == 9) {
      biola.push([znamka, vaha]);
      document.getElementById("biola-prumer-novy").innerHTML = pocitadloPredmetu(biola);
      vypisZnamekbiola();
    }
    if (predmet == 10) {
      ivt.push([znamka, vaha]);
      document.getElementById("ivt-prumer-novy").innerHTML = pocitadloPredmetu(ivt);
      vypisZnamekivt();
    }
}

function cancel() {
  var txt;
    if (confirm("Opravdu chceš obnovit stránku?")) {
        location.reload();
    }
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

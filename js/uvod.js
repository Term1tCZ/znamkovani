var Messenger = function(el){
  'use strict';
  var m = this;

  m.init = function(){
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Počítadlo známek',
      'Vypočítej si svůj průměr!',
      'Zjisti, z kolika předmětů propadáš',
      'Cool, co?'
    ];

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    }

    return random_text;
  };

  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }

    var do_cycles = false;
    var message = '';

    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');

    setTimeout(m.animateIn, 200);
  };

  m.init();
}

console.clear();
var messenger = new Messenger($('#messenger'));

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

function vidimDatum() {
  document.getElementById("datum").style.visibility = "hidden";
  document.getElementById("cas").style.visibility = "hidden";
}

var languages = {
happy: "счастливого",
birthday: "дня рождения", 
best: "хорошего",
wish: "желаю",
good: "хорошего",
luck: "везения",
this: "в этом",
year: "год",
health: "здоровья",
life: "жизни",
happiness: "счастья",
i: "Я",
you: "тебе",
in: "в",
and: "и"
};

var amharic= {
happy: "መልካም",
birthday: "ልደት",
best: "ምርጥ",
wish: "ምኞት",
good: "ጥሩ",
Luck: "ዕድል",
This: "በዚህ" ,
Year: "ዓመት",
health: "ጤና",
life:"ሕይወት",
happiness:"ደስታ",
i: "እኔ",
in: "ውስጥ",
you:"ለአንተ",
and:"እና"
};

var danish = {
happy: "lykkelig",
birthday: "fødselsdag",
best: "bedst",
wish: "ønske",
good: "godt",
luck: "held",
this: "det her",
year: "år ",
health: "sundhed",
life: "liv",
happiness: "lykke",
i: "jeg",  
you: "du",
in: "i",
and: "og"
};

var button = document.getElementsByClassName("buttn");
    for(var i=0; i<button.length; i++){
      var whichLanguage="";
      button[i].addEventListener("click", function(e){
        // console.log(e.target.innerHTML);
        
        whichLanguage = e.target.innerHTML;
        // console.log(whichLanguage);
        splitString(whichLanguage);
      })
    }

function splitString (whichLanguage){
  var stringToSplit = document.querySelector('textarea.input').value;
  document.querySelector('textarea.input').value="";
  var splitedString = stringToSplit.toString().split(' ');
  translation(whichLanguage, splitedString);
  // console.log(info);
}


function translation (whichLanguage,splitedString){
  // console.log(whichLanguage);
  var translatedWords="";
  if(whichLanguage=="Russian"){
    for(var key in languages){
      if(splitedString.includes(key)){
        translatedWords+=" "+languages[key];
      }
    }
  }
  else if(whichLanguage=="Amharic"){
    for(var key in amharic){
      if(splitedString.includes(key)){
        translatedWords+=" "+amharic[key];
      }
    }
  }
  else if(whichLanguage=="Danish"){
    for(var key in danish){
      if(splitedString.includes(key)){
        translatedWords+=" "+danish[key];
      }
    }
  }
  domStringMaker(translatedWords);
}

function domStringMaker(stringToPrint){
    var string =  "<p>" + stringToPrint + "</p>";
    writeToDom(string, "translated");
}

function writeToDom(domString, domId){
  var myDiv = document.getElementById(domId);
  myDiv.innerHTML = domString;
}

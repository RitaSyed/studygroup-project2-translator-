// function writeToDom(domString, domId){
//   var myDiv = document.getElementById(domId);
//   myDiv.innerHTML += domString;
// }

// function domStringMaker(stringToPrint){
//     var string =  "<p>" + stringToPrint + "</p>";
//     writeToDom(string, "translated");
// }

// writeToDom("world", "translated");


// function writeToDom(){
//   var myDiv = document.getElementById("translated");
//   var myInput = document.querySelector('textarea.input');
//   var button = document.querySelector("button.input");
//   myDiv.innerHTML = myInput.value;
//   myInput.value = '';
// }

// var button = document.querySelector("button.input");
// button.addEventListener('click', writeToDom);




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
    
// var button = document.querySelector("button.input");
// button.addEventListener('click',splitString);


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



//  writeToDom(string, "translated");


// var button = document.querySelector("button.input");
// button.addEventListener('click',translation);
// function translation (){
//   var stringToSplit = document.querySelector('textarea.input').value;
//   var splitedString = stringToSplit.split(' ');//array
//   // console.log(stringToSplit);
//   var translatedWords="";
//   for(var key in languages){
//     // for(var k=0; k<stringToSplit.length; k++)
//       // console.log(stringToSplit);
//       if(splitedString.includes(key)){
//         translatedWords+=" "+languages[key];
//     }
//   }
// console.log(translatedWords);
//   }


// translation();

// var myDiv = document.getElementById("translated");
// var myInput = document.querySelector('textarea.input');

// var button = document.querySelector("button.input");
// button.addEventListener('click', () => {
//   myDiv.innerHTML = myInput.value;
//   
// });



// function printToDom(stringToPrint, divId){
//   //take string and innerHTML to the div
//   var myDiv = document.getElementById(divId);
//   // console.log("myDiv", myDiv);
//   myDiv.innerHTML += stringToPrint;
// }

// descriptionButton.addEventListener('click', () => {
//   descriptionP.innerHTML = descriptionInput.value + ':';
//   descriptionInput.value = '';
// });
var letterValues = [['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 't', 's'],
                    ['d', 'g'],
                    ['b', 'c', 'm', 'p'],
                    ['f', 'h', 'v', 'w', 'y'],
                    ['k'],
                    ['j', 'x'],
                    ['q', 'z']];
var numberValue = [1, 2, 3, 4, 5, 8, 10];

var scrabbleScorer = function(word) {
  var letters = word.toLowerCase().split();
  var score = 0;
  
   letters.forEach(function(letter) {
    var index = indexFinder(letter);
    score += numberValue[index];
  });
  
  return score;
};

var indexFinder = function(letter) {
  var index = 0
  letterValues.forEach(function(letterValue) {
    for (var i=0; i < letterValue.length; i++) {
      if (letter === (letterValue[i])) {
      index = letterValues.indexOf(letterValue);
      }
    }
  });
  return index;
};

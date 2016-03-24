var translate = function(sentence) {
  var sentenceArr = sentence.split(' ');
  var translated = '';

  for (var i = 0; i < sentenceArr.length; i++) {
    translated += translateAWord(sentenceArr[i]) + ' ';
  }

  return translated.trim();
};

function translateAWord(word) {
  // Translates a word beginning with a vowel
  if (isVowel(word[0])) {
    return word + 'ay';
  }

  // Translates a word beginning with a consonant
  consecutiveConsonants = 0;
  for (var i = 0; i < word.length; i++) {
    if (!isVowel(word[i])) {
      if (word[i] === 'q' &&
          word[i + 1] === 'u') {
        consecutiveConsonants += 2;
        break;
      }

      consecutiveConsonants++;
    } else {
      break;
    }
  }
  
  return word.substring(consecutiveConsonants) +  
         word.substring(0, consecutiveConsonants) + 'ay';
}

function isVowel(character) {
  var vowels = ['a', 'i', 'u', 'e', 'o'];

  return vowels.indexOf(character) > -1;
}
